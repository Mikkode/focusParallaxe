"use client"

import { useEffect } from 'react'

export default function ImageDebug() {
  useEffect(() => {
    // Vérifier si les images sont correctement chargées
    const images = [
      '/images/hero-pattern.svg',
      '/images/dots-pattern.svg',
      '/images/bg-pattern.svg',
      '/images/floating-shape-1.svg',
      '/images/floating-shape-2.svg',
      '/images/audit-illustration.svg',
      '/grid.svg'
    ]
    
    images.forEach(src => {
      const img = new Image()
      img.src = src
      img.onload = () => console.log(`Image chargée avec succès: ${src}`)
      img.onerror = () => console.error(`Erreur de chargement de l'image: ${src}`)
    })
  }, [])
  
  return null
} 