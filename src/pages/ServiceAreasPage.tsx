import PageHeader from '../components/PageHeader';
import MapSection from '../components/MapSection';

export default function ServiceAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Localized Jurisdiction"
        title="Service Areas"
        subtitle="Representing clients across all five NYC boroughs, Nassau, Suffolk, and Westchester counties."
      />
      <MapSection />
    </>
  );
}
