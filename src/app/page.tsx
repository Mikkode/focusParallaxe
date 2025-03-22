"use client"

import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useRef } from 'react'
import type { IParallax } from '@react-spring/parallax'

// import ParallaxContainer from "@/components/ParallaxContainer"
// import ImageDebug from '@/components/ImageDebug'

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
  
  return (
    <main className="w-full h-screen">
      {/* <ImageDebug />
      <ParallaxContainer /> */}

      <Parallax ref={parallaxRef} pages={5}>
        {/* Section Héro */}
        <ParallaxLayer offset={0} speed={0.1} factor={1} className="bg-gradient-to-br from-slate-50 via-sky-50 to-slate-50">
          <div className={styles.section} style={{...alignCenter, flexDirection: 'column', textAlign: 'center', paddingTop: '8rem'}}>
            <h1 className={styles.heading}>VitaSanté</h1>
            <p className="mt-4 text-sky-600 text-xl md:text-2xl font-medium">Médecine moderne, approche humaine</p>
            <p className={`${styles.paragraph} mt-6 text-center`}>
              Notre approche intègre les dernières avancées médicales avec une attention personnalisée pour votre bien-être global.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className={styles.button} onClick={() => parallaxRef.current.scrollTo(1)}>
                Découvrir nos services
              </button>
              <button className={styles.secondaryButton}>
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </ParallaxLayer>

        {/* Élément décoratif */}
        <ParallaxLayer offset={0.85} speed={0.3} className="pointer-events-none">
          <div className="absolute right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 opacity-60 blur-xl"></div>
          <div className="absolute left-[15%] w-48 h-48 rounded-full bg-gradient-to-tr from-slate-100 to-sky-100 opacity-60 blur-xl"></div>
        </ParallaxLayer>

        {/* Section Services */}
        <ParallaxLayer offset={1} speed={0.2} factor={1} className="bg-white">
          <div className={styles.section}>
            <h2 className={`${styles.subheading} text-center mb-16`}>Nos Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Téléconsultation",
                  description: "Consultez nos médecins spécialistes depuis le confort de votre domicile, avec un suivi médical de qualité.",
                  icon: "🩺"
                },
                {
                  title: "Médecine Préventive",
                  description: "Un programme personnalisé pour anticiper et prévenir les problèmes de santé avant qu'ils n'apparaissent.",
                  icon: "🛡️"
                },
                {
                  title: "Suivi Numérique",
                  description: "Suivez vos progrès et vos indicateurs de santé en temps réel grâce à notre plateforme sécurisée.",
                  icon: "📊"
                }
              ].map((service, index) => (
                <div key={index} className={`${styles.card} hover:shadow-md transition-shadow`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 mb-6">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>

        {/* Section Tarification */}
        <ParallaxLayer offset={2} speed={0.1} factor={1} className="bg-slate-50">
          <div className={styles.section}>
            <h2 className={`${styles.subheading} text-center mb-4`}>Nos Formules</h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-16">
              Des solutions adaptées à vos besoins et à votre budget, avec un engagement flexible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Formule Essentielle */}
              <div className={styles.pricingCard}>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Essentielle</h3>
                <p className="text-slate-600 mb-6">Pour les besoins ponctuels</p>
                <div className="text-3xl font-bold text-slate-900 mb-6">29€<span className="text-base font-normal text-slate-500">/mois</span></div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">✓</span>
                    <span className="text-slate-600">2 téléconsultations par mois</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">✓</span>
                    <span className="text-slate-600">Accès à la plateforme de suivi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">✓</span>
                    <span className="text-slate-600">Support par email</span>
                  </li>
                </ul>
                <button className={styles.secondaryButton}>Choisir ce forfait</button>
              </div>
              
              {/* Formule Premium */}
              <div className={styles.pricingHighlight}>
                <div className="absolute -top-4 right-8 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-medium">Populaire</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Premium</h3>
                <p className="text-slate-600 mb-6">Pour un suivi régulier</p>
                <div className="text-3xl font-bold text-slate-900 mb-6">59€<span className="text-base font-normal text-slate-500">/mois</span></div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">✓</span>
                    <span className="text-slate-600">Consultations illimitées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">✓</span>
                    <span className="text-slate-600">Bilan de santé trimestriel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">✓</span>
                    <span className="text-slate-600">Accès prioritaire aux spécialistes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">✓</span>
                    <span className="text-slate-600">Support 7j/7</span>
                  </li>
                </ul>
                <button className={styles.button}>Choisir ce forfait</button>
              </div>
              
              {/* Formule Famille */}
              <div className={styles.pricingCard}>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Famille</h3>
                <p className="text-slate-600 mb-6">Pour toute la famille</p>
                <div className="text-3xl font-bold text-slate-900 mb-6">89€<span className="text-base font-normal text-slate-500">/mois</span></div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">✓</span>
                    <span className="text-slate-600">Jusqu'à 5 membres</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">✓</span>
                    <span className="text-slate-600">Tous les avantages Premium</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">✓</span>
                    <span className="text-slate-600">Pédiatre dédié</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">✓</span>
                    <span className="text-slate-600">Réduction sur les services additionnels</span>
                  </li>
                </ul>
                <button className={styles.secondaryButton}>Choisir ce forfait</button>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Section Témoignages */}
        <ParallaxLayer offset={3} speed={0.1} factor={1} className="bg-white">
          <div className={styles.section}>
            <h2 className={`${styles.subheading} text-center mb-16`}>Témoignages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ParallaxLayer offset={3} speed={0.3} className="pointer-events-none">
                <div className={`${styles.card} ml-[5%] mt-[5%] max-w-md`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 font-bold mr-4">MD</div>
                    <div>
                      <p className="font-medium text-slate-800">Marie Dupont</p>
                      <p className="text-slate-500 text-sm">Patiente depuis 2 ans</p>
                    </div>
                  </div>
                  <p className="italic text-slate-600 mb-4">
                    "Le suivi personnalisé de VitaSanté a transformé ma façon de prendre soin de ma santé. Les médecins sont à l'écoute et les outils numériques vraiment pratiques."
                  </p>
                  <div className="flex text-sky-500">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </ParallaxLayer>
              
              <ParallaxLayer offset={3} speed={0.5} className="pointer-events-none">
                <div className={`${styles.card} ml-[55%] mt-[15%] max-w-md`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 font-bold mr-4">TM</div>
                    <div>
                      <p className="font-medium text-slate-800">Thomas Martin</p>
                      <p className="text-slate-500 text-sm">Forfait Famille</p>
                    </div>
                  </div>
                  <p className="italic text-slate-600 mb-4">
                    "Avec trois enfants, le forfait Famille est idéal. Pouvoir consulter à toute heure sans se déplacer nous a sauvé de nombreuses nuits d'inquiétude."
                  </p>
                  <div className="flex text-sky-500">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </ParallaxLayer>
            </div>
          </div>
        </ParallaxLayer>

        {/* Section Contact */}
        <ParallaxLayer offset={4} speed={0.1} factor={1} className="bg-slate-900">
          <div className={styles.section}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">Contactez-nous</h2>
                <p className="text-slate-300 mb-8">
                  Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre parcours de santé.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center text-slate-300">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 mr-3">📍</span>
                    123 Avenue de la Santé, 75001 Paris
                  </p>
                  <p className="flex items-center text-slate-300">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 mr-3">📞</span>
                    01 23 45 67 89
                  </p>
                  <p className="flex items-center text-slate-300">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 mr-3">✉️</span>
                    contact@vitasante.fr
                  </p>
                </div>
              </div>
              
              <div className={styles.card}>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Envoyez-nous un message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-400">
              <p>© 2023 VitaSanté. Tous droits réservés.</p>
            </div>
          </div>
        </ParallaxLayer>

        {/* Bouton flottant pour remonter en haut */}
        <ParallaxLayer sticky={{ start: 0.5, end: 5 }} style={{ ...alignCenter, justifyContent: 'flex-end', pointerEvents: 'none' }}>
          <div className="mr-8 mb-8 pointer-events-auto">
            <button 
              onClick={() => parallaxRef.current.scrollTo(0)}
              className="p-3 rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-600 transition-colors"
            >
              ↑
            </button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}
