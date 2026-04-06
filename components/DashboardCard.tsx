import Link from 'next/link'

interface DashboardCardProps {
  title: string
  icon: string
  description: string
  stats: string
  link: string
  color: string
  iconColor?: string
}

export default function DashboardCard({
  title,
  icon,
  description,
  stats,
  link,
  color,
  iconColor = 'text-gray-400',
}: DashboardCardProps) {
  return (
    <Link href={link} className="block">
      <div className="group card p-6 h-full hover:bg-gradient-to-br hover:from-gray-800/30 hover:to-gray-800/10 transition-all duration-300">
        <div className="flex items-start justify-between mb-5">
          <div className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${color} ${iconColor}`}>
            {icon}
          </div>
          <div className="text-xs px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
            {stats}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors text-gray-100">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-5 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors mt-auto">
          <span className="font-medium">View section</span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  )
}