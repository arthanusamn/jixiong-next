interface StatusIndicatorProps {
  name: string
  status: 'online' | 'offline' | 'warning'
  details: string
}

export default function StatusIndicator({ name, status, details }: StatusIndicatorProps) {
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-red-500',
    warning: 'bg-yellow-500',
  }

  const statusIcons = {
    online: '✅',
    offline: '❌',
    warning: '⚠️',
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium">{name}</h4>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
          <span className="text-sm text-white/70">{statusIcons[status]}</span>
        </div>
      </div>
      <p className="text-sm text-white/60">{details}</p>
    </div>
  )
}