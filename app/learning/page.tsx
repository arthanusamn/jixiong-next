export default function LearningPage() {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">📚 Learning Center</h1>
        <p className="text-xl text-white/80">
          AI learning digests, book summaries, study materials, and educational resources
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Today&apos;s AI Learning Digest</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">📰 AI Research Updates</h3>
                <span className="text-sm text-white/60">Delivered at 8:43 AM</span>
              </div>
              <p className="text-white/80">
                Latest developments in AI research, including new papers from OpenAI, Anthropic, and Google DeepMind.
              </p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="font-bold text-lg mb-2">🧠 Key Insights</h3>
              <ul className="space-y-2 text-white/80">
                <li>• New multimodal models showing improved reasoning capabilities</li>
                <li>• Breakthroughs in efficient training methods reducing compute costs by 40%</li>
                <li>• Open-source alternatives gaining traction in enterprise deployments</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
          <div className="space-y-3">
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              📖 View All Digests
            </button>
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              🎓 Study Materials
            </button>
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              📚 Book Summaries
            </button>
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              🎥 Video Courses
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Active Learning Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Andrej Karpathy Study</h3>
            <p className="text-white/80 mb-3">Deep understanding of AI fundamentals through minimalist implementations</p>
            <div className="flex items-center text-sm text-white/60">
              <span className="mr-4">📅 Phase 1: microgpt</span>
              <span>⏳ Weekly target</span>
            </div>
          </div>
          
          <div className="p-4 bg-white/5 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Dan Koe Analysis</h3>
            <p className="text-white/80 mb-3">Digital entrepreneurship and personal development frameworks</p>
            <div className="flex items-center text-sm text-white/60">
              <span className="mr-4">✅ Analysis completed</span>
              <span>📊 Implementation plan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}