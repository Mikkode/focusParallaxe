"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "./ui/button"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

export default function PricingCard({ title, price, description, features, popular = false }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl border ${popular ? 'border-primary/50' : 'border-border'} p-8 relative h-full flex flex-col bg-card`}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        {popular && (
          <>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
          </>
        )}
      </div>
      
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary text-primary-foreground text-xs font-bold py-1.5 px-4 rounded-full shadow-md">
            Recommandé
          </div>
        </div>
      )}
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold">{price}</span>
          <span className="ml-1 text-muted-foreground">/mois</span>
        </div>
        <p className="mt-4 text-muted-foreground">{description}</p>
      </div>
      
      <ul className="mt-6 space-y-4 flex-grow relative z-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className={`flex-shrink-0 h-5 w-5 ${popular ? 'text-primary' : 'text-muted-foreground'} mr-2`}>
              <Check className="h-5 w-5" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-8 relative z-10">
        <Button 
          className={`w-full ${
            popular 
              ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
              : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
          }`}
        >
          Commencer maintenant
        </Button>
      </div>
    </motion.div>
  )
} 