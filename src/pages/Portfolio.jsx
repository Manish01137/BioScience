import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import {
  FiDroplet, FiZap, FiCheckCircle, FiActivity,
  FiClock, FiArrowRight, FiPackage, FiStar
} from 'react-icons/fi'
import { RiTestTubeLine } from 'react-icons/ri'

const INGREDIENTS = [
  { name: 'Ferrous Bisglycinate', role: 'High-absorption iron chelate' },
  { name: 'Folic Acid',           role: 'Essential B-vitamin (B9)' },
  { name: 'Vitamin B12',          role: 'Supports red blood cell formation' },
  { name: 'Vitamin C',            role: 'Boosts iron absorption' },
  { name: 'Zinc',                 role: 'Immune support & enzyme function' },
]

const BENEFITS = [
  { icon: <FiDroplet size={20} />, label: 'Supports Hemoglobin Levels',   color: '#1A292F' },
  { icon: <FiZap size={20} />,     label: 'Enhanced Energy & Vitality',    color: '#6B8E99' },
  { icon: <FiCheckCircle size={20} />, label: 'Maximum GI Comfort',        color: '#C5A059' },
  { icon: <FiActivity size={20} />, label: 'High Bioavailability',         color: '#1A292F' },
  { icon: <FiStar size={20} />,    label: 'Precision-Dosed Formula',       color: '#6B8E99' },
  { icon: <RiTestTubeLine size={20} />, label: 'GLP-Tested Stability',     color: '#C5A059' },
]

const PIPELINE = [
  {
    title: 'Bone Health',
    desc: 'Advanced calcium & vitamin D3 formulation for long-term skeletal support — targeting India\'s growing osteoporosis burden.',
    status: 'In Pipeline',
    icon: <FiPackage size={22} />,
  },
  {
    title: 'Metabolic Wellness',
    desc: 'A multi-micronutrient complex targeting metabolic syndrome, insulin sensitivity and cellular energy production.',
    status: 'In Pipeline',
    icon: <FiActivity size={22} />,
  },
]

export default function Portfolio() {
  return (
    <>
      <PageHero
        tag="Product Portfolio"
        title="Precision & Efficacy"
        subtitle="Every milligram is designed for optimal bioavailability — formulations that work as hard as the professionals who prescribe them."
      />

      {/* ─── INTRO ─── */}
      <section className="bg-body-bg py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="sec-tag">Our Approach</span>
          <span className="brand-divider" />
          <p className="font-body text-base text-b-text max-w-3xl mx-auto leading-[1.88]">
            We translate nutritional science and field insights into specialized wellness solutions.
            Our portfolio is intentionally focused on high-performance formulations that prioritize
            targeted absorption and physiological harmony. We curate and validate precision-led
            formulations healthcare professionals trust to support long-term vitality.
          </p>
        </div>
      </section>

      {/* ─── LOHIVA PRODUCT ─── */}
      <section className="bg-alt-bg py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="sec-tag">Upcoming Formulation</span>
            <span className="brand-divider" />
            <p className="font-body text-sm text-meta">Currently in final stages of certified production &amp; trademarking</p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-card-lg">
            {/* Header */}
            <div className="relative px-10 md:px-16 py-14 overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#1A292F 0%,#243a41 60%,#2e5462 100%)' }}>
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop"
                alt="LOHIVA hematinic formula"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
              />
              <div className="relative z-10">
                <div className="inline-block px-6 py-3 mb-6"
                  style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(197,160,89,0.4)', borderRadius: '4px' }}>
                  <span className="font-body text-[2rem] font-bold text-white tracking-[6px] uppercase">
                    LOHIVA™
                  </span>
                </div>
                <h2 className="font-display text-white font-semibold mb-3"
                  style={{ fontSize: 'clamp(1.5rem,2.5vw,2.2rem)' }}>
                  Iron with Enhanced Absorption
                </h2>
                <p className="font-body text-[13px] font-bold tracking-[1.8px] uppercase text-gold">
                  Advanced Hematinic Formula
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="px-10 md:px-16 py-12">
              <p className="font-body text-base text-b-text leading-[1.88] mb-10">
                A specialized blend engineered to effectively support <strong className="text-navy">Hemoglobin and Energy levels</strong> while ensuring maximum gastrointestinal comfort — addressing one of India's most prevalent nutritional deficiencies with clinical-grade precision.
              </p>

              {/* Ingredients table */}
              <div className="mb-10">
                <h4 className="font-body font-bold text-navy text-sm tracking-[1.5px] uppercase mb-4">
                  Composition
                </h4>
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                  {INGREDIENTS.map((ing, i) => (
                    <div key={i}
                      className="flex items-center justify-between px-5 py-3.5"
                      style={{ background: i % 2 === 0 ? '#F8FAFB' : 'white', borderBottom: i < INGREDIENTS.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                      <span className="font-body font-semibold text-navy text-sm">{ing.name}</span>
                      <span className="font-body text-xs text-meta">{ing.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits grid */}
              <div className="mb-10">
                <h4 className="font-body font-bold text-navy text-sm tracking-[1.5px] uppercase mb-5">
                  Clinical Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {BENEFITS.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-alt-bg">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                        style={{ background: b.color }}>
                        {b.icon}
                      </div>
                      <span className="font-body text-sm font-medium text-navy">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coming soon bar */}
            <div className="mx-10 md:mx-16 mb-12 rounded-2xl px-8 py-6 flex items-center justify-between flex-wrap gap-4"
              style={{ background: 'linear-gradient(135deg,#C5A059,#e8c879)' }}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FiClock size={15} className="text-navy" />
                  <span className="font-body text-[11px] font-bold tracking-[2.5px] uppercase text-navy">Coming Soon</span>
                </div>
                <p className="font-display italic text-navy text-[1.1rem] font-semibold">
                  Final stages of certified production &amp; trademarking
                </p>
              </div>
              <span className="cs-badge">In Manufacturing</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FUTURE HORIZONS ─── */}
      <section className="bg-body-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="sec-tag">Development Pipeline</span>
            <span className="brand-divider" />
            <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              Future Horizons
            </h2>
            <p className="font-body text-base text-meta mt-4 max-w-2xl mx-auto leading-relaxed">
              Our development pipeline is driven by a rigorous selection process. Every new addition
              must meet the Biospire standard of precision and patient-centric care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-3xl mx-auto">
            {PIPELINE.map((p, i) => (
              <div key={i} className="card-dark p-9 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5" />
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-5">
                  {p.icon}
                </div>
                <h4 className="font-display text-[1.5rem] font-bold text-white mb-3">{p.title}</h4>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.7)' }}>{p.desc}</p>
                <span className="cs-badge">{p.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 px-6 bg-alt-bg">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display italic text-navy font-semibold mb-6" style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)' }}>
            Interested in stocking Biospire formulations in your practice or pharmacy?
          </p>
          <Link to="/contact" className="btn-primary px-9 py-4 rounded-lg text-sm font-bold">
            Get in Touch <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
