import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Building2, CheckCircle } from 'lucide-react';
import { SERVICE_AREAS } from '../data';

export default function MapSection() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  return (
    <section id="service-areas" className="py-20 bg-[#1a1a2e] relative overflow-hidden">
      <div className="absolute top-12 left-10 h-[300px] w-[300px] rounded-full bg-[#C9A84C]/5 blur-[70px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] font-mono">
            LOCALIZED JURISDICTION
          </span>
          <h2 className="font-serif text-3xl font-bold text-neutral-100 sm:text-4xl mt-2">
            We Serve All of NYC & Surrounding Counties
          </h2>
          <div className="h-1 w-20 bg-[#C9A84C] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Admitted to the State Bar of New York, Randy O. Smith represents clients in family, civil, and criminal court buildings across the metropolitan area.
          </p>
        </div>

        {/* Horizontal Flex Grid - Map vs list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Responsive Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-4 shadow-2xl relative"
            id="map-visual-pane"
          >
            {/* Address bar ribbon */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-900 pb-4 mb-4 text-neutral-300">
              <div className="flex gap-2.5 items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-[#C9A84C]/10 text-[#C9A84C] shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="block text-xs text-neutral-500 uppercase tracking-widest font-mono font-bold">PRIMARY OFFICE LAYOUT</span>
                  <a 
                    href="https://maps.google.com/?q=11418+238th+Street,+Elmont,+NY+11003" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm font-semibold hover:text-[#C9A84C] transition-colors"
                  >
                    11418 238th Street, Elmont, NY 11003
                  </a>
                </div>
              </div>

              <div className="flex gap-2.5 items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-[#C9A84C]/10 text-[#C9A84C] shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="block text-xs text-neutral-500 uppercase tracking-widest font-mono font-bold">LEGAL TEAM PHONE</span>
                  <a href="tel:9175477563" className="text-sm font-semibold hover:text-[#C9A84C] transition-colors">
                    (917) 547-7563
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Iframe Map Container with border frame */}
            <div className="relative h-[320px] md:h-[380px] w-full rounded-md overflow-hidden border border-neutral-900 shadow">
              <iframe
                title="R.O. Smith Law Firm Location Map"
                src="https://maps.google.com/maps?q=11418%20238th%20Street,%20Elmont,%20NY%2511003&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.9) contrast(1.2) invert(0.95)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                id="maps-google-iframe"
              />
              
              {/* Subtle dark layout accent border frame */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-neutral-800" />
            </div>

            {/* Visual indication */}
            <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>GPS: 40.6974° N, 73.7144° W</span>
              <span className="text-[#C9A84C] font-semibold flex items-center gap-1">
                <Building2 size={12} /> Border of Queens & Nassau County
              </span>
            </div>
          </motion.div>

          {/* Right Column: Service Area Counties and Details navigator */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] font-bold">
              REGIONAL COVERAGE TARGETS
            </span>

            <div className="space-y-3 shrink-0">
              {SERVICE_AREAS.map((area, index) => (
                <button
                  key={area.id}
                  onClick={() => setActiveAreaIndex(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                    activeAreaIndex === index
                      ? 'bg-[#1a1a2e] border-[#C9A84C] shadow-lg'
                      : 'bg-neutral-950/40 border-neutral-900 hover:border-neutral-700'
                  }`}
                  id={`area-tab-${area.id}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-lg font-bold text-neutral-100">
                      {area.name}
                    </span>
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: activeAreaIndex === index ? '#C9A84C' : '#333' }} />
                  </div>
                  <span className="block text-xs text-neutral-400 mt-1 truncate">
                    {area.coverage}
                  </span>
                </button>
              ))}
            </div>

            {/* Area highlight metadata panel */}
            <motion.div
              key={activeAreaIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 rounded-lg border border-neutral-800 bg-[#1a1a2e] p-5 shadow flex flex-col justify-between"
              id="active-area-details"
            >
              <div>
                <h4 className="font-serif text-xl font-bold text-neutral-100 flex items-center gap-2 mb-2">
                  <span className="text-neutral-500 text-sm italic">Focusing:</span>
                  <span>{SERVICE_AREAS[activeAreaIndex].name}</span>
                </h4>
                <p className="text-sm text-neutral-350 leading-relaxed mb-4">
                  {SERVICE_AREAS[activeAreaIndex].details}
                </p>
                
                <hr className="border-neutral-805 my-3" />
                
                <span className="block text-xs uppercase font-mono tracking-widest text-[#C9A84C] font-bold mb-2">
                  Key Neighborhoods Served:
                </span>
                <p className="text-xs text-neutral-400 bg-neutral-950/40 rounded p-3 border border-neutral-900 leading-relaxed">
                  {SERVICE_AREAS[activeAreaIndex].coverage}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-green-400 font-semibold font-mono mt-4">
                <CheckCircle size={14} />
                <span>Immediate 24-hour court representation dispatch available</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
