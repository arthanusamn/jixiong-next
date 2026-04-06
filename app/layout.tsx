import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jixiong — Digital Hub for Learning, Projects & AI',
  description: 'Personal platform for AI learning, portfolio tracking, project management, and AI assistant integration. Built with Next.js and Tailwind CSS.',
  keywords: ['AI learning', 'portfolio', 'projects', 'personal website', 'Next.js', 'Tailwind CSS'],
  authors: [{ name: 'Jixiong' }],
  creator: 'Jixiong',
  publisher: 'Jixiong',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen antialiased">
        <div className="min-h-screen flex flex-col">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow">
            <Navigation />
            <main className="mt-8 mb-12">
              {children}
            </main>
          </div>
          <footer className="mt-auto py-8 border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-center md:text-left">
                  <p className="text-gray-400">© {new Date().getFullYear()} Jixiong's Digital Hub</p>
                  <p className="text-sm text-gray-500 mt-1">Powered by Rocky Assistant 🎵</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm text-gray-500">Built with Next.js, Tailwind CSS • Deployed on Vercel</p>
                  <p className="text-xs text-gray-600 mt-1">Inspired by karpathy.ai, huyenchip.com, eugeneyan.com</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}