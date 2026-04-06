import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jixiong - Personal Digital Hub',
  description: 'Your complete personal website for learning, projects, portfolio, and AI assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-[#4361ee] via-[#764ba2] to-[#f72585] text-white min-h-screen`}>
        <div className="container mx-auto px-4 py-8">
          <Navigation />
          <main className="mt-8">
            {children}
          </main>
          <footer className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
            <p>© {new Date().getFullYear()} Jixiong's Digital Hub. Powered by Rocky Assistant 🎵</p>
            <p className="mt-2 text-sm">Built with Next.js, Tailwind CSS, and deployed on Vercel</p>
          </footer>
        </div>
      </body>
    </html>
  )
}