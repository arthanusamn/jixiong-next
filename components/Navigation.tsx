'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchBar from './SearchBar'

const navItems = [
  { name: 'Dashboard', href: '/', icon: '🏠' },
  { name: 'Portfolio', href: '/portfolio', icon: '📈' },
  { name: 'Agents', href: '/agents', icon: '🤖' },
  { name: 'Patterns', href: '/patterns', icon: '📊' },
  { name: 'Deals', href: '/deals', icon: '🏷️' },
  { name: 'Learning', href: '/learning', icon: '📚' },
  { name: 'Projects', href: '/projects', icon: '🚀' },
  { name: 'Goals', href: '/goals', icon: '🎯' },
  { name: 'Rocky', href: '/rocky', icon: '🎵' },
  { name: 'Actions', href: '/actions', icon: '⚡' },
  { name: 'BizBot', href: '/bizbot', icon: '🤖' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-6 z-50 mb-8">
      <div className="card p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-3xl animate-pulse">🎵</div>
            <div>
              <Link href="/" className="block">
                <h1 className="text-2xl font-bold gradient-text">Jixiong</h1>
                <p className="text-gray-400 text-sm mt-0.5">Digital Hub for Learning, Projects & AI</p>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="mr-4">
              <SearchBar />
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all text-sm font-medium ${
                  pathname === item.href
                    ? 'bg-gray-800/50 text-white'
                    : 'text-gray-300 hover:bg-gray-800/30 hover:text-white'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/30 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {isMenuOpen ? (
                <span className="text-xl">✕</span>
              ) : (
                <span className="text-xl">☰</span>
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden pt-4 border-t border-gray-700/50">
            <div className="mb-4">
              <SearchBar />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-gray-800/50 text-white'
                      : 'text-gray-300 hover:bg-gray-800/30'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}