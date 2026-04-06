import Link from 'next/link'

interface DashboardCardProps {
  title: string
  icon: string
  description: string
  stats: string
  link: string
  color: string
}

export default function DashboardCard({
  title,
  icon,
  description,
  stats,
  link,
  color,
}: DashboardCardProps) {
  // Map color names to actual gradient classes for Tailwind v4
  const gradientClasses: Record<string, string> = {
    'from-blue-500 to-cyan-500': 'bg-gradient-to-br from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500': 'bg-gradient-to-br from-green-500 to-emerald-500',
    'from-purple-500 to-pink-500': 'bg-gradient-to-br from-purple-500 to-pink-500',
    'from-orange-500 to-red-500': 'bg-gradient-to-br from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500': 'bg-gradient-to-br from-indigo-500 to-purple-500',
    'from-yellow-500 to-amber-500': 'bg-gradient-to-br from-yellow-500 to-amber-500',
  }

  const gradientClass = gradientClasses[color] || 'bg-gradient-to-br from-blue-500 to-cyan-500'

  return (
    <Link href={link}>
      <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className={`text-4xl p-3 rounded-xl ${gradientClass}`}>
            {icon}
          </div>
          <div className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">
            {stats}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>
        
        <p className="text-white/70 mb-4">
          {description}
        </p>
        
        <div className="flex items-center text-sm text-white/60 group-hover:text-white/80 transition-colors">
          <span>Explore</span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  )
}