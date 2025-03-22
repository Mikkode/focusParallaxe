"use client"

import { useRef, useState, useEffect } from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  
  const sections = useRef<HTMLDivElement[]>([])
  
  // Observer pour détecter la section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            if (!isNaN(index)) {
              setCurrentSection(index)
            }
          }
        })
      },
      { threshold: 0.3 }
    )
    
    // Copier la référence actuelle pour éviter les problèmes de nettoyage
    const currentSections = sections.current
    
    currentSections.forEach((section) => {
      if (section) observer.observe(section)
    })
    
    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])
  
  const scrollTo = (index: number) => {
    sections.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }
  
  // Fonction pour stocker les références des sections
  const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) sections.current[index] = el
  }
  
  return (
    <main className="w-full">
      <Navigation currentPage={currentSection} scrollTo={scrollTo} />
      
      <div 
        ref={setSectionRef(0)} 
        data-index={0}
        className="min-h-screen relative"
      >
        <HeroSection scrollTo={() => scrollTo(1)} />
      </div>
      
      <div 
        ref={setSectionRef(1)} 
        data-index={1}
        className="min-h-screen bg-gradient-to-b from-white to-sky-50 py-16"
      >
        <ServicesSection />
      </div>
      
      <div 
        ref={setSectionRef(2)} 
        data-index={2}
        className="min-h-screen bg-gradient-to-b from-sky-50 to-slate-50 py-16"
      >
        <PricingSection />
      </div>
      
      <div 
        ref={setSectionRef(3)} 
        data-index={3}
        className="min-h-screen bg-white py-16"
      >
        <TestimonialsSection />
      </div>
      
      <div 
        ref={setSectionRef(4)} 
        data-index={4}
        className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-16"
      >
        <ContactSection />
      </div>
      
      {/* Bouton flottant pour remonter en haut */}
      <button 
        onClick={() => scrollTo(0)}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-600 transition-colors z-40 ${
          currentSection > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300`}
        aria-label="Retour en haut"
      >
        ↑
      </button>
    </main>
  )
}
