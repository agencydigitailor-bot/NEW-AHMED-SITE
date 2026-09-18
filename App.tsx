
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MTablet from './pages/MTablet';
import ECG from './pages/ECG';
import ABI from './pages/ABI';
import Bloeddruk from './pages/Bloeddruk';
import Spirometrie from './pages/Spirometrie';
import Holter from './pages/Holter';
import OverOns from './pages/OverOns';
import Contact from './pages/Contact';
import Documenten from './pages/Documenten';
import AppPage from './pages/AppPage';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToTarget = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      // Immediate attempt and delayed attempts to allow page render
      scrollToTarget();
      const timer1 = setTimeout(scrollToTarget, 100);
      const timer2 = setTimeout(scrollToTarget, 300);
      const timer3 = setTimeout(scrollToTarget, 600);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mtablet" element={<MTablet />} />
          <Route path="ecg" element={<ECG />} />
          <Route path="abi" element={<ABI />} />
          <Route path="bloeddruk" element={<Bloeddruk />} />
          <Route path="spirometrie" element={<Spirometrie />} />
          <Route path="holter" element={<Holter />} />
          <Route path="app" element={<AppPage />} />
          <Route path="over-ons" element={<OverOns />} />
          <Route path="contact" element={<Contact />} />
          <Route path="documenten" element={<Documenten />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
