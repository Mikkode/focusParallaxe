"use client"

import SectionTitle from "./SectionTitle"
import PricingCard from "./PricingCard"

export default function Pricing() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Offres de coaching"
          subtitle="Choisissez la formule qui correspond à vos besoins"
          centered
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] -z-10 opacity-50"></div>
          
          <PricingCard 
            title="Démarrage"
            price="497€"
            description="Idéal pour les entrepreneurs en début de parcours"
            features={[
              "1 session de coaching (90 min)",
              "Audit de votre business",
              "Plan d'action personnalisé",
              "Support par email (7 jours)"
            ]}
          />
          
          <PricingCard 
            title="Transformation"
            price="997€"
            description="Pour ceux qui veulent accélérer leur croissance"
            features={[
              "3 sessions de coaching (90 min)",
              "Audit complet de votre business",
              "Plan d'action détaillé",
              "Support par email (30 jours)",
              "Accès à la communauté privée"
            ]}
            popular
          />
          
          <PricingCard 
            title="Excellence"
            price="1997€"
            description="Pour une transformation complète de votre business"
            features={[
              "6 sessions de coaching (90 min)",
              "Audit approfondi et stratégie",
              "Plan d'action détaillé et suivi",
              "Support illimité par email",
              "Accès à vie à la communauté privée",
              "Ressources exclusives"
            ]}
          />
        </div>
      </div>
    </section>
  )
} 