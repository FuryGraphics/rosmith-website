import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Shield, Heart, Building, ArrowRight, Phone, ChevronRight,
  CheckCircle2, Clock, ArrowLeft
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data';

interface PracticeAreaPageProps {
  onOpenConsultation: (initialPref?: string) => void;
}

// Curated "what we handle" focus lists per practice area
const FOCUS_POINTS: Record<string, string[]> = {
  'criminal-defense': [
    'DUI / DWI & Traffic Violations',
    'Drug Possession & Distribution',
    'Domestic Violence Allegations',
    'White-Collar & Larceny Charges',
    'Misdemeanor & Felony Defense',
    'Arraignments & Bail Hearings'
  ],
  'personal-injury': [
    'Car & Truck Accidents',
    'Motorcycle & Pedestrian Crashes',
    'Slip-and-Fall Injuries',
    'Premises Liability',
    'Insurance Claim Negotiation',
    'Wrongful Death Claims'
  ],
  'real-estate': [
    'Residential Purchases & Sales',
    'Commercial Transactions',
    'Contract Drafting & Review',
    'Title Clearing & Disputes',
    'Lease Negotiations',
    'Refinancing & Closings'
  ]
};

function getIcon(name: string, size = 34) {
  switch (name) {
    case 'Shield': return <Shield size={size} className="stroke-[1.5]" />;
    case 'Heart': return <Heart size={size} className="stroke-[1.5]" />;
    case 'Building': return <Building size={size} className="stroke-[1.5]" />;
    default: return <Shield size={size} className="stroke-[1.5]" />;
  }
}

export default function PracticeAreaPage({ onOpenConsultation }: PracticeAreaPageProps) {
  const { areaId } = useParams<{ areaId: string }>();
  const area = PRACTICE_AREAS.find((a) => a.id === areaId);
  const otherAreas = PRACTICE_AREAS.filter((a) => a.id !== areaId);

  // Reset scroll whenever the practice area changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [areaId]);

  if (!area) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-4 text-center">
        <h1 className="font-display text-4xl font-bold uppercase text-navy">Practice Area Not Found</h1>
        <p className="mt-3 text-slate">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-bright transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  const focusPoints = FOCUS_POINTS[area.id] || [];
  const paragraphs = area.longDescription.split('\n').filter((p) => p.trim().length > 0);

  return (
    <>
      {/* ===================== NAVY HERO ===================== */}
      <section className="relative overflow-hidden bg-navy pt-36 pb-16 lg:pt-40">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="h-full w-full object-cover opacity-15"
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
            <span className="text-blue-100/40">Practice Areas</span>
            <ChevronRight size={13} />
            <span className="text-gold">{area.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gold text-navy shadow-lg">
              {getIcon(area.iconName)}
            </div>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl">
              {area.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-blue-100/80 sm:text-lg leading-relaxed">
              {area.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={() => onOpenConsultation(area.id)}
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Overview</span>
              <h2 className="font-display text-2xl font-bold uppercase text-navy sm:text-3xl mt-2">
                How We Represent You
              </h2>
              <div className="h-1 w-20 bg-gold mt-4 mb-7 rounded-full" />

              <div className="space-y-5">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-slate">{p}</p>
                ))}
              </div>

              {focusPoints.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-navy">What We Handle</h3>
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {focusPoints.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                        className="flex items-center gap-3 rounded-md border border-neutral-200 bg-cream px-4 py-3"
                      >
                        <CheckCircle2 size={18} className="text-gold shrink-0" />
                        <span className="text-sm font-semibold text-navy">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
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
                    Speak directly with Attorney Randy O. Smith. 100% confidential, no obligation.
                  </p>
                  <button
                    onClick={() => onOpenConsultation(area.id)}
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

                {/* Other practice areas */}
                <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h4 className="font-display text-sm font-bold uppercase tracking-widest text-navy">Other Practice Areas</h4>
                  <div className="mt-4 space-y-2">
                    {otherAreas.map((other) => (
                      <Link
                        key={other.id}
                        to={`/practice-areas/${other.id}`}
                        className="group flex items-center justify-between gap-3 rounded-md border border-neutral-200 px-4 py-3 hover:border-gold hover:bg-cream transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-navy group-hover:text-gold transition-colors">
                            {getIcon(other.iconName, 18)}
                          </span>
                          <span className="font-display text-sm font-bold uppercase tracking-wide text-navy">{other.title}</span>
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
            Ready to Discuss Your {area.title} Matter?
          </h2>
          <p className="mt-4 text-base text-slate max-w-2xl mx-auto">
            Your initial consultation is completely free and confidential. Let&apos;s build your strategy together.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => onOpenConsultation(area.id)}
              className="rounded-md bg-navy px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg hover:bg-navy-medium transition-colors cursor-pointer"
            >
              Get Your Free Consultation
            </button>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 rounded-md border-2 border-navy px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy hover:bg-navy hover:text-white transition-colors"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
