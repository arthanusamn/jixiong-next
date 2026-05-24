import { NextRequest, NextResponse } from 'next/server';

// Deal Scout API — runs locally on port 8000
const DEAL_SCOUT_API = 'http://localhost:8000';

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get('q');
  const maxResults = request.nextUrl.searchParams.get('max_results') || '15';

  if (!q || q.length < 3) {
    return NextResponse.json(
      { error: 'Query must be at least 3 characters' },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `${DEAL_SCOUT_API}/search?q=${encodeURIComponent(q)}&max_results=${maxResults}`,
      { 
        signal: AbortSignal.timeout(40000), // 40s timeout
        headers: { 'Accept': 'application/json' }
      }
    );

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: `Deal Scout error: ${text.slice(0, 200)}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (e: any) {
    console.error('Deal Scout proxy error:', e.message);
    
    if (e.name === 'TimeoutError' || e.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Search timed out. Try a simpler product name.', deals: [], total_found: 0, best_deal: null, cached: false, savings_tip: null, query: q },
        { status: 200 } // Return graceful error, not a 500
      );
    }

    return NextResponse.json(
      { 
        error: 'Could not connect to Deal Scout. Is the API server running?',
        details: e.message,
        deals: [],
        total_found: 0,
        best_deal: null,
        cached: false,
        savings_tip: null,
        query: q,
      },
      { status: 200 }
    );
  }
}
