"use client"

import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useRef, useState, useEffect } from 'react'
import type { IParallax } from '@react-spring/parallax'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Navigation } from '@/components/Navigation'

// Définition des styles CSS - palette moderne et minimaliste
const styles = {
  background: 'bg-slate-50 w-full h-full',
  heading: 'text-slate-900 text-5xl md:text-6xl font-bold tracking-tight',
  subheading: 'text-sky-600 text-2xl md:text-3xl font-medium',
  paragraph: 'text-slate-600 text-lg leading-relaxed max-w-2xl',
  card: 'p-6 rounded-xl shadow-sm bg-white border border-slate-100',
  button: 'px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors',
  secondaryButton: 'px-6 py-3 bg-white text-sky-500 border border-sky-500 font-medium rounded-lg hover:bg-sky-50 transition-colors',
  section: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24',
  pricingCard: 'p-8 rounded-xl shadow-sm bg-white border border-slate-100 flex flex-col h-full',
  pricingHighlight: 'p-8 rounded-xl shadow-md bg-gradient-to-br from-sky-50 to-white border-2 border-sky-500 flex flex-col h-full relative',
}

// Helper pour centrer les éléments
const alignCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

// URLs d'images (utilisation d'images de placeholder pour l'exemple)
const imageUrl = (name: string) => `https://images.unsplash.com/photo-${name}?auto=format&fit=crop&w=1200`

export default function Home() {
  const parallaxRef = useRef<IParallax>(null!)
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Détection du mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Mise à jour de la page active lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollTop = parallaxRef.current.current / parallaxRef.current.space
        setCurrentPage(Math.round(scrollTop))
      }
    }

    if (parallaxRef.current) {
      parallaxRef.current.container.current?.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (parallaxRef.current) {
        parallaxRef.current.container.current?.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const scrollTo = (page: number) => {
    parallaxRef.current.scrollTo(page)
    setCurrentPage(page)
  }
  
  return (
    <main className="w-full h-screen">
      <Navigation currentPage={currentPage} scrollTo={scrollTo} />
      
      <Parallax ref={parallaxRef} pages={isMobile ? 6 : 5}>
        {/* Section Héro */}
        <ParallaxLayer offset={0} speed={0.1} factor={1}>
          <HeroSection scrollTo={() => scrollTo(1)} />
        </ParallaxLayer>

        {/* Éléments décoratifs */}
        <ParallaxLayer offset={0.85} speed={0.3} className="pointer-events-none">
          <div className="absolute right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 opacity-60 blur-xl"></div>
          <div className="absolute left-[15%] w-48 h-48 rounded-full bg-gradient-to-tr from-slate-100 to-sky-100 opacity-60 blur-xl"></div>
        </ParallaxLayer>

        {/* Section Services */}
        <ParallaxLayer offset={1} speed={0.2} factor={1} className="bg-white">
          <ServicesSection />
        </ParallaxLayer>

        {/* Section Tarification */}
        <ParallaxLayer offset={2} speed={0.1} factor={isMobile ? 1.5 : 1} className="bg-slate-50">
          <PricingSection />
        </ParallaxLayer>

        {/* Section Témoignages */}
        <ParallaxLayer offset={isMobile ? 3.5 : 3} speed={0.1} factor={1} className="bg-white">
          <TestimonialsSection />
        </ParallaxLayer>

        {/* Témoignage 1 avec effet parallaxe */}
        <ParallaxLayer offset={isMobile ? 3.5 : 3} speed={0.3} className="pointer-events-none">
          <div className="ml-[5%] mt-[25%] md:mt-[5%] max-w-md">
            {/* Le contenu est dans TestimonialsSection */}
          </div>
        </ParallaxLayer>
        
        {/* Témoignage 2 avec effet parallaxe */}
        <ParallaxLayer offset={isMobile ? 3.5 : 3} speed={0.5} className="pointer-events-none">
          <div className="ml-[5%] md:ml-[55%] mt-[65%] md:mt-[15%] max-w-md">
            {/* Le contenu est dans TestimonialsSection */}
          </div>
        </ParallaxLayer>

        {/* Section Contact */}
        <ParallaxLayer offset={isMobile ? 4.5 : 4} speed={0.1} factor={1} className="bg-slate-900">
          <ContactSection />
        </ParallaxLayer>

        {/* Bouton flottant pour remonter en haut */}
        <ParallaxLayer sticky={{ start: 0.5, end: isMobile ? 6 : 5 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pointerEvents: 'none' }}>
          <div className="mr-8 mb-8 pointer-events-auto">
            <button 
              onClick={() => scrollTo(0)}
              className="p-3 rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-600 transition-colors"
              aria-label="Retour en haut"
            >
              ↑
            </button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}
