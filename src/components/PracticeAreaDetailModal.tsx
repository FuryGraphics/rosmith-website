import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Heart, Building, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { PracticeArea } from '../types';

interface PracticeAreaDetailModalProps {
  area: PracticeArea | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function PracticeAreaDetailModal({ area, onClose, onOpenConsultation }: PracticeAreaDetailModalProps) {
  if (!area) return null;

  const getIcon = () => {
    switch (area.iconName) {
      case 'Shield': return <Shield size={36} />;
      case 'Heart': return <Heart size={36} />;
      case 'Building': return <Building size={36} />;
    }
  };

  const getHighlights = () => {
    if (area.id === 'criminal-defense') {
      return [
        'DUI / DWI representation',
        'Traffic violations and speeding tickets',
        'Drug offenses (possession, intent)',
        'Domestic violence & assault claims',
        'Misdemeanors and heavy felony litigation',
        'Trial and bail hearing advocacy'
      ];
    }
    if (area.id === 'personal-injury') {
      return [
        'Car, truck, and motorcycle collisions',
        'Slip and fall incidents',
        'Pedestrian accidents and injuries',
        'Insurance claim disputes and negotiations',
        'Future medical care & wage collection',
        'Completely free consultation (No Win, No Fee)'
      ];
    }
    return [
      'Residential buying & selling representation',
      'Commercial property transactions',
      'Deed transfers and title division',
      'Contract drafting, review & escrow negotiation',
      'Closing document explanation and clearance',
      'Boundary and easement dispute representation'
    ];
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          id="practice-modal-backdrop"
        />

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-2xl"
          id="practice-detail-modal"
        >
          {/* Accent strip */}
          <div className="h-1.5 w-full bg-[#C9A84C]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-[#C9A84C] transition-colors"
            aria-label="Close details modal"
            id="close-practice-modal-btn"
          >
            <X size={24} />
          </button>

          <div className="p-6 md:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#C9A84C]/10 text-[#C9A84C]">
                {getIcon()}
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-mono text-[#C9A84C]">PRACTICE AREA DETAILED FOCUS</span>
                <h3 className="font-serif text-3xl font-bold text-neutral-100" id="practice-modal-title">
                  {area.title}
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {/* Detailed Text Block */}
              <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                {area.longDescription}
              </p>

              {/* Bullet Highlights */}
              <div className="rounded-lg border border-neutral-800 bg-neutral-950/40 p-5">
                <h4 className="font-serif text-lg font-bold text-neutral-200 mb-3">
                  Key Incidents & Cases We Tackle:
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {getHighlights().map((hl, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-neutral-400 text-sm">
                      <CheckCircle2 size={16} className="text-[#C9A84C] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Bar */}
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#C9A84C] px-6 py-3 font-semibold text-neutral-950 hover:bg-[#d4b896] transition-colors"
                  id="practice-cta-scheduler"
                >
                  <Calendar size={18} />
                  <span>Schedule Consultation</span>
                </button>
                <a
                  href="tel:9175472563"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-6 py-3 font-semibold text-neutral-200 hover:bg-neutral-800 transition-colors"
                  id="practice-cta-phone"
                >
                  <Phone size={18} className="text-[#C9A84C]" />
                  <span>Call Randy Now: (917) 547-2563</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
