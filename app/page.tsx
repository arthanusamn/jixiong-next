import DashboardCard from '@/components/DashboardCard'
import StatusIndicator from '@/components/StatusIndicator'

export default function Home() {
  const dashboardCards = [
    {
      title: 'Learning Center',
      icon: '📚',
      description: 'AI learning digests, book summaries, and study materials',
      stats: '3 new digests today',
      link: '/learning',
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
    },
    {
      title: 'Portfolio & Investments',
      icon: '📈',
      description: 'Stock portfolio, investment tracking, and market analysis',
      stats: '$15,550.21 total value',
      link: '/portfolio',
      color: 'from-emerald-500/20 to-green-500/20',
      iconColor: 'text-emerald-400',
    },
    {
      title: 'Side Projects',
      icon: '🚀',
      description: 'AI business opportunities, startups, and automation tools',
      stats: '5 active projects',
      link: '/projects',
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
    },
    {
      title: 'Goals & Progress',
      icon: '🎯',
      description: 'Annual goals, habit tracking, and progress dashboard',
      stats: '78% yearly completion',
      link: '/goals',
      color: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-400',
    },
    {
      title: 'Rocky Assistant',
      icon: '🎵',
      description: 'AI assistant status, automation logs, and system health',
      stats: 'All systems operational',
      link: '/rocky',
      color: 'from-indigo-500/20 to-violet-500/20',
      iconColor: 'text-indigo-400',
    },
    {
      title: 'Quick Actions',
      icon: '⚡',
      description: 'Common tasks, shortcuts, and rapid access tools',
      stats: '12 available actions',
      link: '/actions',
      color: 'from-amber-500/20 to-yellow-500/20',
      iconColor: 'text-amber-400',
    },
  ]

  const systemStatus: Array<{name: string, status: 'online' | 'offline' | 'warning', details: string}> = [
    { name: 'Vercel Deployment', status: 'online', details: 'jixiong-next.vercel.app' },
    { name: 'GitHub Sync', status: 'online', details: 'arthanusamn/jixiong-next' },
    { name: 'Email System', status: 'online', details: 'AI Digest delivery active' },
    { name: 'Telegram Bot', status: 'online', details: 'Connected and polling' },
    { name: 'OpenClaw Gateway', status: 'online', details: 'PID: 36621' },
    { name: 'Cron Jobs', status: 'online', details: 'All scheduled jobs running' },
  ]

  const quickStats = [
    {
      title: "Today's Focus",
      icon: '📅',
      value: 'AI Learning Digest',
      description: 'Delivered at 9:18 AM',
      subtext: 'Next: Evening review at 8:00 PM',
      color: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      title: 'Portfolio Update',
      icon: '📈',
      value: '$15,550.21',
      description: 'Total portfolio value',
      subtext: '64.3% cash, 35.7% stocks',
      color: 'from-emerald-500/10 to-green-500/10',
    },
    {
      title: 'Active Projects',
      icon: '🚀',
      value: 'Dan Koe analysis',
      description: 'Completed this morning',
      subtext: 'Karpathy study plan ready',
      color: 'from-purple-500/10 to-pink-500/10',
    },
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section - Inspired by karpathy.ai */}
      <div className="text-center py-12 animate-fade-in-up">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-6">
          <span className="text-3xl">🎵</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          <span className="gradient-text">Jixiong's Digital Hub</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty leading-relaxed">
          A personal platform for AI learning, portfolio tracking, project management, 
          and AI assistant integration—inspired by the clean designs of leading AI researchers.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700">Next.js 14</span>
          <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700">Tailwind CSS</span>
          <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700">TypeScript</span>
          <span className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700">Vercel</span>
        </div>
      </div>

      {/* Status Overview - Inspired by professional dashboards */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-gray-400">📊</span>
            System Status
          </h2>
          <span className="text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            All Systems Operational
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {systemStatus.map((item) => (
            <StatusIndicator key={item.name} {...item} />
          ))}
        </div>
      </div>

      {/* Dashboard Grid - Clean card design */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-gray-400">🧭</span>
          Dashboard Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card) => (
            <DashboardCard key={card.title} {...card} />
          ))}
        </div>
      </div>

      {/* Quick Stats - Inspired by eugeneyan.com */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-gray-400">📈</span>
          Quick Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickStats.map((stat, index) => (
            <div 
              key={stat.title}
              className={`card p-6 bg-gradient-to-br ${stat.color}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <h3 className="font-bold text-lg">{stat.title}</h3>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-300">{stat.description}</p>
                <p className="text-sm text-gray-500 mt-2">{stat.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inspiration Note - Like reference sites */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="card p-6 border border-gray-700/50">
          <div className="flex items-start gap-4">
            <div className="text-2xl text-gray-400">💡</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Design Inspiration</h3>
              <p className="text-gray-300 mb-3">
                This website draws inspiration from the clean, content-focused designs of leading AI researchers and engineers:
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <a 
                  href="https://karpathy.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-colors text-gray-300 hover:text-white"
                >
                  karpathy.ai
                </a>
                <a 
                  href="https://huyenchip.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-colors text-gray-300 hover:text-white"
                >
                  huyenchip.com
                </a>
                <a 
                  href="https://eugeneyan.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-colors text-gray-300 hover:text-white"
                >
                  eugeneyan.com
                </a>
                <a 
                  href="https://lilianweng.github.io/posts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-colors text-gray-300 hover:text-white"
                >
                  lilianweng.github.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}