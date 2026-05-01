import { Link } from 'react-router-dom'
import {
  FiArrowRight, FiShield, FiHeart, FiUsers,
  FiCheckCircle, FiAward, FiActivity, FiTrendingUp
} from 'react-icons/fi'

const HERO_IMG = 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1920&auto=format&fit=crop'

const PROMISES = [
  {
    icon: <FiShield size={28} />,
    for: 'To Doctors',
    quote: '"A promise of trust"',
    accent: '#1A292F',
    border: '#1A292F',
  },
  {
    icon: <FiUsers size={28} />,
    for: 'To Pharmacists',
    quote: '"Reliability"',
    accent: '#6B8E99',
    border: '#6B8E99',
  },
  {
    icon: <FiHeart size={28} />,
    for: 'To Patients',
    quote: '"Hope"',
    accent: '#C5A059',
    border: '#C5A059',
  },
]

const PREVIEW_CARDS = [
  {
    to: '/about',
    label: 'About Us',
    title: 'Our Story',
    desc: 'Founded in June 2025 with a mission to redefine pharmaceutical marketing in India through integrity and precision.',
    icon: <FiAward size={22} />,
    bg: 'linear-gradient(135deg,#1A292F,#243a41)',
  },
  {
    to: '/portfolio',
    label: 'Portfolio',
    title: 'LOHIVA™',
    desc: 'Our flagship iron supplement with enhanced absorption — coming soon from WHO-GMP certified facilities.',
    icon: <FiActivity size={22} />,
    bg: 'linear-gradient(135deg,#4a6e78,#6B8E99)',
  },
  {
    to: '/quality',
    label: 'Quality',
    title: 'Zero Compromise',
    desc: 'ISO 9001:2015 & WHO-GMP certified production. Every batch tested to our own rigorous standards before release.',
    icon: <FiCheckCircle size={22} />,
    bg: 'linear-gradient(135deg,#243a41,#2e5462)',
  },
  {
    to: '/why-us',
    label: 'Why Us',
    title: 'The Advantage',
    desc: 'Superior absorption technology, doctor-centric design, and market-ready branding — all under one roof.',
    icon: <FiTrendingUp size={22} />,
    bg: 'linear-gradient(135deg,#1A292F,#4a6e78)',
  },
]

