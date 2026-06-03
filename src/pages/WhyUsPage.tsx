import PageHeader from '../components/PageHeader';
import WhyChoose from '../components/WhyChoose';
import TrustBar from '../components/TrustBar';

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The R.O. Smith Difference"
        title="Why Choose Us"
        subtitle="Direct access to your attorney, aggressive advocacy, and a proven local track record across New York."
      />
      <TrustBar />
      <WhyChoose />
    </>
  );
}
