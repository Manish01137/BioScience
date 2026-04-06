import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import {
  FiAward, FiClipboard, FiActivity, FiShield,
  FiPackage, FiLock, FiSun, FiCheckCircle, FiArrowRight
} from 'react-icons/fi'

const CERTS = [
  {
    icon: <FiAward size={28} />,
    title: 'WHO-GMP & FSSAI Certified',
    desc: 'Every batch manufactured under rigorous international safety and pharmaceutical-grade standards approved by the World Health Organization.',
    color: '#1A292F',
  },
  {
    icon: <FiClipboard size={28} />,
    title: 'ISO 9001:2015 Compliance',
    desc: 'Adhering to global benchmarks for quality management systems at every stage of production, documentation, and delivery.',
    color: '#6B8E99',
  },
  {
    icon: <FiActivity size={28} />,
    title: 'Advanced Analytical Testing',
    desc: 'Good Laboratory Practices (GLP) ensure every formulation is stable, pure, and effective before it reaches the patient.',
    color: '#C5A059',
  },
]

const PACKAGING = [
  {
    icon: <FiSun size={24} />,
    title: 'Alu-Alu Cold Form Blister',
    desc: 'Advanced aluminium-to-aluminium technology providing a 100% barrier against moisture, light, and oxygen — preserving every formulation exactly as designed.',
  },
  {
    icon: <FiPackage size={24} />,
    title: 'Preserving Potency',
    desc: 'Our superior packaging standard ensures that the nutritional integrity we pack into the product is exactly what the patient receives, even in India\'s most challenging climatic conditions.',
  },
  {
    icon: <FiLock size={24} />,
    title: 'Tamper-Evident Security',
    desc: 'Secondary packaging designed for structural integrity, ensuring every box reaches the pharmacy in pristine, uncompromised condition with full supply chain confidence.',
  },
]

const PROCESS_STEPS = [
  { step: '01', title: 'Formulation Selection', desc: 'Only scientifically validated combinations make it into our portfolio.' },
  { step: '02', title: 'Manufacturing Partner Audit', desc: 'We partner exclusively with WHO-GMP certified, ISO-compliant facilities.' },
  { step: '03', title: 'Stability Testing',  desc: 'GLP-certified analytical labs verify every batch before the Biospire seal is applied.' },
  { step: '04', title: 'Efficacy Review',    desc: 'Clinical data and bioavailability benchmarks are reviewed against our internal standards.' },
  { step: '05', title: 'Packaging Integrity', desc: 'Alu-Alu blister packs checked for seal quality and tamper evidence.' },
  { step: '06', title: 'Release & Supply',   desc: 'Only formulations meeting every criterion leave our chain — consistency guaranteed.' },
]

export default function Quality() {
  return (
    <>
      <PageHero
        tag="Quality & Manufacturing"
        title="Quality Without Compromise"
        subtitle="The integrity of a healthcare solution is defined long before it reaches the patient — and the Biospire seal is proof of that commitment."
      />

      {/* ─── COMPLIANCE CERTS ─── */}
      <section className="bg-body-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="sec-tag">Compliance</span>
            <span className="brand-divider" />
            <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              Technical Standards
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {CERTS.map((c, i) => (
              <div key={i} className="card p-9" style={{ borderTop: `3px solid ${c.color}` }}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6"
                  style={{ background: c.color }}
                >
                  {c.icon}
                </div>
                <h4 className="font-body font-bold text-navy text-base mb-3">{c.title}</h4>
                <p className="font-body text-sm text-meta leading-[1.78]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUALITY GUARANTEE ─── */}
      <section className="py-24 px-6"
        style={{ background: 'linear-gradient(135deg,#1A292F 0%,#243a41 60%,#2e5462 100%)' }}>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-white/5" />
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-gold mx-auto mb-6">
              <FiShield size={32} />
            </div>
            <span className="font-body text-[11px] tracking-[3.5px] uppercase text-gold font-semibold block mb-5">
              The Biospire Quality Guarantee
            </span>
            <blockquote
              className="font-display italic text-white/90 leading-[1.95] mb-8"
              style={{ fontSize: 'clamp(1.1rem,2vw,1.35rem)' }}
            >
              "While we partner with world-class WHO-GMP certified facilities for production,
              the Biospire seal is only awarded after our own rigorous stability and efficacy
              checks. Our commitment is to ensure that every formulation we introduce in Bharat
              is backed by scientific integrity and consistent quality. If a formulation does
              not meet our strict criteria for stability and clinical efficacy, we return to the
              research phase until the standard is perfected. We ensure uncompromising
              batch-to-batch consistency — this commitment to reliability is the foundation
              upon which healthcare professionals can build their trust in our seal."
            </blockquote>
            <div className="w-16 h-0.5 bg-gold rounded mx-auto" />
          </div>
        </div>
      </section>

      {/* ─── QUALITY PROCESS ─── */}
      <section className="bg-alt-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="sec-tag">Our Process</span>
            <span className="brand-divider" />
            <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              From Lab to Patient
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} className="card p-7 flex gap-4 items-start">
                <span
                  className="font-display text-[2.2rem] font-bold flex-shrink-0 leading-none"
                  style={{ color: 'rgba(107,142,153,0.25)' }}
                >
                  {s.step}
                </span>
                <div>
                  <h4 className="font-body font-bold text-navy text-sm mb-2">{s.title}</h4>
                  <p className="font-body text-sm text-meta leading-[1.72]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PACKAGING ─── */}
      <section className="bg-body-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="sec-tag">Packaging</span>
            <span className="brand-divider" />
            <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              Advanced Packaging Integrity
            </h2>
            <p className="font-body text-base text-meta mt-3 max-w-xl mx-auto">
              Protection Until the Last Dose — we recognize that the efficacy of a formulation is
              only as good as its protection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {PACKAGING.map((p, i) => (
              <div key={i} className="card p-9" style={{ borderLeft: '4px solid #6B8E99' }}>
                <div className="w-12 h-12 rounded-xl bg-b-teal/10 flex items-center justify-center text-b-teal mb-5">
                  {p.icon}
                </div>
                <h4 className="font-body font-bold text-navy text-base mb-3">{p.title}</h4>
                <p className="font-body text-sm text-meta leading-[1.78]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-alt-bg">
        <div className="max-w-2xl mx-auto text-center">
          <FiCheckCircle size={36} className="text-b-teal mx-auto mb-4" />
          <p className="font-display italic text-navy font-semibold mb-6" style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)' }}>
            Quality you can trust — delivered to every clinic and pharmacy across Bharat.
          </p>
          <Link to="/partner" className="btn-primary px-9 py-4 rounded-lg text-sm font-bold">
            Partner With Us <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
