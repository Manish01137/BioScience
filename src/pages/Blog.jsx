import { Link } from 'react-router-dom'
import * as Fi from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { BLOGS } from '../data/blogs'

export default function Blog() {
  return (
    <>
      <PageHero
        tag="Insights & Education"
        title="Biospire Blog"
        subtitle="Evidence-based perspectives on iron supplementation — absorption, bioavailability, tolerability, and the science of formulations that actually work."
        image="/Blog.jpg"
      />

      {/* ─── INTRO ─── */}
      <section className="bg-body-bg py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="sec-tag">Knowledge Hub</span>
          <span className="brand-divider" />
          <h2 className="font-display font-bold text-navy mb-5" style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)' }}>
            Science, Simplified
          </h2>
          <p className="font-body text-base text-b-text leading-[1.88]">
            Curated articles for healthcare professionals and patients alike — translating
            the latest evidence on iron deficiency into clear, actionable guidance.
          </p>
        </div>
      </section>

      {/* ─── BLOG GRID ─── */}
      <section className="bg-alt-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="sec-tag">All Articles</span>
            <span className="brand-divider" />
            <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              Latest from Biospire
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {BLOGS.map((b, i) => {
              const Icon = Fi[b.icon] || Fi.FiFileText
              return (
                <Link
                  key={b.slug}
                  to={`/blog/${b.slug}`}
                  className={`card flex flex-col p-8 no-underline ${i % 3 === 0 ? 'fade-up' : i % 3 === 1 ? 'fade-up-2' : 'fade-up-3'}`}
                  style={{ borderTop: `3px solid ${b.accent}` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                      style={{ background: `linear-gradient(135deg,${b.accent},${b.accent}cc)` }}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="font-display text-[2.2rem] font-bold leading-none"
                      style={{ color: `${b.accent}1f` }}>
                      {b.number}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-body text-[10px] font-semibold tracking-[2.5px] uppercase text-b-teal">
                      {b.category}
                    </span>
                    <span className="text-meta text-[10px]">•</span>
                    <span className="font-body text-[10px] text-meta tracking-wide">{b.readTime}</span>
                  </div>

                  <h3 className="font-display text-[1.4rem] font-bold text-navy leading-snug mb-3">
                    {b.title}
                  </h3>
                  <p className="font-body text-sm text-b-text leading-relaxed mb-6 flex-1">
                    {b.excerpt}
                  </p>

                  <div className="flex items-center gap-1.5 text-gold font-body text-sm font-semibold group-hover:gap-3 transition-all">
                    Read article <Fi.FiArrowRight size={14} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 px-6 bg-body-bg">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display italic text-navy font-semibold mb-6" style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)' }}>
            Want to learn more about Biospire’s precision-led formulations?
          </p>
          <Link to="/portfolio" className="btn-primary px-9 py-4 rounded-lg text-sm font-bold">
            Explore Portfolio <Fi.FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
