import React from 'react';
import Section from '../components/Section';
import FlatButton from '../components/FlatButton';
import { 
  Wind, 
  FileText, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Heart, 
  Target, 
  ChevronRight, 
  PlayCircle,
  Sliders,
  Clock,
  Share2,
  GraduationCap,
  MonitorSmartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const YouTubeEmbed = ({ videoId, title }: { videoId: string, title: string }) => (
  <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black border-4 sm:border-8 border-white shadow-2xl">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
);

const Spirometrie: React.FC = () => {
  return (
    <div className="animate-fade-up">
      {/* 1. Title Section / Hero */}
      <Section bg="white" className="pt-20 sm:pt-28 pb-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-600 font-bold text-xs sm:text-sm tracking-wider uppercase border border-sky-100">
              <Wind className="w-4 h-4" />
              <span>MESI mTABLET SPIRO</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] text-gray-900">
              Spirometrie
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-2xl">
              De <strong className="text-gray-900 font-semibold">MESI mTABLET SPIRO</strong> ondersteunt vroege detectie, diagnose, behandelbeslissingen en langdurige monitoring van chronische longaandoeningen.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <FlatButton 
                to="/contact" 
                variant="primary" 
                className="bg-sky-500 hover:bg-sky-600 border-none h-14 sm:h-16 px-8 sm:px-10 text-base"
              >
                Offerte aanvragen
              </FlatButton>
              <FlatButton 
                to="/#configurator" 
                variant="outline" 
                className="border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white h-14 sm:h-16 px-6 sm:px-8 text-sm sm:text-base"
              >
                Naar Configurator
              </FlatButton>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <img
              src="/spiro-hero-device.png"
              alt="MESI mTABLET SPIRO Draadloos Spirometrie Systeem"
              className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02] mx-auto"
            />
          </div>
        </div>
      </Section>

      {/* 2. Voordelen van MESI Spirometer */}
      <Section bg="muted" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
              Voordelen van <span className="text-sky-500">MESI Spirometer</span>
            </h2>
            <div className="h-1.5 w-24 bg-sky-500 mx-auto rounded-full mt-2"></div>
          </div>

          {/* Advantage 1: Meerdere meetmodi */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-md p-6 sm:p-10 hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider">
                  <Wind className="w-4 h-4" />
                  <span>Meetmodi</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight leading-snug">
                  Meerdere meetmodi, inclusief full-loop meting en een incentivemodus voor kinderen
                </h3>
              </div>
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative group w-full max-w-lg">
                  <div className="relative rounded-2xl overflow-hidden bg-white p-3 border border-slate-200 shadow-md flex items-center justify-center">
                    <img
                      src="/Spirometrie/spiro-patient-practitioner.png"
                      alt="Spirometrie onderzoek in de praktijk"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advantage 2: Automatische curveselectie */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-md p-6 sm:p-10 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
              <div className="lg:col-span-5 space-y-4 relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider">
                  <Sliders className="w-4 h-4" />
                  <span>Curveselectie</span>
                </div>
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight leading-snug [text-wrap:balance]">
                    <span className="block">Het apparaat selecteert automatisch de beste curve,</span>
                    <span className="block">met de mogelijkheid om handmatig</span>
                    <span className="block">de gewenste manoeuvres te kiezen</span>
                  </h3>

                  {/* Abstract curved arrow starting from middle of paragraph pushed 30% to the right towards model image */}
                  <div className="hidden lg:block absolute -right-32 xl:-right-36 top-1/2 -translate-y-1/2 translate-x-[30%] w-36 xl:w-40 pointer-events-none z-20">
                    <svg
                      className="w-full h-10 overflow-visible"
                      viewBox="0 0 150 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="abstractCurveGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                          <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.7" />
                          <stop offset="100%" stopColor="#0284c7" stopOpacity="1" />
                        </linearGradient>
                        <filter id="abstractGlow" x="-30%" y="-30%" width="160%" height="160%">
                          <feGaussianBlur stdDeviation="1.5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <circle cx="6" cy="20" r="3.5" fill="#0ea5e9" filter="url(#abstractGlow)" />
                      <circle cx="6" cy="20" r="1.5" fill="#ffffff" />
                      <path
                        d="M 12 20 C 55 26, 95 6, 138 14"
                        stroke="url(#abstractCurveGrad)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="5 4"
                      />
                      <path
                        d="M 130 6 L 144 15 L 131 23"
                        stroke="#0284c7"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex justify-center items-center">
                <img
                  src="/Spirometrie/spiro-curve-selection.png"
                  alt="Het apparaat selecteert automatisch de beste curve, met de mogelijkheid om handmatig de gewenste manoeuvres te kiezen"
                  className="w-full max-w-xl lg:max-w-2xl h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* Advantage 3: Snelle en nauwkeurige meting */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-md p-6 sm:p-10 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Rapportage</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight leading-snug">
                  Snelle en nauwkeurige meting met duidelijke rapporten, grafieken en waarden
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  Binnen enkele ogenblikken beschikt u over een overzichtelijk digitaal eindrapport. Alle kernparameters (waaronder FEV1, FVC, FEV1/FVC-ratio, PEF en FEF-waarden) worden duidelijk in een overzichtelijke tabel weergegeven inclusief referentiewaarden, percentage voorspeld en duidelijke grafieken.
                </p>
              </div>
              <div className="lg:col-span-7 flex items-center justify-center gap-4 sm:gap-6">
                <div className="w-1/2 max-w-[260px] flex justify-center">
                  <img
                    src="/Spirometrie/spiro-report-top.png"
                    alt="Spirometrie meetrapport grafieken en curves"
                    className="w-full h-auto object-contain drop-shadow-xl transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="w-1/2 max-w-[260px] flex justify-center">
                  <img
                    src="/Spirometrie/spiro-report-bottom.png"
                    alt="Spirometrie meetrapport parameters en historie"
                    className="w-full h-auto object-contain drop-shadow-xl transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Onze service gaat verder dan alleen de levering van een apparaat */}
      <Section bg="white" className="py-20 sm:py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Onze service gaat verder dan alleen de <span className="text-sky-500">levering van een apparaat:</span>
            </h2>
            <div className="h-1.5 w-24 bg-sky-500 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                text: 'Toegang tot een innovatief en efficiënt werkproces',
              },
              {
                icon: <MonitorSmartphone className="w-5 h-5" />,
                text: 'Onderzoeksresultaten direct digitaal beschikbaar, zonder papier of e-mail',
              },
              {
                icon: <Share2 className="w-5 h-5" />,
                text: 'Onderzoeksrapporten eenvoudig te delen via het deel-icoon met één klik',
              },
              {
                icon: <FileText className="w-5 h-5" />,
                text: 'Trainingen, protocollen en duidelijke instructies inbegrepen',
              },
              {
                icon: <GraduationCap className="w-5 h-5" />,
                text: 'Mogelijkheid tot één-op-één training door een longanalist',
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                text: 'Inclusief jaarlijks onderhoud en servicegarantie',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:bg-sky-50/40 hover:border-sky-200 transition-all">
                <div className="text-sky-600 flex-shrink-0 mt-0.5 p-2 bg-white rounded-xl shadow-xs">
                  {item.icon}
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. De mTABLET kan uitgebreid worden met extra functionaliteiten zoals: */}
      <Section bg="muted" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              De mTABLET kan uitgebreid worden met <span className="text-sky-500">extra functionaliteiten zoals:</span>
            </h2>
            <div className="h-1.5 w-24 bg-sky-500 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'ECG',
                path: '/ecg',
                icon: <Activity className="w-6 h-6 text-blue-600" />,
                desc: '12-kanaals ECG'
              },
              {
                title: 'Standaard bloeddrukmeting',
                path: '/bloeddruk',
                icon: <Heart className="w-6 h-6 text-rose-500" />,
                desc: 'Draadloze armmanchetten'
              },
              {
                title: '30-minuten bloeddrukmeting',
                path: '/bloeddruk',
                icon: <Clock className="w-6 h-6 text-rose-500" />,
                desc: 'Geautomatiseerd protocol'
              },
              {
                title: 'Enkel-arm index meting',
                path: '/abi',
                icon: <Target className="w-6 h-6 text-emerald-500" />,
                desc: 'PAD-screening in 1 minuut'
              },
            ].map((module, idx) => (
              <Link
                key={idx}
                to={module.path}
                className="group p-6 bg-white hover:bg-sky-50/30 rounded-3xl border border-slate-100 hover:border-sky-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-4 group-hover:scale-105 transition-transform">
                    {module.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-sky-600 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {module.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
                  <span>Bekijk module</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Video Onderzoek */}
      <Section bg="white" className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="mb-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-700 font-bold text-xs uppercase tracking-wider">
              <PlayCircle className="w-4 h-4" />
              <span>Video Demonstratie</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-gray-900">
              Video Spirometrie Onderzoek
            </h2>
            <div className="h-1.5 w-24 bg-sky-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Bekijk hoe een spirometrie-onderzoek met de MESI mTABLET SPIRO in de praktijk verloopt.
            </p>
          </div>
          <YouTubeEmbed videoId="iyOokGabBI8" title="MESI mTABLET SPIRO Onderzoek Video" />
        </div>
      </Section>

    </div>
  );
};

export default Spirometrie;
