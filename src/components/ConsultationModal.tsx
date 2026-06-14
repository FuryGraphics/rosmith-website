import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { PRACTICE_AREAS } from '../data';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPracticeArea?: string;
}

const FIRM_EMAIL = 'rsmit042179@gmail.com';

export default function ConsultationModal({ isOpen, onClose, initialPracticeArea = '' }: ConsultationModalProps) {
  const areaTitle = PRACTICE_AREAS.find((a) => a.id === initialPracticeArea)?.title;

  const subject = areaTitle
    ? `Free Consultation Request – ${areaTitle}`
    : 'Free Consultation Request';

  const body = [
    'Hello R.O. Smith Law Firm,',
    '',
    'I would like to request a free, confidential consultation.',
    '',
    'Name:',
    'Phone:',
    `Matter: ${areaTitle || ''}`,
    'Best time to reach me:',
    '',
    'Brief description of my situation:',
    ''
  ].join('\n');

  const mailtoHref = `mailto:${FIRM_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl"
            id="consultation-modal"
          >
            {/* Top Border Indicator */}
            <div className="h-1.5 w-full bg-gold" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate hover:text-navy transition-colors"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X size={24} />
            </button>

            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-navy leading-tight" id="modal-title">
                    Get Your Free Consultation
                  </h3>
                  <p className="text-sm text-slate">Private, confidential, and no obligation.</p>
                </div>
              </div>

              {areaTitle && (
                <div className="mb-5 rounded-md border border-gold/40 bg-gold/10 px-4 py-2.5 text-sm font-semibold text-navy">
                  Regarding: <span className="text-navy">{areaTitle}</span>
                </div>
              )}

              <p className="text-sm text-slate leading-relaxed">
                Reach Attorney Randy O. Smith directly. Email us the details of your matter or call our 24/7 line and we will respond promptly.
              </p>

              {/* Primary actions */}
              <div className="mt-6 space-y-3">
                <a
                  href={mailtoHref}
                  onClick={onClose}
                  className="group flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy shadow-md hover:bg-gold-bright active:scale-[0.98] transition-all"
                  id="email-us-btn"
                >
                  <Mail size={17} />
                  <span>Email Us</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:9175472563"
                  className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-navy px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:bg-navy hover:text-white transition-colors"
                  id="call-us-btn"
                >
                  <Phone size={16} />
                  <span>Call (917) 547-2563</span>
                </a>
              </div>

              {/* Contact details */}
              <div className="mt-6 space-y-3 border-t border-neutral-200 pt-5 text-sm text-slate">
                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-gold shrink-0" />
                  <a href={mailtoHref} onClick={onClose} className="font-semibold text-navy hover:text-gold transition-colors break-all">
                    {FIRM_EMAIL}
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                  <span>11418 238th Street, Elmont, NY 11003</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock size={15} className="text-gold shrink-0" />
                  <span>Available 24/7/365 for emergencies</span>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="mt-5 text-[11px] leading-normal text-slate/80">
                Contacting R.O. Smith Law Firm does not establish an attorney-client relationship. Please do not send confidential or time-sensitive information until such a relationship has been established.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
