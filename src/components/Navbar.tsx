import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, Scale } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ onOpenConsultation, onScrollTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Practice Areas', id: 'practice-areas' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Service Areas', id: 'service-areas' },
    { label: 'Insights', id: 'insights' }
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/95 border-b border-neutral-900 py-3 shadow-lg'
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        }`}
        id="main-navbar"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo Brand */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none"
            id="navbar-brand-logo"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-br from-[#C9A84C] to-[#d4b896] text-neutral-950 shadow">
              <Scale size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <span className="block font-serif text-lg font-bold tracking-tight text-neutral-100 sm:text-xl">
                R.O. SMITH
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-[#C9A84C] font-semibold -mt-1 font-mono">
                LAW FIRM • ROSMITH
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-sm font-medium text-neutral-300 hover:text-[#C9A84C] transition-colors focus:outline-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Phone & Button */}
            <div className="flex items-center gap-5 border-l border-neutral-800 pl-6">
              <a
                href="tel:9175477563"
                className="flex items-center gap-1.5 text-xs font-semibold text-neutral-305 transition-colors hover:text-[#C9A84C] font-mono"
                id="desktop-phone-link"
              >
                <Phone size={13} className="text-[#C9A84C]" />
                <span>(917) 547-7563</span>
              </a>
              <button
                onClick={onOpenConsultation}
                className="rounded bg-[#C9A84C] px-4 py-2 text-xs font-bold text-neutral-950 shadow hover:bg-[#d4b896] hover:scale-[1.03] active:scale-[0.98] transition-all"
                id="desktop-nav-cta-btn"
              >
                Free Consultation
              </button>
            </div>
          </div>

          {/* Mobile Hamburg Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="tel:9175477563"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-[#C9A84C] relative"
              aria-label="Direct Phone Call"
              id="mobile-nav-phone-direct"
            >
              <Phone size={16} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-[#C9A84C]"
              aria-label="Toggle navigation menu"
              id="mobile-nav-toggle-btn"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Slide out */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-30 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              id="mobile-drawer-backdrop"
            />

            {/* Menu container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm border-l border-neutral-850 bg-neutral-950 p-6 pt-24 shadow-2xl"
              id="mobile-drawer-container"
            >
              {/* Menu background design items */}
              <div className="absolute top-12 left-6 right-6 border-b border-neutral-800 pb-4">
                <span className="block font-serif text-lg font-bold text-neutral-100">NAVIGATION</span>
                <span className="text-[9px] font-mono text-[#C9A84C] uppercase tracking-widest font-semibold block">R.O. SMITH LAW FIRM</span>
              </div>

              <div className="flex flex-col gap-5 mt-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="flex text-left font-serif text-xl font-medium text-neutral-300 hover:text-[#C9A84C] transition-colors py-1 cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Grid actions at details footer */}
              <div className="absolute bottom-10 left-6 right-6 border-t border-neutral-900 pt-6 space-y-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase font-mono text-neutral-500 tracking-wider">AVAILABLE 24/7/365</span>
                  <a
                    href="tel:9175477563"
                    className="flex items-center gap-2 text-lg font-semibold text-[#C9A84C] font-mono"
                    id="mobile-drawer-call-btn"
                  >
                    <Phone size={18} />
                    <span>(917) 547-7563</span>
                  </a>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded bg-[#C9A84C] py-3.5 font-semibold text-neutral-950 shadow hover:bg-[#d4b896]"
                  id="mobile-drawer-consult-btn"
                >
                  <Calendar size={16} />
                  <span>Free Consultation</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
