
import React from 'react';
import Section from '../components/Section';
import FlatButton from '../components/FlatButton';
import { Target, Activity, Heart, Wind, ChevronRight, FileText, Share2, GraduationCap, ShieldCheck, MonitorSmartphone, PlayCircle, Stethoscope, Zap } from 'lucide-react';


const YouTubeEmbed = ({ videoId, title }: { videoId: string, title: string }) => (
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border-8 border-gray-100 shadow-xl">
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

const ABI: React.FC = () => {
  return (
    <div className="animate-fade-up">
      {/* ABI Hero Section */}
      <Section bg="white" className="pt-20 sm:pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-50 text-emerald-600 font-semibold text-sm tracking-wide">
              <Target size={18} />
              MESI mTABLET EAI
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-gray-900">
              Enkel-arm index <span className="text-emerald-500">(EAI)</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl font-medium">
              Ontdek perifeer arterieel vaatlijden (PAV) bij alle risicopatiënten met MESI mTABLET EAI.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Vroegtijdige opsporing van vaatproblemen kan complicaties helpen voorkomen en maakt tijdige inzet van passende preventieve maatregelen mogelijk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <FlatButton to="/contact" variant="primary" className="bg-emerald-500 hover:bg-emerald-600 border-none h-16 px-10">Offerte aanvragen</FlatButton>
              <FlatButton to="/#configurator" variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white h-16 px-10">Naar Configurator</FlatButton>
            </div>
          </div>
          <div className="relative">
            <img
              src="/eai-hero-device.png"
              alt="MESI mTABLET EAI met vier draadloze manchetten"
              className="relative z-10 w-full drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </Section>

      {/* Hoe werkt het? Section */}
      <section id="hoe-werkt-het" className="bg-[#F8FAFC] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <main className="max-w-7xl mx-auto" data-purpose="mesi-showcase-container">
          {/* HeaderSection */}
          <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            {/* Clinical Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5E9] border border-emerald-200 text-[#2E7D32] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-ping"></span>
              <span>MESI mTABLET ABI / DIAGNOSTIEK</span>
            </div>
            {/* Main Headline */}
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1E4D] leading-tight">
              Geavanceerde Enkel-Armindex (EAI) &amp; Bloeddrukmeting
            </h2>
            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
              Volledig geautomatiseerde, gelijktijdige screening van armen en enkels met klinische precisie.
            </p>
            {/* Key Performance Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs font-medium text-slate-600">
              <span className="bg-white border border-slate-200 px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                EAI / ABI Diagnostiek
              </span>
              <span className="bg-white border border-slate-200 px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                Snelheid: ≤ 5 min
              </span>
              <span className="bg-white border border-slate-200 px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                4 Manchetten tegelijk
              </span>
            </div>
          </header>

          {/* VisualHardwareStage */}
          <section className="relative bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
            {/* Grid Container: 3 Columns on Large Screens */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* LeftCallouts */}
              <div className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1" data-purpose="left-feature-column">
                <article className="group relative bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#0B1E4D] tracking-tight group-hover:text-emerald-700 transition-colors">
                        Snelle meting max. 5 minuten
                      </h3>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center absolute -right-3 top-1/2 -translate-y-1/2">
                    <div className="w-3 h-px bg-emerald-600/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600/70 ring-2 ring-emerald-100/60"></div>
                  </div>
                </article>

                <article className="group relative bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#0B1E4D] tracking-tight group-hover:text-emerald-700 transition-colors">
                        Gelijktijdige meting van armen en enkels
                      </h3>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center absolute -right-3 top-1/2 -translate-y-1/2">
                    <div className="w-3 h-px bg-emerald-600/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600/70 ring-2 ring-emerald-100/60"></div>
                  </div>
                </article>

                <article className="group relative bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#0B1E4D] tracking-tight group-hover:text-emerald-700 transition-colors">
                        Betrouwbaar en filtert meetfouten
                      </h3>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center absolute -right-3 top-1/2 -translate-y-1/2">
                    <div className="w-3 h-px bg-emerald-600/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600/70 ring-2 ring-emerald-100/60"></div>
                  </div>
                </article>
              </div>

              {/* CenterProductView */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 py-4" data-purpose="central-device-stage">
                <div className="relative w-full max-w-lg mx-auto flex items-center justify-center py-2">
                  <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-visible">
                    <div className="absolute w-[520px] h-[360px] bg-gradient-to-tr from-emerald-200/35 via-teal-100/30 to-blue-100/25 rounded-full blur-3xl"></div>
                    <div className="absolute w-72 h-72 rounded-full border border-emerald-300/30 bg-emerald-50/20"></div>
                    <div className="absolute w-96 h-96 rounded-full border border-dashed border-[#5A7363]/25"></div>
                    <div className="absolute w-[460px] h-[460px] rounded-full border border-slate-200/60"></div>
                    <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 540 380" fill="none" preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <linearGradient id="curveGradPrimary" x1="0%" y1="50%" x2="100%" y2="50%">
                          <stop offset="0%" stopColor="#2E7D32" stopOpacity="0"></stop>
                          <stop offset="25%" stopColor="#5A7363" stopOpacity="0.35"></stop>
                          <stop offset="50%" stopColor="#10B981" stopOpacity="0.6"></stop>
                          <stop offset="75%" stopColor="#5A7363" stopOpacity="0.35"></stop>
                          <stop offset="100%" stopColor="#0B1E4D" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient id="curveGradSecondary" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#64748B" stopOpacity="0"></stop>
                          <stop offset="35%" stopColor="#38A169" stopOpacity="0.28"></stop>
                          <stop offset="70%" stopColor="#5A7363" stopOpacity="0.32"></stop>
                          <stop offset="100%" stopColor="#64748B" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient id="ecgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0"></stop>
                          <stop offset="30%" stopColor="#2E7D32" stopOpacity="0.25"></stop>
                          <stop offset="50%" stopColor="#10B981" stopOpacity="0.7"></stop>
                          <stop offset="70%" stopColor="#38A169" stopOpacity="0.25"></stop>
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path d="M -40 210 C 60 210, 100 130, 200 135 C 280 140, 310 240, 420 220 C 490 205, 530 150, 580 155" stroke="url(#curveGradPrimary)" strokeWidth="2" strokeLinecap="round"></path>
                      <path d="M -20 160 C 80 120, 150 250, 270 230 C 370 215, 430 120, 560 140" stroke="url(#curveGradSecondary)" strokeWidth="1.5" strokeDasharray="4 4"></path>
                      <path d="M 40 270 C 120 280, 180 260, 230 200 C 265 160, 330 165, 370 220 C 415 280, 460 275, 520 250" stroke="url(#curveGradPrimary)" strokeWidth="1.2" strokeOpacity="0.4"></path>
                      <path d="M 60 190 L 170 190 L 180 178 L 192 206 L 204 150 L 216 220 L 226 182 L 236 190 L 480 190" stroke="url(#ecgGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5"></path>
                      <circle cx="204" cy="150" r="3" fill="#10B981" fillOpacity="0.7"></circle>
                      <circle cx="270" cy="230" r="2.5" fill="#5A7363" fillOpacity="0.6"></circle>
                      <circle cx="370" cy="220" r="2.5" fill="#38A169" fillOpacity="0.6"></circle>
                    </svg>
                  </div>
                  <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 500 360" fill="none" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#5A7363" stopOpacity="0.45"></stop>
                        <stop offset="70%" stopColor="#38A169" stopOpacity="0.35"></stop>
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.6"></stop>
                      </linearGradient>
                      <linearGradient id="lineGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#5A7363" stopOpacity="0.45"></stop>
                        <stop offset="70%" stopColor="#38A169" stopOpacity="0.35"></stop>
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.6"></stop>
                      </linearGradient>
                      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur"></feGaussianBlur>
                        <feMerge>
                          <feMergeNode in="blur"></feMergeNode>
                          <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                      </filter>
                    </defs>
                    <path d="M 0 65 C 75 65, 110 120, 168 130" stroke="url(#lineGradLeft)" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round"></path>
                    <circle cx="168" cy="130" r="2.5" fill="#38A169" filter="url(#softGlow)"></circle>
                    <circle cx="168" cy="130" r="1" fill="#FFFFFF"></circle>
                    <path d="M 0 180 C 65 180, 85 192, 138 194" stroke="url(#lineGradLeft)" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round"></path>
                    <circle cx="138" cy="194" r="2.5" fill="#38A169" filter="url(#softGlow)"></circle>
                    <circle cx="138" cy="194" r="1" fill="#FFFFFF"></circle>
                    <path d="M 0 295 C 70 295, 105 265, 155 250" stroke="url(#lineGradLeft)" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round"></path>
                    <circle cx="155" cy="250" r="2.5" fill="#38A169" filter="url(#softGlow)"></circle>
                    <circle cx="155" cy="250" r="1" fill="#FFFFFF"></circle>
                    <path d="M 500 65 C 425 65, 390 115, 332 126" stroke="url(#lineGradRight)" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round"></path>
                    <circle cx="332" cy="126" r="2.5" fill="#38A169" filter="url(#softGlow)"></circle>
                    <circle cx="332" cy="126" r="1" fill="#FFFFFF"></circle>
                    <path d="M 500 180 C 435 180, 400 165, 292 162" stroke="url(#lineGradRight)" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round"></path>
                    <circle cx="292" cy="162" r="2.5" fill="#38A169" filter="url(#softGlow)"></circle>
                    <circle cx="292" cy="162" r="1" fill="#FFFFFF"></circle>
                    <path d="M 500 295 C 430 295, 410 260, 362 245" stroke="url(#lineGradRight)" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round"></path>
                    <circle cx="362" cy="245" r="2.5" fill="#38A169" filter="url(#softGlow)"></circle>
                    <circle cx="362" cy="245" r="1" fill="#FFFFFF"></circle>
                  </svg>
                  <div className="relative z-10 w-full flex items-center justify-center px-4">
                    <img 
                      src="/eai-clean-cuffs.png" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://lh3.googleusercontent.com/aida-public/AB6AXuAkZ0HUZtGQsN0XsYn0lyy_ic0ObTVAgnx5tAQneKyP7bzs4ZUWEnuw_JV0OLW2boWyl9pzQz611l2fkMmEbcRE52QGm4Mn1FOHz8hXKSXUVXrFqRNLUiaGwEJ-v8uj-TNA9FwKIp5hrStoCx4GL9OPUyOjGk5wxSoRwr0VqpFg3Ph1vOXHdGGACBB7XS5lXH0R-qz-urBy183CmmAW2c5uIXA145w-khWu67k_i2z02mCOFQRj6hbwqueYLy-LeJoakg";
                      }}
                      alt="MESI mTABLET ABI Systeem met 4 Manchetten" 
                      className="w-full max-w-md object-contain drop-shadow-xl transition-all duration-300 hover:scale-[1.02]" 
                    />
                  </div>
                </div>
              </div>

              {/* RightCallouts */}
              <div className="lg:col-span-3 flex flex-col gap-6 order-3" data-purpose="right-feature-column">
                <article className="group relative bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300">
                  <div className="hidden lg:flex items-center absolute -left-3 top-1/2 -translate-y-1/2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600/70 ring-2 ring-emerald-100/60"></div>
                    <div className="w-3 h-px bg-emerald-600/40"></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#0B1E4D] tracking-tight group-hover:text-emerald-700 transition-colors">
                        Plethysmografische &amp; oscillometrische
                      </h3>
                    </div>
                  </div>
                </article>

                <article className="group relative bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300">
                  <div className="hidden lg:flex items-center absolute -left-3 top-1/2 -translate-y-1/2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600/70 ring-2 ring-emerald-100/60"></div>
                    <div className="w-3 h-px bg-emerald-600/40"></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#0B1E4D] tracking-tight group-hover:text-emerald-700 transition-colors">
                        PADsense™ interpretatie
                      </h3>
                    </div>
                  </div>
                </article>

                <article className="group relative bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300">
                  <div className="hidden lg:flex items-center absolute -left-3 top-1/2 -translate-y-1/2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600/70 ring-2 ring-emerald-100/60"></div>
                    <div className="w-3 h-px bg-emerald-600/40"></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#0B1E4D] tracking-tight group-hover:text-emerald-700 transition-colors">
                        Foutdetectiesysteem
                      </h3>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </main>
      </section>

      {/* Werkwijze + Verschil met Doppler */}
      <Section bg="muted" className="py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Werkwijze MESI <span className="text-emerald-500">EAI-apparaat</span>
            </h2>
            <div className="h-1.5 w-24 bg-emerald-500 rounded-full"></div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              De MESI mTABLET ABI is een volledig geautomatiseerde oplossing voor snelle en betrouwbare enkel-arm index metingen. Het systeem is ontworpen voor dagelijks klinisch gebruik, maakt vroege detectie van perifeer arterieel vaatlijden (PAD) mogelijk en ondersteunt veilige besluitvorming.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Stethoscope className="text-emerald-500 w-7 h-7 flex-shrink-0" /> Verschil met Doppler
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In tegenstelling tot de traditionele Doppler-methode, die tijdsintensief is en afhankelijk van de ervaring van de uitvoerder, kan met het MESI-systeem een meting binnen circa 2 minuten worden uitgevoerd. Hierdoor is het onderzoek eenvoudig uit te voeren door zowel de POH als de doktersassistente.
            </p>
          </div>
        </div>
      </Section>

      {/* Gedetailleerd rapport */}
      <Section bg="muted" className="py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Gedetailleerd rapport</span>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Het systeem genereert een gedetailleerd meetrapport waarin ook eerdere metingen worden meegenomen. Dankzij de beoordeling van pulsgolfvormen en oscillatiegrafieken biedt het bovendien klinisch nauwkeurige inzichten, met duidelijke signalering bij mogelijke ernstige vormen van perifeer arterieel vaatlijden (PAV).
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm flex justify-center">
              <img
                src="/eai-rapport-clean.png"
                alt="Voorbeeld EAI-rapport op de MESI mTABLET"
                className="relative w-full drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Onze service */}
      <Section bg="white" className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Onze service gaat verder dan alleen <span className="text-emerald-500">de levering van een apparaat</span>
            </h2>
            <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full mt-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Zap className="w-5 h-5" />, desc: 'Toegang tot een innovatief en efficiënt werkproces.' },
              { icon: <MonitorSmartphone className="w-5 h-5" />, desc: 'Onderzoeksresultaten direct digitaal beschikbaar, zonder papier of e-mail.' },
              { icon: <Share2 className="w-5 h-5" />, desc: 'Onderzoeksrapporten eenvoudig te delen via het deel-icoon met één klik.' },
              { icon: <GraduationCap className="w-5 h-5" />, desc: 'Trainingen, protocollen en duidelijke instructies inbegrepen.' },
              { icon: <ShieldCheck className="w-5 h-5" />, desc: 'Inclusief jaarlijks onderhoud en servicegarantie.' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-gray-700 text-sm sm:text-base font-medium leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Video EAI onderzoek */}
      <Section bg="white" className="py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="mb-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <PlayCircle className="w-4 h-4" />
              <span>Video</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Video EAI onderzoek</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Bekijk hoe een enkel-arm index meting met de MESI mTABLET in de praktijk verloopt.</p>
          </div>
          <YouTubeEmbed videoId="n07e4VoxjRM" title="MESI mTABLET EAI Demonstratie" />
        </div>
      </Section>

    </div>
  );
};

export default ABI;
