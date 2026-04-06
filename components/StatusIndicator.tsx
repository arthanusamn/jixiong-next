interface StatusIndicatorProps {
  name: string
  status: 'online' | 'offline' | 'warning'
  details: string
}

export default function StatusIndicator({ name, status, details }: StatusIndicatorProps) {
  const statusConfig = {
    online: {
      color: 'bg-emerald-500',
      icon: '●',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
    },
    offline: {
      color: 'bg-red-500',
      icon: '●',
      textColor: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
    },
    warning: {
      color: 'bg-amber-500',
      icon: '●',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
    },
  }

  const config = statusConfig[status]

  return (
    <div className="card p-4 hover:bg-gray-800/30 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-medium text-gray-200">{name}</h4>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${config.color}`} />
          <span className={`text-xs px-2 py-1 rounded-full ${config.bgColor} ${config.textColor} border ${config.borderColor}`}>
            {status.toUpperCase()}
          </span>
        </div>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed">{details}</p>
    </div>
  )
}