import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PracticeAreas from './components/PracticeAreas';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import MapSection from './components/MapSection';
import BlogPreview from './components/BlogPreview';
import Footer from './components/Footer';
import FloatingCall from './components/FloatingCall';

// Interactive Modals and Drawers
import ConsultationModal from './components/ConsultationModal';
import PracticeAreaDetailModal from './components/PracticeAreaDetailModal';
import BlogDetailModal from './components/BlogDetailModal';

// Shared Types
import { PracticeArea, BlogPost } from './types';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  // Smooth Scroll Anchor Anchor Helper
  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      // Offset scrolling slightly to avoid navbar coverage
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenConsultation = (initialPref: string = '') => {
    setIsConsultationOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 font-sans antialiased text-neutral-100 flex flex-col justify-between">
      {/* Dynamic Nav Rail */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onScrollTo={handleScrollTo}
      />

      {/* Main Structural Landmarks */}
      <main className="flex-grow">
        {/* Section 1: Hero Cover */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section 2: Trust bar */}
        <TrustBar />

        {/* Section 3: Practice Area Cards */}
        <PracticeAreas onSelectArea={(area) => setSelectedPracticeArea(area)} />

        {/* Section 4: Why R.O. Smith Law */}
        <WhyChoose />

        {/* Section 5: Client Testimonials */}
        <Testimonials onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section 6: Local Map Viewport */}
        <MapSection />

        {/* Section 7: Blog Article Preview */}
        <BlogPreview onSelectPost={(post) => setSelectedBlogPost(post)} />
      </main>

      {/* Section 8 & 9: Footer Assembly & Final Call Banner */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
        onScrollTo={handleScrollTo}
      />

      {/* Touch-Floating Action for Mobile dialer */}
      <FloatingCall />

      {/* ======================================================== */}
      {/* OVERLAY SYSTEM (MODALS, DRAWERS, CONFIDENTIAL FORMS) */}
      {/* ======================================================== */}

      {/* 1. Free Case Evaluation Schedulers */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialPracticeArea={selectedPracticeArea?.id || ''}
      />

      {/* 2. Practice Area Deep Details Drawer Overlay */}
      <PracticeAreaDetailModal
        area={selectedPracticeArea}
        onClose={() => setSelectedPracticeArea(null)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 3. Blog Full-length Article Reading Panel */}
      <BlogDetailModal
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}
