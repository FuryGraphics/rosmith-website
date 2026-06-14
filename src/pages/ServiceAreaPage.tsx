import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  MapPin, ArrowRight, Phone, ChevronRight, CheckCircle2, Clock, ArrowLeft, Building2
} from 'lucide-react';
import { SERVICE_AREAS } from '../data';

interface ServiceAreaPageProps {
  onOpenConsultation: (initialPref?: string) => void;
}

export default function ServiceAreaPage({ onOpenConsultation }: ServiceAreaPageProps) {
  const { areaId } = useParams<{ areaId: string }>();
  const area = SERVICE_AREAS.find((a) => a.id === areaId);
  const otherAreas = SERVICE_AREAS.filter((a) => a.id !== areaId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [areaId]);

  if (!area) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-4 text-center">
        <h1 className="font-display text-4xl font-bold uppercase text-navy">Area Not Found</h1>
        <p className="mt-3 text-slate">The page you are looking for does not exist.</p>
        <Link to="/service-areas" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-bright transition-colors">
          <ArrowLeft size={16} /> All Areas Served
        </Link>
      </div>
    );
  }

  const neighborhoods = area.coverage.split(',').map((s) => s.trim()).filter(Boolean);
  const mapQuery = encodeURIComponent(`${area.name}, New York`);

  return (
    <>
      {/* ===================== NAVY HERO ===================== */}
      <section className="relative overflow-hidden bg-navy pt-36 pb-16 lg:pt-40">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="h-full w-full object-cover opacity-[0.14]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/95 to-navy/60" />
        </div>
        <div className="absolute -top-32 -left-32 z-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-100/60">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link to="/service-areas" className="hover:text-gold transition-colors">Areas Served</Link>
            <ChevronRight size={13} />
            <span className="text-gold">{area.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gold text-navy shadow-lg">
              <MapPin size={32} className="stroke-[1.5]" />
            </div>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl">
              {area.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-blue-100/80 sm:text-lg leading-relaxed">
              {area.details}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={() => onOpenConsultation()}
                className="group flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-navy shadow-lg hover:bg-gold-bright transition-all cursor-pointer"
              >
                <span>Free Case Evaluation</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="tel:9175472563"
                className="flex items-center justify-center gap-2.5 rounded-md border-2 border-white/30 bg-white/5 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-navy transition-colors"
              >
                <Phone size={16} />
                <span>(917) 547-2563</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== BODY ===================== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-14">

            {/* Main column */}
            <div className="lg:col-span-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Local Representation</span>
              <h2 className="font-display text-2xl font-bold uppercase text-navy sm:text-3xl mt-2">
                Serving {area.name}
              </h2>
              <div className="h-1 w-20 bg-gold mt-4 mb-7 rounded-full" />

              <p className="text-[15px] leading-relaxed text-slate">{area.details}</p>

              {/* Map embed */}
              <div className="mt-8 relative h-[320px] md:h-[380px] w-full rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
                <iframe
                  title={`${area.name} coverage map`}
                  src={`https://maps.google.com/maps?q=${mapQuery}&z=10&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Neighborhoods */}
              <div className="mt-10">
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-navy">Key Communities Served</h3>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {neighborhoods.map((n, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-center gap-3 rounded-md border border-neutral-200 bg-cream px-4 py-3"
                    >
                      <CheckCircle2 size={18} className="text-gold shrink-0" />
                      <span className="text-sm font-semibold text-navy">{n}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-32 space-y-6">
                {/* Consultation card */}
                <div className="rounded-xl bg-navy p-7 shadow-xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
                    <Clock size={12} /> Available 24/7
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mt-4 leading-tight">
                    Free Case Evaluation
                  </h3>
                  <p className="mt-2 text-sm text-blue-100/70 leading-relaxed">
                    Serving {area.name} around the clock. 100% confidential, no obligation.
                  </p>
                  <button
                    onClick={() => onOpenConsultation()}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-bright transition-colors cursor-pointer"
                  >
                    Schedule Now
                  </button>
                  <a
                    href="tel:9175472563"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border-2 border-white/20 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-navy transition-colors"
                  >
                    <Phone size={15} /> (917) 547-2563
                  </a>
                </div>

                {/* Other areas */}
                <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h4 className="font-display text-sm font-bold uppercase tracking-widest text-navy">Other Areas Served</h4>
                  <div className="mt-4 space-y-2">
                    {otherAreas.map((other) => (
                      <Link
                        key={other.id}
                        to={`/service-areas/${other.id}`}
                        className="group flex items-center justify-between gap-3 rounded-md border border-neutral-200 px-4 py-3 hover:border-gold hover:bg-cream transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-navy group-hover:text-gold transition-colors">
                            <Building2 size={18} />
                          </span>
                          <span className="font-display text-sm font-bold uppercase tracking-wide text-navy">{other.name}</span>
                        </span>
                        <ArrowRight size={15} className="text-gold transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ===================== BOTTOM CTA ===================== */}
      <section className="bg-cream py-14">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold uppercase text-navy sm:text-4xl">
            Need a Lawyer in {area.name}?
          </h2>
          <p className="mt-4 text-base text-slate max-w-2xl mx-auto">
            Your initial consultation is completely free and confidential. Let&apos;s discuss your case today.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => onOpenConsultation()}
              className="rounded-md bg-navy px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg hover:bg-navy-medium transition-colors cursor-pointer"
            >
              Get Your Free Consultation
            </button>
            <Link
              to="/service-areas"
              className="flex items-center justify-center gap-2 rounded-md border-2 border-navy px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy hover:bg-navy hover:text-white transition-colors"
            >
              <ArrowLeft size={16} /> All Areas Served
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
