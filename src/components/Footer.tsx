import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Scale, CalendarCheck } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-deep z-10" id="main-footer">

      {/* ========================================================= */}
      {/* FULL-WIDTH CTA SECTION */}
      {/* ========================================================= */}
      <div className="bg-gold py-14 px-4 sm:px-6 lg:px-8 text-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-5xl text-center relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy bg-navy/10 px-3 py-1 rounded-full select-none">
            24 / 7 Service Reassurance
          </span>
          <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl mt-4 tracking-wide">
            Facing a Legal Challenge? We Are Ready to Help.
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium text-navy/80 max-w-2xl mx-auto">
            Your choice of legal representation matters. Get a completely free, 100% confidential assessment of your criminal, injury, or property case today.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center items-center">
            <button
              onClick={onOpenConsultation}
              className="group flex items-center justify-center gap-2 rounded-md bg-navy px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl hover:bg-navy-medium active:scale-[0.98] transition-all w-full sm:w-auto cursor-pointer"
              id="footer-action-consult"
            >
              <CalendarCheck size={16} className="text-gold" />
              <span>Schedule Your Free Consultation</span>
            </button>

            <a
              href="tel:9175477563"
              className="flex items-center justify-center gap-2 rounded-md border-2 border-navy px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy hover:bg-navy/10 transition-colors w-full sm:w-auto text-center"
              id="footer-action-call"
            >
              <Phone size={15} />
              <span>Call Randy: (917) 547-7563</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FOOTER GRIDS */}
      {/* ========================================================= */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">

        {/* 4-Column Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

          {/* Column 1: Firm Coordinates details */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gold text-navy">
                <Scale size={20} />
              </div>
              <div>
                <span className="block font-display text-lg font-bold uppercase tracking-wide text-white">
                  R.O. Smith Law Firm
                </span>
                <span className="block text-[8px] uppercase tracking-[0.25em] text-gold font-bold mt-0.5">
                  Attorney at Law • Elmont, NY
                </span>
              </div>
            </div>

            <p className="text-sm text-blue-100/60 leading-relaxed max-w-sm">
              Providing compassionate, aggressive, and highly structured legal defense, injury representation, and residential-commercial closings throughout NYC and Southern Long Island.
            </p>

            <div className="space-y-3.5 text-sm text-blue-100/70">
              <div className="flex gap-2.5 items-start">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                <span>11418 238th Street, Elmont, NY 11003</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone size={15} className="text-gold shrink-0" />
                <a href="tel:9175477563" className="hover:text-white transition-colors font-bold">
                  (917) 547-7563
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail size={15} className="text-gold shrink-0" />
                <a href="mailto:rsmit042179@gmail.com" className="hover:text-white transition-colors">
                  rsmit042179@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div className="lg:col-span-3 lg:col-start-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Practice Focus
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-blue-100/70">
              <Link to="/practice-areas/criminal-defense" className="hover:text-gold text-left transition-colors">
                Criminal Defense
              </Link>
              <Link to="/practice-areas/criminal-defense" className="hover:text-gold text-left transition-colors">
                DUI &amp; Traffic Violations
              </Link>
              <Link to="/practice-areas/personal-injury" className="hover:text-gold text-left transition-colors">
                Personal Injury &amp; Crashes
              </Link>
              <Link to="/practice-areas/real-estate" className="hover:text-gold text-left transition-colors">
                Real Estate Transactions
              </Link>
            </div>
          </div>

          {/* Column 3: Quick Page anchors */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-blue-100/70">
              <Link to="/" className="hover:text-gold text-left transition-colors">
                Home
              </Link>
              <Link to="/why-us" className="hover:text-gold text-left transition-colors">
                Why R.O. Smith
              </Link>
              <Link to="/testimonials" className="hover:text-gold text-left transition-colors">
                Testimonials
              </Link>
              <Link to="/service-areas" className="hover:text-gold text-left transition-colors">
                Areas Served
              </Link>
              <Link to="/faq" className="hover:text-gold text-left transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Column 4: Legal pages */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Legal
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-blue-100/70">
              <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gold transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>

        </div>

        {/* Horizontal Divider */}
        <hr className="border-white/10 my-8" />

        {/* Copyright & Disclaimer subtext */}
        <div className="text-center md:text-left space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-blue-100/50 gap-4">
            <span>
              &copy; {currentYear} R.O. Smith Law Firm. All rights reserved.
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-gold font-bold">
              Attorney Advertising
            </span>
          </div>

          <p className="text-[10px] text-blue-100/40 leading-relaxed text-justify">
            <strong className="text-blue-100/60">ATTORNEY ADVERTISING DISCLAIMER:</strong> This website is for informational, educative, and scheduling purposes only. Under New York Rules of Professional Conduct, the materials here constitute Attorney Advertising. Submitting consultation intake requests, calling office phone numbers, or sending emails to Attorney Randy O. Smith does not form, suggest, or initiate an official attorney-client relationship. An attorney-client relationship is strictly forged through a signed written retainer agreement. Prior legal case accomplishments and client feedback do not promise, guarantee, or assure similar future outcomes in other New York proceedings.
          </p>
        </div>

      </div>

    </footer>
  );
}
