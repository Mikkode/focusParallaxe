"use client"

import Image from 'next/image'

interface HeroSectionProps {
  scrollTo: () => void
}

export const HeroSection = ({ scrollTo }: HeroSectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between min-h-screen">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Votre santé, <span className="text-sky-400">notre priorité</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
            Nous combinons expertise médicale et technologie de pointe pour vous offrir des soins personnalisés, accessibles et efficaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={scrollTo}
              className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors"
            >
              Découvrir nos services
            </button>
            <button className="px-6 py-3 bg-transparent text-white border border-white hover:bg-white/10 font-medium rounded-lg transition-colors">
              Prendre rendez-vous
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="w-full h-[300px] md:h-[500px] relative">
            <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="200" fill="url(#paint0_radial)" />
              <path d="M250 150C194.772 150 150 194.772 150 250C150 305.228 194.772 350 250 350C305.228 350 350 305.228 350 250C350 194.772 305.228 150 250 150Z" fill="#0EA5E9" fillOpacity="0.7" />
              <path d="M250 180V250L300 280" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(200)">
                  <stop stopColor="#0EA5E9" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#0EA5E9" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-sky-500/10 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
} 