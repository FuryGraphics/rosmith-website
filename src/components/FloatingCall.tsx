import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function FloatingCall() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-6 right-6 z-40 md:hidden"
    >
      <a
        href="tel:9175472563"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C] text-neutral-950 shadow-2xl hover:bg-[#d4b896] hover:scale-105 active:scale-95 transition-all text-center relative border border-white/10"
        aria-label="Direct Mobile Call Attorney"
        id="mobile-floating-dialer"
      >
        {/* Subtle ripple wave */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#C9A84C]/40 opacity-75 pointer-events-none" />
        <Phone size={24} className="relative z-10 stroke-[2.5]" />
      </a>
    </motion.div>
  );
}
