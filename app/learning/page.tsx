export default function LearningPage() {
  return (
    <div className="space-y-12 animate-fade-in-up">
      {/* Header - Inspired by karpathy.ai */}
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-6">
          <span className="text-3xl">📚</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 gradient-text">Learning Center</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
          AI learning digests, book summaries, study materials, and educational resources—
          curated for continuous learning and skill development.
        </p>
      </div>

      {/* Main Content Grid - Inspired by eugeneyan.com */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-gray-400">📰</span>
                Today&apos;s AI Learning Digest
              </h2>
              <span className="text-sm px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Delivered at 9:18 AM
              </span>
            </div>
            
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                <h3 className="font-bold text-lg mb-3 text-gray-200">AI Research Updates</h3>
                <p className="text-gray-300 leading-relaxed">
                  Latest developments in AI research, including new papers from OpenAI, Anthropic, 
                  and Google DeepMind. Focus on multimodal reasoning, efficient training methods, 
                  and open-source alternatives gaining enterprise traction.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-800/10 border border-gray-700/50">
                <h3 className="font-bold text-lg mb-3 text-gray-200 flex items-center gap-2">
                  <span className="text-gray-400">🧠</span>
                  Key Insights
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>New multimodal models showing 40% improved reasoning capabilities on complex tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Breakthroughs in efficient training methods reducing compute costs by 40%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Open-source alternatives gaining traction in enterprise deployments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Inspired by huyenchip.com */}
        <div>
          <div className="card p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-gray-400">⚡</span>
              Quick Access
            </h2>
            <div className="space-y-3">
              <button className="w-full p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 border border-gray-700/50 hover:border-gray-600/50 text-left transition-all text-gray-300 hover:text-white">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📖</span>
                  <div>
                    <div className="font-medium">View All Digests</div>
                    <div className="text-sm text-gray-500">117 AI/Tech stories</div>
                  </div>
                </div>
              </button>
              
              <button className="w-full p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 border border-gray-700/50 hover:border-gray-600/50 text-left transition-all text-gray-300 hover:text-white">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎓</span>
                  <div>
                    <div className="font-medium">Study Materials</div>
                    <div className="text-sm text-gray-500">Karpathy, courses, tutorials</div>
                  </div>
                </div>
              </button>
              
              <button className="w-full p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 border border-gray-700/50 hover:border-gray-600/50 text-left transition-all text-gray-300 hover:text-white">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📚</span>
                  <div>
                    <div className="font-medium">Book Summaries</div>
                    <div className="text-sm text-gray-500">AI, business, productivity</div>
                  </div>
                </div>
              </button>
              
              <button className="w-full p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 border border-gray-700/50 hover:border-gray-600/50 text-left transition-all text-gray-300 hover:text-white">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎥</span>
                  <div>
                    <div className="font-medium">Video Courses</div>
                    <div className="text-sm text-gray-500">ML, web dev, design</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Projects - Inspired by professional portfolios */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-gray-400">🚀</span>
          Active Learning Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-cyan-500/5 transition-all">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-bold text-lg text-gray-200">Andrej Karpathy Study</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Phase 1
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Deep understanding of AI fundamentals through minimalist implementations. 
              Starting with microgpt (200-line GPT) to understand autograd from scratch.
            </p>
            <div className="flex items-center text-sm text-gray-500 gap-4">
              <span className="flex items-center gap-1">
                <span>📅</span>
                <span>microgpt</span>
              </span>
              <span className="flex items-center gap-1">
                <span>⏳</span>
                <span>Weekly target</span>
              </span>
            </div>
          </div>
          
          <div className="card p-6 hover:bg-gradient-to-br hover:from-emerald-500/5 hover:to-green-500/5 transition-all">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-bold text-lg text-gray-200">Dan Koe Analysis</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Completed
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Comprehensive analysis of 300+ YouTube videos on digital entrepreneurship 
              and personal development. Synthesis complete, implementation plan in progress.
            </p>
            <div className="flex items-center text-sm text-gray-500 gap-4">
              <span className="flex items-center gap-1">
                <span>✅</span>
                <span>Analysis done</span>
              </span>
              <span className="flex items-center gap-1">
                <span>📊</span>
                <span>Plan needed</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}