import PageHeader from '../components/PageHeader';
import FAQ from '../components/FAQ';

interface PageProps {
  onOpenConsultation: (initialPref?: string) => void;
}

export default function FAQPage({ onOpenConsultation }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Answers You Need"
        title="Frequently Asked Questions"
        subtitle="Clear answers about consultations, fees, availability, and what to expect when you work with us."
      />
      <FAQ onOpenConsultation={() => onOpenConsultation()} />
    </>
  );
}
