import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface TestimonialsProps {
  onOpenConsultation: () => void;
}

export default function Testimonials({ onOpenConsultation }: TestimonialsProps) {
  // SVG star component helper
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <Star key={index} className="fill-[#C9A84C] text-[#C9A84C]" size={15} />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-950 relative overflow-hidden">
      {/* Absolute decorative backdrops */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 z-0 h-[400px] w-[400px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] font-mono">
              CLIENT TESTIMONIALS & VOICES
            </span>
            <h2 className="font-serif text-3xl font-bold text-neutral-100 sm:text-4xl mt-2">
              What Our Clients Say
            </h2>
            <div className="h-1 w-20 bg-[#C9A84C] mt-4 rounded-full" />
          </div>
          
          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#C9A84C] hover:text-[#d4b896] transition-colors focus:outline-none border border-[#C9A84C]/25 bg-[#C9A84C]/5 hover:bg-[#C9A84C]/10 rounded-md px-6 py-3 cursor-pointer"
            id="read-more-testimonials"
          >
            <span>Let\'s Discuss Your case →</span>
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
              className="group flex flex-col justify-between rounded-r-lg border-l-4 border-l-[#C9A84C] bg-[#1a1a2e] p-8 shadow-xl transition-all duration-300 hover:scale-[1.01] relative overflow-hidden"
              id={`quote-${test.id}`}
            >
              {/* Decorative backquote graphic */}
              <div className="absolute right-4 top-4 text-neutral-800/20 group-hover:text-neutral-800/45 transition-colors duration-300">
                <MessageSquareQuote size={64} className="stroke-[1.5]" />
              </div>

              <div className="relative z-10">
                {/* Visual Stars */}
                <div className="flex gap-1.5 mb-5 select-none text-left">
                  {renderStars(test.rating)}
                </div>

                {/* Quote Content */}
                <p className="font-serif italic text-base leading-relaxed text-neutral-300 mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="relative z-10 border-t border-neutral-800 pt-4">
                <h4 className="font-serif text-base font-bold text-neutral-100">
                  {test.author}
                </h4>
                <p className="text-xs text-neutral-450 font-medium font-mono uppercase tracking-wider mt-0.5">
                  {test.caseType}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Disclosure Subtext */}
        <div className="mt-8 text-center text-[11px] text-neutral-500 max-w-xl mx-auto">
          * Prior client results and legal trial accomplishments do not guarantee, assure, or predict similar future outcomes under New York jurisdictions. All legal proceedings rest on independent facts.
        </div>
      </div>
    </section>
  );
}
