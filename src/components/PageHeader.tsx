import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 pb-14 lg:pt-40">
      {/* Atmospheric background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="h-full w-full object-cover opacity-[0.12]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/95 to-navy/70" />
      </div>
      <div className="absolute -top-32 -left-32 z-0 h-[460px] w-[460px] rounded-full bg-gold/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-100/60">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={13} />
          <span className="text-gold">{title}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{eyebrow}</span>
          )}
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl mt-2">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-blue-100/80 sm:text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="h-1 w-24 bg-gold mt-6 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
