import { useParams, Link } from 'react-router-dom'
import * as Fi from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { BLOGS, getBlog } from '../data/blogs'

/* render **bold** segments inside a string */
function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**')
      ? <strong key={i} className="text-navy font-semibold">{p.slice(2, -2)}</strong>
      : <span key={i}>{p}</span>
  )
}

/* split "Lead — rest" into a bold lead + remainder */
function ListItem({ text }) {
  const m = text.match(/^(.+?)\s—\s(.+)$/)
  if (m) {
    return (
      <>
        <span className="font-semibold text-navy">{m[1]}</span>
        <span className="text-meta"> — </span>
        <RichText text={m[2]} />
      </>
    )
  }
  return <RichText text={text} />
}

function Block({ b }) {
  switch (b.t) {
    case 'h':
      return (
        <h2 className="font-display font-bold text-navy mt-12 mb-4"
          style={{ fontSize: 'clamp(1.5rem,2.6vw,2rem)' }}>
          <span className="brand-divider-l !mt-0 !mb-4" />
          {b.x}
        </h2>
      )

    case 'p':
      return (
        <p className="font-body text-base text-b-text leading-[1.9] mb-5">
          <RichText text={b.x} />
        </p>
      )

    case 'ul':
      return (
        <ul className="mb-6 space-y-3">
          {b.items.map((it, i) => (
            <li key={i} className="flex items-start gap-3 font-body text-base text-b-text leading-[1.8]">
              <Fi.FiCheckCircle size={18} className="text-b-teal flex-shrink-0 mt-1" />
              <span><ListItem text={it} /></span>
            </li>
          ))}
        </ul>
      )

    case 'table':
      return (
        <div className="my-8 border border-gray-100 rounded-2xl overflow-hidden shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg,#1A292F,#243a41)' }}>
                  {b.head.map((h, i) => (
                    <th key={i}
                      className="font-body text-[11px] font-bold tracking-[1.5px] uppercase text-white text-left px-5 py-4">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r, ri) => (
                  <tr key={ri} style={{ background: ri % 2 === 0 ? '#F8FAFB' : 'white' }}>
                    {r.map((c, ci) => (
                      <td key={ci}
                        className={`font-body text-sm px-5 py-3.5 ${ci === 0 ? 'font-semibold text-navy' : 'text-b-text'}`}
                        style={{ borderTop: ri === 0 ? 'none' : '1px solid #f0f0f0' }}>
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )

    case 'quote':
      return (
        <blockquote className="my-8 glass rounded-2xl px-8 py-7"
          style={{ borderLeft: '4px solid #C5A059' }}>
          <p className="font-display italic text-navy font-semibold leading-snug"
            style={{ fontSize: 'clamp(1.15rem,2vw,1.5rem)' }}>
            “{b.x}”
          </p>
        </blockquote>
      )

    case 'clinical':
      return (
        <div className="my-8 rounded-2xl px-8 py-7"
          style={{ background: 'linear-gradient(135deg,#1A292F 0%,#243a41 100%)' }}>
          <div className="flex items-center gap-2 mb-3">
            <Fi.FiAlertCircle size={15} className="text-gold" />
            <span className="font-body text-[11px] font-bold tracking-[2.5px] uppercase text-gold">
              Clinical Consideration
            </span>
          </div>
          <p className="font-body text-[15px] leading-[1.85]" style={{ color: 'rgba(255,255,255,0.82)' }}>
            {b.x}
          </p>
        </div>
      )

    case 'bottom':
      return (
        <div className="mt-12 mb-4 bg-alt-bg rounded-2xl px-8 py-8"
          style={{ borderTop: '3px solid #C5A059' }}>
          <h3 className="font-display font-bold text-navy mb-4"
            style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)' }}>
            The Bottom Line
          </h3>
          <p className="font-body text-base text-b-text leading-[1.9]">
            <RichText text={b.x} />
          </p>
        </div>
      )

    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const blog = getBlog(slug)

  if (!blog) {
    return (
      <>
        <PageHero tag="Not Found" title="Article Not Found" />
        <section className="bg-body-bg py-24 px-6 text-center">
          <p className="font-body text-base text-meta mb-8">
            The article you’re looking for doesn’t exist or may have been moved.
          </p>
          <Link to="/blog" className="btn-primary px-9 py-4 rounded-lg text-sm font-bold">
            <Fi.FiArrowLeft /> Back to Blog
          </Link>
        </section>
      </>
    )
  }

  const idx = BLOGS.findIndex((b) => b.slug === slug)
  const prev = idx > 0 ? BLOGS[idx - 1] : null
  const next = idx < BLOGS.length - 1 ? BLOGS[idx + 1] : null

  return (
    <>
      <PageHero
        tag={`Blog ${blog.number} · ${blog.category} · ${blog.readTime}`}
        title={blog.title}
        subtitle={blog.subtitle}
      />

      {/* ─── ARTICLE BODY ─── */}
      <section className="bg-body-bg py-20 px-6">
        <article className="max-w-3xl mx-auto fade-up">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-b-teal hover:text-gold transition-colors no-underline mb-10"
          >
            <Fi.FiArrowLeft size={15} /> Back to all articles
          </Link>

          {blog.body.map((b, i) => <Block key={i} b={b} />)}

          <p className="font-body text-[13px] italic text-meta mt-12 pt-6"
            style={{ borderTop: '1px solid #eef1f2' }}>
            This article is for informational purposes only and does not constitute medical advice.
          </p>
        </article>
      </section>

      {/* ─── PREV / NEXT ─── */}
      <section className="bg-alt-bg py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {prev ? (
            <Link to={`/blog/${prev.slug}`}
              className="card p-7 no-underline group">
              <span className="font-body text-[10px] font-semibold tracking-[2.5px] uppercase text-meta flex items-center gap-2 mb-2">
                <Fi.FiArrowLeft size={13} /> Previous
              </span>
              <h4 className="font-display text-[1.15rem] font-bold text-navy leading-snug">
                {prev.title}
              </h4>
            </Link>
          ) : <span className="hidden md:block" />}

          {next && (
            <Link to={`/blog/${next.slug}`}
              className="card p-7 no-underline group md:text-right">
              <span className="font-body text-[10px] font-semibold tracking-[2.5px] uppercase text-meta flex items-center gap-2 mb-2 md:justify-end">
                Next <Fi.FiArrowRight size={13} />
              </span>
              <h4 className="font-display text-[1.15rem] font-bold text-navy leading-snug">
                {next.title}
              </h4>
            </Link>
          )}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 px-6 bg-body-bg">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display italic text-navy font-semibold mb-6"
            style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)' }}>
            Discover how Biospire formulations are engineered for absorption.
          </p>
          <Link to="/portfolio" className="btn-primary px-9 py-4 rounded-lg text-sm font-bold">
            Explore Portfolio <Fi.FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
