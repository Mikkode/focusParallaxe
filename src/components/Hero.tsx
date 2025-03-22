"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                <Star className="w-4 h-4 mr-1.5 fill-primary text-primary" />
                <span className="hidden sm:inline">Coaching d'excellence pour entrepreneurs</span>
                <span className="sm:hidden">Coaching d'excellence</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Transformez votre vision en succès
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
                Un accompagnement stratégique personnalisé pour les entrepreneurs ambitieux qui veulent passer à l'étape supérieure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="group">
                  Réserver un appel
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="sm:flex hidden">
                  Découvrir la méthode
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-foreground/70">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>+200 entrepreneurs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>97% satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:block hidden"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image 
                src="/images/hero-image.jpg" 
                alt="Coaching d'entrepreneurs" 
                width={600} 
                height={700}
                className="w-full h-auto object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <div className="flex items-center gap-3 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-white font-medium">
                  "Le coaching qui a transformé mon business."
                </p>
                <p className="text-white/70 text-sm mt-1">
                  — Marie Dupont, Fondatrice
                </p>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-lg z-20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">+</span>
                </div>
                <div>
                  <p className="font-medium">Croissance moyenne</p>
                  <p className="text-2xl font-bold text-primary">+127%</p>
                </div>
              </div>
              <p className="text-xs text-foreground/70">
                de chiffre d'affaires après 6 mois
              </p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">{i}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-medium">Rejoignez</p>
                  <p className="text-sm text-foreground/70">+200 entrepreneurs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 