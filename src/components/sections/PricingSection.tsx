"use client"

import { useEffect, useRef } from 'react'

export const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Animation d'apparition au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )
    
    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    animatedElements?.forEach((el) => observer.observe(el))
    
    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const plans = [
    {
      name: "Essentiel",
      price: "19",
      description: "Idéal pour les individus souhaitant un suivi médical de base.",
      features: [
        "Consultations illimitées",
        "Suivi médical de base",
        "Accès à la plateforme",
        "Support par email"
      ]
    },
    {
      name: "Premium",
      price: "49",
      description: "Notre offre la plus populaire pour un suivi médical complet.",
      features: [
        "Tout ce qui est inclus dans Essentiel",
        "Consultations prioritaires",
        "Suivi médical avancé",
        "Bilans de santé trimestriels",
        "Support téléphonique 24/7"
      ],
      highlighted: true
    },
    {
      name: "Famille",
      price: "79",
      description: "La solution idéale pour prendre soin de toute la famille.",
      features: [
        "Tout ce qui est inclus dans Premium",
        "Jusqu'à 5 membres",
        "Consultations illimitées",
        "Bilans de santé personnalisés",
        "Réduction sur les services additionnels"
      ]
    }
  ]

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
      {/* Éléments décoratifs */}
      <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-gradient-radial from-blue-100 to-transparent opacity-40 blur-lg pointer-events-none"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 rounded-full bg-gradient-radial from-sky-100 to-transparent opacity-30 blur-lg pointer-events-none"></div>
      
      <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 delay-100">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos Forfaits</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Des solutions adaptées à vos besoins et à votre budget. Tous nos forfaits incluent l&apos;accès à notre plateforme de suivi médical.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`
              animate-on-scroll opacity-0 transform translate-y-4
              transition-all duration-500 hover:-translate-y-2 hover:shadow-lg
              ${index === 0 ? 'delay-200' : index === 1 ? 'delay-300' : 'delay-400'}
              ${
                plan.highlighted 
                  ? "p-8 rounded-xl shadow-md bg-gradient-to-br from-sky-50 to-white border-2 border-sky-500 flex flex-col h-full relative" 
                  : "p-8 rounded-xl shadow-sm bg-white border border-slate-100 flex flex-col h-full"
              }
            `}
          >
            {plan.highlighted && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Populaire
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{plan.name}</h3>
              <p className="text-slate-600 mb-4">{plan.description}</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-slate-900">{plan.price}€</span>
                <span className="text-slate-500 ml-1">/mois</span>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              className={`${
                plan.highlighted
                  ? "px-6 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-all duration-300 w-full"
                  : "px-6 py-3 bg-white text-sky-500 border border-sky-500 font-medium rounded-lg hover:bg-sky-50 transition-all duration-300 w-full"
              }`}
            >
              Choisir ce forfait
            </button>
          </div>
        ))}
      </div>
    </div>
  )
} 