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
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Portfolio & Investments',
      icon: '📈',
      description: 'Stock portfolio, investment tracking, and market analysis',
      stats: '$15,550.21 total value',
      link: '/portfolio',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Side Projects',
      icon: '🚀',
      description: 'AI business opportunities, startups, and automation tools',
      stats: '5 active projects',
      link: '/projects',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Goals & Progress',
      icon: '🎯',
      description: 'Annual goals, habit tracking, and progress dashboard',
      stats: '78% yearly completion',
      link: '/goals',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Rocky Assistant',
      icon: '🎵',
      description: 'AI assistant status, automation logs, and system health',
      stats: 'All systems operational',
      link: '/rocky',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Quick Actions',
      icon: '⚡',
      description: 'Common tasks, shortcuts, and rapid access tools',
      stats: '12 available actions',
      link: '/actions',
      color: 'from-yellow-500 to-amber-500',
    },
  ]

  const systemStatus = [
    { name: 'Vercel Deployment', status: 'online', details: 'jixiong.vercel.app' },
    { name: 'GitHub Sync', status: 'online', details: 'arthanusamn/rocky-dashboard' },
    { name: 'Email System', status: 'online', details: 'AI Digest delivery active' },
    { name: 'Telegram Bot', status: 'online', details: 'Connected and polling' },
    { name: 'OpenClaw Gateway', status: 'online', details: 'PID: 36621' },
    { name: 'Cron Jobs', status: 'online', details: 'All scheduled jobs running' },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Digital Command Center</span>
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          A complete personal platform for learning, projects, investments, and AI-powered productivity.
          Everything in one place, beautifully organized.
        </p>
      </div>

      {/* Status Overview */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="mr-2">📊</span> System Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {systemStatus.map((item) => (
            <StatusIndicator key={item.name} {...item} />
          ))}
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6">
          <div className="text-3xl mb-2">📅</div>
          <h3 className="text-xl font-bold mb-2">Today&apos;s Focus</h3>
          <p className="text-white/80">AI Learning Digest delivered at 8:43 AM</p>
          <p className="text-sm text-white/60 mt-2">Next: Evening review at 8:00 PM</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6">
          <div className="text-3xl mb-2">📈</div>
          <h3 className="text-xl font-bold mb-2">Portfolio Update</h3>
          <p className="text-white/80">$15,550.21 total value</p>
          <p className="text-sm text-white/60 mt-2">64.3% cash, 35.7% stocks</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6">
          <div className="text-3xl mb-2">🚀</div>
          <h3 className="text-xl font-bold mb-2">Active Projects</h3>
          <p className="text-white/80">Dan Koe analysis completed</p>
          <p className="text-sm text-white/60 mt-2">Karpathy study plan ready</p>
        </div>
      </div>
    </div>
  )
}