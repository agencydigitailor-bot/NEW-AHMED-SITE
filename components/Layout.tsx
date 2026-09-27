import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Activity, 
  ChevronDown, 
  ChevronRight, 
  Tablet, 
  Heart, 
  Wind, 
  Target 
} from 'lucide-react';
import { NAV_LINKS, SERVICE_LINKS, CONTACT_INFO } from '../constants';
import FlatButton from './FlatButton';

const MTABLET_MODULE_PAGES = [
  {
    name: '12-kanaals ECG',
    shortName: 'ECG',
    path: '/ecg',
    desc: 'Draadloos ECG met cardiologische beoordeling',
    icon: Activity,
    badge: '12-kanaals',
    accentColor: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    name: 'Bloeddruk',
    shortName: 'Bloeddruk',
    path: '/bloeddruk',
    desc: 'Standaard- en 30-minuten protocol',
    icon: Heart,
    badge: '30-min',
    accentColor: 'text-rose-500',
    bgColor: 'bg-rose-50'
  },
  {
    name: 'Enkel-arm Index',
    shortName: 'Enkel-arm (ABI)',
    path: '/abi',
    desc: 'PAD-screening in 1 minuut met PADsense™',
    icon: Target,
    badge: 'EAI / ABI',
    accentColor: 'text-emerald-500',
    bgColor: 'bg-emerald-50'
  },
  {
    name: 'Spirometrie',
    shortName: 'Spirometrie',
    path: '/spirometrie',
    desc: 'Draadloze longfunctiediagnostiek',
    icon: Wind,
    badge: 'Spiro',
    accentColor: 'text-amber-500',
    bgColor: 'bg-amber-50'
  }
];

