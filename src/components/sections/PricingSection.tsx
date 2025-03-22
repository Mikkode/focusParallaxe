"use client"

export const PricingSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos Formules</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Des solutions adaptées à vos besoins et à votre budget, avec un engagement flexible.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Formule Essentielle */}
        <div className="p-8 rounded-xl shadow-sm bg-white border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Essentielle</h3>
          <p className="text-slate-600 mb-6">Pour les besoins ponctuels</p>
          <div className="text-3xl font-bold text-slate-900 mb-6">29€<span className="text-base font-normal text-slate-500">/mois</span></div>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-600">2 téléconsultations par mois</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-600">Accès à la plateforme de suivi</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-600">Support par email</span>
            </li>
          </ul>
          <button className="px-6 py-3 bg-white text-sky-500 border border-sky-500 font-medium rounded-lg hover:bg-sky-50 transition-colors w-full">
            Choisir ce forfait
          </button>
        </div>
        
        {/* Formule Premium */}
        <div className="p-8 rounded-xl shadow-md bg-gradient-to-br from-sky-50 to-white border-2 border-sky-500 flex flex-col h-full relative transform hover:scale-105 transition-transform">
          <div className="absolute -top-4 right-8 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Populaire
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Premium</h3>
          <p className="text-slate-600 mb-6">Pour un suivi régulier</p>
          <div className="text-3xl font-bold text-slate-900 mb-6">59€<span className="text-base font-normal text-slate-500">/mois</span></div>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-600">Consultations illimitées</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-600">Bilan de santé trimestriel</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-600">Accès prioritaire aux spécialistes</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-600">Support 7j/7</span>
            </li>
          </ul>
          <button className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors w-full">
            Choisir ce forfait
          </button>
        </div>
        
        {/* Formule Famille */}
        <div className="p-8 rounded-xl shadow-sm bg-white border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Famille</h3>
          <p className="text-slate-600 mb-6">Pour toute la famille</p>
          <div className="text-3xl font-bold text-slate-900 mb-6">89€<span className="text-base font-normal text-slate-500">/mois</span></div>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-600">Jusqu'à 5 membres</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-600">Tous les avantages Premium</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-600">Pédiatre dédié</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-600">Réduction sur les services additionnels</span>
            </li>
          </ul>
          <button className="px-6 py-3 bg-white text-sky-500 border border-sky-500 font-medium rounded-lg hover:bg-sky-50 transition-colors w-full">
            Choisir ce forfait
          </button>
        </div>
      </div>
    </div>
  )
} 