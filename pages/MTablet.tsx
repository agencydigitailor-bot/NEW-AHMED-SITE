import React from 'react';
import Section from '../components/Section';
import FlatButton from '../components/FlatButton';
import { Tablet, Check } from 'lucide-react';
import ECG3DViewer from '../components/ECG3DViewer';
import BP3DViewer from '../components/BP3DViewer';
import EAI3DViewer from '../components/EAI3DViewer';
import Spiro3DViewer from '../components/Spiro3DViewer';

interface ModuleItem {
  id: string;
  name: string;
  features: string[];
  Viewer: React.ComponentType<{ className?: string }>;
  link: string;
}

const modules: ModuleItem[] = [
  {
    id: 'ecg',
    name: 'ECG',
    features: [
      'Draadloze en directe overdracht',
      'Geautomatiseerde analyse en interpretatie',
      'Cardiologische beoordeling',
    ],
    Viewer: ECG3DViewer,
    link: '/ecg',
  },
  {
    id: 'bloeddruk',
    name: 'Bloeddrukmeting',
    features: [
      'Draadloze armmanchetten',
      'Digitale filters',
      'Directe synchronisatie van resultaten',
    ],
    Viewer: BP3DViewer,
    link: '/bloeddruk',
  },
  {
    id: 'enkel-armindex',
    name: 'Enkel-armindex',
    features: [
      'Gelijktijdige meting van 4 ledematen',
      'Snelle meting, maximaal 5 minuten',
      'Opsporing van perifeer arterieel vaatlijden (PAV)',
    ],
    Viewer: EAI3DViewer,
    link: '/abi',
  },
  {
    id: 'spirometer',
    name: 'Spirometer',
    features: [
      'Pre- en postmedicatiemodus',
      'Automatische selectie van de beste curve',
      'Geïntegreerde zelfkalibratie',
    ],
    Viewer: Spiro3DViewer,
    link: '/spirometrie',
  },
];

const MTablet: React.FC = () => {
  return (
    <div className="animate-fade-up">
      {/* 1. Hero Section with Video Background (Matching Landing and Holter) */}
      <Section className="pt-28 pb-20 relative overflow-hidden bg-slate-950">
        {/* Looping Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-85"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085844_21a8f4b3-dea5-4ede-be16-d53f6973bb14.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/20 to-slate-950/60 pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-cyan-200 border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-md">
              <Tablet className="w-4 h-4 text-cyan-300" />
              <span>Alles-in-één Diagnostisch Werkstation</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter leading-[1.05] text-white">
              mesi mTablet <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-100">
                system
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-50 leading-relaxed font-light">
              Het modulaire en draadloze medische werkstation voor elke moderne praktijk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <FlatButton to="/contact" variant="accent" className="h-16 px-10 shadow-xl shadow-blue-950/40 text-base sm:text-lg font-black tracking-wide">
                Contact &amp; Aanvragen
              </FlatButton>
            </div>
          </div>

          <div className="relative flex justify-center w-full">
            <div className="relative group w-full max-w-lg lg:max-w-xl">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <img
                src="/mtablet-hero-lifestyle.jpg"
                alt="MESI mTABLET Diagnostisch Werkstation in moderne praktijkomgeving"
                className="relative rounded-3xl w-full object-cover shadow-2xl border-4 border-white/20 transition-all duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Modules Overview (Clean White Page Background with Deep Bluish Containers) */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-gray-900 tracking-tight">
              De Diagnostische <span className="text-blue-600">Modules</span>
            </h2>
            <p className="text-gray-600 text-lg">Kies de diagnostiek die aansluit op uw praktijkvoering.</p>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {modules.map((module, idx) => {
              const ViewerComponent = module.Viewer;
              return (
                <div 
                  key={module.id} 
                  className={`flex flex-col lg:flex-row gap-10 lg:gap-14 items-center bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-lg hover:shadow-xl transition-all duration-300 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* 3D Model Container: Exactly Matched to hero-bg.mp4 Blue */}
                  <div className="flex-1 w-full flex justify-center">
                    <div className="w-full max-w-md h-80 sm:h-96 rounded-2xl p-4 sm:p-6 flex items-center justify-center bg-gradient-to-b from-[#013972] via-[#0451A3] to-[#013972] border border-[#126FD6]/40 shadow-[inset_0_2px_20px_rgba(0,30,70,0.4)] relative overflow-hidden">
                      {/* Ambient Radial Spotlight matched to hero-bg.mp4 electric highlight */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,153,245,0.35)_0%,transparent_70%)] pointer-events-none" />
                      <div className="absolute bottom-0 inset-x-8 h-12 bg-gradient-to-t from-[#4C99F5]/25 to-transparent blur-md pointer-events-none" />
                      
                      <ViewerComponent className="w-full h-full" />
                    </div>
                  </div>

                  {/* Module Details & Content (Clean White Section Styling) */}
                  <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                      <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                        Module {module.name}
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        {module.name}
                      </h3>
                    </div>

                    <ul className="space-y-3.5 pt-1">
                      {module.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3.5 text-gray-700 font-medium text-base sm:text-lg">
                          <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3">
                      <FlatButton 
                        to={module.link} 
                        variant="primary" 
                        className="h-12 px-7 text-sm font-bold tracking-wide transition-all"
                      >
                        Meer over {module.name}
                      </FlatButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MTablet;