const MTABLET_DROPDOWN_LINKS = [
  { name: 'mTABLET Overzicht', path: '/mtablet' },
  { name: '12-kanaals ECG', path: '/ecg' },
  { name: 'Bloeddruk', path: '/bloeddruk' },
  { name: 'Enkel-arm Index (ABI)', path: '/abi' },
  { name: 'Spirometrie', path: '/spirometrie' },
];

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMTabletExpanded, setIsMobileMTabletExpanded] = useState(true);
  const location = useLocation();

  const isMTabletSection = ['/mtablet', '/ecg', '/bloeddruk', '/abi', '/spirometrie'].includes(location.pathname);
  const isModulePage = ['/bloeddruk', '/abi', '/spirometrie'].includes(location.pathname);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header Wrapper */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        {/* Main Navbar */}
        <nav className="max-w-7xl mx-auto px-6 h-12 sm:h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group py-1">
            <img
              src="/logo.png"
              alt="AH Medische Dienstverlening"
              className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            {NAV_LINKS.map((link) => {
              if (link.path === '/mtablet') {
                return (
                  <div
                    key={link.path}
                    className="relative h-full flex items-center group cursor-pointer"
                  >
                    <Link
                      to={link.path}
                      className={`inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider hover:text-blue-500 transition-colors py-2 ${
                        isMTabletSection ? 'text-blue-500' : 'text-gray-600'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-gray-400 group-hover:text-blue-500"
                      />
                    </Link>

                    {/* Submenu Dropdown with zero-gap hover bridge */}
                    <div
                      className="absolute top-[75%] left-1/2 -translate-x-1/2 pt-2 w-64 z-50 opacity-0 invisible -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 ring-1 ring-black/5 overflow-hidden">
                        {MTABLET_DROPDOWN_LINKS.map((subPage, idx) => {
                          const isCurrent = location.pathname === subPage.path;
                          return (
                            <React.Fragment key={subPage.path}>
                              {idx === 1 && <div className="my-1 border-t border-gray-100" />}
                              <Link
                                to={subPage.path}
                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                  isCurrent
                                    ? 'text-blue-600 bg-blue-50/70 font-semibold'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium'
                                }`}
                              >
                                {subPage.name}
                              </Link>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-wider hover:text-blue-500 transition-colors ${
                    location.pathname === link.path ? 'text-blue-500' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <FlatButton to="/contact" variant="primary" className="h-12 px-6 text-sm">
              Contact
            </FlatButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-gray-900" onClick={toggleMenu} aria-label="Open menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b-4 border-gray-100 absolute w-full left-0 top-full animate-fade-up z-50 shadow-xl max-h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="flex flex-col p-6 gap-3">
              {NAV_LINKS.map((link) => {
                if (link.path === '/mtablet') {
                  return (
                    <div key={link.path} className="flex flex-col border-b border-gray-100 pb-2">
                      <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                        <Link
                          to={link.path}
                          onClick={toggleMenu}
                          className={`text-lg font-bold uppercase tracking-wider ${
                            isMTabletSection ? 'text-blue-500' : 'text-gray-900'
                          }`}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setIsMobileMTabletExpanded(!isMobileMTabletExpanded)}
                          className="p-2 text-gray-500 hover:text-blue-600"
                          aria-label="Toggle mTABLET subpages"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              isMobileMTabletExpanded ? 'rotate-180 text-blue-600' : ''
                            }`}
                          />
                        </button>
                      </div>
                      {isMobileMTabletExpanded && (
                        <div className="pl-3 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-xl mt-1 border border-slate-100">
                          {MTABLET_DROPDOWN_LINKS.map((subPage) => {
                            const isCurrent = location.pathname === subPage.path;
                            return (
                              <Link
                                key={subPage.path}
                                to={subPage.path}
                                onClick={toggleMenu}
                                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                  isCurrent
                                    ? 'text-blue-600 bg-blue-50 font-bold'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100 font-medium'
                                }`}
                              >
                                {subPage.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={toggleMenu}
                    className={`text-lg font-bold uppercase tracking-wider p-2 hover:bg-gray-100 rounded ${
                      location.pathname === link.path ? 'text-blue-500' : 'text-gray-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <FlatButton to="/contact" onClick={toggleMenu} className="w-full mt-2">
                Contact
              </FlatButton>
            </div>
          </div>
        )}

        {/* mTABLET Sub-Header Bar (when on any mTABLET module page) */}
        {isMTabletSection && (
          <div className="bg-slate-900 text-white border-t border-slate-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-12 sm:h-13">
              {/* Badge / Brand */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0 mr-2 sm:mr-4">
                <Link
                  to="/mtablet"
                  className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-colors px-2.5 py-1 rounded-full ${
                    location.pathname === '/mtablet'
                      ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-400'
                      : 'text-cyan-400 hover:text-cyan-300'
                  }`}
                >
                  <Tablet className="w-4 h-4" />
                  <span>mTABLET</span>
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded hidden md:inline ${
                    location.pathname === '/mtablet' ? 'bg-blue-700 text-white' : 'bg-cyan-950/80 border border-cyan-700/60 text-cyan-300'
                  }`}>
                    Modules
                  </span>
                </Link>
                <span className="text-slate-700 hidden sm:inline">|</span>
              </div>

              {/* Module Navigation Tabs */}
              <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none py-1.5 max-w-full">
                {MTABLET_MODULE_PAGES.map((page) => {
                  const isActive = location.pathname === page.path;
                  const Icon = page.icon;
                  return (
                    <Link
                      key={page.path}
                      to={page.path}
                      className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-400'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : page.accentColor}`} />
                      <span>{page.shortName}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Action CTA on Desktop */}
              <div className="hidden lg:flex items-center pl-4 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors"
                >
                  <span>Demo aanvragen</span>
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      {!isModulePage && (
        <footer className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-10 px-6">
          {/* Background Video (matches landing hero) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-85"
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
            {/* Overlay to keep footer text readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/85 pointer-events-none"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b-2 border-white/10 pb-16">
            <div className="space-y-6">
              <Link to="/" className="inline-block bg-white p-4 rounded-2xl shadow-lg transition-transform hover:scale-105">
                <img src="/logo.png" alt="AH Medische Dienstverlening" className="h-16 sm:h-18 w-auto object-contain" />
              </Link>
              <p className="text-gray-400 leading-relaxed text-sm">
                Innovatieve medische dienstverlening gespecialiseerd in cardiologische functieonderzoeken binnen de eerstelijnszorg.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-cyan-300">Diensten</h4>
              <ul className="space-y-4">
                {SERVICE_LINKS.map((s) => (
                  <li key={s.path}>
                    <Link to={s.path} className="text-gray-400 hover:text-white transition-colors">{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-cyan-300">Bedrijf</h4>
              <ul className="space-y-4">
                <li><Link to="/over-ons" className="text-gray-400 hover:text-white transition-colors">Over Ons</Link></li>
                <li><Link to="/documenten" className="text-gray-400 hover:text-white transition-colors">Documenten</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-cyan-300">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-300" />
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-300" />
                  <span>{CONTACT_INFO.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-cyan-300" />
                  <span>{CONTACT_INFO.hours}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} AH Medische Dienstverlening. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-8 text-sm text-gray-500">
              <Link to="/documenten" className="hover:text-white">Privacy Policy</Link>
              <Link to="/documenten" className="hover:text-white">Voorwaarden</Link>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
