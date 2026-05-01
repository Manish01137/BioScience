import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import {
  FiActivity, FiSliders, FiUserCheck, FiAward,
  FiPackage, FiArrowRight, FiCheckCircle, FiLink2
} from 'react-icons/fi'

const PILLARS = [
  {
    icon: <FiActivity size={24} />,
    title: 'Superior Absorption Technology',
    desc: 'We design formulations for maximum bioavailability, ensuring faster and more effective clinical results across our planned portfolio.',
    tag: 'Science-First',
    grad: 'linear-gradient(135deg,#1A292F,#243a41)',
  },
  {
    icon: <FiSliders size={24} />,
    title: 'Balanced & Thoughtful Combinations',
    desc: 'Each ingredient is carefully selected to work in perfect synergy — no unnecessary overdosing, no shortcuts. Every combination is rationally designed for physiological harmony and patient safety.',
    tag: 'Precision Dosing',
    grad: 'linear-gradient(135deg,#6B8E99,#4a6e78)',
  },
  {
    icon: <FiUserCheck size={24} />,
    title: 'Doctor-Centric Approach',
    desc: 'Built around real clinical needs — making prescriptions practical, effective, and reliable. Our field insights come directly from healthcare professionals who understand what patients actually need.',
    tag: 'Clinically Validated',
    grad: 'linear-gradient(135deg,#1A292F,#243a41)',
  },
  {
    icon: <FiAward size={24} />,
    title: 'Quality You Can Trust',
    desc: 'Manufactured in WHO-GMP certified facilities with strict quality and consistency checks. The Biospire seal is only applied after our own independent stability and efficacy review.',
    tag: 'WHO-GMP Certified',
    grad: 'linear-gradient(135deg,#6B8E99,#4a6e78)',
  },
  {
    icon: <FiPackage size={24} />,
    title: 'Market-Ready Branding',
    desc: 'Strong premium packaging and compelling positioning that helps your products stand out and build trust faster in the competitive Indian pharmaceutical market.',
    tag: 'Premium Packaging',
    grad: 'linear-gradient(135deg,#1A292F,#243a41)',
  },
  {
    icon: <FiLink2 size={24} />,
    title: 'Reliable Partnership',
    desc: 'Transparent business practices with consistent supply, proactive communication, and long-term support. We grow when you grow — that\'s what real partnership looks like.',
    tag: 'Long-Term Commitment',
    grad: 'linear-gradient(135deg,#6B8E99,#4a6e78)',
  },
]

const DIFFERENTIATORS = [
  { n: '100%',    label: 'Moisture Barrier Packaging'   },
  { n: 'WHO-GMP', label: 'Certified Manufacturing'      },
  { n: 'ISO 9001', label: '2015 Quality System'         },
  { n: 'GLP',     label: 'Tested Formulations'          },
]

export default function WhyUs() {
  return (
    <>
      <PageHero
        tag="Why Choose Us"
        title="The Biospire Advantage"
        subtitle="Six core pillars that define how Biospire Lifesciences plans to serve healthcare professionals across Bharat."
      />

      {/* ─── DIFFERENTIATOR STATS ─── */}
      <section className="bg-navy py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {DIFFERENTIATORS.map((d, i) => (
            <div key={i} className="text-center py-3">
              <p className="font-display text-[1.8rem] font-bold text-gold">{d.n}</p>
              <p className="font-body text-xs tracking-wider uppercase mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>{d.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6 ADVANTAGE CARDS ─── */}
      <section className="bg-body-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="sec-tag">Our Strengths</span>
            <span className="brand-divider" />
            <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              Six Pillars of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {PILLARS.map((item, i) => (
              <div key={i} className="card p-8 flex flex-col group h-full">
                <div
                  className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: item.grad }}
                >
                  {item.icon}
                </div>
                <span className="font-body text-[10px] font-bold tracking-[2px] uppercase text-b-teal block mb-2">
                  {item.tag}
                </span>
                <h4 className="font-body font-bold text-navy text-base mb-3 leading-snug">
                  {item.title}
                </h4>
                <p className="font-body text-sm text-meta leading-[1.75]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE BLOCK ─── */}
      <section className="py-24 px-6 bg-alt-bg">
        <div className="max-w-4xl mx-auto">
          <div className="card-dark p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-gold/5" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-gold mx-auto mb-8">
                <FiCheckCircle size={28} />
              </div>
              <p
                className="font-display italic text-white font-medium leading-[1.7]"
                style={{ fontSize: 'clamp(1.25rem,2.5vw,1.8rem)' }}
              >
                "At Biospire, we don't just manufacture products —{' '}
                <span className="text-gold">we build brands that perform</span>{' '}
                for the doctor and{' '}
                <span className="text-b-teal">deliver results for the patient</span>."
              </p>
              <hr className="hr-gold mt-8 max-w-xs mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHECKLIST ─── */}
      <section className="bg-body-bg py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="sec-tag">The Biospire Checklist</span>
              <span className="brand-divider-l" />
              <h2 className="font-display font-bold text-navy mb-6" style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)' }}>
                What You Get With Every Order
              </h2>
              <p className="font-body text-base text-meta leading-relaxed">
                Partnering with Biospire means more than just product supply. It means a
                relationship built on transparency, consistency, and shared commitment to patient
                outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                'WHO-GMP certified manufacturing facility',
                'ISO 9001:2015 quality management system',
                'GLP-tested stability & efficacy data',
                'Alu-Alu cold form blister packaging',
                'Batch-to-batch consistency guarantee',
                'Premium market-ready branding',
                'Transparent supply chain',
                'Dedicated partnership support',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-alt-bg">
                  <FiCheckCircle size={17} className="text-b-teal flex-shrink-0" />
                  <span className="font-body text-sm font-medium text-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-navy">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display italic text-white font-semibold mb-6" style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)' }}>
            Ready to experience the Biospire advantage for your practice?
          </p>
          <Link to="/contact" className="btn-outline-white px-10 py-4 rounded-lg text-sm font-bold">
            Get in Touch <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
