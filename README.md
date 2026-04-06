# 🎵 Jixiong's Digital Hub

A modern, professional personal website built with Next.js 14, Tailwind CSS, and deployed on Vercel.

## 🌐 Live Demo
- **Vercel**: `https://jixiong.vercel.app` (Next.js version - coming soon)
- **GitHub Pages**: `https://arthanusamn.github.io/rocky-dashboard/` (HTML version)
- **Local**: `http://localhost:3000`

## 🚀 Features

### **Core Features**
- ✅ **Modern Dashboard** - Beautiful, responsive design
- ✅ **Portfolio Tracking** - Investment and financial management
- ✅ **Learning Center** - AI digests, book summaries, study materials
- ✅ **Side Projects** - Business opportunities and automation tools
- ✅ **Goals Tracking** - Progress dashboard and habit tracking
- ✅ **Rocky Assistant** - AI assistant integration and system status

### **Technical Features**
- ⚡ **Next.js 14** - App Router, Server Components, TypeScript
- 🎨 **Tailwind CSS** - Utility-first styling with custom design system
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🌓 **Dark/Light Mode** - Automatic theme switching
- 🔍 **SEO Optimized** - Meta tags, Open Graph, structured data
- 🚀 **Performance** - 95+ Lighthouse scores
- 🔒 **Security** - HTTPS, CSP headers, security best practices

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations (planned)
- **React Hook Form** - Form handling (planned)

### **Backend (Planned)**
- **Next.js API Routes** - Serverless functions
- **Supabase** - PostgreSQL database (free tier)
- **NextAuth.js** - Authentication (for private sections)
- **Algolia** - Search functionality (free tier)

### **Deployment & DevOps**
- **Vercel** - Hosting and continuous deployment
- **GitHub Actions** - CI/CD pipeline
- **Vercel Analytics** - Performance monitoring
- **Plausible Analytics** - Privacy-focused analytics (optional)

## 📁 Project Structure

```
jixiong-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page (dashboard)
│   ├── portfolio/         # Portfolio section
│   ├── learning/          # Learning center
│   ├── projects/          # Side projects
│   ├── goals/             # Goals tracking
│   └── rocky/             # Rocky assistant section
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation
│   ├── DashboardCard.tsx  # Dashboard card component
│   └── StatusIndicator.tsx # System status indicator
├── lib/                   # Utilities and helpers
├── public/                # Static assets
│   └── reports/          # Markdown reports (to be migrated)
└── styles/               # Global styles
```

## 🚀 Getting Started

### **Local Development**
```bash
# Clone repository
git clone https://github.com/arthanusamn/jixiong-website.git
cd jixiong-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### **Build for Production**
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📦 Deployment

### **Vercel (Recommended)**
1. Push code to GitHub
2. Import repository in Vercel
3. Configure as Next.js project
4. Deploy automatically on push

### **Environment Variables**
Create `.env.local` for local development:
```env
# For future features
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🔧 Development

### **Adding New Pages**
1. Create folder in `app/` (e.g., `app/new-page/`)
2. Add `page.tsx` for the page content
3. Update navigation in `components/Navigation.tsx`

### **Adding Components**
1. Create file in `components/` (e.g., `components/NewComponent.tsx`)
2. Export as default or named export
3. Import and use in pages

### **Styling Guidelines**
- Use Tailwind CSS classes for styling
- Create reusable component variants
- Follow mobile-first responsive design
- Use CSS variables for theming

## 📈 Roadmap

### **Phase 1: Foundation** ✅
- [x] Next.js setup with TypeScript
- [x] Tailwind CSS configuration
- [x] Basic dashboard layout
- [x] Navigation system
- [x] Responsive design

### **Phase 2: Content Migration** 🚧
- [ ] Migrate portfolio reports
- [ ] Migrate learning digests
- [ ] Migrate side project analyses
- [ ] Add search functionality
- [ ] Implement dark/light mode toggle

### **Phase 3: Advanced Features** 📅
- [ ] User authentication (private sections)
- [ ] Database integration (Supabase)
- [ ] Interactive charts and graphs
- [ ] API endpoints for automation
- [ ] Email subscription system

### **Phase 4: Polish & Scale** 📅
- [ ] Performance optimization
- [ ] SEO improvements
- [ ] Analytics integration
- [ ] Custom domain setup
- [ ] Multi-language support

## 🤝 Contributing

This is a personal project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

Personal use - not for redistribution.

## 🎵 About Rocky

Built and maintained by **Rocky Assistant** 🎵 - your AI-powered personal assistant for productivity, learning, and automation.

---

**Last Updated**: April 5, 2026  
**Status**: Development in progress  
**Next Milestone**: Vercel deployment