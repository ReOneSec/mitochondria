import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Facilities } from './components/Facilities';
import { Routine } from './components/Routine';
import { Nutrition } from './components/Nutrition';
import { AdmissionProcess } from './components/AdmissionProcess';
import { Manifesto } from './components/Manifesto';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Auth } from './components/Auth';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';

import { LiveAvailability } from './components/LiveAvailability';
import { ImageGallery } from './components/ImageGallery';

import { SuccessStories } from './components/SuccessStories';
import { FloatingActions } from './components/FloatingActions';

function App() {
  const [view, setView] = useState<'home' | 'auth'>('home');
  const [isLoading, setIsLoading] = useState(true);

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

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  if (view === 'auth') {
    return <Auth onBack={handleBackToHome} />;
  }

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen onLoadComplete={handleLoadComplete} />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
        <Navbar onNavigate={handleNavigateToAuth} />
        <main className="flex-grow">
          <Hero onNavigate={handleNavigateToAuth} />

          <Philosophy />

          <Routine />
          <Nutrition />
          <Facilities />
          <ImageGallery />
          <LiveAvailability />
          <AdmissionProcess />
          <Manifesto />
          <Pricing />
          <SuccessStories />
          <Testimonials />
          <FAQ />
          <CTA onNavigate={handleNavigateToAuth} />
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingActions />
      </div>
    </>
  );
}

export default App;
