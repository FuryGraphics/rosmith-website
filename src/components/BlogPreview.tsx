import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

interface BlogPreviewProps {
  onSelectPost: (post: BlogPost) => void;
}

export default function BlogPreview({ onSelectPost }: BlogPreviewProps) {
  return (
    <section id="insights" className="py-20 bg-neutral-950 relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 z-0 h-[350px] w-[350px] rounded-full bg-[#C9A84C]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] font-mono">
            LEGAL THOUGHT LEADERSHIP
          </span>
          <h2 className="font-serif text-3xl font-bold text-neutral-100 sm:text-4xl mt-2">
            Latest Legal Insights & Advice
          </h2>
          <div className="h-1 w-20 bg-[#C9A84C] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Keep informed about key legislative benchmarks, estate title requirements, and criminal defense rights operating inside New York.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-900 bg-[#1a1a2e] shadow-xl hover:border-neutral-800 transition-colors duration-300"
              id={`blog-card-${post.id}`}
            >
              {/* Header category tagging visual overlay */}
              <div className="relative overflow-hidden aspect-[16/10] bg-neutral-950">
                <img
                  src={post.imageSeed}
                  alt={post.title}
                  className="h-full w-full object-cover filtering-grayscale group-hover:scale-105 group-hover:opacity-90 transition-all duration-550"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating category pill */}
                <div className="absolute left-4 top-4 bg-[#C9A84C] px-3 py-1 rounded text-[10px] font-bold text-neutral-950 uppercase tracking-wider font-mono shadow-md">
                  {post.category}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] text-neutral-450 font-mono mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} className="text-[#C9A84C]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User size={11} className="text-[#C9A84C]" />
                      {post.author}
                    </span>
                  </div>

                  <h3 
                    onClick={() => onSelectPost(post)}
                    className="font-serif text-xl font-bold text-neutral-100 hover:text-[#C9A84C] cursor-pointer transition-colors leading-snug line-clamp-2"
                  >
                    {post.title}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read more triggers */}
                <button
                  onClick={() => onSelectPost(post)}
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C9A84C] hover:text-[#d4b896] transition-colors font-mono cursor-pointer self-start focus:outline-none mt-6"
                  id={`blog-btn-${post.id}`}
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </motion.article>
          ))}
        </div>

        {/* View all articles bottom bar trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onSelectPost(BLOG_POSTS[0])}
            className="inline-block rounded border border-neutral-800 bg-neutral-900/60 px-8 py-3.5 text-sm font-semibold text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors cursor-pointer"
            id="view-all-articles-btn"
          >
            View All Legal Articles & Insights →
          </button>
        </div>

      </div>
    </section>
  );
}
