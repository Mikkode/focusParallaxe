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
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
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
            <div className="flex items-center mr-4">
              <svg className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className={`ml-2 text-xl font-bold ${
                isScrolled || isMenuOpen 
                  ? 'text-slate-900' 
                  : isWhiteBackground ? 'text-slate-900' : 'text-white'
              }`}>Carrot Santé</span>
            </div>
            
            {/* Menu desktop */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(item.page)}
                  className={`text-sm font-medium py-2 cursor-pointer ${
                    currentPage === Math.floor(item.page) 
                      ? 'text-sky-500' 
                      : isScrolled 
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
                    currentPage === Math.floor(item.page) ? 'text-sky-500' : 'text-slate-700 hover:text-sky-500'
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