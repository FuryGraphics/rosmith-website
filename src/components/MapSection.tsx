import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Building2, CheckCircle } from 'lucide-react';
import { SERVICE_AREAS } from '../data';

export default function MapSection() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  return (
    <section id="service-areas" className="py-20 bg-white relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Title Block */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Localized Jurisdiction
          </span>
          <h2 className="font-display text-3xl font-bold uppercase text-navy sm:text-4xl mt-2">
            We Serve All of NYC &amp; Surrounding Counties
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-sm sm:text-base text-slate leading-relaxed">
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
            className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-cream p-4 shadow-sm relative"
            id="map-visual-pane"
          >
            {/* Address bar ribbon */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4 mb-4">
              <div className="flex gap-2.5 items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-gold shrink-0">
                  <MapPin size={17} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate uppercase tracking-widest font-bold">Primary Office</span>
                  <a
                    href="https://maps.google.com/?q=11418+238th+Street,+Elmont,+NY+11003"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-navy hover:text-gold transition-colors"
                  >
                    11418 238th Street, Elmont, NY 11003
                  </a>
                </div>
              </div>

              <div className="flex gap-2.5 items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-gold shrink-0">
                  <Phone size={17} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate uppercase tracking-widest font-bold">Legal Team Phone</span>
                  <a href="tel:9175472563" className="text-sm font-bold text-navy hover:text-gold transition-colors">
                    (917) 547-2563
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Iframe Map Container with border frame */}
            <div className="relative h-[320px] md:h-[380px] w-full rounded-md overflow-hidden border border-neutral-200 shadow-sm">
              <iframe
                title="R.O. Smith Law Firm Location Map"
                src="https://maps.google.com/maps?q=11418%20238th%20Street,%20Elmont,%20NY%2511003&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                id="maps-google-iframe"
              />
            </div>

            {/* Visual indication */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate font-medium">
              <span>GPS: 40.6974° N, 73.7144° W</span>
              <span className="text-navy font-bold flex items-center gap-1">
                <Building2 size={12} className="text-gold" /> Border of Queens &amp; Nassau County
              </span>
            </div>
          </motion.div>

          {/* Right Column: Service Area Counties and Details navigator */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">
              Regional Coverage
            </span>

            <div className="space-y-3 shrink-0">
              {SERVICE_AREAS.map((area, index) => (
                <button
                  key={area.id}
                  onClick={() => setActiveAreaIndex(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                    activeAreaIndex === index
                      ? 'bg-navy border-navy shadow-md'
                      : 'bg-white border-neutral-200 hover:border-gold'
                  }`}
                  id={`area-tab-${area.id}`}
                >
                  <div className="flex justify-between items-center">
                    <span className={`font-display text-lg font-bold uppercase tracking-wide ${activeAreaIndex === index ? 'text-white' : 'text-navy'}`}>
                      {area.name}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: activeAreaIndex === index ? '#c9a14a' : '#cbd2dc' }} />
                  </div>
                  <span className={`block text-xs mt-1 truncate ${activeAreaIndex === index ? 'text-blue-100/70' : 'text-slate'}`}>
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
              className="flex-1 rounded-lg border border-neutral-200 bg-cream p-5 shadow-sm flex flex-col justify-between"
              id="active-area-details"
            >
              <div>
                <h4 className="font-display text-xl font-bold uppercase text-navy flex items-center gap-2 mb-2 tracking-wide">
                  <span>{SERVICE_AREAS[activeAreaIndex].name}</span>
                </h4>
                <p className="text-sm text-slate leading-relaxed mb-4">
                  {SERVICE_AREAS[activeAreaIndex].details}
                </p>

                <hr className="border-neutral-200 my-3" />

                <span className="block text-xs uppercase tracking-widest text-gold font-bold mb-2">
                  Key Neighborhoods Served:
                </span>
                <p className="text-xs text-slate bg-white rounded p-3 border border-neutral-200 leading-relaxed">
                  {SERVICE_AREAS[activeAreaIndex].coverage}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-green-700 font-bold mt-4">
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
