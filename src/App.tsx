import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCall from './components/FloatingCall';
import ConsultationModal from './components/ConsultationModal';

// Routed Pages
import HomePage from './pages/HomePage';
import PracticeAreaPage from './pages/PracticeAreaPage';
import WhyUsPage from './pages/WhyUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import FAQPage from './pages/FAQPage';

// Reset scroll to the top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function Shell() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultPracticeArea, setConsultPracticeArea] = useState('');

  const handleOpenConsultation = (initialPref: string = '') => {
    setConsultPracticeArea(initialPref);
    setIsConsultationOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white font-sans antialiased text-ink flex flex-col justify-between">
      <ScrollToTop />

      {/* Persistent Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Routed Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
          <Route
            path="/practice-areas/:areaId"
            element={<PracticeAreaPage onOpenConsultation={handleOpenConsultation} />}
          />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/service-areas/:areaId" element={<ServiceAreaPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/faq" element={<FAQPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="*" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
        </Routes>
      </main>

      {/* Persistent Footer & Mobile dialer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />
      <FloatingCall />

      {/* Global Consultation Scheduler (triggered from every page) */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialPracticeArea={consultPracticeArea}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
