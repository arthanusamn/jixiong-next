'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Dashboard', href: '/', icon: '🏠' },
  { name: 'Portfolio', href: '/portfolio', icon: '📈' },
  { name: 'Learning', href: '/learning', icon: '📚' },
  { name: 'Projects', href: '/projects', icon: '🚀' },
  { name: 'Goals', href: '/goals', icon: '🎯' },
  { name: 'Rocky', href: '/rocky', icon: '🎵' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-3xl">🎵</div>
          <div>
            <h1 className="text-2xl font-bold">Jixiong's Digital Hub</h1>
            <p className="text-white/70 text-sm">Personal website for learning, projects & AI assistant</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                pathname === item.href
                  ? 'bg-white/20 text-white'
                  : 'hover:bg-white/10 text-white/80'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mt-4 md:hidden grid grid-cols-2 gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-2 p-3 rounded-lg ${
                pathname === item.href
                  ? 'bg-white/20 text-white'
                  : 'hover:bg-white/10 text-white/80'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}