'use client'

export default function DashboardMetrics({ stats }: {
  stats: {
    total_tracked: number
    active_signals: number
    strong_buys: number
    insider_buys_total: number
    volume_spikes: number
  }
}) {
  const metrics = [
    { label: 'Stocks Tracked', value: stats.total_tracked, change: null, color: 'from-blue-500 to-cyan-500', icon: '📊' },
    { label: 'Active Signals', value: stats.active_signals, change: null, color: 'from-emerald-500 to-green-500', icon: '🔵' },
    { label: 'Strong Buys', value: stats.strong_buys, change: null, color: 'from-violet-500 to-purple-500', icon: '⭐' },
    { label: 'Insider Buys', value: stats.insider_buys_total, change: null, color: 'from-orange-500 to-amber-500', icon: '💼' },
    { label: 'Vol Spikes', value: stats.volume_spikes, change: null, color: 'from-rose-500 to-pink-500', icon: '🔥' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:bg-white/[0.07] transition-all"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{m.icon}</span>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{m.label}</p>
          </div>
          <p className="text-2xl font-bold">{m.value}</p>
          <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${m.color}`}
              style={{ width: `${Math.min((m.value / 60) * 100, 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
