"use client"

export const ServicesSection = () => {
  const services = [
    {
      title: "Téléconsultation",
      description: "Consultez nos médecins spécialistes depuis le confort de votre domicile, avec un suivi médical de qualité.",
      icon: (
        <svg className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Médecine Préventive",
      description: "Un programme personnalisé pour anticiper et prévenir les problèmes de santé avant qu'ils n'apparaissent.",
      icon: (
        <svg className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Suivi Numérique",
      description: "Suivez vos progrès et vos indicateurs de santé en temps réel grâce à notre plateforme sécurisée.",
      icon: (
        <svg className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos Services</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Des solutions innovantes pour prendre soin de votre santé, où que vous soyez.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl shadow-sm bg-white border border-slate-100 hover:shadow-md transition-shadow group"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-sky-500 transition-colors">{service.title}</h3>
            <p className="text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center justify-center p-1 rounded-full bg-sky-100 text-sky-500 mb-8">
          <span className="px-4 py-1 text-sm font-medium">Notre approche</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Personnalisé", icon: "👤" },
            { title: "Accessible", icon: "🌐" },
            { title: "Sécurisé", icon: "🔒" },
            { title: "Innovant", icon: "💡" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="text-lg font-medium text-slate-800">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 