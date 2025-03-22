"use client"

import { useEffect, useRef } from 'react'

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
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

  const services = [
    {
      title: "Téléconsultation",
      description: "Consultez nos médecins spécialistes depuis le confort de votre domicile, avec un suivi médical de qualité.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Suivi personnalisé",
      description: "Un programme personnalisé pour anticiper et prévenir les problèmes de santé avant qu'ils n'apparaissent.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Tableau de bord santé",
      description: "Suivez vos progrès et vos indicateurs de santé en temps réel grâce à notre plateforme sécurisée.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  const features = [
    {
      title: "Accessibilité",
      description: "Des soins accessibles partout, à tout moment, sans contrainte géographique.",
      icon: (
        <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Prévention",
      description: "Une approche proactive pour prévenir les problèmes de santé avant qu'ils n'apparaissent.",
      icon: (
        <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "Personnalisation",
      description: "Des soins adaptés à vos besoins spécifiques et à votre historique médical.",
      icon: (
        <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Technologie",
      description: "Des outils numériques de pointe pour un suivi médical optimal et sécurisé.",
      icon: (
        <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Confidentialité",
      description: "Protection maximale de vos données de santé avec des systèmes sécurisés.",
      icon: (
        <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Expertise",
      description: "Une équipe de professionnels de santé qualifiés et expérimentés à votre service.",
      icon: (
        <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ]

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 delay-100">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos Services</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Découvrez comment Carrot Santé transforme l&lsquo;expérience de santé avec des services innovants et personnalisés.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 animate-on-scroll opacity-0 transition-all duration-700"
            style={{ transitionDelay: `${200 + index * 100}ms` }}
          >
            <div className="w-14 h-14 rounded-lg bg-sky-100 flex items-center justify-center mb-6 text-sky-500">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
            <p className="text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-24 mb-12 text-center animate-on-scroll opacity-0 transition-all duration-700 delay-300">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4">Notre approche</h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Chez Carrot Santé, nous croyons qu&apos;une médecine moderne doit être à la fois humaine et technologique.
          Voici les principes qui guident notre pratique quotidienne.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-start p-5 rounded-lg hover:bg-sky-50 transition-all duration-300 animate-on-scroll opacity-0 transition-all duration-700"
            style={{ transitionDelay: `${400 + index * 100}ms` }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 mb-4">
              {feature.icon}
            </div>
            <h4 className="text-lg font-medium text-slate-800 mb-2">{feature.title}</h4>
            <p className="text-slate-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-sky-50 to-slate-50 p-8 rounded-xl animate-on-scroll opacity-0 transition-all duration-700 delay-500">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Prêt à prendre soin de votre santé différemment ?</h3>
            <p className="text-slate-600">Rejoignez les milliers de patients qui font confiance à Carrot Santé pour leur suivi médical.</p>
          </div>
          <button className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-all duration-300">
            Essayer gratuitement
          </button>
        </div>
      </div>
    </div>
  )
} 