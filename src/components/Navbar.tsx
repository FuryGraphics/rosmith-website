import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu, X, Phone, Calendar, Scale, Clock, ChevronDown,
  Shield, Heart, Building, Building2, MapPin, LucideIcon
} from 'lucide-react';
import { SERVICE_AREAS } from '../data';

interface NavbarProps {
  onOpenConsultation: () => void;
}

interface DropdownItem {
  label: string;
  to: string;
  blurb: string;
  Icon: LucideIcon;
}

const LAW_SPECIALTIES: DropdownItem[] = [
  { label: 'Criminal Defense', to: '/practice-areas/criminal-defense', blurb: 'DUI, drug & felony defense', Icon: Shield },
  { label: 'Personal Injury', to: '/practice-areas/personal-injury', blurb: 'Accidents & injury recovery', Icon: Heart },
  { label: 'Real Estate Law', to: '/practice-areas/real-estate', blurb: 'Closings & transactions', Icon: Building }
];

// Derived from data so new service areas automatically appear in the menu
const AREAS_SERVED: DropdownItem[] = SERVICE_AREAS.map((a) => ({
  label: a.name,
  to: `/service-areas/${a.id}`,
  blurb: a.coverage.split(',').slice(0, 2).map((s) => s.trim()).join(', '),
  Icon: a.name.includes('County') ? MapPin : Building2
}));

const PAGE_LINKS = [
  { label: 'Why Us', to: '/why-us' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'FAQ', to: '/faq' }
];

const LINK_BASE = 'text-[13px] font-semibold uppercase tracking-wide transition-colors focus:outline-none cursor-pointer';

