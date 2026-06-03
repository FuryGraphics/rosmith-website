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
        return <Shield className="stroke-[1.5]" size={34} />;
      case 'Heart':
        return <Heart className="stroke-[1.5]" size={34} />;
      case 'Building':
        return <Building className="stroke-[1.5]" size={34} />;
      default:
        return <Shield className="stroke-[1.5]" size={34} />;
    }
  };

  return (
    <section id="practice-areas" className="py-20 bg-cream relative">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold select-none">
            Expertise &amp; Advocacy
          </span>
          <h2 className="font-display text-3xl font-bold uppercase text-navy sm:text-4xl mt-2 select-none">
            Core Areas of Legal Practice
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-sm sm:text-base text-slate leading-relaxed">
            Randy O. Smith delivers structured, personalized representation for legal challenges across NYC and Long Island. We stand behind you.
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
              className="flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-gold hover:shadow-xl shadow-sm group relative overflow-hidden border-t-4 border-t-navy hover:border-t-gold"
              id={`card-${area.id}`}
            >
              <div>
                {/* Icon box */}
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-navy/5 text-navy mb-6 group-hover:bg-gold group-hover:text-navy transition-colors">
                  {getIcon(area.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="font-display text-2xl font-bold uppercase text-navy mb-4 tracking-wide">
                  {area.title}
                </h3>

                {/* Brief description */}
                <p className="text-slate text-sm leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Learn more interactive trigger */}
              <button
                onClick={() => onSelectArea(area)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-navy transition-colors cursor-pointer self-start focus:outline-none"
                id={`btn-learn-${area.id}`}
              >
                <span>Learn More</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
