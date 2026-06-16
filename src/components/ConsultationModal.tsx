import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, MapPin } from 'lucide-react';
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
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl"
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

              {/* Embedded LeadConnector form */}
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/mtFshENLcw5bWmsRU4LR"
                style={{ width: '100%', height: '503px', border: 'none', borderRadius: '10px' }}
                id="inline-mtFshENLcw5bWmsRU4LR"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Form (R.O. Smith Law Firm)"
                data-height="503"
                data-layout-iframe-id="inline-mtFshENLcw5bWmsRU4LR"
                data-form-id="mtFshENLcw5bWmsRU4LR"
                title="Website Form (R.O. Smith Law Firm)"
              />

              {/* Quick contact */}
              <div className="mt-5 space-y-3 border-t border-neutral-200 pt-5 text-sm text-slate">
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-gold shrink-0" />
                  <a href="tel:9175472563" className="font-semibold text-navy hover:text-gold transition-colors">
                    Call (917) 547-2563 — Available 24/7
                  </a>
                </div>
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
