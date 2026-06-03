import PageHeader from '../components/PageHeader';
import Testimonials from '../components/Testimonials';

interface PageProps {
  onOpenConsultation: (initialPref?: string) => void;
}

export default function TestimonialsPage({ onOpenConsultation }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Client Testimonials"
        title="What Our Clients Say"
        subtitle="Real outcomes for real New Yorkers across criminal defense, personal injury, and real estate matters."
      />
      <Testimonials onOpenConsultation={() => onOpenConsultation()} />
    </>
  );
}
