'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-9xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        404
      </div>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-xl text-white/80 mb-8 max-w-2xl">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. 
        Don&apos;t worry—here are some helpful links to get you back on track.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Link
          href="/"
          className="p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
        >
          <div className="text-2xl mb-2">🏠</div>
          <h3 className="font-bold text-lg mb-1">Dashboard</h3>
          <p className="text-white/80 text-sm">Return to the main dashboard</p>
        </Link>
        
        <Link
          href="/portfolio"
          className="p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
        >
          <div className="text-2xl mb-2">📈</div>
          <h3 className="font-bold text-lg mb-1">Portfolio</h3>
          <p className="text-white/80 text-sm">View investment portfolio</p>
        </Link>
        
        <Link
          href="/learning"
          className="p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
        >
          <div className="text-2xl mb-2">📚</div>
          <h3 className="font-bold text-lg mb-1">Learning Center</h3>
          <p className="text-white/80 text-sm">Access learning materials</p>
        </Link>
        
        <Link
          href="/projects"
          className="p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
        >
          <div className="text-2xl mb-2">🚀</div>
          <h3 className="font-bold text-lg mb-1">Projects</h3>
          <p className="text-white/80 text-sm">View side projects</p>
        </Link>
        
        <Link
          href="/goals"
          className="p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
        >
          <div className="text-2xl mb-2">🎯</div>
          <h3 className="font-bold text-lg mb-1">Goals</h3>
          <p className="text-white/80 text-sm">Track progress and goals</p>
        </Link>
        
        <Link
          href="/rocky"
          className="p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
        >
          <div className="text-2xl mb-2">🎵</div>
          <h3 className="font-bold text-lg mb-1">Rocky Assistant</h3>
          <p className="text-white/80 text-sm">AI assistant status</p>
        </Link>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/actions"
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-bold transition-all"
        >
          ⚡ Quick Actions
        </Link>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-bold transition-colors"
        >
          ← Go Back
        </button>
      </div>
    </div>
  )
}