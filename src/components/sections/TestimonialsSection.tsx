"use client"

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Patiente depuis 2 ans",
      text: "Le suivi personnalisé de VitaSanté a transformé ma façon de prendre soin de ma santé. Les médecins sont à l'écoute et les outils numériques vraiment pratiques.",
      initials: "MD"
    },
    {
      name: "Thomas Martin",
      role: "Forfait Famille",
      text: "Avec trois enfants, le forfait Famille est idéal. Pouvoir consulter à toute heure sans se déplacer nous a sauvé de nombreuses nuits d'inquiétude.",
      initials: "TM"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Témoignages</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Découvrez ce que nos patients disent de nos services.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 rounded-xl shadow-sm bg-white border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 font-bold mr-4">
                {testimonial.initials}
              </div>
              <div>
                <p className="font-medium text-slate-800">{testimonial.name}</p>
                <p className="text-slate-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="italic text-slate-600 mb-4">
              "{testimonial.text}"
            </p>
            <div className="flex text-sky-500">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="px-6 py-3 bg-white text-sky-500 border border-sky-500 font-medium rounded-lg hover:bg-sky-50 transition-colors">
          Voir plus de témoignages
        </button>
      </div>
    </div>
  )
} 