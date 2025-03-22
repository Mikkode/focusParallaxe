"use client"

import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"
import { ArrowDown } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export default function SocialProof() {
  const logos = [
    { name: "Company 1", logo: "/images/logos/logo1.svg" },
    { name: "Company 2", logo: "/images/logos/logo2.svg" },
    { name: "Company 3", logo: "/images/logos/logo3.svg" },
    { name: "Company 4", logo: "/images/logos/logo4.svg" },
    { name: "Company 5", logo: "/images/logos/logo5.svg" },
    { name: "Company 6", logo: "/images/logos/logo6.svg" }
  ]

  const stats = [
    { value: "200+", label: "Entrepreneurs" },
    { value: "97%", label: "Satisfaction" },
    { value: "3.2M€", label: "CA généré" },
    { value: "85%", label: "Croissance" }
  ]

  const features = [
    { 
      title: "Coaching personnalisé", 
      description: "Un accompagnement sur mesure adapté à vos besoins spécifiques.",
      icon: "/images/icons/coaching.svg"
    },
    { 
      title: "Stratégie business", 
      description: "Développement de stratégies efficaces pour augmenter votre chiffre d'affaires.",
      icon: "/images/icons/strategy.svg"
    },
    { 
      title: "Mindset d'entrepreneur", 
      description: "Renforcement de votre mentalité de leader pour surmonter les obstacles.",
      icon: "/images/icons/mindset.svg"
    },
    { 
      title: "Systèmes & Processus", 
      description: "Mise en place de systèmes efficaces pour automatiser votre business.",
      icon: "/images/icons/systems.svg"
    }
  ]

  return (
    <section className="w-full py-16 md:py-20 relative" id="social-proof">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Ils nous font confiance"
          subtitle="Rejoignez des centaines d'entrepreneurs qui ont transformé leur business"
          centered
        />
        
        <div className="mt-12 md:mt-16">
          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Logos des clients - Masqués sur mobile pour économiser de l'espace */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-8 mb-16 opacity-70">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="w-24 h-12 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Image 
                  src={logo.logo} 
                  alt={logo.name} 
                  width={96} 
                  height={48}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Caractéristiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Témoignage mis en avant */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-6">
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg font-medium italic mb-4">
                    "Le coaching de FocusFlow a complètement transformé mon approche du business. J'ai pu doubler mon chiffre d'affaires en seulement 6 mois tout en travaillant moins d'heures."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">JD</span>
                    </div>
                    <div>
                      <p className="font-bold">Jean Dupont</p>
                      <p className="text-sm text-foreground/70">Fondateur, TechInnovate</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group">
                    Réserver un appel
                    <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="hidden sm:flex">
                    Voir tous les témoignages
                  </Button>
                </div>
              </div>
              
              <div className="relative hidden md:block">
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl">
                  <Image 
                    src="/images/testimonial-featured.jpg" 
                    alt="Témoignage client" 
                    width={500} 
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Résultats vérifiés</p>
                      <p className="text-sm text-foreground/70">CA x2 en 6 mois</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 