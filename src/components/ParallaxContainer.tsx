"use client"

import React, { useRef, useEffect, useState } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Hero from './Hero'
import SocialProof from './SocialProof'
import Methodology from './Methodology'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import FinalCTA from './FinalCTA'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ParallaxContainer() {
  const parallax = useRef<IParallax>(null!)
  const [isMobile, setIsMobile] = useState(false)
  const [pages, setPages] = useState(6)
  const [activeSection, setActiveSection] = useState(0)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  // Détecter si l'appareil est mobile et ajuster le nombre de pages
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // Augmenter encore plus le nombre de pages sur mobile pour éviter les chevauchements
      setPages(mobile ? 25 : 6) // Augmentation du nombre de pages pour mobile
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Assurer que la hauteur est correctement définie et suivre la section active
  useEffect(() => {
    if (parallax.current) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 300)
      
      // Mettre à jour la section active lors du défilement
      const handleScroll = () => {
        if (parallax.current) {
          const currentOffset = parallax.current.offset
          
          // Logique améliorée pour déterminer la section active
          let newActiveSection = 0
          
          if (isMobile) {
            if (currentOffset >= 18) newActiveSection = 5
            else if (currentOffset >= 14) newActiveSection = 4
            else if (currentOffset >= 10) newActiveSection = 3
            else if (currentOffset >= 6) newActiveSection = 2
            else if (currentOffset >= 3) newActiveSection = 1
            else newActiveSection = 0
          } else {
            if (currentOffset >= 5) newActiveSection = 5
            else if (currentOffset >= 4) newActiveSection = 4
            else if (currentOffset >= 3) newActiveSection = 3
            else if (currentOffset >= 2) newActiveSection = 2
            else if (currentOffset >= 1) newActiveSection = 1
            else newActiveSection = 0
          }
          
          setActiveSection(newActiveSection)
          
          // Masquer l'indicateur de défilement après un certain défilement
          if (currentOffset > 0.5) {
            setShowScrollIndicator(false)
          } else {
            setShowScrollIndicator(true)
          }
        }
      }
      
      // Utiliser onScroll au lieu d'addEventListener car container n'est pas un élément DOM standard
      parallax.current.onScroll = handleScroll
      
      return () => {
        if (parallax.current) {
          parallax.current.onScroll = undefined
        }
      }
    }
  }, [isMobile])

  // Fonction pour naviguer vers une section
  const navigateToSection = (index: number) => {
    if (parallax.current) {
      // Déterminer l'offset réel en fonction de l'index et du mode mobile
      let targetOffset = index
      if (isMobile) {
        if (index === 1) targetOffset = 3
        else if (index === 2) targetOffset = 6
        else if (index === 3) targetOffset = 10
        else if (index === 4) targetOffset = 14
        else if (index === 5) targetOffset = 18
      }
      
      parallax.current.scrollTo(targetOffset)
      setActiveSection(index)
    }
  }

  // Éléments de navigation avec offsets ajustés
  const navItems = [
    { index: 0, label: "Accueil", color: "from-primary to-primary" },
    { index: 1, label: "Clients", color: "from-blue-500 to-blue-600" },
    { index: 2, label: "Méthode", color: "from-purple-500 to-purple-600" },
    { index: 3, label: "Tarifs", color: "from-green-500 to-green-600" },
    { index: 4, label: "Témoignages", color: "from-yellow-500 to-yellow-600" },
    { index: 5, label: "Contact", color: "from-accent to-accent" }
  ]

  return (
    <div className="w-full h-screen">
      <Parallax 
        ref={parallax} 
        pages={pages} 
        onScroll={e => {
          const currentOffset = e.offset
          
          // Logique améliorée pour déterminer la section active
          let newActiveSection = 0
          
          if (isMobile) {
            if (currentOffset >= 18) newActiveSection = 5
            else if (currentOffset >= 14) newActiveSection = 4
            else if (currentOffset >= 10) newActiveSection = 3
            else if (currentOffset >= 6) newActiveSection = 2
            else if (currentOffset >= 3) newActiveSection = 1
            else newActiveSection = 0
          } else {
            if (currentOffset >= 5) newActiveSection = 5
            else if (currentOffset >= 4) newActiveSection = 4
            else if (currentOffset >= 3) newActiveSection = 3
            else if (currentOffset >= 2) newActiveSection = 2
            else if (currentOffset >= 1) newActiveSection = 1
            else newActiveSection = 0
          }
          
          setActiveSection(newActiveSection)
          
          // Masquer l'indicateur de défilement après un certain défilement
          if (currentOffset > 0.5) {
            setShowScrollIndicator(false)
          } else {
            setShowScrollIndicator(true)
          }
        }}
      >
        {/* Arrière-plan principal avec dégradé et éléments visuels pour rendre le parallax visible */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={pages}
          style={{
            background: 'linear-gradient(to bottom, #0f0f12, #1a1a24)',
            zIndex: -10
          }}
        />
        
        {/* Éléments de background pour rendre le parallax visible */}
        <ParallaxLayer offset={0.3} speed={0.5} style={{ zIndex: -5 }}>
          <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={1.5} speed={0.8} style={{ zIndex: -5 }}>
          <div className="absolute top-[40%] left-[15%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={2.8} speed={0.2} style={{ zIndex: -5 }}>
          <div className="absolute top-[30%] right-[20%] w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={3.6} speed={0.6} style={{ zIndex: -5 }}>
          <div className="absolute top-[50%] left-[25%] w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={4.2} speed={0.4} style={{ zIndex: -5 }}>
          <div className="absolute top-[20%] right-[15%] w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={5.5} speed={0.7} style={{ zIndex: -5 }}>
          <div className="absolute top-[40%] left-[10%] w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </ParallaxLayer>
        
        {/* Particules flottantes pour effet de profondeur */}
        <ParallaxLayer offset={0} speed={0.3} style={{ zIndex: -4 }}>
          <div className="absolute top-[15%] left-[20%] w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="absolute top-[25%] right-[30%] w-3 h-3 bg-white/10 rounded-full"></div>
          <div className="absolute top-[60%] left-[40%] w-4 h-4 bg-white/15 rounded-full"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={2} speed={0.5} style={{ zIndex: -4 }}>
          <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="absolute top-[55%] left-[15%] w-3 h-3 bg-white/10 rounded-full"></div>
          <div className="absolute top-[75%] right-[40%] w-4 h-4 bg-white/15 rounded-full"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={4} speed={0.4} style={{ zIndex: -4 }}>
          <div className="absolute top-[45%] left-[35%] w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="absolute top-[65%] right-[20%] w-3 h-3 bg-white/10 rounded-full"></div>
          <div className="absolute top-[15%] left-[50%] w-4 h-4 bg-white/15 rounded-full"></div>
        </ParallaxLayer>
        
        {/* Indicateur de défilement */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: showScrollIndicator ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingBottom: '2rem',
            zIndex: 5
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-white/70 text-sm mb-2">Défiler pour explorer</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="bg-white/20 rounded-full p-2 backdrop-blur-sm"
            >
              <ChevronDown className="h-5 w-5 text-white" />
            </motion.div>
          </motion.div>
        </ParallaxLayer>
        
        {/* Section Hero */}
        <ParallaxLayer offset={0} speed={0.1} style={{ zIndex: 1 }}>
          <Hero />
        </ParallaxLayer>
        
        {/* Section Social Proof - Ajuster l'offset pour mobile */}
        <ParallaxLayer 
          offset={isMobile ? 3 : 1} 
          speed={0.1}
          style={{ zIndex: 1 }}
        >
          <SocialProof />
        </ParallaxLayer>
        
        {/* Section Methodology - Ajuster l'offset pour mobile */}
        <ParallaxLayer 
          offset={isMobile ? 6 : 2} 
          speed={0.1}
          style={{ zIndex: 1 }}
        >
          <Methodology />
        </ParallaxLayer>
        
        {/* Section Pricing - Ajuster l'offset pour mobile */}
        <ParallaxLayer 
          offset={isMobile ? 10 : 3} 
          speed={0.1}
          style={{ zIndex: 1 }}
        >
          <Pricing />
        </ParallaxLayer>
        
        {/* Section Testimonials - Ajuster l'offset pour mobile */}
        <ParallaxLayer 
          offset={isMobile ? 14 : 4} 
          speed={0.1}
          style={{ zIndex: 1 }}
        >
          <Testimonials />
        </ParallaxLayer>
        
        {/* Section Final CTA - Ajuster l'offset pour mobile */}
        <ParallaxLayer 
          offset={isMobile ? 18 : 5} 
          speed={0.1}
          style={{ zIndex: 1 }}
        >
          <FinalCTA />
        </ParallaxLayer>
        
        {/* Navigation latérale (desktop uniquement) */}
        <ParallaxLayer
          sticky={{ start: 0, end: pages - 1 }}
          style={{
            width: '200px',
            right: '2rem',
            left: 'auto',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            display: isMobile ? 'none' : 'block'
          }}
        >
          <div className="h-full flex flex-col items-start justify-center gap-4 relative">
            {/* Ligne verticale de navigation */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10 rounded-full"></div>
            
            {/* Points de navigation */}
            {navItems.map((item, index) => (
              <div 
                key={item.index}
                className="flex items-center cursor-pointer group relative z-10 w-full"
                onClick={() => navigateToSection(item.index)}
              >
                {/* Indicateur actif */}
                {activeSection === item.index && (
                  <motion.div 
                    className={`absolute left-0 w-full h-10 bg-gradient-to-r ${item.color} rounded-lg -z-10 opacity-90`}
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Point */}
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeSection === item.index 
                      ? "bg-white shadow-lg" 
                      : "bg-white/10 group-hover:bg-white/20"
                  }`}
                >
                  <div 
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeSection === item.index 
                        ? `bg-gradient-to-r ${item.color}` 
                        : "bg-white/50"
                    }`}
                  />
                </div>
                
                {/* Label */}
                <span 
                  className={`ml-2 text-sm transition-all duration-300 ${
                    activeSection === item.index 
                      ? "text-white font-medium" 
                      : "text-white/50 group-hover:text-white/80"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </ParallaxLayer>
        
        {/* Navigation mobile simplifiée */}
        <ParallaxLayer
          sticky={{ start: 0, end: pages - 1 }}
          style={{ 
            zIndex: 100,
            display: isMobile ? 'block' : 'none'
          }}
        >
          <div className="fixed bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md rounded-full border border-white/10 p-2 shadow-lg">
            <div className="flex justify-around">
              {navItems.map((item) => (
                <button
                  key={item.index}
                  onClick={() => navigateToSection(item.index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    activeSection === item.index 
                      ? `bg-gradient-to-r ${item.color} text-white shadow-md` 
                      : 'bg-white/10 text-white/60'
                  }`}
                >
                  <span className="text-xs font-medium">
                    {item.index === 0 ? 'H' : item.label.charAt(0)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}