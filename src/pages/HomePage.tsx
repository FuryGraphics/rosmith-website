import { useState } from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import PracticeAreas from '../components/PracticeAreas';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import MapSection from '../components/MapSection';
import BlogPreview from '../components/BlogPreview';
import FAQ from '../components/FAQ';

// Interactive Modals
import PracticeAreaDetailModal from '../components/PracticeAreaDetailModal';
import BlogDetailModal from '../components/BlogDetailModal';

import { PracticeArea, BlogPost } from '../types';

interface HomePageProps {
  onOpenConsultation: (initialPref?: string) => void;
}

export default function HomePage({ onOpenConsultation }: HomePageProps) {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  return (
    <>
      {/* Section 1: Hero Cover */}
      <Hero onOpenConsultation={() => onOpenConsultation()} />

      {/* Section 2: Trust bar */}
      <TrustBar />

      {/* Section 3: Practice Area Cards */}
      <PracticeAreas onSelectArea={(area) => setSelectedPracticeArea(area)} />

      {/* Section 4: Why R.O. Smith Law */}
      <WhyChoose />

      {/* Section 5: Client Testimonials */}
      <Testimonials onOpenConsultation={() => onOpenConsultation()} />

      {/* Section 6: Local Map Viewport */}
      <MapSection />

      {/* Section 7: Blog Article Preview */}
      <BlogPreview onSelectPost={(post) => setSelectedBlogPost(post)} />

      {/* Section 8: Frequently Asked Questions */}
      <FAQ onOpenConsultation={() => onOpenConsultation()} />

      {/* Practice Area Deep Details Drawer Overlay */}
      <PracticeAreaDetailModal
        area={selectedPracticeArea}
        onClose={() => setSelectedPracticeArea(null)}
        onOpenConsultation={() => onOpenConsultation()}
      />

      {/* Blog Full-length Article Reading Panel */}
      <BlogDetailModal
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
        onOpenConsultation={() => onOpenConsultation()}
      />
    </>
  );
}
