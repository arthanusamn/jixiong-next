'use client'

import { useState } from 'react'

interface FilterBarProps {
  onSearch: (query: string) => void
  onCategoryFilter: (cat: string) => void
  onSortChange: (sort: string) => void
  total: number
  filtered: number
}

export default function FilterBar({ onSearch, onCategoryFilter, onSortChange, total, filtered }: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false)
  const categories = ['all', 'strong', 'watch', 'neutral']
  const sorts = [
    { key: 'score-desc', label: 'Score ↑' },
    { key: 'score-asc', label: 'Score ↓' },
    { key: 'change-1w', label: '1w Chg' },
    { key: 'insider-value', label: 'Insider $' },
    { key: 'volume', label: 'Volume' },
  ]

  return (
    <div className="space-y-3">
      {/* Search row */}
      <div className="flex gap-3 items-center">
        <div className="relative flex-1 max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search by ticker or company..."
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-sm px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
        >
          {showFilters ? '✕ Filters' : '⚙️ Filters'}
        </button>
        <span className="text-xs text-gray-500 whitespace-nowrap">
          {filtered}/{total} stocks
        </span>
      </div>

      {/* Expandable filter row */}
      {showFilters && (
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex gap-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => onCategoryFilter(c)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                  c === 'all'
                    ? 'border-gray-500/30 text-gray-400 hover:border-gray-400'
                    : c === 'strong'
                    ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10'
                    : c === 'watch'
                    ? 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'
                    : 'border-gray-500/30 text-gray-400 hover:bg-gray-500/10'
                }`}
              >
                {c === 'all' ? 'All' : c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
          <div className="w-px h-5 bg-white/10" />
          <div className="flex gap-1">
            {sorts.map((s) => (
              <button
                key={s.key}
                onClick={() => onSortChange(s.key)}
                className="text-xs px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
