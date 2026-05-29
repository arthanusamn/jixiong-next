'use client'

import { useState } from 'react'

const sectorColors: Record<string, string> = {
  'Technology': 'border-l-cyan-500',
  'Financial Services': 'border-l-emerald-500',
  'Healthcare': 'border-l-rose-500',
  'Consumer Cyclical': 'border-l-amber-500',
  'Energy': 'border-l-orange-500',
  'Communication Services': 'border-l-violet-500',
  'Industrials': 'border-l-blue-500',
  'Consumer Defensive': 'border-l-green-500',
  'Basic Materials': 'border-l-yellow-500',
  'Real Estate': 'border-l-pink-500',
  'Utilities': 'border-l-sky-500',
  'Unknown': 'border-l-gray-500',
}

const categoryBadge: Record<string, { label: string; cls: string }> = {
  strong: { label: 'Strong', cls: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  watch: { label: 'Watch', cls: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  neutral: { label: 'Neutral', cls: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
}

interface Stock {
  ticker: string
  company: string
  sector: string
  price: number
  change: number
  change_pct: number
  chg_1w: number | null
  chg_1m: number | null
  rsi: number | null
  vol_ratio: number | null
  pct_from_high?: number | null
  market_cap: number | null
  pe: number | null
  fwd_pe: number | null
  target: number | null
  recommendation: string
  score: number
  category: string
  total_insider_buys: number
  insider_buys: any[]
  news: any[]
}

export default function StockCard({ stock }: { stock: Stock }) {
  const [expanded, setExpanded] = useState(false)
  const borderColor = sectorColors[stock.sector] || sectorColors['Unknown']
  const cat = categoryBadge[stock.category as keyof typeof categoryBadge] || categoryBadge.neutral

  const formatDollar = (v: number | null) => {
    if (v === null || v === undefined) return 'N/A'
    if (v >= 1e12) return `$${(v / 1e12).toFixed(2)}T`
    if (v >= 1e9) return `$${(v / 1e9).toFixed(2)}B`
    if (v >= 1e6) return `$${(v / 1e6).toFixed(2)}M`
    return `$${(v).toLocaleString()}`
  }

  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 border-l-4 ${borderColor} p-4 cursor-pointer transition-all hover:bg-white/[0.07] hover:border-white/20`}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">{stock.ticker}</span>
              <span className={`px-2 py-0.5 rounded text-xs font-medium border ${cat.cls}`}>{cat.label}</span>
            </div>
            <p className="text-sm text-gray-400 truncate max-w-[200px]">{stock.company}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold">${stock.price.toFixed(2)}</div>
          <div className={`text-sm ${stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.change_pct >= 0 ? '+' : ''}{stock.change_pct.toFixed(1)}%)
          </div>
        </div>
      </div>

      {/* Metric chips */}
      <div className="flex flex-wrap gap-2 mt-2">
        {stock.chg_1w !== null && (
          <span className={`text-xs px-2 py-1 rounded-full ${stock.chg_1w >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
            1w: {stock.chg_1w >= 0 ? '+' : ''}{stock.chg_1w?.toFixed(1)}%
          </span>
        )}
        {stock.rsi !== null && (
          <span className={`text-xs px-2 py-1 rounded-full ${
            stock.rsi >= 70 ? 'bg-red-500/10 text-red-400' :
            stock.rsi <= 30 ? 'bg-emerald-500/10 text-emerald-400' :
            'bg-blue-500/10 text-blue-400'
          }`}>
            RSI {stock.rsi}
          </span>
        )}
        {stock.vol_ratio !== null && stock.vol_ratio > 1.3 && (
          <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-400">
            Vol {stock.vol_ratio}x
          </span>
        )}
        {stock.total_insider_buys > 0 && (
          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">
            Ins ${(stock.total_insider_buys/1e6).toFixed(1)}M
          </span>
        )}
        {stock.sector !== 'Unknown' && (
          <span className="text-xs px-2 py-1 rounded-full bg-gray-500/10 text-gray-400">
            {stock.sector.split(' ')[0]}
          </span>
        )}
      </div>

      {/* Expanded details */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
          {/* Quick stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <p className="text-xs text-gray-500">Mkt Cap</p>
              <p className="text-sm font-medium">{formatDollar(stock.market_cap)}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">P/E</p>
              <p className="text-sm font-medium">{stock.pe?.toFixed(1) ?? 'N/A'}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Fwd P/E</p>
              <p className="text-sm font-medium">{stock.fwd_pe?.toFixed(1) ?? 'N/A'}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Target</p>
              <p className="text-sm font-medium">{stock.target ? '$' + stock.target.toFixed(2) : 'N/A'}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">1m Chg</p>
              <p className={`text-sm font-medium ${stock.chg_1m && stock.chg_1m >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {stock.chg_1m !== null ? `${stock.chg_1m >= 0 ? '+' : ''}${stock.chg_1m?.toFixed(1)}%` : 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">52w From High</p>
              <p className="text-sm font-medium text-red-400">{stock.pct_from_high ? `${stock.pct_from_high.toFixed(0)}%` : 'N/A'}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Rec</p>
              <p className="text-sm font-medium capitalize">{stock.recommendation}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Score</p>
              <p className="text-sm font-medium text-cyan-400">{stock.score}/100</p>
            </div>
          </div>

          {/* Insider buys */}
          {stock.insider_buys.length > 0 && (
            <div className="bg-purple-500/5 rounded-lg p-3">
              <p className="text-xs font-semibold text-purple-400 mb-2">Recent Insider Purchases</p>
              {stock.insider_buys.slice(0, 3).map((b: any, i: number) => (
                <div key={i} className="flex justify-between text-xs text-gray-300 py-0.5">
                  <span>{b.name || b.position} — {b.date}</span>
                  <span className="font-medium">${(b.value/1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
          )}

          {/* News */}
          {stock.news.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-2">Latest News</p>
              {stock.news.slice(0, 3).map((n: any, i: number) => (
                <a
                  key={i}
                  href={n.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-gray-300 hover:text-cyan-400 py-1 leading-relaxed"
                >
                  📰 {n.title}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
