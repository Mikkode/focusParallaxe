"use client"

import { useState, useEffect } from 'react'

interface NavigationProps {
  currentPage: number
  scrollTo: (page: number) => void
}

export const Navigation = ({ currentPage, scrollTo }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Détection du défilement pour changer l'apparence du menu
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Accueil', page: 0 },
    { label: 'Services', page: 1 },
    { label: 'Tarifs', page: 2 },
    { label: 'Témoignages', page: 3 },
    { label: 'Contact', page: 4 }
  ]

  // Déterminer si nous sommes sur une section à fond blanc (pages 1 et 3)
  const isWhiteBackground = currentPage === 1 || currentPage === 3

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen 
        ? 'bg-white shadow-md py-2' 
        : 'bg-transparent backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg className="h-10 w-10 text-sky-500" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z" stroke="currentColor" strokeWidth="2" />
              <path d="M20 12V20L26 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className={`ml-2 text-xl font-bold ${
              isScrolled || isMenuOpen 
                ? 'text-slate-900' 
                : isWhiteBackground ? 'text-slate-900' : 'text-white'
            }`}>VitaSanté</span>
          </div>
          
          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollTo(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page 
                    ? 'text-sky-500' 
                    : isScrolled || isMenuOpen 
                      ? 'text-slate-700 hover:text-sky-500' 
                      : isWhiteBackground 
                        ? 'text-slate-700 hover:text-sky-500' 
                        : 'text-white hover:text-sky-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Bouton menu mobile */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <svg className={`w-6 h-6 ${
              isScrolled || isMenuOpen 
                ? 'text-slate-900' 
                : isWhiteBackground ? 'text-slate-900' : 'text-white'
            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollTo(item.page)
                    setIsMenuOpen(false)
                  }}
                  className={`text-sm font-medium py-2 ${
                    currentPage === item.page ? 'text-sky-500' : 'text-slate-700 hover:text-sky-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 