export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">🚀 Side Projects</h1>
        <p className="text-xl text-white/80">
          AI business opportunities, startups, automation tools, and creative experiments
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Active Projects</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">🎵 Rocky AI Assistant</h3>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Active</span>
              </div>
              <p className="text-white/80 mb-3">
                Personal AI assistant for automation, learning, and productivity. Currently handles email digests, weather reports, and system monitoring.
              </p>
              <div className="flex items-center text-sm text-white/60">
                <span className="mr-4">📅 Started: March 2026</span>
                <span>👥 Users: 1 (personal)</span>
              </div>
            </div>
            
            <div className="p-4 bg-white/5 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">🌐 Jixiong Digital Hub</h3>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Development</span>
              </div>
              <p className="text-white/80 mb-3">
                Personal website platform combining portfolio, learning center, project tracking, and AI assistant dashboard.
              </p>
              <div className="flex items-center text-sm text-white/60">
                <span className="mr-4">📅 Started: April 2026</span>
                <span>🚀 Status: Deployed to Vercel</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Project Stats</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="font-bold mb-2">Total Projects</h3>
              <p className="text-3xl font-bold">5</p>
              <p className="text-sm text-white/60">2 active, 3 planned</p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="font-bold mb-2">Completion Rate</h3>
              <p className="text-3xl font-bold">78%</p>
              <p className="text-sm text-white/60">Ahead of schedule</p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="font-bold mb-2">Next Milestone</h3>
              <p className="text-lg">Search functionality</p>
              <p className="text-sm text-white/60">Due: April 7, 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Upcoming Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <h3 className="font-bold text-lg mb-2">AI Email Assistant</h3>
            <p className="text-white/80 mb-3">Automated email classification, summarization, and response suggestions</p>
            <span className="text-sm text-white/60">💡 Planning phase</span>
          </div>
          
          <div className="p-4 bg-white/5 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Investment Analyzer</h3>
            <p className="text-white/80 mb-3">AI-powered stock analysis and portfolio optimization tool</p>
            <span className="text-sm text-white/60">💡 Research phase</span>
          </div>
          
          <div className="p-4 bg-white/5 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Learning Platform</h3>
            <p className="text-white/80 mb-3">Interactive AI learning system with personalized study paths</p>
            <span className="text-sm text-white/60">💡 Concept stage</span>
          </div>
        </div>
      </div>
    </div>
  )
}