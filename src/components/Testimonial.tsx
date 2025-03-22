"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "./ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialProps {
  content: string
  author: string
  role: string
  delay?: number
}

export default function Testimonial({ content, author, role, delay = 0 }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-primary/10 bg-card/30 backdrop-blur-sm">
        <CardContent className="pt-6 flex-grow">
          <div className="mb-4 text-primary/60">
            <QuoteIcon size={24} />
          </div>
          <p className="text-foreground/90 text-sm leading-relaxed">{content}</p>
        </CardContent>
        <CardFooter className="border-t border-border/10 pt-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-3">
              <span className="text-primary font-medium text-sm">{author.charAt(0)}{author.split(' ')[1]?.charAt(0)}</span>
            </div>
            <div>
              <p className="font-medium text-sm">{author}</p>
              <p className="text-xs text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
} 