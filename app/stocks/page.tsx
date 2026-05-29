import { Suspense } from 'react'
import DashboardClient from './DashboardClient'

// Static imports — Next.js resolves these at build time
import summaryData from '@/components/stocks/stocks-summary.json'
import fullData from '@/components/stocks/stocks.json'

export const metadata = {
  title: 'Stock Research — Jixiong',
  description: 'Real-time stock analysis dashboard with insider buying signals, technical indicators, and AI-powered insights.',
}

export default function StocksPage() {
  const stocks = (fullData as any).stocks || []
  const summary = summaryData as any

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <DashboardClient summary={summary} stocks={stocks} />
    </Suspense>
  )
}

function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-16 bg-white/5 rounded-xl" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-24 bg-white/5 rounded-xl" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-48 bg-white/5 rounded-xl" />
        ))}
      </div>
    </div>
  )
}
