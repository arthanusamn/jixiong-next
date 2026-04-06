'use client'

export default function ActionsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">⚡ Quick Actions</h1>
        <p className="text-xl text-white/80">
          Common tasks, shortcuts, rapid access tools, and one-click operations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Frequent Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-4 bg-white/10 hover:bg-white/20 rounded-xl text-left transition-colors group">
              <div className="flex items-center mb-2">
                <div className="text-2xl mr-3">📧</div>
                <h3 className="font-bold text-lg">Send Email</h3>
              </div>
              <p className="text-white/80 text-sm">Compose and send a new email message</p>
            </button>
            
            <button className="p-4 bg-white/10 hover:bg-white/20 rounded-xl text-left transition-colors group">
              <div className="flex items-center mb-2">
                <div className="text-2xl mr-3">📊</div>
                <h3 className="font-bold text-lg">Generate Report</h3>
              </div>
              <p className="text-white/80 text-sm">Create portfolio or learning report</p>
            </button>
            
            <button className="p-4 bg-white/10 hover:bg-white/20 rounded-xl text-left transition-colors group">
              <div className="flex items-center mb-2">
                <div className="text-2xl mr-3">🌤️</div>
                <h3 className="font-bold text-lg">Check Weather</h3>
              </div>
              <p className="text-white/80 text-sm">Get current weather and forecast</p>
            </button>
            
            <button className="p-4 bg-white/10 hover:bg-white/20 rounded-xl text-left transition-colors group">
              <div className="flex items-center mb-2">
                <div className="text-2xl mr-3">📈</div>
                <h3 className="font-bold text-lg">Update Portfolio</h3>
              </div>
              <p className="text-white/80 text-sm">Refresh investment portfolio data</p>
            </button>
            
            <button className="p-4 bg-white/10 hover:bg-white/20 rounded-xl text-left transition-colors group">
              <div className="flex items-center mb-2">
                <div className="text-2xl mr-3">🔧</div>
                <h3 className="font-bold text-lg">System Check</h3>
              </div>
              <p className="text-white/80 text-sm">Run system health diagnostics</p>
            </button>
            
            <button className="p-4 bg-white/10 hover:bg-white/20 rounded-xl text-left transition-colors group">
              <div className="flex items-center mb-2">
                <div className="text-2xl mr-3">📚</div>
                <h3 className="font-bold text-lg">Learning Digest</h3>
              </div>
              <p className="text-white/80 text-sm">Generate AI learning summary</p>
            </button>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Actions</h2>
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="font-medium">Website Deployment</p>
                <span className="text-sm text-white/60">7:25 AM</span>
              </div>
              <p className="text-sm text-white/60">Fixed TypeScript errors and deployed</p>
            </div>
            
            <div className="p-3 bg-white/5 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="font-medium">Page Creation</p>
                <span className="text-sm text-white/60">7:30 AM</span>
              </div>
              <p className="text-sm text-white/60">Created 5 missing website pages</p>
            </div>
            
            <div className="p-3 bg-white/5 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="font-medium">Email Delivery</p>
                <span className="text-sm text-white/60">8:43 AM</span>
              </div>
              <p className="text-sm text-white/60">AI Learning Digest sent</p>
            </div>
            
            <div className="p-3 bg-white/5 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="font-medium">Weather Check</p>
                <span className="text-sm text-white/60">8:41 AM</span>
              </div>
              <p className="text-sm text-white/60">Morning weather report generated</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Batch Operations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 rounded-xl text-left transition-all group">
            <div className="text-2xl mb-2">🔄</div>
            <h3 className="font-bold text-lg mb-1">Daily Routine</h3>
            <p className="text-white/80 text-sm">Run all morning checks and updates</p>
          </button>
          
          <button className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 rounded-xl text-left transition-all group">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-bold text-lg mb-1">Weekly Review</h3>
            <p className="text-white/80 text-sm">Generate weekly progress reports</p>
          </button>
          
          <button className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 rounded-xl text-left transition-all group">
            <div className="text-2xl mb-2">🧹</div>
            <h3 className="font-bold text-lg mb-1">Cleanup Tasks</h3>
            <p className="text-white/80 text-sm">Organize files and clear temp data</p>
          </button>
          
          <button className="p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 rounded-xl text-left transition-all group">
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="font-bold text-lg mb-1">Deploy Updates</h3>
            <p className="text-white/80 text-sm">Push changes and deploy website</p>
          </button>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Custom Actions</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter custom command..."
            className="flex-1 p-3 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-cyan-500"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-bold transition-all">
            Execute
          </button>
        </div>
        <p className="text-sm text-white/60 mt-3">
          Examples: &quot;check email&quot;, &quot;update portfolio prices&quot;, &quot;generate learning summary&quot;
        </p>
      </div>
    </div>
  )
}