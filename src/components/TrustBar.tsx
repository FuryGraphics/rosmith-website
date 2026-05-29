import { motion } from 'motion/react';
import { Award, Briefcase, Clock, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    {
      icon: <Award className="text-[#C9A84C]" size={20} />,
      metric: '20+ Years',
      label: 'Trial & Advisory Experience'
    },
    {
      icon: <Briefcase className="text-[#C9A84C]" size={20} />,
      metric: '1,000+',
      label: 'Matters Handled & Resolved'
    },
    {
      icon: <Clock className="text-[#C9A84C]" size={20} />,
      metric: '24/7 Availability',
      label: 'Immediate Legal Arrest Hotline'
    },
    {
      icon: <ShieldCheck className="text-[#C9A84C]" size={20} />,
      metric: '$0 Initial Fee',
      label: '100% Free Confidential Case Review'
    }
  ];

  return (
    <div className="relative border-t-2 border-[#C9A84C] bg-[#1a1a2e] py-6 z-10" id="trustbar-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-neutral-800">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex items-center gap-4 px-2 lg:justify-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A84C]/5 text-[#C9A84C] shrink-0">
                {stat.icon}
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-neutral-100 uppercase tracking-tight md:text-xl">
                  {stat.metric}
                </h4>
                <p className="text-xs text-neutral-400 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
