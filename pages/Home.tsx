import React from 'react';
import Section from '../components/Section';
import FlatButton from '../components/FlatButton';
import { Smartphone, ArrowRight, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import MTabletConfigurator from '../components/MTabletConfigurator';
import HomeMonitor3DViewer from '../components/HomeMonitor3DViewer';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-up">
      {/* 1. Hero Title Section */}
      <Section className="relative overflow-hidden pt-14 pb-10 sm:pt-18 sm:pb-14 bg-slate-950 flex items-center">
        {/* Background Video with reduced filter */}
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
          {/* Reduced overlay filter for clear and vibrant video */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/20 to-slate-950/60 pointer-events-none"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-cyan-200 border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
            <HeartPulse className="w-4 h-4 text-cyan-300" />
            <span>Medische Diagnostiek in de Eerstelijnszorg</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white drop-shadow-md">
            Innovatieve Cardiologie & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-100">Hypertensie Diagnostiek</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
            Service-gebaseerde diagnostische oplossingen, speciaal ontwikkeld voor de moderne zorgpraktijk.
          </p>


        </div>
      </Section>

      {/* 2. Featured Containers Section (Clean light background, NO blue background) */}
      <Section id="diagnostiek-oplossingen" className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-gray-900 tracking-tight">
              Onze <span className="text-blue-600">Oplossingen</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Kies hieronder de diagnostische service die aansluit bij uw praktijk.
            </p>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
            
            {/* Holter Container */}
            <Link
              to="/holter"
              className="group relative bg-white border border-gray-200/90 hover:border-blue-400 rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-end gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Holter Monitoring
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 font-normal">
                  Patiëntvriendelijke Holter-recorder voor 24 uur of langer hartritmemonitoring
                </p>

                {/* Container Image */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-gray-100 mb-6 group-hover:border-blue-200 transition-colors shadow-sm">
                  <img
                    src="/holter-landing.jpg"
                    alt="Holter Monitoring - KECG-3 Patch"
                    className="w-full h-64 sm:h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-blue-600 uppercase tracking-widest font-bold">Holter Service</span>
                <span className="text-xs text-gray-500 group-hover:text-blue-600 uppercase tracking-widest font-semibold flex items-center gap-1">
                  Meer info →
                </span>
              </div>
            </Link>

            {/* MESI mTABLET Container */}
            <Link
              to="/mtablet"
              className="group relative bg-white border border-gray-200/90 hover:border-blue-400 rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-end gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  MESI mTABLET
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 font-normal">
                  Complete diagnostiek: ECG, 30-minuten bloeddrukmeting, EAI en spirometrie
                </p>

                {/* 3D Model Presentation - Free and Borderless */}
                <div className="relative mb-6 flex items-center justify-center">
                  <HomeMonitor3DViewer />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-blue-600 uppercase tracking-widest font-bold">mTABLET Werkstation</span>
                <span className="text-xs text-gray-500 group-hover:text-blue-600 uppercase tracking-widest font-semibold flex items-center gap-1">
                  Meer info →
                </span>
              </div>
            </Link>

            {/* Mobile Zorg App Container */}
            <div className="group relative bg-white border border-gray-200/90 hover:border-purple-300 rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-end gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <Smartphone className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Mobile Zorg App
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 font-normal">
                  Gegevensverwerking · Kwaliteitsborging · Interne protocollen
                </p>

                {/* Container Image */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-gray-100 mb-6 group-hover:border-purple-200 transition-colors shadow-sm">
                  <img
                    src="/mobile-zorg-app.jpg"
                    alt="Mobile Zorg App - Diagnostisch Portaal"
                    className="w-full h-64 sm:h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-purple-600 uppercase tracking-widest font-bold">App Platform</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  Binnenkort →
                </span>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* 3. Visual Section Divider / Cut with Patient in Waiting Room */}
      <section className="relative w-full h-[360px] sm:h-[460px] overflow-hidden">
        <img
          src="/patient-waiting-room.jpg"
          alt="Patiënt in moderne zorgpraktijk"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
            <div className="max-w-xl text-white space-y-4">
              <span className="inline-block px-3.5 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-cyan-200 border border-white/20 shadow-md">
                Patiëntgericht &amp; Efficiënt
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-md">
                Toegankelijke diagnostiek in een vertrouwde praktijkomgeving
              </h3>
              <p className="text-blue-100 text-sm sm:text-base font-light leading-relaxed">
                Directe zorgverlening zonder onnodige doorlooptijden of ziekenhuisbezoeken voor uw patiënten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MTablet Configurator Section */}
      <MTabletConfigurator id="configurator" bg="white" className="py-24 border-t border-gray-100" />

      {/* 5. Call to Action Section */}
      <Section bg="muted" className="text-center py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto opacity-50 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl mix-blend-multiply"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-100 rounded-full blur-3xl mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Klaar om uw diagnostiek te vernieuwen?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 font-light">
            Sluit u aan bij het netwerk van zorgprofessionals die gebruikmaken van onze geavanceerde diagnostische diensten.
          </p>
          <FlatButton to="/contact" variant="primary" className="h-14 px-10 text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40">
            Neem Contact Op
          </FlatButton>
        </div>
      </Section>
    </div>
  );
};

export default Home;
 