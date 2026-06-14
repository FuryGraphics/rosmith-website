import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, ArrowLeft, Phone, Calendar as CalendarIcon } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function BlogDetailModal({ post, onClose, onOpenConsultation }: BlogDetailModalProps) {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          id="blog-modal-backdrop"
        />

        {/* Modal body */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative flex h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-2xl"
          id="blog-detail-modal"
        >
          {/* Top colored accent indicator */}
          <div className="h-1.5 w-full bg-[#C9A84C]" />

          {/* Sticky header with author metadata */}
          <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/90 px-6 py-4 backdrop-blur-sm shrink-0">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-neutral-400 hover:text-[#C9A84C] transition-colors"
              id="blog-back-btn"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-semibold tracking-wide">Back to Insights</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-full bg-neutral-800 p-1 text-neutral-400 hover:bg-neutral-700 hover:text-[#C9A84C] transition-colors"
              aria-label="Close article modal"
              id="close-blog-modal-btn"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable content section */}
          <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10">
            {/* Header elements */}
            <div className="space-y-4">
              <span className="inline-block rounded bg-[#C9A84C]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
                {post.category}
              </span>
              <h3 className="font-serif text-3xl font-bold text-neutral-100 md:text-4xl leading-tight" id="blog-article-title">
                {post.title}
              </h3>

              {/* Author & date metadata bar */}
              <div className="flex flex-wrap items-center gap-4 border-b border-neutral-800 pb-6 text-xs text-neutral-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <User size={13} className="text-[#C9A84C]" />
                  <span>By {post.author}</span>
                </div>
                <div className="hidden sm:block text-neutral-600">|</div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#C9A84C]" />
                  <span>{post.date}</span>
                </div>
                <div className="hidden sm:block text-neutral-600">|</div>
                <div className="text-[#C9A84C] font-semibold uppercase tracking-wider bg-[#C9A84C]/5 px-2 py-0.5 rounded">
                  ROSMITH Publication
                </div>
              </div>
            </div>

            {/* Main content body */}
            <div className="mt-8 space-y-6 text-neutral-300 leading-relaxed text-sm md:text-base">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Render list items dynamically if paragraph matches numeric listing
                if (paragraph.match(/^[1-4]\.\s/)) {
                  const [title, ...rest] = paragraph.split(':');
                  return (
                    <div key={index} className="rounded-lg border border-neutral-805 bg-neutral-950/20 p-4 pl-5 border-l-4 border-l-[#C9A84C] my-4">
                      <h4 className="font-serif text-base font-bold text-neutral-100 flex items-center gap-2">
                        <span>{title}:</span>
                      </h4>
                      <p className="mt-1 text-neutral-300 text-sm whitespace-pre-line leading-relaxed">
                        {rest.join(':').trim()}
                      </p>
                    </div>
                  );
                }
                return (
                  <p key={index} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Bottom CTA alert panel */}
            <div className="mt-12 rounded-xl border border-neutral-800 bg-[#C9A84C]/5 p-6 md:p-8">
              <h4 className="font-serif text-xl font-bold text-neutral-100 mb-2">
                Need Legal Counsel on This Topic?
              </h4>
              <p className="text-neutral-405 text-sm leading-relaxed mb-6">
                Legal definitions, timelines, and statutes change frequently in New York jurisdictions. Randy O. Smith is available to guide you step-by-step through your specific case or transaction. Let's schedule a confidential analysis today.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="flex items-center justify-center gap-2 rounded-md bg-[#C9A84C] px-5 py-3 text-xs md:text-sm font-semibold text-neutral-950 hover:bg-[#d4b896] transition-colors shadow-md shrink-0"
                  id="blog-alert-schedule-btn"
                >
                  <CalendarIcon size={16} />
                  <span>Request Free Case Evaluation</span>
                </button>
                <a
                  href="tel:9175472563"
                  className="flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-5 py-3 text-xs md:text-sm font-semibold text-neutral-200 hover:bg-neutral-800 transition-colors shrink-0"
                  id="blog-alert-call-btn"
                >
                  <Phone size={16} className="text-[#C9A84C]" />
                  <span>Call Randy: (917) 547-2563</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
