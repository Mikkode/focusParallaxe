"use client"

import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { ArrowRight, BrainCircuit, CheckCircle, LineChart, Lightbulb, Target, Users, Zap } from "lucide-react"
import { Button } from "./ui/button"

export default function Methodology() {
  const steps = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Diagnostic stratégique",
      description: "Analyse approfondie de votre situation actuelle, identification des blocages et des opportunités inexploitées.",
      details: [
        "Audit complet de votre business model",
        "Identification des points de friction",
        "Analyse de votre positionnement marché"
      ]
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Vision & Stratégie",
      description: "Définition d'une vision claire et d'une stratégie sur mesure pour atteindre vos objectifs ambitieux.",
      details: [
        "Clarification de votre vision à long terme",
        "Définition d'objectifs SMART",
        "Élaboration d'une feuille de route stratégique"
      ]
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Implémentation accélérée",
      description: "Mise en œuvre rapide des actions à fort impact pour générer des résultats visibles rapidement.",
      details: [
        "Priorisation des actions à haute valeur ajoutée",
        "Optimisation des processus existants",
        "Mise en place de systèmes automatisés"
      ]
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Croissance & Scaling",
      description: "Amplification des résultats et mise en place de systèmes pour une croissance durable et maîtrisée.",
      details: [
        "Développement de nouveaux canaux d'acquisition",
        "Optimisation de votre tunnel de conversion",
        "Stratégies de fidélisation client avancées"
      ]
    }
  ]

  const results = [
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Croissance du CA",
      description: "En moyenne +127% de chiffre d'affaires après 6 mois d'accompagnement."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Leadership renforcé",
      description: "Développement de vos compétences de leader et amélioration de la gestion d'équipe."
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-primary" />,
      title: "Systèmes optimisés",
      description: "Mise en place de processus efficaces qui fonctionnent sans votre présence constante."
    }
  ]

  const benefits = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      title: "Clarté mentale",
      description: "Éliminez le brouillard décisionnel et gagnez en clarté sur vos priorités stratégiques."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Leadership amplifié",
      description: "Développez vos compétences de leader pour inspirer votre équipe et attirer les meilleurs talents."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Productivité maximale",
      description: "Multipliez votre efficacité grâce à des systèmes optimisés et des processus fluides."
    }
  ]

  return (
    <section className="w-full py-16 md:py-24 relative" id="methodology">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Notre méthodologie"
          subtitle="Une approche structurée en 4 étapes pour transformer votre business"
          centered
        />
        
        <div className="mt-12 md:mt-16">
          {/* Étapes de la méthodologie - Optimisé pour mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/80 text-sm mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1 h-4 w-4 text-primary flex-shrink-0">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-sm text-foreground/90">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Résultats - Optimisé pour mobile */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Résultats que vous pouvez attendre</h3>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Notre approche a fait ses preuves auprès de centaines d'entrepreneurs qui ont transformé leur business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="mb-4">
                    {result.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{result.title}</h3>
                  <p className="text-foreground/80 text-sm">{result.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Section CTA - Simplifiée pour mobile */}
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Prêt à transformer votre business?</h3>
                <p className="text-foreground/90 mb-6">
                  Réservez un appel découverte gratuit de 30 minutes pour discuter de vos objectifs et voir comment notre méthode peut vous aider à les atteindre.
                </p>
                <Button size="lg" className="group">
                  Réserver mon appel gratuit
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <div className="relative mt-8 md:mt-0">
                <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Appel découverte</h4>
                      <p className="text-sm text-foreground/80">30 minutes · Gratuit</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-primary flex-shrink-0">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-sm">Analyse de votre situation actuelle</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-primary flex-shrink-0">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-sm">Identification des opportunités de croissance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-primary flex-shrink-0">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-sm">Recommandations personnalisées</span>
                    </li>
                  </ul>
                  
                  <div className="text-center">
                    <p className="text-xs text-foreground/70 mb-2">Places limitées - 3 appels par semaine</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Voir les disponibilités
                    </Button>
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