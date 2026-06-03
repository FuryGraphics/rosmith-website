import { motion } from 'motion/react';

export default function TrustBar() {
  const stats = [
    { metric: '20+', suffix: 'Years', label: 'Trial & Advisory Experience' },
    { metric: '1,000+', suffix: 'Cases', label: 'Matters Handled & Resolved' },
    { metric: '24/7', suffix: 'Access', label: 'Immediate Arrest Hotline' },
    { metric: '$0', suffix: 'Upfront', label: '100% Free Confidential Review' }
  ];

  return (
    <div className="relative bg-navy py-10 z-10 border-b-4 border-gold" id="trustbar-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center px-2"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-bold text-gold md:text-5xl leading-none">
                  {stat.metric}
                </span>
                <span className="font-display text-sm font-semibold uppercase tracking-wide text-gold-soft/80">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 text-xs font-medium text-blue-100/70 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
