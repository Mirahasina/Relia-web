import React, { useState, useRef } from 'react';
import {  Users, Cog, Target, CheckCircle, Phone, Mail, MapPin, Search } from 'lucide-react';

const ReliaLandingPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const spinRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  
  const processSteps = [
    { id: 1, title: "Analyse", description: "Audit complet", color: "bg-red-500" },
    { id: 2, title: "Optimisation", description: "Solutions sur mesure", color: "bg-green-500" },
    { id: 3, title: "Suivi", description: "Accompagnement", color: "bg-purple-500" }
  ];

  const stats = [
    { value: "95%", label: "satisfaction client" },
    { value: "+12,000", label: "Projets livrés" },
    { value: "+50", label: "experts actifs" }
  ];

  const partners = [
    "geogsystems", "GIZFR", "NETECO", "VERTECO", "CADAP", "HUCAP"
  ];

  return (
    <div className="min-h-screen bg-white w-[100%]">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-8">
            <div className="flex items-center">
                <img
                src={require('../assets/Relia-logo.png')}
                alt="RELIA Logo"
                className="w-auto"
                style={{ height: '60px' }}
                />
            </div>
            <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-lg">Accueil</a>
            <a href="#solution" className="text-gray-600 hover:text-gray-900 text-lg">Solutions</a>
            <a href="#process" className="text-gray-600 hover:text-gray-900 text-lg">Processus</a>
            <a href="#équipe" className="text-gray-600 hover:text-gray-900 text-lg">Équipe</a>
            </nav>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 text-lg font-semibold">
            Contactez-nous
            </button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Libérez le plein potentiel{" "}
                <span className="text-red-500">de votre entreprise</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Solutions digitales & IA sur mesure pour optimiser vos opérations et renforcer votre avantage concurrentiel.
              </p>
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 inline-flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Diagnostic stratégique offert
              </button>
            </div>
            <div className="relative">
             <div className="relative flex items-center justify-center h-full">
                <img
                    src={require('../assets/IA_1__1-removebg-preview.png')}
                    alt="AI Illustration"
                    className="object-contain"
                    style={{ height: '400px', width: '100%' }} 
                />
                                
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full transform translate-x-8 translate-y-8"></div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-white bg-opacity-5 transform -translate-x-4 -translate-y-4 rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Competition Section */}
        <section id="solution" className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left leading-tight">
                Pendant que vos concurrents avancent,<br />
                <span className="text-red-500">vous restez bloqué.</span>
                </h2>
                <div className="flex items-start mb-4">
                <img
                    src={require('../assets/image 6.png')}
                    alt="Scintillement"
                    className="w-26 h-18 mr-4 mt-2"
                    style={{ objectFit: 'contain' }}
                />
                <div>
                    <p className="text-gray-700 mb-2 text-left text-base font-medium">
                    Vous perdez du temps avec des process manuels, des outils dépassés et une équipe surchargée.
                    </p>
                    <p className="text-gray-700 text-left text-base font-medium">
                    Pendant ce temps, vos concurrents accélèrent, vos clients s'impatientent et vos marges se réduisent.
                    </p>
                </div>
                </div>
            </div>
            <div
            className="absolute left-1/2 transform -translate-x-1/2 z-30 w-full flex justify-center pointer-events-none
                md:block hidden"
            style={{
                top: 'calc(100% - 64px)',
            }}
            ></div>
            <div
                className="bg-white rounded-xl shadow-xl px-8 py-6 w-full max-w-md transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(200,50,50,0.25)] hover:-translate-y-2 hover:ring-4 hover:ring-red-200/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-semibold text-red-400">Productivité</span>
                  <span className="text-base font-bold text-red-500">-23%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-red-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-semibold text-orange-400">Satisfaction client</span>
                  <span className="text-base font-bold text-orange-500">-15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-orange-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-yellow-400">Marges</span>
                  <span className="text-base font-bold text-yellow-500">-18%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
            </div>
          </div>
        </div>
        </section>

        <section className="bg-gray-100 py-16 flex items-center justify-center min-h-[300px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Passez de l'improvisation au{" "}
                <span className="text-red-500">pilotage maîtrisé.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                En 2 ans, nous vous livrons les bons outils, les bons process et les bons talents pour transformer votre entreprise.
              </p>
            </div>
          </div>
        </section>

      <section id='process' className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Les bons outils</h3>
              <p className="text-gray-600">pour accélérer vos opérations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Les bons process</h3>
              <p className="text-gray-600">pour optimiser les pertes de temps</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Les bons process</h3>
              <p className="text-gray-600">pour éliminer les pertes de temps</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Notre processus en 3 étapes
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.id} className="text-center">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold`}>
                    {step.id}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-16">
            <button className="text-white px-6 py-3 rounded-lg hover:bg-red-600 inline-flex items-center bg-gradient-to-b from-red-500 to-gray-700 text-white">
              <Target className="w-5 h-5 mr-2 " />
              Recevez votre plan d'action offert
            </button>
          </div>
        </div>
      </section>

<section id="équipe" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      {/* Utilisation de taille relative + max-width */}
      <div className="relative w-full max-w-[750px] aspect-square mx-auto mb-12">
        {/* Cercle externe */}
        <div className="absolute inset-0 rounded-full border-2 border-gray-200 z-10"></div>

        {/* Cercle d’icônes en rotation */}
        <div
          ref={spinRef}
          className="absolute inset-0 w-full h-full"
          style={{
            animation: isPaused ? 'none' : 'spin 18s linear infinite',
            zIndex: 20,
          }}
        >
          {[
            { src: require('../assets/partenaires/geosystems.png'), alt: 'GeoSystems', link: 'https://geosystems.com' },
            { src: require('../assets/partenaires/AZ+.png'), alt: 'AZ+', link: 'https://www.azplus.mg/' },
            { src: require('../assets/partenaires/commission de l\'OI.png'), alt: 'Commission de l\'OI', link: 'https://www.commissionoceanindien.org/' },
            { src: require('../assets/partenaires/CRS.png'), alt: 'CRS', link: 'https://www.crs.org/where-we-work/africa/madagascar' },
            { src: require('../assets/partenaires/EITI.png'), alt: 'EITI', link: 'https://eiti.org/fr' },
            { src: require('../assets/partenaires/etech.png'), alt: 'etech', link: 'https://etechconsulting-mg.com/' },
            { src: require('../assets/partenaires/geosystems.png'), alt: 'Geosystem', link: 'https://geosystems.mg/fr/' },
            { src: require('../assets/partenaires/giz.png'), alt: 'GIZ', link: 'https://www.giz.de/en/worldwide/23971.html' },
            { src: require('../assets/partenaires/Hairun.png'), alt: 'Hairun', link: 'https://www.hairun-technology.com/fr' },
            { src: require('../assets/partenaires/insynium.png'), alt: 'insynium', link: 'https://share.google/uTHiHFsZughxoaAiB' },
            { src: require('../assets/partenaires/InterCAMSP.png'), alt: 'InterCAMSP', link: 'https://intercamsp.fr/' },
            { src: require('../assets/partenaires/MCB.png'), alt: 'MCB', link: 'https://mcb.mg/' },
            { src: require('../assets/partenaires/météo.png'), alt: 'Météo', link: 'https://www.meteomadagascar.mg/' },
            { src: require('../assets/partenaires/Orange.png'), alt: 'Orange', link: 'https://www.orange.mg/' },
            { src: require('../assets/partenaires/Sipem.png'), alt: 'Sipem', link: 'https://www.sipembanque.mg/' },
            { src: require('../assets/partenaires/We light.png'), alt: 'We light', link: 'https://m.facebook.com/WeLightAfrica/about/' },
            ].map((partner, i, arr) => {
            // Rayon basé sur taille du conteneur (responsive)
            const containerSize = 100; // en %
            const radiusPercent = 42.5; // % du conteneur
            const angle = (i / arr.length) * 2 * Math.PI;
            const x = 50 + Math.cos(angle - Math.PI / 2) * radiusPercent;
            const y = 50 + Math.sin(angle - Math.PI / 2) * radiusPercent;

            return (
              <a
                key={partner.alt}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: '12%',
                  height: '12%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 30,
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="object-contain w-full h-full hover:scale-110 transition-transform duration-300"
                  draggable={false}
                />
              </a>
            );
          })}
        </div>

        {/* Centre du cercle */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="bg-gray-100 rounded-full w-[70%] h-[70%] flex flex-col items-center justify-center shadow-lg p-4 text-center">
            <div className="text-xl md:text-3xl font-bold text-gray-700 mb-4">
              <span className="text-red-600">Ils nous font confiance.</span>
            </div>
            <div className="flex flex-col gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-xl font-bold text-purple-600">95%</span>
                <span className="text-gray-500">satisfaction client</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-xl font-bold text-green-600">+12,000</span>
                <span className="text-gray-500">heures de développement</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-xl font-bold text-red-600">+50</span>
                <span className="text-gray-500">experts tech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animation */}
        <style>
          {`
            @keyframes spin {
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </div>
  </div>
</section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Des solutions conçues pour{" "}
              <span className="text-red-500">booster votre entreprise.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-100 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Cog className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Transformation Digitale 360</h3>
            </div>
            <div className="bg-green-100 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">IAEvolution</h3>
            </div>
            <div className="bg-purple-100 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">NuclearIA</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Section */}
    <section className="bg-gradient-to-b from-red-500 to-gray-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Recevez gratuitement votre Audit Digital & Feuille de route personnalisée
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Un consultant vous identifie vos points de blocage et ressources et vous livre un rapport sur les gains possibles.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full p-3 rounded-lg text-gray-900"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg text-gray-900"
                />
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 w-full">
                  Recevoir mon audit gratuit
                </button>
              </div>
            </div>
            <div className="bg-white text-gray-900 p-8 rounded-xl">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h3 className="font-bold text-lg">Rapport personnalisé</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Analyse des processus</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Identification des gains</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between ">
                  <span>Plan d'action personnalisé</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-right">
                  <div className="text-sm text-gray-600">Valeur : 1200 €</div>
                  <div className="text-2xl font-bold text-green-500">Gratuit pour vous</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Parlons de votre projet</h2>
      <p className="text-lg text-gray-500">
        Dites-nous où vous en êtes aujourd'hui et où vous voulez aller. Notre équipe vous revient sous 24h ouvrées.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <div className="bg-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
          <h3 className="font-bold text-xl text-gray-900 mb-4">Coordonnées</h3>
          <div className="space-y-4 text-base">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-red-500 mr-3" />
              <span className="font-semibold">Email</span>
              <a href="mailto:contact@relia-consulting.com" className="ml-2 text-gray-700 underline">contact@relia-consulting.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-green-500 mr-3" />
              <span className="font-semibold">Téléphone</span>
              <span className="ml-2 text-gray-700">+261 34 77 558 34</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-500 mr-3" />
              <span className="font-semibold">Adresse</span>
              <a href="https://maps.app.goo.gl/UXBiqgXPkMErQ2zc7" className="ml-2 text-gray-700 underline" target="_blank" rel="noopener noreferrer">
                Ambohimiandra, Madagascar
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-6 bg-gradient-to-br from-red-500 to-gray-400 text-white shadow-md">
          <div className="font-bold mb-2">Besoin d'un diagnostic express ?</div>
          <div className="mb-4 text-sm">Planifiez un appel de 15 minutes pour valider vos priorités.</div>
          <a
            href="https://calendly.com/mintsanavalonajunior/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 font-semibold px-2 py-2 rounded-lg shadow hover:bg-gray-100 transition block text-center"
            >
            Réservez un créneau
        </a>
        </div>
      </div>
      {/* Bloc formulaire */}
      <div>
        <form className="bg-white rounded-2xl shadow-xl p-8 grid gap-6" style={{ boxShadow: '4px 8px 24px 0 rgba(0,0,0,0.10)' }}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Nom complet *</label>
              <input type="text" placeholder="Votre nom" className="w-full p-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email professionnel *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="email" placeholder="Ex : vous@entreprise.com" className="w-full p-3 pl-10 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none" />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Entreprise</label>
              <input type="text" placeholder="Votre société" className="w-full p-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Rôle</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="text" placeholder="Ex : CEO, RH,..." className="w-full p-3 pl-10 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Votre objectif principal *</label>
            <textarea rows={3} placeholder="Décrivez brièvement vis défis actuels et vos objectifs.........." className="w-full p-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-red-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-red-600 transition">
              Envoyer ma demande
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        <footer className="bg-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* CTA */}
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Chaque mois que vous attendez, vos concurrents prennent de l'avance.
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-600 opacity-90">
                Ne laissez pas vos concurrents vous dépasser. Nous aidons déjà 500+ entreprises.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition shadow-md">
                Parlons de votre projet
                </button>
                <button className="bg-white border border-red-500 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 hover:text-red-700 transition shadow-md">
                Recevez votre audit gratuit
                </button>
            </div>
            </div>
            {/* Footer links */}
            <div className="grid md:grid-cols-4 gap-10 border-t border-gray-200 pt-10">
            <div>
                <div className="flex items-center mb-4">
                    <img
                    src={require('../assets/Relia-logo.png')}
                    alt="RELIA Logo"
                    className="w-auto"
                    style={{ height: '60px' }}
                    />                
                </div>
                <p className="text-gray-500 mb-4 leading-relaxed">
                Solutions digitales pour accélérer votre croissance.
                </p>
            </div>
            <div>
                <h4 className="font-semibold text-gray-900 mb-4">Solutions</h4>
                <ul className="space-y-2 text-gray-600">
                <li>• Transformation digitale</li>
                <li>• Intelligence artificielle</li>
                <li>• Audit & conseil</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-gray-900 mb-4">Entreprise</h4>
                <ul className="space-y-2 text-gray-600">
                <li>• À propos</li>
                <li>• Équipe</li>
                <li>• Carrières</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
                <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-red-500" />
                    <span>contact@relia-consulting.com</span>
                </div>
                <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-green-500" />
                    <span>+261 (0) 34 77 558 34</span>
                </div>
                </div>
            </div>
            </div>
            <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
            <p>© 2024 RELIA. Tous droits réservés.</p>
            </div>
        </div>
        </footer>
    </div>
  );
};

export default ReliaLandingPage;