import React from 'react';
import Section from '../components/Section';
import FlatButton from '../components/FlatButton';
import { 
  Activity, 
  Wifi, 
  ShieldCheck, 
  CheckCircle2, 
  Heart, 
  Wind, 
  ChevronRight, 
  Share2, 
  Database, 
  Zap, 
  CloudCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const YouTubeEmbed = ({ videoId, title }: { videoId: string; title: string }) => (
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 group border border-slate-200 shadow-xl transition-transform duration-300 hover:scale-[1.01]">
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

const ECG: React.FC = () => {
  return (
    <div className="animate-fade-up">
      {/* 1. Hero Section */}
      <Section className="pt-28 pb-20 relative overflow-hidden bg-slate-950 text-white min-h-[50vh] flex items-center">
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
          
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-cyan-200 font-semibold text-xs sm:text-sm tracking-wide backdrop-blur-md border border-white/20">
              <Activity size={16} className="text-cyan-300 animate-pulse" />
              <span>Medische Diagnostiek • Eerstelijnszorg</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
                MESI <span className="text-cyan-200">mTablet</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-blue-50/90 leading-relaxed max-w-2xl font-normal">
              Een innovatief en betrouwbaar 12-lead ECG-systeem, ontworpen om de diagnostische workflow in uw huisartsenpraktijk of kliniek aanzienlijk te versnellen en vereenvoudigen.
            </p>

            <div className="pt-2">
              <FlatButton 
                to="/contact" 
                variant="white"
                className="h-14 px-8 font-bold text-base flex items-center gap-2 rounded-full shadow-lg"
              >
                <span>Offerte aanvragen</span>
                <ArrowRight className="w-5 h-5" />
              </FlatButton>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400 to-blue-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white p-4 sm:p-6">
                <img
                  src="/ecg-hero-device.jpg"
                  alt="mTABLET van MESI draadloos ECG apparaat"
                  className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                  <Wifi className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Technologie</div>
                  <div className="text-sm font-extrabold text-slate-900">100% Draadloos &amp; Digitaal</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* 2. Kernfunctionaliteiten & Uitbreidingen */}
      <Section bg="white" className="py-24">
        <div className="max-w-7xl mx-auto">
          {/* Harmonized Centered Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Innovatief Systeem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              mTABLET van MESI het volledig digitaal en draadloos elektrocardiogram apparaat
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-2"></div>
          </div>

          {/* 4 Key Points — 2x2 grid with equal proportions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                title: 'Een betrouwbaar draadloos ECG apparaat',
                icon: <Wifi className="w-6 h-6 text-blue-600" />
              },
              {
                title: 'Het ingebouwde werkproces bespaart tijd voor u en uw medewerkers',
                icon: <Zap className="w-6 h-6 text-amber-500" />
              },
              {
                title: 'ECG’s zijn direct beschikbaar ter beoordeling en in het patiëntendossier op te slaan',
                icon: <Database className="w-6 h-6 text-emerald-600" />
              },
              {
                title: 'ECG’s zijn makkelijk te delen voor een directe Second Opinion',
                icon: <Share2 className="w-6 h-6 text-indigo-600" />
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-3.5 bg-white rounded-xl shadow-sm border border-slate-100 flex-shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Video Demonstrations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto pt-8 border-t border-slate-100">
            <div className="space-y-3 bg-slate-50 p-6 rounded-3xl border border-slate-200/80 shadow-sm">
              <YouTubeEmbed videoId="LONw8MWWpPU" title="MESI mTABLET ECG Demonstratie" />
              <p className="text-sm text-slate-600 text-center font-medium pt-2">
                De MESI mTABLET ECG in werking.
              </p>
            </div>
            <div className="space-y-3 bg-slate-50 p-6 rounded-3xl border border-slate-200/80 shadow-sm">
              <YouTubeEmbed videoId="9Ofneyq7czo" title="MESI mTABLET ECG Demonstratie en Informatie-uitwisseling" />
              <p className="text-sm text-slate-600 text-center font-medium pt-2">
                Hoe de mTABLET communiceert met mRECORDS.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Voordelen van ECG dienstverlening via ons */}
      <Section id="voordelen" bg="muted" className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Harmonized Centered Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-700 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Totale Service &amp; Ondersteuning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Voordelen van ECG dienstverlening via ons
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-2"></div>
            <p className="text-xl text-blue-700 font-semibold italic">
              "Onze service biedt meer dan alleen een ECG-apparaat:"
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
            
            {/* Logo Card with matching proportion */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-lg flex items-center justify-center min-h-[340px]">
                <img
                  src="/logo-transparent.png"
                  alt="AH Medische Dienstverlening logo"
                  className="w-full max-w-xs mx-auto object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Checklist items with matching card heights */}
            <div className="lg:col-span-7 space-y-3.5">
              {[
                'U krijgt toegang tot een innovatief en efficiënt werkproces',
                'Het ECG is direct digitaal beschikbaar, zonder tussenkomst van papieren of e-mails',
                'Het vragen van een cardiologische beoordeling of overleg met een cardioloog is via ons mogelijk',
                'Trainingen, protocollen en de nodige instructies worden door ons verzorgd',
                'Jaarlijks onderhoud en service garanties zijn inbegrepen',
              ].map((title, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200"
                >
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-base leading-snug">
                    {title}
                  </h4>
                </div>
              ))}
            </div>

          </div>

        </div>
      </Section>

      {/* 4. Synchronisatie */}
      <Section bg="white" className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">

          {/* Harmonized Centered Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider">
              <CloudCheck className="w-4 h-4 text-blue-600" />
              <span>Synchronisatie</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Synchronisatie
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-2"></div>
          </div>

          {/* Three-column diagram with balanced proportions */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-16">

            {/* Left: mTABLET device card */}
            <div className="w-full flex justify-center">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 shadow-sm w-full flex items-center justify-center min-h-[260px]">
                <img
                  src="/ecg-hero-device.jpg"
                  alt="mTABLET"
                  className="max-h-[220px] w-auto object-contain drop-shadow-md rounded-lg"
                />
              </div>
            </div>

            {/* Center: sync badge + animated arrow + caption */}
            <div className="w-full flex flex-col items-center justify-center px-2">
              <div className="text-center mb-3">
                <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm border border-blue-100">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582M20 20v-5h-.581M4.582 9A7.001 7.001 0 0112 5c2.49 0 4.694 1.038 6.302 2.7M19.418 15A7.001 7.001 0 0112 19c-2.49 0-4.694-1.038-6.302-2.7" />
                  </svg>
                  Synchronisatie
                </span>
              </div>
              <div className="w-full h-16 flex items-center justify-center relative">
                <svg className="w-full h-full text-blue-600" viewBox="0 0 200 40" preserveAspectRatio="none">
                  <path
                    d="M10,20 Q100,5 190,20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 1000,
                      strokeDashoffset: 1000,
                      animation: 'drawSyncArrow 2s ease-in-out infinite alternate'
                    }}
                  />
                  <polygon fill="currentColor" points="190,20 180,15 180,25" />
                </svg>
                <style>{`
                  @keyframes drawSyncArrow {
                    to { stroke-dashoffset: 0; }
                  }
                `}</style>
              </div>
              <div className="mt-2 text-center bg-slate-50 p-4 rounded-xl border border-gray-200 shadow-sm w-full">
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  mTABLET maakt een 12-lead ECG welk de arts onmiddellijk kan zien, beoordelen en delen
                </p>
              </div>
            </div>

            {/* Right: mRECORDS screenshot card */}
            <div className="w-full flex justify-center">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 shadow-sm w-full flex items-center justify-center min-h-[260px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3octOGEoLilmgpBAACBLhfVLVoZYMpzPEm_iYxOscvz8TQrmEYbCQdz1HHPO_U33P-XUf9-JxU7sVIOepoEV3HzHAEHNj011WcFxHPgOoiq7Ed6MP2bdDPkhddEj_roXB6x0j4VGQkdvMJITlpImgMdoCo4GTqBK9X-nz2ZTD--qB1SuFxPpXEM5JqUjoTvftLSyySm5BqJnqBb_Mdb2RfRFqhZ-YduVuhFm8xjh_mjLxWFJczbYd"
                  alt="mRECORDS"
                  className="max-h-[220px] w-auto object-contain drop-shadow-md rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Two info cards with harmonious grid and padding */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                De MESI mTABLET
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                De MESI mTABLET is een digitaal ECG apparaat welk op een veilige manier alle belanghebbenden toegang biedt tot de ECG. De ingebouwde communicatiemethodes en infrastructuur voorkomen misverstanden, inconsistenties in de rapportage. Hiermee vermindert de tijd die aan de diagnose en behandeling wordt besteed.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                mRECORDS
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Met de mRECORDS, de beveiligde Cloud omgeving, kunnen diagnoses en consultaties op een eenvoudige en veilige manier worden uitgevoerd. Daarnaast kunnen de metingen met één klik beveiligd worden gedeeld, zowel intern als extern, en eenvoudig worden geïntegreerd in uw elektronisch patiëntendossier (EPD).
              </p>
            </div>
          </div>

        </div>
      </Section>

      {/* 5. Andere Modules & Call to Action */}
      <Section bg="muted" className="py-24 bg-slate-50 border-t border-gray-100 text-center">
        <div className="max-w-6xl mx-auto space-y-12">

          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Bekijk ook onze andere diagnostische modules
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-2"></div>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Breid uw MESI mTABLET uit met aanvullende eerstelijns diagnostiek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              to="/bloeddruk"
              className="bg-white hover:bg-blue-50/50 p-8 rounded-3xl text-gray-900 transition-all group border border-gray-200/80 hover:border-blue-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <Heart className="w-10 h-10 mx-auto mb-4 text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="font-extrabold block text-lg mb-1">Bloeddrukmeting</span>
                <span className="text-xs text-gray-500">Standaard &amp; 30-minuten protocol</span>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-blue-600 uppercase tracking-wider">
                Meer info →
              </div>
            </Link>
            <Link
              to="/abi"
              className="bg-white hover:bg-blue-50/50 p-8 rounded-3xl text-gray-900 transition-all group border border-gray-200/80 hover:border-blue-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <ChevronRight className="w-10 h-10 mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span className="font-extrabold block text-lg mb-1">Enkel-arm index</span>
                <span className="text-xs text-gray-500">Automatische EAI-meting in 1 minuut</span>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-blue-600 uppercase tracking-wider">
                Meer info →
              </div>
            </Link>
            <Link
              to="/spirometrie"
              className="bg-white hover:bg-blue-50/50 p-8 rounded-3xl text-gray-900 transition-all group border border-gray-200/80 hover:border-blue-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <Wind className="w-10 h-10 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="font-extrabold block text-lg mb-1">Spirometrie</span>
                <span className="text-xs text-gray-500">Draadloze longfunctiediagnostiek</span>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-blue-600 uppercase tracking-wider">
                Meer info →
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <FlatButton
              to="/#configurator"
              variant="primary"
              className="h-14 px-10 text-base font-extrabold shadow-xl shadow-blue-500/25"
            >
              Naar Configurator
            </FlatButton>
            <FlatButton
              to="/contact"
              variant="outline"
              className="h-14 px-10 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-base font-extrabold"
            >
              Neem Contact Op
            </FlatButton>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default ECG;
