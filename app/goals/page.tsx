export default function GoalsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">🎯 Goals & Progress</h1>
        <p className="text-xl text-white/80">
          Annual goals, habit tracking, progress dashboard, and achievement milestones
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">2026 Annual Goals</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">🚀 Master AI Development</h3>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">78% Complete</span>
              </div>
              <p className="text-white/80 mb-3">
                Complete Karpathy study plan, build 3 AI projects, contribute to open source AI tools
              </p>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-white/60 mt-2">
                <span>✅ Karpathy plan created</span>
                <span>🎯 2/3 projects built</span>
              </div>
            </div>
            
            <div className="p-4 bg-white/5 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">📈 Grow Investment Portfolio</h3>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">64% Complete</span>
              </div>
              <p className="text-white/80 mb-3">
                Reach $25,000 portfolio value, develop systematic investment strategy, achieve 15% annual return
              </p>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '64%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-white/60 mt-2">
                <span>💰 $15,550 current</span>
                <span>📊 Strategy defined</span>
              </div>
            </div>
            
            <div className="p-4 bg-white/5 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">🌐 Build Digital Presence</h3>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">92% Complete</span>
              </div>
              <p className="text-white/80 mb-3">
                Launch professional website, create content portfolio, establish online brand
              </p>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-white/60 mt-2">
                <span>✅ Website launched</span>
                <span>🎨 Brand established</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="font-bold mb-2">Overall Progress</h3>
              <p className="text-3xl font-bold">78%</p>
              <p className="text-sm text-white/60">Ahead of yearly schedule</p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="font-bold mb-2">Goals Completed</h3>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-white/60">Out of 15 total</p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="font-bold mb-2">Next Review</h3>
              <p className="text-lg">Quarterly assessment</p>
              <p className="text-sm text-white/60">Due: June 30, 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">🎵 Rocky Assistant</h3>
              <span className="text-sm text-white/60">Apr 5</span>
            </div>
            <p className="text-white/80">AI assistant fully operational with automated systems</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">🌐 Website Launch</h3>
              <span className="text-sm text-white/60">Apr 5</span>
            </div>
            <p className="text-white/80">Professional Next.js website deployed to Vercel</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">📊 Dan Koe Analysis</h3>
              <span className="text-sm text-white/60">Apr 5</span>
            </div>
            <p className="text-white/80">Comprehensive analysis of 300+ videos completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}