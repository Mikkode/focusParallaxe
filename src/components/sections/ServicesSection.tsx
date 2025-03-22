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
        <svg className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Médecine Préventive",
      description: "Un programme personnalisé pour anticiper et prévenir les problèmes de santé avant qu'ils n'apparaissent.",
      icon: (
        <svg className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Suivi Numérique",
      description: "Suivez vos progrès et vos indicateurs de santé en temps réel grâce à notre plateforme sécurisée.",
      icon: (
        <svg className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  const features = [
    {
      title: "Personnalisé",
      description: "Chaque patient bénéficie d'un parcours de soins adapté à ses besoins spécifiques et son historique médical.",
      icon: (
        <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Accessible",
      description: "Nos services sont disponibles 24h/24, 7j/7, depuis n'importe quel appareil connecté à internet.",
      icon: (
        <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Sécurisé",
      description: "Vos données médicales sont protégées par les standards de sécurité les plus élevés et strictement confidentielles.",
      icon: (
        <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Innovant",
      description: "Nous intégrons les dernières avancées technologiques pour améliorer constamment la qualité de nos soins.",
      icon: (
        <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
      {/* Éléments décoratifs flottants */}
      <div className="absolute top-20 right-10 w-16 h-16 rounded-full bg-blue-100 opacity-50 animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-40 left-10 w-12 h-12 rounded-full bg-sky-100 opacity-40 animate-float-medium pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-cyan-100 opacity-30 animate-float-fast pointer-events-none"></div>
      
      <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 delay-100">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos Services</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Des solutions de santé innovantes, accessibles et personnalisées pour prendre soin de vous au quotidien.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl shadow-sm bg-white border border-slate-100 hover:shadow-md transition-shadow group animate-on-scroll opacity-0 transition-all duration-700"
            style={{ transitionDelay: `${150 + index * 100}ms` }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-sky-500 transition-colors">{service.title}</h3>
            <p className="text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-20">
        <div className="text-center mb-10 animate-on-scroll opacity-0 transition-all duration-700 delay-300">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">Notre approche</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Chez MediCare, nous croyons qu'une médecine moderne doit être à la fois humaine et technologique.
            Voici les principes qui guident notre pratique quotidienne.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start p-5 rounded-lg hover:bg-sky-50 transition-colors animate-on-scroll opacity-0 transition-all duration-700"
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
      </div>
      
      <div className="mt-20 bg-gradient-to-r from-sky-50 to-slate-50 p-8 rounded-xl animate-on-scroll opacity-0 transition-all duration-700 delay-500">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Prêt à prendre soin de votre santé différemment ?</h3>
            <p className="text-slate-600">Rejoignez les milliers de patients qui font confiance à MediCare pour leur suivi médical.</p>
          </div>
          <button className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors">
            Essayer gratuitement
          </button>
        </div>
      </div>
    </div>
  )
} 