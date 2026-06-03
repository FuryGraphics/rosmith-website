import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

interface BlogPreviewProps {
  onSelectPost: (post: BlogPost) => void;
}

export default function BlogPreview({ onSelectPost }: BlogPreviewProps) {
  return (
    <section id="insights" className="py-20 bg-cream relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Title Block */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Legal Thought Leadership
          </span>
          <h2 className="font-display text-3xl font-bold uppercase text-navy sm:text-4xl mt-2">
            Latest Legal Insights &amp; Advice
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-sm sm:text-base text-slate leading-relaxed">
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
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              id={`blog-card-${post.id}`}
            >
              {/* Header category tagging visual overlay */}
              <div className="relative overflow-hidden aspect-[16/10] bg-neutral-100">
                <img
                  src={post.imageSeed}
                  alt={post.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Floating category pill */}
                <div className="absolute left-4 top-4 bg-gold px-3 py-1 rounded text-[10px] font-bold text-navy uppercase tracking-wider shadow-md">
                  {post.category}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] text-slate font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} className="text-gold" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User size={11} className="text-gold" />
                      {post.author}
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectPost(post)}
                    className="font-display text-xl font-bold uppercase tracking-wide text-navy hover:text-gold cursor-pointer transition-colors leading-snug line-clamp-2"
                  >
                    {post.title}
                  </h3>

                  <p className="text-slate text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read more triggers */}
                <button
                  onClick={() => onSelectPost(post)}
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold hover:text-navy transition-colors cursor-pointer self-start focus:outline-none mt-6"
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
            className="inline-block rounded-md border-2 border-navy bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
            id="view-all-articles-btn"
          >
            View All Legal Articles &amp; Insights
          </button>
        </div>

      </div>
    </section>
  );
}
