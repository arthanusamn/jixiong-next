'use client'

import { useState } from 'react'

interface BizBotResult {
  status: string
  cost: string
  actions: number
  project_dir: string
  strategy: any
  build: any
  marketing: any
  error?: string
}

interface BizBotRequest {
  name: string
  description: string
  target_market: string
  key_feature: string
}

const examples = [
  {
    name: 'FreshFind',
    desc: 'An app that tells you exactly which grocery stores nearby have the freshest produce right now, using community reports and AI analysis',
    market: 'Health-conscious shoppers, meal preppers',
    feature: 'Real-time freshness scoring with community verification',
  },
  {
    name: 'WardrobeAI',
    desc: 'An AI stylist that catalogs your closet and generates outfit combinations based on weather, calendar events, and your personal style',
    market: 'Fashion-conscious professionals, busy parents',
    feature: 'One-photo closet scan, daily outfit generation',
  },
  {
    name: 'DocScribe',
    desc: 'Medical transcription that listens to patient visits and automatically generates SOAP notes, billing codes, and follow-up summaries',
    market: 'Independent doctors, urgent care clinics',
    feature: 'HIPAA-compliant, 99% accurate, integrates with Epic',
  },
]

export default function BizBotPage() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [market, setMarket] = useState('')
  const [feature, setFeature] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<BizBotResult | null>(null)
  const [error, setError] = useState('')

  const runBizBot = async (biz?: BizBotRequest) => {
    const data = biz || { name, description, target_market: market, key_feature: feature }
    
    if (!data.name || !data.description) {
      setError('Business name and description are required')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await fetch('/api/bizbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'BizBot failed')
      setResult(json)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const fillExample = (ex: typeof examples[0]) => {
    setName(ex.name)
    setDescription(ex.desc)
    setMarket(ex.market)
    setFeature(ex.feature)
  }

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center py-8 animate-fade-in-up">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 mb-6">
          <span className="text-3xl">🤖</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">BizBot</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
          Autonomous business builder. Drop an idea — get a strategy, MVP spec, landing page, 
          and marketing plan. Inspired by Polsia&apos;s 5-agent swarm.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <span className="px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            ⚡ 5 Agents
          </span>
          <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
            🧠 Research → Strategist → Builder → Marketing → Monitor
          </span>
          <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
            💰 ~$0.30 per launch
          </span>
        </div>
      </div>

      {/* The Engine — How It Works */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {[
          { step: '1', name: 'Research', icon: '🧠', desc: 'Market analysis & competitor research' },
          { step: '2', name: 'Strategist', icon: '📋', desc: 'Business plan & MVP spec' },
          { step: '3', name: 'Builder', icon: '🔧', desc: 'Landing page & assets' },
          { step: '4', name: 'Marketing', icon: '📢', desc: 'Ads, tweets & outreach' },
          { step: '5', name: 'Monitor', icon: '👁️', desc: 'Daily heartbeat checks' },
        ].map((a, i) => (
          <div key={a.name} className="card p-4 text-center bg-gradient-to-b from-purple-500/5 to-indigo-500/5 border border-purple-500/20">
            <div className="text-2xl mb-2">{a.icon}</div>
            <div className="text-xs text-purple-400 font-mono mb-1">Agent {a.step}</div>
            <div className="font-bold text-sm">{a.name}</div>
            <div className="text-xs text-gray-500 mt-1">{a.desc}</div>
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="card p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
        <h2 className="text-xl font-bold mb-4">⚡ Launch a Business Idea</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Business Name *</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="DealScout Pro"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">What does it do? *</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="An AI-powered deal finder that compares prices across retailers..."
              rows={3}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Target market</label>
              <input
                type="text"
                value={market}
                onChange={e => setMarket(e.target.value)}
                placeholder="Online shoppers, deal hunters"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Key feature</label>
              <input
                type="text"
                value={feature}
                onChange={e => setFeature(e.target.value)}
                placeholder="Price comparison across 10+ retailers"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600"
              />
            </div>
          </div>

          <button
            onClick={() => runBizBot()}
            disabled={loading || !name || !description}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 
                       hover:from-purple-600 hover:to-indigo-600
                       disabled:from-gray-600 disabled:to-gray-600 disabled:text-gray-400
                       rounded-xl font-bold text-lg transition-all duration-200
                       flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Building your business...
              </>
            ) : (
              <>
                🚀 Launch BizBot
              </>
            )}
          </button>

          {/* Examples */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Or try an example:</p>
            <div className="flex flex-wrap gap-2">
              {examples.map(ex => (
                <button
                  key={ex.name}
                  onClick={() => fillExample(ex)}
                  className="text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 
                             hover:bg-white/10 text-gray-400 hover:text-purple-400 transition-all"
                >
                  {ex.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 animate-fade-in-up">
          ⚠️ {error}
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="animate-fade-in-up space-y-4">
          <div className="card p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg">{result.status === 'completed' ? 'Business Launched!' : 'Failed'}</h3>
                <p className="text-sm text-gray-400">Cost: ${result.cost} | {result.actions} agent actions</p>
              </div>
            </div>
          </div>

          {/* Strategy */}
          {result.strategy && (
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span>📋</span> Strategy
              </h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-gray-400">Pitch:</span> {result.strategy?.elevator_pitch || '(generated)'}</p>
                <p><span className="text-gray-400">Problem:</span> {result.strategy?.problem_statement || '(generated)'}</p>
                <p><span className="text-gray-400">Audience:</span> {result.strategy?.target_audience || '(generated)'}</p>
                <p><span className="text-gray-400">Pricing:</span> {result.strategy?.pricing_model || '(generated)'}</p>
                <p><span className="text-gray-400">MVP in:</span> {result.strategy?.estimated_time_to_mvp || '(generated)'}</p>
              </div>
            </div>
          )}

          {/* Build */}
          {result.build && (
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span>🔧</span> Build Output
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">Landing page, ad copy variants, and email templates generated.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs">Landing Page</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs">Ad Copy</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs">Email Templates</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs">SEO Meta</span>
                </div>
                {result.build.project_dir && (
                  <p className="text-xs text-gray-500 mt-1">📁 {result.build.project_dir}</p>
                )}
              </div>
            </div>
          )}

          {/* Marketing */}
          {result.marketing && (
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span>📢</span> Marketing Assets
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Tagline:</p>
                  <p className="text-purple-300">{result.marketing.tagline || '(generated)'}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Twitter Posts:</p>
                  {(() => {
                    try {
                      const tweets = typeof result.marketing.twitter_posts === 'string'
                        ? JSON.parse(result.marketing.twitter_posts.replace(/'/g, '"'))
                        : (result.marketing.twitter_posts || [])
                      return Array.isArray(tweets) && tweets.slice(0, 2).map((tweet: string, i: number) => (
                        <p key={i} className="text-gray-300 mb-1 text-xs border-l-2 border-purple-500/30 pl-3">
                          {(tweet || '').slice(0, 120)}...
                        </p>
                      ))
                    } catch {
                      return <p className="text-xs text-gray-500 italic">(generated, view in project files)</p>
                    }
                  })()}
                </div>
                <div>
                  <p className="text-gray-400 mb-1">SEO Keywords:</p>
                  <p className="text-xs text-gray-500">{result.marketing.landing_seo?.keywords || '(generated)'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Monore */}
          <div className="text-center">
            <button
              onClick={() => { setResult(null); setName(''); setDescription(''); setMarket(''); setFeature('') }}
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              ← Start a new idea
            </button>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!result && !loading && !error && (
        <div className="text-center py-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
            <span className="text-3xl">💡</span>
          </div>
          <p className="text-gray-500">
            Enter your idea above and BizBot will run it through 5 autonomous AI agents
          </p>
        </div>
      )}

      {/* Info Footer */}
      <div className="text-center text-xs text-gray-600 max-w-xl mx-auto">
        Inspired by <a href="https://polsia.com" className="text-purple-500 hover:text-purple-400" target="_blank">Polsia</a>&apos;s 
        AI swarm architecture — 5 agents with scoped authority, cost tracking, and dual-model verification.
        All outputs are generated autonomously and should be reviewed by a human before use.
      </div>
    </div>
  )
}
