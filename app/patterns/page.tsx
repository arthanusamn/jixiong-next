'use client'

export default function PatternsPage() {
  const analyzers = [
    {
      name: 'Daily Stock Analyzer',
      icon: '📈',
      freq: 'Weekdays 6 PM',
      freqColor: 'bg-blue-500/20 text-blue-400',
      description: 'End-of-day analysis covering 10+ core tickers with technical indicators (RSI, MACD, Bollinger Bands, SMA crossovers), volume analysis, and ATR-based volatility assessment. Generates a formatted report to your email.',
      features: [
        'RSI(14) — overbought/oversold signals',
        'MACD — trend direction & momentum',
        'Bollinger Bands — volatility & breakouts',
        'SMA 20/50 crossover — trend confirmation',
        'Volume analysis — accumulation/distribution',
        'ATR — volatility-based stop levels',
      ],
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
    {
      name: 'Technical Indicator Engine',
      icon: '📉',
      freq: 'On-demand',
      freqColor: 'bg-purple-500/20 text-purple-400',
      description: '75+ technical indicators from pandas-ta library applied across your full watchlist. Generates composite technical scores — a single number from 0-100 that tells you the technical health of any stock at a glance.',
      features: [
        '75+ indicator library (pandas-ta)',
        'Composite technical scoring (0-100)',
        'Trend strength measurement (ADX)',
        'Momentum oscillators (Stoch, Williams %R)',
        'Volume-weighted indicators (VWAP, OBV)',
        'Pattern recognition (Doji, Hammer, Engulfing)',
      ],
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/30',
    },
    {
      name: 'Fundamental Scanner',
      icon: '🔍',
      freq: 'Weekly',
      freqColor: 'bg-emerald-500/20 text-emerald-400',
      description: 'SEC EDGAR XBRL parsing for revenue growth, net income trends, free cash flow, and margin analysis. Combined with Yahoo Finance data for P/E, EV/EBITDA, analyst consensus, and short interest — all free, no subscriptions.',
      features: [
        'Revenue & earnings growth trends',
        'Free cash flow analysis',
        'Gross/operating margin tracking',
        'P/E, EV/EBITDA ratios',
        'Analyst consensus & price targets',
        'Short interest & institutional ownership',
      ],
      color: 'from-emerald-500/20 to-green-500/20',
      iconColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
    },
    {
      name: 'Portfolio Optimizer',
      icon: '⚖️',
      freq: 'Weekly',
      freqColor: 'bg-amber-500/20 text-amber-400',
      description: 'Mean-variance optimization (Max Sharpe), minimum variance portfolios, and Hierarchical Risk Parity (HRP). Risk metrics include Value at Risk (VaR), maximum drawdown, Sortino ratio, and beta. Built for aggressive risk tolerance.',
      features: [
        'Max Sharpe ratio optimization',
        'Minimum variance portfolio',
        'HRP risk parity allocation',
        'VaR & CVaR risk metrics',
        'Max drawdown analysis',
        'Correlation matrix & beta',
      ],
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400',
      borderColor: 'border-amber-500/30',
    },
    {
      name: 'Weekly Discovery Scanner',
      icon: '🔄',
      freq: 'Saturdays 8 AM',
      freqColor: 'bg-indigo-500/20 text-indigo-400',
      description: 'Sector rotation tracking, momentum screening across 500+ stocks, earnings calendar monitoring, and trend breakout detection. Automatically discovers new candidates and flags emerging opportunities.',
      features: [
        'Sector rotation tracking (finviz)',
        'Momentum screening (S&P 500+)',
        'Earnings calendar monitoring',
        'Trend breakout detection',
        'New opportunity discovery',
        'Weekly email with top picks',
      ],
      color: 'from-indigo-500/20 to-violet-500/20',
      iconColor: 'text-indigo-400',
      borderColor: 'border-indigo-500/30',
    },
  ]

  const techStack = [
    { name: 'yfinance', use: 'Real-time & historical price data', icon: '🐍' },
    { name: 'pandas-ta', use: '75+ technical indicators', icon: '📊' },
    { name: 'PyPortfolioOpt', use: 'Mean-variance optimization', icon: '📐' },
    { name: 'skfolio', use: 'ML portfolio risk models', icon: '🧠' },
    { name: 'finvizfinance', use: 'Stock screening & sector data', icon: '🔎' },
    { name: 'sec-edgar-api', use: 'SEC XBRL fundamental data', icon: '📋' },
    { name: 'matplotlib/plotly', use: 'Chart generation', icon: '📈' },
  ]

  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="text-center py-10 animate-fade-in-up">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-500/20 mb-6">
          <span className="text-3xl">📊</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Stock Pattern Analyzer</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty leading-relaxed">
          Automated technical & fundamental analysis across 54+ stocks. RSI, MACD, Bollinger Bands, 
          SEC fundamentals, portfolio optimization, and weekly discovery — all running on auto-pilot.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <span className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
            ✅ 5 Analysis Systems Active
          </span>
          <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
            54+ Tickers Monitored
          </span>
          <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
            Aggressive Risk Profile
          </span>
        </div>
      </div>

      {/* Analyzer Cards */}
      <div className="grid grid-cols-1 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-gray-400">🔧</span>
          Analysis Systems
        </h2>
        {analyzers.map((a) => (
          <div
            key={a.name}
            className={`card p-6 bg-gradient-to-br ${a.color} border ${a.borderColor} hover:bg-gray-800/40 transition-all duration-300`}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 text-center md:text-left">
                <div className={`text-5xl mb-3 ${a.iconColor}`}>{a.icon}</div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${a.freqColor}`}>
                  {a.freq}
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{a.name}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{a.description}</p>
                <div className="flex flex-wrap gap-2">
                  {a.features.map((f) => (
                    <span key={f} className="text-sm px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-gray-400">📦</span>
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((t) => (
              <div key={t.name} className="p-4 rounded-xl bg-gray-900/40 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{t.icon}</span>
                  <h3 className="font-bold text-lg">{t.name}</h3>
                </div>
                <p className="text-sm text-gray-400">{t.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
        <div className="card p-8 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-blue-500/20">
          <div className="flex items-start gap-4">
            <div className="text-3xl text-blue-400">⚙️</div>
            <div>
              <h3 className="font-bold text-xl mb-2">How It Works</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every weekday at <strong className="text-white">6 PM PT</strong>, the main analyzer pulls fresh data from Yahoo Finance, 
                computes technical indicators, screens for patterns, checks fundamentals, and 
                generates a comprehensive report. The Weekend Discovery scanner runs 
                <strong className="text-white"> Saturdays at 8 AM PT</strong> for new opportunities.
              </p>
              <ol className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold shrink-0">1.</span>
                  <span>Fetch real-time prices &amp; 1-year history via yfinance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold shrink-0">2.</span>
                  <span>Compute 75+ technical indicators with pandas-ta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold shrink-0">3.</span>
                  <span>Score each ticker (0-100) on technical health</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold shrink-0">4.</span>
                  <span>Cross-reference fundamentals from SEC filings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold shrink-0">5.</span>
                  <span>Generate formatted email report with rankings</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Tickers */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-gray-400">🎯</span>
            Tracked Universe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-lg text-cyan-400 mb-3">AI &amp; Semiconductors</h3>
              <div className="flex flex-wrap gap-2">
                {['NVDA','AMD','AVGO','MRVL','INTC','QCOM','SMCI','DELL','ANET','VRT','WULF','STRL'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-gray-800/50 border border-gray-700 text-sm font-mono text-gray-300">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-emerald-400 mb-3">Cloud &amp; SaaS</h3>
              <div className="flex flex-wrap gap-2">
                {['MSFT','GOOGL','AMZN','META','CRM','SNOW','DDOG','PANW','CRWD','ADBE','SHOP','INTU'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-gray-800/50 border border-gray-700 text-sm font-mono text-gray-300">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-purple-400 mb-3">Platform &amp; Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['NOW','HUBS','TEAM','ZS','NET','MDB','ESTC','CFLT','GTLB','OKTA','DOCU','ASAN'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-gray-800/50 border border-gray-700 text-sm font-mono text-gray-300">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">54 tickers total across Enterprise SaaS (26) + AI/Infra/Energy (28)</p>
        </div>
      </div>
    </div>
  )
}
