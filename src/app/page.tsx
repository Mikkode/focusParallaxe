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

    const currentParallax = parallaxRef.current
    if (currentParallax && currentParallax.container.current) {
      currentParallax.container.current.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (currentParallax && currentParallax.container.current) {
        currentParallax.container.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const scrollTo = (page: number) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(page)
      setCurrentPage(page)
    }
  }
  
  return (
    <main className="w-full h-screen">
      <Navigation currentPage={currentPage} scrollTo={scrollTo} />
      
      <Parallax ref={parallaxRef} pages={isMobile ? 6 : 5}>
        {/* Section Héro */}
        <ParallaxLayer offset={0} speed={0.1} factor={1}>
          <HeroSection scrollTo={() => scrollTo(1)} />
        </ParallaxLayer>

        {/* Éléments décoratifs flottants */}
        <ParallaxLayer offset={0} speed={0.2} className="pointer-events-none">
          <div className="absolute right-[15%] top-[30%] w-24 h-24 rounded-full bg-sky-400 opacity-10 blur-xl"></div>
          <div className="absolute left-[10%] top-[40%] w-32 h-32 rounded-full bg-blue-300 opacity-10 blur-xl"></div>
        </ParallaxLayer>

        {/* Éléments décoratifs avec effet parallaxe */}
        <ParallaxLayer offset={0.85} speed={0.3} className="pointer-events-none">
          <div className="absolute right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 opacity-60 blur-xl"></div>
          <div className="absolute left-[15%] w-48 h-48 rounded-full bg-gradient-to-tr from-slate-100 to-sky-100 opacity-60 blur-xl"></div>
        </ParallaxLayer>

        {/* Particules flottantes médicales */}
        <ParallaxLayer offset={0.1} speed={0.8} className="pointer-events-none">
          <div className="absolute left-[20%] top-[20%] w-6 h-6 rounded-full border-2 border-sky-200 opacity-40 animate-float-slow"></div>
          <div className="absolute right-[25%] top-[35%] w-4 h-4 rounded-full border-2 border-sky-300 opacity-30 animate-float-medium"></div>
          <div className="absolute left-[40%] top-[60%] w-5 h-5 rounded-full border-2 border-blue-200 opacity-40 animate-float-fast"></div>
        </ParallaxLayer>

        {/* Section Services avec fond légèrement différent */}
        <ParallaxLayer offset={1} speed={0.2} factor={1} className="bg-gradient-to-b from-white to-sky-50">
          <ServicesSection />
        </ParallaxLayer>

        {/* Éléments décoratifs pour la section Services */}
        <ParallaxLayer offset={1.1} speed={0.4} className="pointer-events-none">
          <div className="absolute right-[5%] w-32 h-32 rounded-full bg-blue-100 opacity-30 blur-lg"></div>
          <div className="absolute left-[8%] top-[30%] w-24 h-24 rounded-full bg-sky-100 opacity-30 blur-lg"></div>
        </ParallaxLayer>

        {/* Section Tarification */}
        <ParallaxLayer offset={2} speed={0.1} factor={isMobile ? 1.5 : 1} className="bg-gradient-to-b from-sky-50 to-slate-50">
          <PricingSection />
        </ParallaxLayer>

        {/* Éléments décoratifs pour la section Tarification */}
        <ParallaxLayer offset={2.2} speed={0.3} className="pointer-events-none">
          <div className="absolute right-[15%] w-40 h-40 rounded-full bg-gradient-radial from-sky-100 to-transparent opacity-40 blur-xl"></div>
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

        {/* Section Contact avec fond dégradé */}
        <ParallaxLayer offset={isMobile ? 4.5 : 4} speed={0.1} factor={1} className="bg-gradient-to-b from-slate-900 to-slate-800">
          <ContactSection />
        </ParallaxLayer>

        {/* Éléments décoratifs pour la section Contact */}
        <ParallaxLayer offset={isMobile ? 4.6 : 4.1} speed={0.4} className="pointer-events-none">
          <div className="absolute right-[10%] top-[20%] w-48 h-48 rounded-full bg-sky-900 opacity-20 blur-xl"></div>
          <div className="absolute left-[5%] top-[40%] w-32 h-32 rounded-full bg-blue-900 opacity-20 blur-xl"></div>
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
