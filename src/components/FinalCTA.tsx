"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="w-full py-20" id="contact">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8"
        >
          Prêt à transformer votre business ?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Réservez un appel découverte gratuit de 30 minutes pour discuter de vos objectifs et voir comment je peux vous aider.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shine-effect px-8 py-6 text-lg">
            <Link href="#contact">Réserver mon appel gratuit</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 