/* ---------------- Desktop hover dropdown ---------------- */
function NavDropdown({
  label, overviewPath, basePath, heading, items, wide = false, footer
}: {
  label: string; overviewPath: string; basePath: string; heading: string;
  items: DropdownItem[]; wide?: boolean; footer?: { label: string; to: string };
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname.startsWith(basePath);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => navigate(overviewPath)}
        className={`flex items-center gap-1 ${LINK_BASE} ${active ? 'text-gold' : 'text-ink hover:text-gold'}`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180 text-gold' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`absolute left-1/2 top-full -translate-x-1/2 pt-4 z-50 ${wide ? 'w-[36rem]' : 'w-80'}`}
          >
            <div className="absolute left-1/2 top-2.5 h-3 w-3 -translate-x-1/2 rotate-45 bg-navy" />
            <div className="overflow-hidden rounded-xl bg-navy shadow-2xl ring-1 ring-black/5">
              <div className="px-5 py-3 border-b border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{heading}</span>
              </div>
              <div className={`p-2 ${wide ? 'grid grid-cols-2 gap-1' : ''}`}>
                {items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/5 transition-colors min-w-0"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-gold group-hover:bg-gold group-hover:text-navy transition-colors shrink-0">
                      <item.Icon size={17} />
                    </span>
                    <span className="flex flex-col min-w-0">
                      <span className="font-display text-sm font-bold uppercase tracking-wide text-white group-hover:text-gold transition-colors truncate">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-blue-100/60 truncate">{item.blurb}</span>
                    </span>
                  </Link>
                ))}
              </div>
              {footer && (
                <Link
                  to={footer.to}
                  onClick={() => setOpen(false)}
                  className="block border-t border-white/10 px-5 py-3 text-center text-[11px] font-bold uppercase tracking-widest text-gold hover:bg-white/5 transition-colors"
                >
                  {footer.label} →
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- Mobile expandable group ---------------- */
function MobileDropdown({ label, items }: { label: string; items: DropdownItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between text-left font-display text-lg font-semibold uppercase tracking-wide text-ink hover:text-gold transition-colors py-2.5 border-b border-neutral-100 cursor-pointer"
      >
        {label}
        <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180 text-gold' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-cream rounded-md my-2"
          >
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center gap-3 px-4 py-3 border-b border-neutral-200 last:border-0 text-navy"
              >
                <item.Icon size={17} className="text-gold" />
                <span className="font-display text-sm font-bold uppercase tracking-wide">{item.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40" id="main-navbar">
        {/* Top utility ribbon */}
        <div className="hidden md:block bg-navy text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-1.5 text-[11px] font-medium tracking-wide">
            <div className="flex items-center gap-2 text-gold-soft/90">
              <Clock size={12} className="text-gold" />
              <span className="uppercase tracking-widest font-semibold">Available 24/7/365 • Free Confidential Consultations</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-white/70">Elmont, NY • Serving All NYC & Long Island</span>
              <a href="tel:9175472563" className="flex items-center gap-1.5 font-bold text-gold hover:text-gold-bright transition-colors">
                <Phone size={12} />
                <span>(917) 547-2563</span>
              </a>
            </div>
          </div>
        </div>

        {/* Primary navigation bar */}
        <nav
          className={`transition-all duration-300 border-b ${
            isScrolled
              ? 'bg-white/95 backdrop-blur border-neutral-200 py-2.5 shadow-md'
              : 'bg-white border-neutral-100 py-3.5'
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo Brand */}
            <Link to="/" className="flex items-center gap-3 text-left focus:outline-none" id="navbar-brand-logo">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy text-gold shadow-sm">
                <Scale size={22} className="stroke-[2.5]" />
              </div>
              <div>
                <span className="block font-display text-xl font-bold uppercase tracking-wide text-navy leading-none sm:text-2xl">
                  R.O. Smith
                </span>
                <span className="block text-[9px] uppercase tracking-[0.25em] text-gold font-bold mt-1">
                  Law Firm • Attorney at Law
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-7">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `${LINK_BASE} ${isActive ? 'text-gold' : 'text-ink hover:text-gold'}`}
              >
                Home
              </NavLink>

              <NavDropdown
                label="Law Specialties"
                overviewPath="/practice-areas/criminal-defense"
                basePath="/practice-areas"
                heading="Our Legal Services"
                items={LAW_SPECIALTIES}
              />

              <NavDropdown
                label="Areas Served"
                overviewPath="/service-areas"
                basePath="/service-areas"
                heading="Where We Practice"
                items={AREAS_SERVED}
                wide
                footer={{ label: 'View All Areas Served', to: '/service-areas' }}
              />

              {PAGE_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `${LINK_BASE} ${isActive ? 'text-gold' : 'text-ink hover:text-gold'}`}
                >
                  {link.label}
                </NavLink>
              ))}

              <button
                onClick={onOpenConsultation}
                className="rounded-md bg-gold px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-navy shadow-sm hover:bg-gold-bright hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
                id="desktop-nav-cta-btn"
              >
                Free Consultation
              </button>
            </div>

            {/* Mobile Hamburg Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="tel:9175472563"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-gold"
                aria-label="Direct Phone Call"
                id="mobile-nav-phone-direct"
              >
                <Phone size={17} />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-navy hover:text-gold"
                aria-label="Toggle navigation menu"
                id="mobile-nav-toggle-btn"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Slide out */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
              id="mobile-drawer-backdrop"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white p-6 pt-8 shadow-2xl overflow-y-auto"
              id="mobile-drawer-container"
            >
              {/* Menu header */}
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <div>
                  <span className="block font-display text-lg font-bold uppercase text-navy">Navigation</span>
                  <span className="text-[9px] font-bold text-gold uppercase tracking-[0.25em]">R.O. Smith Law Firm</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 text-navy"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col mt-4">
                <Link
                  to="/"
                  className="flex text-left font-display text-lg font-semibold uppercase tracking-wide text-ink hover:text-gold transition-colors py-2.5 border-b border-neutral-100"
                >
                  Home
                </Link>

                <MobileDropdown label="Law Specialties" items={LAW_SPECIALTIES} />
                <MobileDropdown label="Areas Served" items={AREAS_SERVED} />

                {PAGE_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex text-left font-display text-lg font-semibold uppercase tracking-wide text-ink hover:text-gold transition-colors py-2.5 border-b border-neutral-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Footer actions */}
              <div className="mt-8 space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-slate tracking-widest">Available 24/7/365</span>
                  <a href="tel:9175472563" className="flex items-center gap-2 text-xl font-bold text-navy" id="mobile-drawer-call-btn">
                    <Phone size={18} className="text-gold" />
                    <span>(917) 547-2563</span>
                  </a>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-gold py-3.5 font-bold uppercase tracking-wide text-navy shadow hover:bg-gold-bright"
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
