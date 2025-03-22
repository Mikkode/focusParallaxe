"use client"

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Mère de famille",
      image: "/images/44.jpg",
      content: "Carrot Santé a transformé notre façon de gérer la santé familiale. Plus besoin de prendre des rendez-vous des semaines à l'avance ou de se déplacer pour des consultations de routine. Tout est accessible depuis notre domicile, avec un suivi personnalisé pour chaque membre de la famille."
    },
    {
      name: "Thomas Dubois",
      role: "Entrepreneur",
      image: "/images/32.jpg",
      content: "Avec mon emploi du temps chargé, je négligeais souvent ma santé. Carrot Santé m'a permis de rester en contact régulier avec mon médecin, même lors de mes déplacements professionnels. Le suivi numérique est particulièrement utile pour surveiller mon stress et mon sommeil."
    },
    {
      name: "Émilie Leclerc",
      role: "Sportive amateur",
      image: "/images/68.jpg",
      content: "Suite à une blessure, j'avais besoin d'un suivi régulier avec différents spécialistes. Carrot Santé a coordonné tous mes soins et m'a permis de consulter facilement kinésithérapeute et médecin du sport. Leur approche préventive m'aide maintenant à éviter de nouvelles blessures."
    }
  ]

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="text-center mb-12 animate-on-scroll opacity-0 transition-all duration-700 delay-100">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Témoignages</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Découvrez comment Carrot Santé a transformé l&apos;expérience de santé de nos patients à travers la France.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 animate-on-scroll opacity-0 transition-all duration-700 hover:shadow-md transition-all duration-300"
            style={{ transitionDelay: `${200 + index * 150}ms` }}
          >
            <div className="flex items-center mb-4">
              <Image 
                src={testimonial.image} 
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-slate-800">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-slate-600 italic">&quot;{testimonial.content}&quot;</p>
            <div className="mt-4 flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center animate-on-scroll opacity-0 transition-all duration-700 delay-500">
        <h3 className="text-2xl font-semibold text-slate-800 mb-6">Rejoignez plus de 10 000 patients satisfaits</h3>
        <button className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-all duration-300 inline-flex items-center">
          <span>Commencer maintenant</span>
          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  )
} 