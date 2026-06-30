import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Phone } from 'lucide-react';

interface FAQProps {
  onOpenConsultation: () => void;
}

const FAQS = [
  {
    q: 'How much does an initial consultation cost?',
    a: 'Nothing. Every initial case evaluation with Attorney Randy O. Smith is 100% free and completely confidential. We will review the facts of your criminal, injury, or real estate matter and explain your options with no obligation to retain us.'
  },
  {
    q: 'Are you really available 24/7?',
    a: 'Yes. Arrests and emergencies do not keep business hours. Our legal line, (917) 547-2563, is answered around the clock, every day of the year, so you can reach counsel the moment you need guidance.'
  },
  {
    q: 'Do I pay anything upfront for a personal injury case?',
    a: 'For qualifying personal injury matters we work on a contingency fee basis — you pay no attorney fees unless we recover compensation for you. We advance the costs of investigating and building your claim.'
  },
  {
    q: 'Which areas of New York do you serve?',
    a: 'We represent clients across all five NYC boroughs, Nassau County, Suffolk County, and Westchester County. Our primary office is conveniently located in Hicksville, in the heart of Nassau County.'
  },
  {
    q: 'Will I work directly with Attorney Smith?',
    a: 'Yes. Unlike high-volume "factory" firms, your file is not handed down to junior associates or paralegals. You work directly with Randy O. Smith from your first consultation through resolution.'
  },
  {
    q: 'What should I do immediately after an arrest?',
    a: 'Exercise your right to remain silent, do not consent to searches, and contact an attorney before speaking with detectives. Then call us right away — we can intervene during booking and stand beside you at arraignment.'
  }
];

export default function FAQ({ onOpenConsultation }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Title Block */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Answers You Need
          </span>
          <h2 className="font-display text-3xl font-bold uppercase text-navy sm:text-4xl mt-2">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-lg border transition-colors duration-200 ${
                  isOpen ? 'border-gold bg-cream' : 'border-neutral-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer focus:outline-none"
                  id={`faq-toggle-${i}`}
                >
                  <span className="font-display text-base font-semibold uppercase tracking-wide text-navy md:text-lg">
                    {item.q}
                  </span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-gold text-navy' : 'bg-navy text-gold'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-slate leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-xl bg-navy px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">Still Have Questions?</h3>
            <p className="text-sm text-blue-100/80 mt-1">Speak directly with Attorney Randy O. Smith — free and confidential.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row shrink-0">
            <button
              onClick={onOpenConsultation}
              className="rounded-md bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-bright transition-colors cursor-pointer"
            >
              Free Consultation
            </button>
            <a
              href="tel:9175472563"
              className="flex items-center justify-center gap-2 rounded-md border-2 border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-navy transition-colors"
            >
              <Phone size={15} />
              <span>(917) 547-2563</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
