'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Define the structure of our website content for search
const websiteContent = [
  {
    id: 1,
    title: 'Dashboard',
    description: 'Main dashboard with overview of all activities, projects, and learning progress.',
    url: '/',
    category: 'Home',
    tags: ['dashboard', 'overview', 'home']
  },
  {
    id: 2,
    title: 'Portfolio',
    description: 'Showcase of projects, skills, and professional experience.',
    url: '/portfolio',
    category: 'Professional',
    tags: ['portfolio', 'projects', 'skills', 'experience']
  },
  {
    id: 3,
    title: 'Learning',
    description: 'AI learning resources, study plans, and educational content.',
    url: '/learning',
    category: 'Education',
    tags: ['learning', 'ai', 'education', 'study', 'resources']
  },
  {
    id: 4,
    title: 'Projects',
    description: 'Active and completed projects with detailed descriptions and status.',
    url: '/projects',
    category: 'Projects',
    tags: ['projects', 'development', 'coding', 'work']
  },
  {
    id: 5,
    title: 'Goals',
    description: 'Personal and professional goals with progress tracking.',
    url: '/goals',
    category: 'Personal',
    tags: ['goals', 'objectives', 'targets', 'progress']
  },
  {
    id: 6,
    title: 'Rocky',
    description: 'AI assistant integration and capabilities.',
    url: '/rocky',
    category: 'AI',
    tags: ['ai', 'assistant', 'rocky', 'automation']
  },
  {
    id: 7,
    title: 'Actions',
    description: 'Action items, tasks, and to-do list management.',
    url: '/actions',
    category: 'Productivity',
    tags: ['actions', 'tasks', 'todo', 'productivity']
  }
]

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  // Search function
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    const lowerQuery = searchQuery.toLowerCase()
    const filteredResults = websiteContent.filter(item => {
      return (
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
        item.category.toLowerCase().includes(lowerQuery)
      )
    })

    setResults(filteredResults)
  }

  // Handle search input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    performSearch(value)
    setIsOpen(value.length > 0)
  }

  // Handle result click
  const handleResultClick = (url: string) => {
    router.push(url)
    setQuery('')
    setResults([])
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.search-container')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className="search-container relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          placeholder="Search website..."
          className="w-full md:w-64 px-4 py-2.5 pl-10 bg-gray-800/30 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </div>
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setResults([])
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full md:w-96 bg-gray-800/95 backdrop-blur-lg border border-gray-700 rounded-lg shadow-2xl z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs text-gray-400 px-3 py-2">
              Found {results.length} result{results.length !== 1 ? 's' : ''}
            </div>
            {results.map((result) => (
              <button
                key={result.id}
                onClick={() => handleResultClick(result.url)}
                className="w-full text-left p-3 hover:bg-gray-700/50 rounded-lg transition-colors group"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                    <span className="text-lg">{result.category === 'Home' ? '🏠' : 
                                             result.category === 'Professional' ? '📈' :
                                             result.category === 'Education' ? '📚' :
                                             result.category === 'Projects' ? '🚀' :
                                             result.category === 'Personal' ? '🎯' :
                                             result.category === 'AI' ? '🎵' : '⚡'}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-100 group-hover:text-white transition-colors">
                        {result.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-gray-700/50 rounded text-gray-300">
                        {result.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                      {result.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {result.tags.slice(0, 3).map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-0.5 bg-gray-700/30 rounded text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {isOpen && query.length > 0 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full md:w-64 bg-gray-800/95 backdrop-blur-lg border border-gray-700 rounded-lg shadow-2xl z-50 p-4">
          <div className="text-center">
            <div className="text-2xl mb-2">🔍</div>
            <p className="text-gray-300">No results found for "{query}"</p>
            <p className="text-sm text-gray-400 mt-1">Try different keywords</p>
          </div>
        </div>
      )}
    </div>
  )
}