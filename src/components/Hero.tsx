import { motion } from 'motion/react';
import { Phone, ArrowRight, Gavel } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-neutral-950 pt-24 pb-16 lg:min-h-screen lg:pt-28"
    >
      {/* Background Image with Dark Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 0.18 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Premium legal boardroom office"
          className="h-full w-full object-cover filtering-grayscale desaturated"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/20 md:via-neutral-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/50" />
      </div>

      {/* Decorative Golden Ambient glow */}
      <div className="absolute -top-40 -left-40 z-0 h-[600px] w-[600px] rounded-full bg-[#C9A84C]/5 blur-[130px]" />
      <div className="absolute top-1/2 right-10 z-0 h-[500px] w-[500px] rounded-full bg-neutral-900/50 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 lg:gap-16">
        <div className="max-w-3xl flex-1">
          {/* Tagline Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-2"
          >
            <div className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] font-mono flex items-center gap-1">
              <Gavel size={12} />
              TRUSTED TRIAL ADVOCACY • AVAILABLE 24/7
            </span>
          </motion.div>

          {/* Headline H1 with Playfair Display & underline accent */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl font-bold leading-tight text-neutral-100 sm:text-4xl md:text-5xl md:leading-[1.12]"
            id="hero-main-h1"
          >
            Experienced {' '}
            <span className="relative inline-block text-neutral-100 whitespace-nowrap">
              Criminal Defense,
              <span className="absolute left-0 bottom-1 h-1 w-full bg-[#C9A84C] rounded-full" />
            </span>{' '}
            Personal Injury & Real Estate Attorney Serving New York
          </motion.h1>

          {/* Subheading with refined tracking */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base text-neutral-350 sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
          >
            Trusted representation in NYC, Nassau, Suffolk, and Westchester counties. Focused advocacy, meticulous transactions, and dedicated defense. Your initial consultation is completely free.
          </motion.p>

          {/* CTA Buttons in horizontal or stacked structure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            id="hero-cta-group"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenConsultation}
              className="group flex items-center justify-center gap-2 rounded-md bg-[#C9A84C] px-8 py-4 text-base font-bold text-neutral-950 shadow-lg hover:bg-[#d4b896] transition-all cursor-pointer"
              id="hero-schedule-btn"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </motion.button>

            <a
              href="tel:9175477563"
              className="flex items-center justify-center gap-2.5 rounded-md border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm px-8 py-4 text-base font-bold text-[#C9A84C] hover:bg-neutral-900 hover:text-[#d4b896] transition-colors"
              id="hero-phone-btn"
            >
              <Phone size={17} />
              <span>Call Now: (917) 547-7563</span>
            </a>
          </motion.div>

          {/* Trust points list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 gap-4 border-t border-neutral-900 pt-8 sm:grid-cols-4"
          >
            <div>
              <span className="block text-xl font-serif font-bold text-[#C9A84C]">917 area</span>
              <span className="text-xs uppercase tracking-widest text-[#b8b8b8] font-mono">Metro NYC Connection</span>
            </div>
            <div>
              <span className="block text-xl font-serif font-bold text-[#C9A84C]">24/7 Hotline</span>
              <span className="text-xs uppercase tracking-widest text-[#b8b8b8] font-mono">Immediate Counsel</span>
            </div>
            <div>
              <span className="block text-xl font-serif font-bold text-[#C9A84C]">Free Case</span>
              <span className="text-xs uppercase tracking-widest text-[#b8b8b8] font-mono">Analysis Guarantee</span>
            </div>
            <div>
              <span className="block text-xl font-serif font-bold text-[#C9A84C]">Trial Ready</span>
              <span className="text-xs uppercase tracking-widest text-[#b8b8b8] font-mono">Aggressive Advocacy</span>
            </div>
          </motion.div>
        </div>

          {/* Attorney Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10" />
              <img
                src="/rosmith.png"
                alt="R.O. Smith, Attorney at Law"
                className="w-80 xl:w-96 rounded-2xl object-cover object-top shadow-2xl border border-neutral-800"
                style={{ maxHeight: '520px' }}
              />
              <div className="absolute bottom-4 left-0 right-0 z-20 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] font-mono">R.O. Smith, Esq.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
