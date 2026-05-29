'use client'

import { useMemo, useState } from 'react'
import DashboardMetrics from '@/components/stocks/DashboardMetrics'
import StockCard from '@/components/stocks/StockCard'
import FilterBar from '@/components/stocks/FilterBar'
import { GainersList, LosersList, VolumeSpikesList, InsiderBuysList } from '@/components/stocks/LeaderPanels'

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

export default function DashboardClient({
  summary,
  stocks,
}: {
  summary: any
  stocks: Stock[]
}) {
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [sortKey, setSortKey] = useState('score-desc')

  // Derived data
  const stats = summary?.stats || {
    total_tracked: stocks.length,
    active_signals: stocks.filter((s: Stock) => s.score >= 55).length,
    strong_buys: stocks.filter((s: Stock) => s.category === 'strong').length,
    insider_buys_total: stocks.filter((s: Stock) => s.total_insider_buys > 0).length,
    volume_spikes: stocks.filter((s: Stock) => (s.vol_ratio || 0) > 1.5).length,
  }

  // Normalize leader data (summary uses 'current_price', components expect 'price')
  const normalize = (items: any[], field = 'price') =>
    items.map((s: any) => ({ ...s, price: s[field] ?? s.price ?? 0 }))
  const topInsiderBuys = normalize(summary?.top_insider_buys || [], 'current_price')
  const topGainers = normalize(summary?.top_gainers || [])
  const topLosers = normalize(summary?.top_losers || [])
  const volumeSpikes = normalize(summary?.volume_spikes || [])

  // Filter and sort
  const filteredStocks = useMemo(() => {
    let list = [...stocks]

    // Search
    if (search) {
      const q = search.toLowerCase()
      list = list.filter(
        (s) =>
          s.ticker.toLowerCase().includes(q) ||
          s.company.toLowerCase().includes(q)
      )
    }

    // Category
    if (categoryFilter !== 'all') {
      list = list.filter((s) => s.category === categoryFilter)
    }

    // Sort
    list.sort((a, b) => {
      switch (sortKey) {
        case 'score-desc': return (b.score || 0) - (a.score || 0)
        case 'score-asc': return (a.score || 0) - (b.score || 0)
        case 'change-1w': return (b.chg_1w || 0) - (a.chg_1w || 0)
        case 'insider-value': return (b.total_insider_buys || 0) - (a.total_insider_buys || 0)
        case 'volume': return (b.vol_ratio || 0) - (a.vol_ratio || 0)
        default: return (b.score || 0) - (a.score || 0)
      }
    })

    return list
  }, [stocks, search, categoryFilter, sortKey])

  const generatedAt = summary?.generated_at
    ? new Date(summary.generated_at).toLocaleString('en-US', {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      })
    : null

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Stock Research</h1>
          <p className="text-sm text-gray-400 mt-1">
            Live analysis of {stats.total_tracked} tracked tickers
            {generatedAt && <span> · Updated {generatedAt}</span>}
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            ⭐ {stats.strong_buys} Strong
          </span>
          <span className="px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            💼 {stats.insider_buys_total} Insider
          </span>
          <span className="px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
            🔥 {stats.volume_spikes} Vol Spike
          </span>
        </div>
      </div>

      {/* Metrics cards */}
      <DashboardMetrics stats={stats} />

      {/* Leader panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
          <GainersList items={topGainers} />
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
          <LosersList items={topLosers} />
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
          <VolumeSpikesList items={volumeSpikes} />
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
          <InsiderBuysList items={topInsiderBuys} />
        </div>
      </div>

      {/* Filter bar */}
      <FilterBar
        onSearch={setSearch}
        onCategoryFilter={setCategoryFilter}
        onSortChange={setSortKey}
        total={stocks.length}
        filtered={filteredStocks.length}
      />

      {/* Stock grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredStocks.slice(0, 30).map((stock) => (
          <StockCard key={stock.ticker} stock={stock} />
        ))}
      </div>

      {filteredStocks.length > 30 && (
        <div className="text-center py-6 text-sm text-gray-500">
          Showing 30 of {filteredStocks.length} stocks. Refine your search for more specific results.
        </div>
      )}

      {filteredStocks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No stocks match your filters</p>
          <p className="text-gray-500 text-sm mt-1">Try adjusting your search or category filter</p>
        </div>
      )}

      {/* Footer note */}
      <div className="text-center text-xs text-gray-600 mt-8">
        Data from Yahoo Finance · Insider data from SEC filings · Not financial advice
      </div>
    </div>
  )
}
