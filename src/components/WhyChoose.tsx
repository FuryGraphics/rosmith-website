import { motion } from 'motion/react';
import { ShieldAlert, UserCheck, Trophy, PhoneCall, HelpCircle } from 'lucide-react';

export default function WhyChoose() {
  const points = [
    {
      icon: <UserCheck size={20} />,
      title: 'Personalized Representation (Not a Factory)',
      description: 'You work directly with Attorney Randy O. Smith. We do not pass your valuable files down to junior associates or paralegals. You get premium counsel directly.'
    },
    {
      icon: <ShieldAlert size={20} />,
      title: 'Strategic, Aggressive Advocacy',
      description: 'Whether standing before judges in NYC criminal courts or negotiating damages with multi-billion dollar insurance agencies, we defend your claims aggressively.'
    },
    {
      icon: <Trophy size={20} />,
      title: 'Proven Local Track Record',
      description: 'With massive cases handled and resolved in real estate, felony criminal defense, and injury recoveries, our local experience in NY counties pays critical dividends.'
    },
    {
      icon: <PhoneCall size={20} />,
      title: 'True 24/7/365 Emergency Access',
      description: 'Arrests or critical incidents do not keep business hours. Our legal line (917-547-2563) is answered around the clock, providing timely guidance.'
    },
    {
      icon: <HelpCircle size={20} />,
      title: '100% Free Consultation Guarantee',
      description: 'We believe everyone deserves easy access to high-quality legal advice. Analyzing your matter involves zero initial financial commitment or obligation.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Column: Bullets & details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                The R.O. Smith Difference
              </span>
              <h2 className="font-display text-3xl font-bold uppercase text-navy sm:text-4xl mt-2 leading-tight">
                Why Choose R.O. Smith Law Firm?
              </h2>
              <div className="h-1 w-20 bg-gold mt-4 rounded-full" />
            </div>

            <p className="text-slate text-sm md:text-base leading-relaxed">
              When you face complex legal realities—whether buying a home, healing from a traumatic accident, or defending your clean criminal record—the credentials and commitment of your chosen attorney form the bridge to your future. We specialize in turning stress into strategic clarity.
            </p>

            {/* Vertically stacked highlight bullet list */}
            <div className="space-y-5 pt-2">
              {points.map((pt, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy text-gold shrink-0 mt-0.5 shadow-sm">
                    {pt.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold uppercase tracking-wide text-navy">
                      {pt.title}
                    </h4>
                    <p className="text-sm text-slate mt-1 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image/Aesthetic Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-sm overflow-hidden rounded-xl bg-navy p-3 shadow-2xl group"
            >
              {/* Gold inner frame */}
              <div className="absolute inset-x-2 inset-y-2 border border-gold/30 z-20 pointer-events-none rounded-lg" />

              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=650&h=860&q=80"
                  alt="Classic Scales of Justice representing Randy O. Smith Law Firm"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Visual Label overlays inside the image box */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-transparent p-6 text-center">
                  <span className="block font-display text-xl font-bold uppercase text-gold tracking-wide">
                    Justice &amp; Integrity
                  </span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-blue-100/80 mt-1 font-semibold">
                    Representing Client Rights 24/7
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
