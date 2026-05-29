import { MapPin, Phone, Mail, Scale, CalendarCheck } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onOpenConsultation, onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-950 z-10" id="main-footer">
      
      {/* ========================================================= */}
      {/* SECTION 8: FULL-WIDTH CTA SECTION (STOWED OVER FOOTER CORES) */}
      {/* ========================================================= */}
      <div className="bg-[#C9A84C] py-14 px-4 sm:px-6 lg:px-8 text-neutral-950 relative overflow-hidden">
        {/* Background grid details */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d4b896]/20 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-5xl text-center relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a2e] bg-[#1a1a2e]/5 px-3 py-1 rounded-full font-mono select-none">
            24 / 7 SERVICE REASSURANCE
          </span>
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl mt-3 tracking-tight">
            Facing a Legal Challenge? We are Ready to Help.
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium text-neutral-900 max-w-2xl mx-auto">
            Your choice of legal representation matters. Get a completely free, 100% confidential assessment of your criminal, injury, or property case today.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center items-center">
            <button
              onClick={onOpenConsultation}
              className="group flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-8 py-4 text-sm font-bold text-white shadow-xl hover:bg-neutral-900 active:scale-[0.98] transition-all w-full sm:w-auto cursor-pointer"
              id="footer-action-consult"
            >
              <CalendarCheck size={16} className="text-[#C9A84C]" />
              <span>Schedule Your Free Consultation</span>
            </button>

            <a
              href="tel:9175477563"
              className="flex items-center justify-center gap-2 rounded-md border border-neutral-950 px-8 py-4 text-sm font-bold text-neutral-950 hover:bg-neutral-950/10 transition-colors w-full sm:w-auto font-mono text-center"
              id="footer-action-call"
            >
              <Phone size={15} />
              <span>Call Randy: (917) 547-7563</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION 9: STICKY FOOTER GRIDS */}
      {/* ========================================================= */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 border-t border-neutral-905">
        
        {/* 4-Column Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Firm Coordinates details - taking 4 slots */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-[#C9A84C]/10 text-[#C9A84C]">
                <Scale size={18} />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold tracking-tight text-neutral-100">
                  R.O. SMITH LAW FIRM
                </span>
                <span className="block text-[8px] uppercase tracking-widest text-[#C9A84C] font-semibold -mt-1 font-mono">
                  DBA: ROSMITH • ATTORNEY RSIMIT
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-450 leading-relaxed max-w-sm">
              Providing compassionate, aggressive, and highly structured legal defense, injury representation, and residential-commercial closings throughout NYC and Southern Long Island.
            </p>

            <div className="space-y-3.5 text-xs text-neutral-400">
              <div className="flex gap-2.5 items-start">
                <MapPin size={14} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <span>11418 238th Street, Elmont, NY 11003</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone size={14} className="text-[#C9A84C] shrink-0" />
                <a href="tel:9175477563" className="hover:text-white transition-colors font-mono font-semibold">
                  (917) 547-7563
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail size={14} className="text-[#C9A84C] shrink-0" />
                <a href="mailto:rsmit042179@gmail.com" className="hover:text-white transition-colors">
                  rsmit042179@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Practice Areas - taking 2 slots */}
          <div className="lg:col-span-2.5 lg:col-start-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200 font-mono">
              Practice Focus
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-neutral-400">
              <button onClick={() => onScrollTo('practice-areas')} className="hover:text-[#C9A84C] text-left transition-colors">
                Criminal Defense
              </button>
              <button onClick={() => onScrollTo('practice-areas')} className="hover:text-[#C9A84C] text-left transition-colors">
                DUI & Traffic Moving Violations
              </button>
              <button onClick={() => onScrollTo('practice-areas')} className="hover:text-[#C9A84C] text-left transition-colors">
                Personal Injury & Crashes
              </button>
              <button onClick={() => onScrollTo('practice-areas')} className="hover:text-[#C9A84C] text-left transition-colors">
                Real Estate Transactions
              </button>
            </div>
          </div>

          {/* Column 3: Quick Page anchors - taking 2 slots */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200 font-mono">
              Quick Navigation
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-neutral-400">
              <button onClick={() => onScrollTo('home')} className="hover:text-[#C9A84C] text-left transition-colors">
                Home Page
              </button>
              <button onClick={() => onScrollTo('why-us')} className="hover:text-[#C9A84C] text-left transition-colors">
                Why R.O. Smith
              </button>
              <button onClick={() => onScrollTo('testimonials')} className="hover:text-[#C9A84C] text-left transition-colors">
                Client Testimonials
              </button>
              <button onClick={() => onScrollTo('service-areas')} className="hover:text-[#C9A84C] text-left transition-colors">
                Regional Jurisdictions
              </button>
              <button onClick={() => onScrollTo('insights')} className="hover:text-[#C9A84C] text-left transition-colors">
                Legal Insights
              </button>
            </div>
          </div>

          {/* Column 4: Legal columns - taking 2 slots */}
          <div className="lg:col-span-1.5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200 font-mono">
              Legal Pages
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-neutral-400">
              <span className="hover:text-[#C9A84C] transition-colors cursor-not-allowed select-none">
                Privacy Clause
              </span>
              <span className="hover:text-[#C9A84C] transition-colors cursor-not-allowed select-none">
                Disclaimer Info
              </span>
              <span className="hover:text-[#C9A84C] transition-colors cursor-not-allowed select-none">
                County Sitemap
              </span>
            </div>
          </div>

        </div>

        {/* Horizontal Divider */}
        <hr className="border-neutral-900 my-8" />

        {/* Copyright & Disclaimer subtext details bar */}
        <div className="text-center md:text-left space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-neutral-500 gap-4">
            <span>
              &copy; {currentYear} R.O. Smith Law Firm. All rights reserved. DBA: ROSMITH.
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#C9A84C]">
              ATTORNEY ADVERTISING MATERIALS
            </span>
          </div>

          <p className="text-[10px] text-neutral-600 leading-relaxed text-justify">
            <strong>ATTORNEY ADVERTISING DISCLAIMER:</strong> This website is for informational, educative, and scheduling purposes only. Under New York Rules of Professional Conduct, the materials here constitute Attorney Advertising. Submitting consultation intake requests, calling office phone numbers, or sending emails to Attorney Randy O. Smith does not form, suggest, or initiate an official attorney-client relationship. An attorney-client relationship is strictly forged through a signed written retainer agreement. Prior legal case accomplishments and client feedback do not promise, guarantee, or assure similar future outcomes in other New York proceedings.
          </p>
        </div>

      </div>

    </footer>
  );
}
