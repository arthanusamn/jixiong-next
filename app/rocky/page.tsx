export default function RockyPage() {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">🎵 Rocky AI Assistant</h1>
        <p className="text-xl text-white/80">
          Your personal AI assistant for automation, learning, productivity, and system management
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Assistant Status</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">🤖 Core Systems</h3>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">All Operational</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>OpenClaw Gateway</span>
                  </div>
                  <p className="text-sm text-white/60 mt-1">PID: 36621</p>
                </div>
                
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Telegram Bot</span>
                  </div>
                  <p className="text-sm text-white/60 mt-1">Connected & polling</p>
                </div>
                
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Email System</span>
                  </div>
                  <p className="text-sm text-white/60 mt-1">AI Digest active</p>
                </div>
                
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Cron Jobs</span>
                  </div>
                  <p className="text-sm text-white/60 mt-1">All scheduled</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="font-bold text-lg mb-2">🔄 Recent Activities</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Fixed TypeScript build error</p>
                    <p className="text-sm text-white/60">jixiong-next.vercel.app deployment</p>
                  </div>
                  <span className="text-sm text-white/60">7:25 AM</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Created missing website pages</p>
                    <p className="text-sm text-white/60">Learning, Projects, Goals, Rocky, Actions</p>
                  </div>
                  <span className="text-sm text-white/60">7:30 AM</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">AI Learning Digest sent</p>
                    <p className="text-sm text-white/60">Morning email delivery</p>
                  </div>
                  <span className="text-sm text-white/60">8:43 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Quick Commands</h2>
          <div className="space-y-3">
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              📊 Check System Status
            </button>
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              📧 Send Test Email
            </button>
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              🔄 Restart Services
            </button>
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              📝 View Activity Log
            </button>
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              ⚙️ Configure Settings
            </button>
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              🆘 Get Help
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Automation Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <h3 className="font-bold text-lg mb-2">📰 AI Learning Digest</h3>
            <p className="text-white/80 mb-3">Daily email with AI research updates, tech news, and learning materials</p>
            <span className="text-sm text-white/60">⏰ 8:00 AM daily</span>
          </div>
          
          <div className="p-4 bg-white/5 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🌤️ Weather Reports</h3>
            <p className="text-white/80 mb-3">Morning and evening weather updates for Camas & Seattle</p>
            <span className="text-sm text-white/60">⏰ 8:00 AM & 8:00 PM</span>
          </div>
          
          <div className="p-4 bg-white/5 rounded-xl">
            <h3 className="font-bold text-lg mb-2">📈 Portfolio Tracking</h3>
            <p className="text-white/80 mb-3">Investment portfolio monitoring and market analysis</p>
            <span className="text-sm text-white/60">⏰ Weekly reports</span>
          </div>
          
          <div className="p-4 bg-white/5 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🎯 Goal Progress</h3>
            <p className="text-white/80 mb-3">Annual goal tracking and progress monitoring</p>
            <span className="text-sm text-white/60">⏰ Monthly reviews</span>
          </div>
          
          <div className="p-4 bg-white/5 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🚀 Project Management</h3>
            <p className="text-white/80 mb-3">Side project tracking and milestone monitoring</p>
            <span className="text-sm text-white/60">⏰ Bi-weekly updates</span>
          </div>
          
          <div className="p-4 bg-white/5 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🔧 System Health</h3>
            <p className="text-white/80 mb-3">OpenClaw gateway, Telegram, email, and cron job monitoring</p>
            <span className="text-sm text-white/60">⏰ Continuous</span>
          </div>
        </div>
      </div>
    </div>
  )
}