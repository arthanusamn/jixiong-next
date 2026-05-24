'use client'

export default function AgentsPage() {
  const agents = [
    {
      name: 'AI Learning Digest',
      icon: '📰',
      tagline: 'Curated AI & Tech News → Morning Email',
      description: 'Every morning at 8 AM, this agent scans 5+ RSS feeds (Hacker News, TechCrunch, Simon Willison, LocalLlama, Jeff Geerling), analyzes 80+ stories, and delivers a beautifully formatted email digest to your inbox.',
      stats: [
        { label: 'Stories/day', value: '~81' },
        { label: 'Feed sources', value: '5+' },
        { label: 'Delivery', value: '8 AM PT' },
        { label: 'Cost', value: '$0' },
      ],
      highlights: [
        'AI-powered story curation & ranking',
        'Multiple category sections (Business, AI, Tech)',
        'Beautiful HTML email formatted for mobile',
        'Full archives stored locally',
      ],
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      badge: 'Running Daily',
      badgeColor: 'bg-green-500/20 text-green-400',
    },
    {
      name: 'AI Stock Scanner',
      icon: '📊',
      tagline: '54-Ticker Market Intelligence Engine',
      description: 'Scans a curated universe of 54 AI/tech stocks every weekday at 7 AM PT. Scores each on momentum, valuation, sentiment, news, and risk — delivering a ranked report with buy/hold/sell signals to your email.',
      stats: [
        { label: 'Tickers', value: '54' },
        { label: 'SaaS sub-cats', value: '4' },
        { label: 'Score factors', value: '5' },
        { label: 'Cost', value: '$0' },
      ],
      highlights: [
        'Enterprise SaaS + AI Infrastructure universe',
        'Multi-factor scoring (momentum, value, sentiment)',
        'Daily ranked report with price targets',
        'Python + yfinance + free APIs only',
      ],
      color: 'from-emerald-500/20 to-green-500/20',
      iconColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      badge: 'Mon–Fri 7 AM',
      badgeColor: 'bg-blue-500/20 text-blue-400',
    },
    {
      name: 'Zero-Token Seeking Alpha',
      icon: '📝',
      tagline: 'Cost-Optimized Market Intelligence',
      description: 'Fetches and parses 200+ Seeking Alpha articles daily using pure Python — zero AI tokens, zero API costs. Covers stock analysis, earnings recaps, sector trends, and macroeconomic commentary.',
      stats: [
        { label: 'Articles/day', value: '200+' },
        { label: 'AI tokens', value: '0' },
        { label: 'API cost', value: '$0' },
        { label: 'Coverage', value: '4x vs AI' },
      ],
      highlights: [
        'Pure Python parsing — no LLM token costs',
        '4x more coverage than AI-dependent version',
        'Morning + afternoon refresh cycles',
        'Local archives for back-referencing',
      ],
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      badge: '2x Daily',
      badgeColor: 'bg-purple-500/20 text-purple-400',
    },
    {
      name: 'Rocky Finance System',
      icon: '🎵',
      tagline: 'Full-Stack Financial Intelligence Suite',
      description: 'The most comprehensive agent — portfolio optimization (mean-variance + HRP), 75+ technical indicators (RSI, MACD, Bollinger Bands), SEC fundamental scanning, weekly discovery screeners, and dynamic sector rotation tracking.',
      stats: [
        { label: 'Tech indicators', value: '75+' },
        { label: 'Optimization models', value: '3' },
        { label: 'SEC filing fields', value: '10+' },
        { label: 'Risk tolerance', value: 'Aggressive' },
      ],
      highlights: [
        'PyPortfolioOpt + skfolio for modern portfolio theory',
        'SEC EDGAR XBRL parsing for fundamentals',
        'Weekly sector rotation & momentum screening',
        'Technical + fundamental + portfolio — all in one',
      ],
      color: 'from-indigo-500/20 to-violet-500/20',
      iconColor: 'text-indigo-400',
      borderColor: 'border-indigo-500/30',
      badge: 'Continuous',
      badgeColor: 'bg-indigo-500/20 text-indigo-400',
    },
  ]

  const architecture = [
    {
      layer: 'Trigger Layer',
      items: ['Cron Jobs (systemd)', 'Heartbeat Polls', 'Manual Commands'],
      icon: '⏰',
      color: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      layer: 'Agent Layer',
      items: ['Python Scripts', 'Shell Scripts', 'OpenClaw Tasks'],
      icon: '🤖',
      color: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      layer: 'Analysis Layer',
      items: ['yfinance APIs', 'SEC EDGAR', 'RSS Parsers', 'Technical Indicators'],
      icon: '🧠',
      color: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      layer: 'Delivery Layer',
      items: ['Gmail SMTP', 'Telegram Bot', 'Local Archives'],
      icon: '📬',
      color: 'from-purple-500/20 to-pink-500/20',
    },
  ]

  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="text-center py-10 animate-fade-in-up">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-6">
          <span className="text-3xl">🤖</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">AI Agent Demos</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty leading-relaxed">
          Four autonomous AI agents running 24/7 — scanning markets, curating news, analyzing stocks, 
          and delivering intelligence directly to your inbox. <strong className="text-white">Zero API costs.</strong>
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <span className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
            ✅ All Agents Operational
          </span>
          <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
            ~300+ articles analyzed daily
          </span>
          <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
            100% Free APIs
          </span>
        </div>
      </div>

      {/* Agent Cards */}
      <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-gray-400">⚡</span>
          The Four Agents
        </h2>
        {agents.map((agent, idx) => (
          <div
            key={agent.name}
            className={`card p-6 md:p-8 bg-gradient-to-br ${agent.color} border ${agent.borderColor} hover:bg-gray-800/40 transition-all duration-300`}
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left: Icon + Badge */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className={`text-5xl mb-3 ${agent.iconColor}`}>{agent.icon}</div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${agent.badgeColor}`}>
                  {agent.badge}
                </span>
              </div>

              {/* Middle: Info */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-1">{agent.name}</h3>
                <p className="text-base text-cyan-400 mb-3 font-medium">{agent.tagline}</p>
                <p className="text-gray-300 leading-relaxed mb-4">{agent.description}</p>

                <div className="flex flex-wrap gap-2">
                  {agent.highlights.map((h) => (
                    <span key={h} className="text-sm px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Stats */}
              <div className="flex-shrink-0 grid grid-cols-2 gap-3">
                {agent.stats.map((s) => (
                  <div key={s.label} className="text-center p-3 rounded-xl bg-gray-900/40 border border-gray-700/50">
                    <div className="text-lg font-bold text-white">{s.value}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-gray-400">🏗️</span>
            System Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {architecture.map((layer, idx) => (
              <div key={layer.layer} className="relative">
                {/* Arrow connector */}
                {idx < architecture.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-gray-600 text-2xl z-10">→</div>
                )}
                <div className={`p-5 rounded-xl bg-gradient-to-br ${layer.color} border border-gray-700/50 h-full`}>
                  <div className="text-2xl mb-3">{layer.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{layer.layer}</h3>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="text-sm text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            All agents run locally on WSL2 via OpenClaw + cron scheduling. Data flows Python → Email/Telegram → You.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="card p-8 bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20">
          <div className="flex items-start gap-4">
            <div className="text-3xl text-amber-400">💰</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Zero-Cost Architecture</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every agent was deliberately designed to use <strong className="text-white">100% free APIs</strong> — yfinance, 
                SEC EDGAR, RSS feeds, and custom web parsing. No OpenAI credits, no Bloomberg terminals, no 
                paid data subscriptions. Just Python, cron, and clever engineering.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
                  🐍 Python + yfinance
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
                  📡 RSS + Web scraping
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
                  📄 SEC EDGAR XBRL
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
                  ⏰ Linux cron scheduling
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
