'use client'

import { useState, useCallback, useRef, useEffect } from 'react'

interface Deal {
  retailer: string
  title: string
  price: number
  url: string
  condition: string
  rating: number | null
  list_price: number | null
  source: string
}

interface SearchResponse {
  query: string
  deals: Deal[]
  best_deal: Deal | null
  total_found: number
  cached: boolean
  error: string | null
  savings_tip: string | null
}

function formatPrice(price: number): string {
  return '$' + price.toFixed(2)
}

function starRating(rating: number): string {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5 ? 1 : 0
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half)
}

const examples = [
  'Sony WH-1000XM5 headphones',
  'Nintendo Switch 2',
  'MacBook Air M4',
  'AirPods Pro 2',
  'electric toothbrush',
  'iPhone 16 Pro Max',
]

export default function DealsPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [searches, setSearches] = useState<string[]>([])
  const resultsRef = useRef<HTMLDivElement>(null)

  const search = useCallback(async (q: string) => {
    if (!q.trim() || q.length < 3) return

    setLoading(true)
    setError('')
    setQuery(q)

    try {
      const res = await fetch(`/api/deals?q=${encodeURIComponent(q)}&max_results=15`)
      if (!res.ok) {
        const text = await res.text()
        throw new Error(text.slice(0, 200))
      }
      const data: SearchResponse = await res.json()
      setResults(data)
      setSearches(prev => [q, ...prev.filter(s => s !== q)].slice(0, 8))

      // Scroll to results on mobile
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } catch (e: any) {
      setError(e.message || 'Search failed. Try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    search(query)
  }

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center py-8 animate-fade-in-up">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 mb-6">
          <span className="text-3xl">🏷️</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Deal Scout</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
          Find the best price for any product. Search across stores — see what you could save.
        </p>
      </div>

      {/* Search Bar */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search any product... e.g. Sony WH-1000XM5"
              className="w-full px-6 py-4 pr-36 bg-white/5 border border-white/10 rounded-2xl 
                         text-lg text-white placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50
                         transition-all duration-200"
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
            />
            <button
              type="submit"
              disabled={loading || query.length < 3}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 
                         bg-gradient-to-r from-amber-500 to-orange-500 
                         hover:from-amber-600 hover:to-orange-600
                         disabled:from-gray-600 disabled:to-gray-600 disabled:text-gray-400
                         rounded-xl font-bold transition-all duration-200
                         flex items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Searching
                </>
              ) : (
                <>
                  🔍 Find Deals
                </>
              )}
            </button>
          </div>
        </form>

        {/* Examples */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <span className="text-sm text-gray-500 mr-1">Try:</span>
          {examples.map(ex => (
            <button
              key={ex}
              onClick={() => search(ex)}
              className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 
                         hover:bg-white/10 hover:border-amber-500/30 text-gray-400 hover:text-amber-400
                         transition-all duration-200"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="animate-fade-in-up max-w-2xl mx-auto">
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
            ⚠️ {error}
          </div>
        </div>
      )}

      {/* Results */}
      {results && (
        <div ref={resultsRef} className="animate-fade-in-up space-y-6" style={{ animationDelay: '0.15s' }}>
          {/* Best Deal Card */}
          {results.best_deal && (
            <div className="card p-6 md:p-8 bg-gradient-to-br from-amber-500/15 to-orange-500/10 border border-amber-500/30">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 
                              flex items-center justify-center text-2xl shadow-lg shadow-amber-500/20">
                    🏆
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-amber-400">
                      {formatPrice(results.best_deal.price)}
                    </h3>
                    <span className="text-gray-400">at</span>
                    <span className="text-lg font-bold text-white">{results.best_deal.retailer}</span>
                  </div>
                  <p className="text-gray-300 mb-3 leading-relaxed">
                    {results.best_deal.title.length > 100
                      ? results.best_deal.title.slice(0, 100) + '...'
                      : results.best_deal.title}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {results.best_deal.list_price && results.best_deal.list_price > results.best_deal.price && (
                      <span className="px-3 py-1 rounded-full bg-green-500/15 text-green-400 text-sm border border-green-500/20">
                        🎯 Save ${(results.best_deal.list_price - results.best_deal.price).toFixed(0)} (was ${results.best_deal.list_price.toFixed(2)})
                      </span>
                    )}
                    {results.best_deal.rating && (
                      <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-sm">
                        {starRating(results.best_deal.rating)} {results.best_deal.rating.toFixed(1)}
                      </span>
                    )}
                    {results.best_deal.condition !== 'new' && (
                      <span className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-sm">
                        {results.best_deal.condition}
                      </span>
                    )}
                    {results.cached && (
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                        📦 cached
                      </span>
                    )}
                  </div>
                </div>
                <a
                  href={results.best_deal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 
                           hover:from-amber-600 hover:to-orange-600 rounded-xl font-bold 
                           transition-all duration-200 text-center whitespace-nowrap"
                >
                  View Deal →
                </a>
              </div>
            </div>
          )}

          {/* Savings Tip */}
          {results.savings_tip && (
            <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
              <p className="text-green-400 font-medium">💡 {results.savings_tip}</p>
            </div>
          )}

          {/* Error from sources */}
          {results.error && (
            <div className="p-3 bg-yellow-500/5 border border-yellow-500/10 rounded-lg text-sm text-yellow-400/60">
              ⚠️ Some sources unavailable: {results.error}
            </div>
          )}

          {/* All Prices */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">
                📋 All Prices ({results.total_found} found)
              </h3>
              {results.deals.length > 5 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
                >
                  {expanded ? 'Show less ▲' : 'Show all ▼'}
                </button>
              )}
            </div>

            <div className="space-y-2">
              {(expanded ? results.deals : results.deals.slice(0, 5)).map((deal, i) => (
                <a
                  key={i}
                  href={deal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-4 rounded-xl transition-all duration-200 group
                    ${i === 0 && !results.cached
                      ? 'bg-amber-500/5 border border-amber-500/20 hover:bg-amber-500/10'
                      : 'bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10'
                    }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-lg font-bold ${i === 0 ? 'text-amber-400' : 'text-white'}`}>
                          {formatPrice(deal.price)}
                        </span>
                        <span className="text-sm text-gray-400">{deal.retailer}</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{deal.title}</p>
                    </div>
                    <div className="flex-shrink-0 text-right text-sm">
                      {deal.condition !== 'new' && (
                        <span className="text-gray-500">{deal.condition}</span>
                      )}
                      {deal.rating && (
                        <span className="text-yellow-500/70 ml-2">{starRating(deal.rating)}</span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Recent Searches */}
          {searches.length > 1 && (
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-gray-500">Recent:</span>
              {searches.slice(1, 5).map(s => (
                <button
                  key={s}
                  onClick={() => search(s)}
                  className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 
                           text-gray-400 hover:text-amber-400 transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Empty state */}
      {!results && !loading && !error && (
        <div className="text-center py-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6">
            <span className="text-4xl">🔎</span>
          </div>
          <p className="text-xl text-gray-500 mb-2">Search for any product to find deals</p>
          <p className="text-gray-600">
            Powered by Bing Shopping, Newegg, and Slickdeals — 100% free, no API keys needed
          </p>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6">
            <span className="inline-block w-8 h-8 border-3 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
          </div>
          <p className="text-lg text-gray-400">Scanning stores for the best price...</p>
          <p className="text-sm text-gray-600 mt-1">Checking Bing Shopping, Newegg, and more</p>
        </div>
      )}

      {/* Info */}
      {results && (
        <div className="text-center text-sm text-gray-600 animate-fade-in-up">
          Prices may vary. Results cached for 30 minutes.
          {results.cached && ' This search used cached data.'}
        </div>
      )}
    </div>
  )
}
