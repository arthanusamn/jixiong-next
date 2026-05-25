import { NextRequest, NextResponse } from 'next/server';

// BizBot API — runs locally
const BIZBOT_API = 'http://localhost:8400';

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!body.name || !body.description) {
    return NextResponse.json(
      { error: 'Business name and description are required' },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`${BIZBOT_API}/launch`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(30000), // 30s timeout
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: `BizBot error: ${text.slice(0, 200)}` },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (e: any) {
    if (e.name === 'TimeoutError' || e.name === 'AbortError') {
      return NextResponse.json(
        { 
          error: 'BizBot timed out. Try a simpler business idea.',
          status: 'timeout',
          cost: '0',
          actions: 0,
          strategy: null,
          build: null,
          marketing: null,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Could not connect to BizBot. Is the API server running?',
        details: e.message,
        status: 'offline',
        cost: '0',
        actions: 0,
      },
      { status: 200 }
    );
  }
}