const STATS = [
  { n: 'June 2025', label: 'Founded' },
  { n: 'WHO-GMP', label: 'Certified Facilities' },
  { n: 'ISO 9001', label: '2015 Compliant' },
  { n: 'Bharat', label: 'Our Market' },
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Desktop — image right half */}
        <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full">
          <img
            src={HERO_IMG}
            alt="Biospire Lifesciences molecular lattice — pharmaceutical marketing science"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(90deg,#F8FAFB 0%,rgba(248,250,251,0.4) 28%,transparent 55%)'
          }} />
        </div>

        {/* Mobile BG */}
        <div className="md:hidden absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        {/* Gold accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg,#C5A059,#6B8E99)' }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-10 pt-36 pb-24">
          <div className="max-w-[580px]">
            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-gold rounded" />
                <span className="font-body text-[11px] tracking-[3.5px] uppercase text-b-teal font-semibold">
                  Est. June 2025 · Nagpur, India
                </span>
              </div>
              <h1
                className="font-display font-bold text-navy leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(2.4rem,4.5vw,3.6rem)' }}
              >
                Welcome to<br />
                <span className="italic text-b-teal">Biospire</span>{' '}
                <span>Lifesciences</span>
              </h1>
              <p className="font-display text-[1.35rem] italic text-gold font-semibold mb-5 leading-snug">
                "Partner in Progressive Healthcare…"
              </p>
              <p className="font-body text-base text-b-text leading-[1.85] mb-8">
                Guided by our philosophy, <em className="text-navy font-semibold not-italic">"Partner in Progressive Healthcare…"</em> we focus on bridging the gap between quality formulations and real-world patient needs — delivering thoughtfully designed combinations that improve outcomes and support healthcare professionals across <strong className="text-navy">Bharat</strong>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/portfolio" className="btn-primary px-7 py-3.5 rounded-lg text-sm font-bold tracking-wide">
                  Explore Portfolio <FiArrowRight />
                </Link>
                <Link to="/about" className="btn-outline px-7 py-3.5 rounded-lg text-sm font-bold">
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll dot */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
          <span className="font-body text-[10px] tracking-[3px] uppercase text-navy/40">Scroll</span>
          <div className="w-5 h-8 border border-navy/20 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-1.5 bg-b-teal rounded-full" style={{ animation: 'bounce 2s infinite' }} />
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-navy py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div key={i} className="text-center py-2">
              <p className="font-display text-[1.6rem] font-bold text-gold">{s.n}</p>
              <p className="font-body text-xs tracking-wider uppercase mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ETHOS ─── */}
      <section className="bg-alt-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="sec-tag">Our Foundation</span>
            <span className="brand-divider" />
            <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              Our Ethos
            </h2>
            <p className="font-body text-base text-b-text mt-4 max-w-2xl mx-auto leading-relaxed">
              Our commitment is rooted in integrity and a deep understanding of the Indian market.
              Guided by science, we ensure every product we represent reaches its full potential
              through ethical, high-impact marketing strategies.
            </p>
          </div>

          {/* Promise heading */}
          <div className="text-center mb-10">
            <h3 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(1.7rem,2.8vw,2.3rem)' }}>
              The <strong>Biospire</strong> Promise
            </h3>
            <p className="font-body text-meta mt-2 max-w-2xl mx-auto leading-relaxed">
              We believe every product carries a promise — a promise of trust to doctors,
              reliability to pharmacists, and hope to patients.
            </p>
          </div>

          {/* 3 promise cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {PROMISES.map((p, i) => (
              <div
                key={i}
                className="card flex flex-col items-center text-center p-10"
                style={{ borderTop: `3px solid ${p.border}` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white"
                  style={{ background: `linear-gradient(135deg,${p.accent},${p.accent}cc)` }}
                >
                  {p.icon}
                </div>
                <span className="font-body text-[11px] font-semibold tracking-[2px] uppercase text-meta block mb-3">
                  {p.for}
                </span>
                <p className="font-display text-[1.3rem] italic font-semibold leading-snug"
                  style={{ color: p.accent }}>
                  {p.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PREVIEW CARDS ─── */}
      <section className="bg-body-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="sec-tag">Explore Biospire</span>
            <span className="brand-divider" />
            <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PREVIEW_CARDS.map((c, i) => (
              <Link
                key={i} to={c.to}
                className="group rounded-2xl overflow-hidden no-underline block shadow-card hover:shadow-card-lg transition-all duration-300 hover:-translate-y-1"
                style={{ background: c.bg }}
              >
                <div className="p-7">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-5">
                    {c.icon}
                  </div>
                  <span className="font-body text-[10px] tracking-[2.5px] uppercase font-semibold text-white/50 block mb-2">
                    {c.label}
                  </span>
                  <h4 className="font-display text-[1.4rem] font-bold text-white mb-3">{c.title}</h4>
                  <p className="font-body text-sm leading-relaxed text-white/70">{c.desc}</p>
                  <div className="flex items-center gap-1.5 mt-5 text-gold font-body text-sm font-semibold group-hover:gap-3 transition-all">
                    Learn more <FiArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOME CTA BANNER ─── */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg,#1A292F 0%,#243a41 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-body text-[11px] tracking-[3.5px] uppercase text-gold font-semibold block mb-4">
            Ready to Partner?
          </span>
          <h2
            className="font-display font-bold text-white mb-5"
            style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
          >
            Building a Healthier Future Together
          </h2>
          <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Join us in our mission to deliver ethical, science-backed pharmaceutical solutions
            to every corner of Bharat.
          </p>
          <Link to="/contact" className="btn-primary px-10 py-4 rounded-lg text-sm font-bold tracking-wide text-base">
            Become a Partner <FiArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
