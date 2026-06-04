import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Clock, BadgeDollarSign, Scale } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const badges = [
    { icon: <BadgeDollarSign size={15} />, label: 'No Recovery, No Fee*' },
    { icon: <ShieldCheck size={15} />, label: 'Free Case Review' },
    { icon: <Clock size={15} />, label: 'Available 24/7/365' },
    { icon: <Scale size={15} />, label: 'Trial-Tested Defense' }
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden bg-navy pt-36 pb-16 lg:min-h-screen lg:pt-40"
    >
      {/* Background Image with Navy Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 0.22 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Premium legal boardroom office"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/95 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />
      </div>

      {/* Decorative gold ambient glow */}
      <div className="absolute -top-40 -left-40 z-0 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="absolute top-1/2 right-10 z-0 h-[500px] w-[500px] rounded-full bg-navy-light/20 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 lg:gap-12">
          <div className="max-w-3xl flex-1">
            {/* Tagline Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                Trusted New York Trial Advocacy
              </span>
            </motion.div>

            {/* Headline — bold condensed Oswald */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl"
              id="hero-main-h1"
            >
              Fighting For Your{' '}
              <span className="relative inline-block text-gold">
                Rights
                <span className="absolute left-0 -bottom-1 h-1 w-full bg-gold rounded-full" />
              </span>{' '}
              Across New York
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base text-blue-100/80 sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
            >
              Experienced Criminal Defense, Personal Injury &amp; Real Estate representation in NYC, Nassau, Suffolk, and Westchester. Focused advocacy, meticulous transactions, and dedicated defense. Your initial consultation is completely free.
            </motion.p>

            {/* CTA Buttons */}
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
                className="group flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy shadow-lg hover:bg-gold-bright transition-all cursor-pointer"
                id="hero-schedule-btn"
              >
                <span>Get Your Free Consultation</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </motion.button>

              <a
                href="tel:9175477563"
                className="flex items-center justify-center gap-2.5 rounded-md border-2 border-white/30 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-navy transition-colors"
                id="hero-phone-btn"
              >
                <Phone size={17} />
                <span>(917) 547-7563</span>
              </a>
            </motion.div>

            {/* Guarantee badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-7"
            >
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-blue-50"
                >
                  <span className="text-gold">{b.icon}</span>
                  <span>{b.label}</span>
                </div>
              ))}
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
              {/* Gold frame accent */}
              <div className="absolute -inset-3 rounded-2xl border border-gold/30" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy-deep via-transparent to-transparent z-10" />
              <img
                src="/randy.png"
                alt="Randy O. Smith, Attorney at Law"
                className="w-80 xl:w-96 rounded-2xl object-cover object-top shadow-2xl"
                style={{ maxHeight: '540px' }}
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded-md bg-gold px-5 py-2 text-center shadow-lg">
                <span className="block font-display text-sm font-bold uppercase tracking-wide text-navy">Randy O. Smith, Esq.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
