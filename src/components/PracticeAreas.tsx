import { motion } from 'motion/react';
import { Shield, Heart, Building, ArrowRight } from 'lucide-react';
import { PRACTICE_AREAS } from '../data';
import { PracticeArea } from '../types';

interface PracticeAreasProps {
  onSelectArea: (area: PracticeArea) => void;
}

export default function PracticeAreas({ onSelectArea }: PracticeAreasProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield':
        return <Shield className="stroke-[1.5]" size={36} />;
      case 'Heart':
        return <Heart className="stroke-[1.5]" size={36} />;
      case 'Building':
        return <Building className="stroke-[1.5]" size={36} />;
      default:
        return <Shield className="stroke-[1.5]" size={36} />;
    }
  };

  return (
    <section id="practice-areas" className="py-20 bg-neutral-950 relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-0 h-[500px] w-4/5 rounded-full bg-neutral-900/40 blur-[130px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] font-mono select-none">
            EXPERTISE & ADVOCACY
          </span>
          <h2 className="font-serif text-3xl font-bold text-neutral-100 sm:text-4xl mt-2 select-none">
            Core Areas of Legal Practice
          </h2>
          <div className="h-1 w-20 bg-[#C9A84C] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Randy O. Smith delivers structured, personalized representation of legal challenges in NYC and Long Island. We stand behind you.
          </p>
        </div>

        {/* 3-Column Grid representing Practice Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between rounded-lg border border-neutral-900 bg-[#1a1a2e] p-8 transition-colors duration-300 hover:border-[#C9A84C] shadow-lg group relative overflow-hidden"
              id={`card-${area.id}`}
            >
              {/* Subtle ambient gradient on hover inside the cards */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Icon box */}
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#C9A84C]/10 text-[#C9A84C] mb-6 border border-[#C9A84C]/10 group-hover:bg-[#C9A84C]/20 group-hover:text-[#d4b896] transition-colors">
                  {getIcon(area.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-2xl font-bold text-neutral-100 mb-4 tracking-tight group-hover:text-neutral-50 transition-colors">
                  {area.title}
                </h3>

                {/* Brief description */}
                <p className="text-neutral-450 text-sm leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Learn more interactive trigger */}
              <button
                onClick={() => onSelectArea(area)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A84C] hover:text-[#d4b896] transition-colors font-mono cursor-pointer self-start focus:outline-none focus:underline"
                id={`btn-learn-${area.id}`}
              >
                <span>Learn More details</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
