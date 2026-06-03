import { motion } from 'motion/react';
import { Star, MessageSquareQuote, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface TestimonialsProps {
  onOpenConsultation: () => void;
}

export default function Testimonials({ onOpenConsultation }: TestimonialsProps) {
  // SVG star component helper
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <Star key={index} className="fill-gold text-gold" size={16} />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-cream relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Client Testimonials
            </span>
            <h2 className="font-display text-3xl font-bold uppercase text-navy sm:text-4xl mt-2">
              What Our Clients Say
            </h2>
            <div className="h-1 w-20 bg-gold mt-4 rounded-full" />
          </div>

          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy hover:text-white transition-colors focus:outline-none border-2 border-navy hover:bg-navy rounded-md px-6 py-3 cursor-pointer"
            id="read-more-testimonials"
          >
            <span>Let&apos;s Discuss Your Case</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, i) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group flex flex-col justify-between rounded-r-lg border-l-4 border-l-gold bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              id={`quote-${test.id}`}
            >
              {/* Decorative backquote graphic */}
              <div className="absolute right-4 top-4 text-navy/5 group-hover:text-gold/15 transition-colors duration-300">
                <MessageSquareQuote size={64} className="stroke-[1.5]" />
              </div>

              <div className="relative z-10">
                {/* Visual Stars */}
                <div className="flex gap-1 mb-5 select-none text-left">
                  {renderStars(test.rating)}
                </div>

                {/* Quote Content */}
                <p className="font-quote italic text-base leading-relaxed text-ink/90 mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="relative z-10 border-t border-neutral-200 pt-4">
                <h4 className="font-display text-base font-bold uppercase tracking-wide text-navy">
                  {test.author}
                </h4>
                <p className="text-xs text-gold font-bold uppercase tracking-wider mt-0.5">
                  {test.caseType}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Disclosure Subtext */}
        <div className="mt-8 text-center text-[11px] text-slate/80 max-w-xl mx-auto">
          * Prior client results and legal trial accomplishments do not guarantee, assure, or predict similar future outcomes under New York jurisdictions. All legal proceedings rest on independent facts.
        </div>
      </div>
    </section>
  );
}
