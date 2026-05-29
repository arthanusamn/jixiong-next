'use client'

interface LeaderItem {
  ticker: string
  company: string
  chg_1w?: number | null
  vol_ratio?: number | null
  total_value?: number
  price: number
}

export function GainersList({ items }: { items: LeaderItem[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-1">
        📈 Top Gainers (1w)
      </h3>
      <div className="space-y-1">
        {items.map((s, i) => (
          <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-4">#{i + 1}</span>
              <span className="text-sm font-semibold">{s.ticker}</span>
              <span className="text-xs text-gray-400 hidden sm:inline truncate max-w-[100px]">{s.company}</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-xs text-gray-500">${s.price.toFixed(2)}</span>
              <span className="text-sm font-semibold text-emerald-400">+{s.chg_1w?.toFixed(1)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function LosersList({ items }: { items: LeaderItem[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3 flex items-center gap-1">
        📉 Top Losers (1w)
      </h3>
      <div className="space-y-1">
        {items.map((s, i) => (
          <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-4">#{i + 1}</span>
              <span className="text-sm font-semibold">{s.ticker}</span>
              <span className="text-xs text-gray-400 hidden sm:inline truncate max-w-[100px]">{s.company}</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-xs text-gray-500">${s.price.toFixed(2)}</span>
              <span className="text-sm font-semibold text-red-400">{s.chg_1w?.toFixed(1)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function VolumeSpikesList({ items }: { items: LeaderItem[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-3 flex items-center gap-1">
        🔥 Volume Spikes
      </h3>
      <div className="space-y-1">
        {items.map((s, i) => (
          <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-4">#{i + 1}</span>
              <span className="text-sm font-semibold">{s.ticker}</span>
              <span className="text-xs text-gray-400 hidden sm:inline truncate max-w-[100px]">{s.company}</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-xs text-gray-500">${s.price.toFixed(2)}</span>
              <span className="text-sm font-semibold text-orange-400">{s.vol_ratio?.toFixed(1)}x</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function InsiderBuysList({ items }: { items: (LeaderItem & { total_value: number; buys_count?: number })[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-1">
        💼 Recent Insider Buys
      </h3>
      <div className="space-y-1">
        {items.map((s, i) => (
          <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-4">#{i + 1}</span>
              <span className="text-sm font-semibold">{s.ticker}</span>
              <span className="text-xs text-gray-400 hidden sm:inline truncate max-w-[100px]">{s.company}</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-xs text-gray-500">${s.price.toFixed(2)}</span>
              <span className="text-sm font-semibold text-purple-400">${(s.total_value! / 1e6).toFixed(1)}M</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
