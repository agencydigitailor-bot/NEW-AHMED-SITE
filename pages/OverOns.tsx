import React from 'react';
import Section from '../components/Section';
import FlatCard from '../components/FlatCard';
import { Target, Users, Shield, Heart, HeartHandshake } from 'lucide-react';


const OverOns: React.FC = () => {
  return (
    <div className="animate-fade-up">
      {/* Hero Section with Video Background */}
      <Section className="relative overflow-hidden min-h-[50vh] flex items-center pt-20 pb-24 bg-slate-950">
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

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-cyan-200 border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
            <HeartHandshake className="w-4 h-4 text-cyan-300" />
            <span>Over Ons</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-white drop-shadow-md">
            Over AH Medische <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-100">Dienstverlening</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
            Innovatieve medische dienstverlening voor functieonderzoeken binnen de eerste- en tweedelijnszorg.
          </p>
        </div>
      </Section>

      {/* Main Content & 3D Logo Section */}
      <Section bg="white" className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group w-full max-w-lg">
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-3xl blur-lg opacity-15 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl flex items-center justify-center">
                <img
                  src="/ahmd-logo-full.png"
                  alt="AH Medische Dienstverlening Logo"
                  className="w-full max-w-md max-h-[380px] object-contain mx-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-wider">
              Onze Missie &amp; Visie
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Innovatie en expertise in <span className="text-blue-600">functieonderzoeken</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              AH Medische Dienstverlening is een innovatieve organisatie gespecialiseerd in het uitvoeren en ondersteunen van functieonderzoeken binnen het cardiologische en hypertensie vakgebied voor de eerste- en tweedelijnszorg.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Met onze dienstverlening ondersteunen wij zorginstellingen en zorgprofessionals bij het efficiënt uitvoeren van onderzoeken door technologie, medische expertise en praktische ondersteuning te combineren.
            </p>
          </div>
        </div>
      </Section>

      {/* Kernwaarden */}
      <Section bg="muted" className="py-24 bg-slate-100/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-gray-900 tracking-tight">
              Onze <span className="text-blue-600">Kernwaarden</span>
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FlatCard title="Innovatie" description="Altijd de nieuwste draadloze technologieën en digitale werkprocessen." icon={<Shield className="text-blue-600" />} variant="white" />
            <FlatCard title="Kwaliteit" description="Klinisch gevalideerde apparatuur en beoordeling door cardiologen." icon={<Target className="text-blue-600" />} variant="white" />
            <FlatCard title="Service" description="Volledige ontzorging, trainingen, protocollen en persoonlijke support." icon={<Users className="text-blue-600" />} variant="white" />
            <FlatCard title="Toegankelijkheid" description="Betaalbare oplossingen zonder zware investeringen voor elke praktijk." icon={<Heart className="text-blue-600" />} variant="white" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default OverOns;
