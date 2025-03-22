"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"
import Testimonial from "./Testimonial"

export default function Testimonials() {
  const testimonials = [
    {
      content: "Le coaching avec FocusFlow a complètement transformé mon approche business. J'ai pu doubler mon chiffre d'affaires en seulement 6 mois.",
      author: "Sophie Martin",
      role: "Fondatrice, Design Studio"
    },
    {
      content: "Une méthode claire et efficace qui m'a permis de sortir de l'impasse et de développer une stratégie cohérente pour mon entreprise.",
      author: "Thomas Dubois",
      role: "Consultant indépendant"
    },
    {
      content: "Grâce à ce coaching, j'ai pu identifier les blocages qui freinaient ma croissance et mettre en place des solutions concrètes.",
      author: "Marie Leroy",
      role: "Coach bien-être"
    },
    {
      content: "Un accompagnement sur mesure qui a dépassé mes attentes. Je recommande vivement à tous les entrepreneurs qui veulent passer à l'étape suivante.",
      author: "Alexandre Petit",
      role: "E-commerçant"
    },
    {
      content: "J'ai gagné un temps précieux grâce aux conseils stratégiques. Ma productivité a augmenté de 40% en quelques semaines.",
      author: "Julie Moreau",
      role: "Consultante marketing"
    },
    {
      content: "Les outils et méthodes partagés sont d'une efficacité redoutable. Mon entreprise a pris un nouveau souffle.",
      author: "Marc Dupont",
      role: "Fondateur, Tech Startup"
    },
    {
      content: "Le retour sur investissement a été immédiat. En 3 mois, j'ai récupéré 10 fois ma mise initiale.",
      author: "Camille Bernard",
      role: "Entrepreneur e-commerce"
    },
    {
      content: "La clarté des conseils et la pertinence des stratégies proposées ont fait toute la différence pour mon business.",
      author: "Paul Lefèvre",
      role: "Photographe professionnel"
    },
    {
      content: "Après des années de stagnation, mon entreprise connaît enfin une croissance exponentielle grâce à ce coaching.",
      author: "Émilie Rousseau",
      role: "Directrice d'agence"
    },
    {
      content: "L'approche personnalisée a parfaitement répondu à mes besoins spécifiques. Résultats au-delà de mes espérances.",
      author: "Laurent Mercier",
      role: "Coach sportif"
    }
  ]

  // Créer un tableau étendu pour le défilement infini
  const extendedTestimonials = [...testimonials, ...testimonials]
  
  const containerRef = useRef(null)

  return (
    <section className="w-full py-20 relative overflow-hidden" id="testimonials" ref={containerRef}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Ce qu'ils en disent"
          subtitle="Découvrez les résultats obtenus par mes clients"
          centered
        />
        
        <div className="mt-16 relative">
          {/* Effet de lumière en arrière-plan */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-[100px] -z-10"></div>
          </div>
          
          <div className="overflow-hidden relative w-full">
            <motion.div 
              className="flex"
              animate={{ 
                x: [0, -2400] 
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear"
                }
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="w-[280px] sm:w-[320px] md:w-[280px] lg:w-[300px] px-3 flex-shrink-0"
                >
                  <Testimonial
                    content={testimonial.content}
                    author={testimonial.author}
                    role={testimonial.role}
                    delay={0}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Effet de fondu sur les côtés */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
} 