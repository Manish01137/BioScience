import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import {
  FiArrowRight, FiCheckCircle, FiGlobe,
  FiTrendingUp, FiUsers, FiShield, FiLink2
} from 'react-icons/fi'

const PARTNER_BENEFITS = [
  {
    icon: <FiShield size={22} />,
    title: 'Scientifically Validated Portfolio',
    desc: 'Access to formulations designed with clinical intent — every product backed by bioavailability data and stability testing.',
  },
  {
    icon: <FiTrendingUp size={22} />,
    title: 'Market-Ready Brand Materials',
    desc: 'Premium packaging, detailing aids, and positioning support to help you stand out in a competitive landscape.',
  },
  {
    icon: <FiCheckCircle size={22} />,
    title: 'Consistent, Reliable Supply',
    desc: 'Uninterrupted product availability with transparent lead times and proactive communication — no surprises.',
  },
  {
    icon: <FiUsers size={22} />,
    title: 'Dedicated Partner Support',
    desc: 'A dedicated relationship team that understands your market, your doctors, and your growth goals.',
  },
  {
    icon: <FiLink2 size={22} />,
    title: 'Ethical Business Practices',
    desc: 'Transparent pricing, honest communication, and a long-term orientation — we grow when our partners grow.',
  },
  {
    icon: <FiGlobe size={22} />,
    title: 'Pan-Bharat Ambition',
    desc: 'We are building a healthcare partner network across India — join early and grow with us from the ground up.',
  },
]

const WHO_CAN_PARTNER = [
  { title: 'Distributors', desc: 'Regional distributors looking to add a science-first pharmaceutical brand to their portfolio.' },
  { title: 'Stockists',    desc: 'C&F agents and stockists seeking reliable, premium brands with consistent batch supply.' },
  { title: 'Doctors',      desc: 'Healthcare professionals interested in prescribing precision formulations backed by clinical data.' },
  { title: 'Pharmacists',  desc: 'Pharmacy owners who want to stock trusted, premium brands that patients can rely on.' },
]

export default function Partner() {
  return (
    <>
      <PageHero
        tag="Partner With Us"
        title="Building a Healthier Future Together"
        subtitle={<>We are looking for partners who share our commitment to ethical healthcare and quality excellence — across every corner of <strong className="text-white font-bold">Bharat</strong>.</>}
      />

      {/* ─── INTRO ─── */}
      <section className="bg-body-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="sec-tag">Our Partnership Philosophy</span>
              <span className="brand-divider-l" />
              <h2 className="font-display font-bold text-navy mb-6" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
                More Than a Supplier — A Partner
              </h2>
              <p className="font-body text-base text-b-text leading-[1.88] mb-5">
                We are looking for partners who share our commitment to ethical healthcare and
                quality excellence. Partner with a brand that values scientific integrity,
                ethical transparency, and the shared goal of advancing patient-centric care
                across <strong className="text-navy">Bharat</strong>.
              </p>
              <p className="font-body text-base text-b-text leading-[1.88] mb-8">
                At Biospire, we believe in growing together. Every partnership is a long-term
                commitment — and we bring the same dedication to our business relationships that
                we bring to our formulations.
              </p>
              <Link to="/contact" className="btn-primary px-8 py-3.5 rounded-lg text-sm font-bold">
                Start the Conversation <FiArrowRight />
              </Link>
            </div>

            {/* Quote card */}
            <div className="card-dark p-10 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-white/5" />
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold mb-6">
                <FiLink2 size={24} />
              </div>
              <blockquote className="font-display text-[1.3rem] italic text-white/90 leading-[1.85] mb-6">
                "We are looking for partners who share our commitment to ethical healthcare
                and quality excellence."
              </blockquote>
              <p className="font-display text-[1.5rem] italic font-bold text-gold leading-snug">
                "Building a Healthier Future Together."
              </p>
              <div className="w-12 h-0.5 bg-gold rounded mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNERSHIP BENEFITS ─── */}
      <section className="bg-alt-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="sec-tag">Partnership Benefits</span>
            <span className="brand-divider" />
            <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              What You Gain
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {PARTNER_BENEFITS.map((b, i) => (
              <div key={i} className="card p-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5"
                  style={{ background: i % 2 === 0 ? 'linear-gradient(135deg,#1A292F,#243a41)' : 'linear-gradient(135deg,#6B8E99,#4a6e78)' }}>
                  {b.icon}
                </div>
                <h4 className="font-body font-bold text-navy text-base mb-2.5">{b.title}</h4>
                <p className="font-body text-sm text-meta leading-[1.75]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO CAN PARTNER ─── */}
      <section className="bg-body-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="sec-tag">Who We Work With</span>
            <span className="brand-divider" />
            <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              Who Can Partner With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_CAN_PARTNER.map((w, i) => (
              <div key={i} className="card p-8 text-center" style={{ borderBottom: '3px solid #6B8E99' }}>
                <h4 className="font-display text-[1.4rem] font-bold text-navy mb-3">{w.title}</h4>
                <p className="font-body text-sm text-meta leading-[1.72]">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 px-6"
        style={{ background: 'linear-gradient(135deg,#1A292F 0%,#243a41 60%,#2e5462 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-body text-[11px] tracking-[3.5px] uppercase text-gold font-semibold block mb-4">
            Ready to Begin?
          </span>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
            Let's Build Something Great
          </h2>
          <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Fill out our contact form or reach out directly. Our partnership team will get back
            to you within 24 business hours.
          </p>
          <Link to="/contact"
            className="btn-primary px-12 py-4 rounded-lg text-sm font-bold tracking-wide">
            Become a Partner <FiArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
