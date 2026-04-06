export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">📈 Portfolio & Investments</h1>
        <p className="text-xl text-white/80">
          Track your investments, analyze market trends, and manage your financial portfolio
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Portfolio Overview</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
              <div>
                <h3 className="font-bold">Total Value</h3>
                <p className="text-sm text-white/60">As of today</p>
              </div>
              <div className="text-2xl font-bold text-green-400">$15,550.21</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl">
                <h3 className="font-bold">Cash</h3>
                <p className="text-2xl">$10,000.00</p>
                <p className="text-sm text-white/60">64.3% of portfolio</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-xl">
                <h3 className="font-bold">Stocks</h3>
                <p className="text-2xl">$5,550.21</p>
                <p className="text-sm text-white/60">35.7% of portfolio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              📊 View Detailed Report
            </button>
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              📈 Analyze Performance
            </button>
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              💰 Add Transaction
            </button>
            <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors">
              🔔 Set Alerts
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Updates</h2>
        <div className="space-y-3">
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Portfolio Report Generated</h3>
              <span className="text-sm text-white/60">Today, 2:49 PM</span>
            </div>
            <p className="text-white/80 mt-2">Complete portfolio analysis with investment recommendations</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Stock Analysis Completed</h3>
              <span className="text-sm text-white/60">Yesterday, 4:11 PM</span>
            </div>
            <p className="text-white/80 mt-2">AAPL, MSFT, NVDA, GOOGL analysis with buy/sell recommendations</p>
          </div>
        </div>
      </div>
    </div>
  )
}