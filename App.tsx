import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Facilities } from './components/Facilities';
import { Manifesto } from './components/Manifesto';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Auth } from './components/Auth';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  const [view, setView] = useState<'home' | 'auth'>('home');

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleNavigateToAuth = () => {
    setView('auth');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  if (view === 'auth') {
    return <Auth onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar onNavigate={handleNavigateToAuth} />
      <main>
        <Hero onNavigate={handleNavigateToAuth} />
        <Philosophy />
        <Facilities />
        <Manifesto />
        <Pricing />
        <Testimonials />
        <CTA onNavigate={handleNavigateToAuth} />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;