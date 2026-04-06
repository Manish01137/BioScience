import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import {
  FiShield, FiAward, FiHeart, FiCpu,
  FiTarget, FiGlobe, FiArrowRight, FiUser
} from 'react-icons/fi'

const VALUES = [
  {
    icon: <FiShield size={24} />,
    title: 'Integrity',
    desc: 'Ethical marketing is not just a policy — it is our foundation. We believe in absolute transparency at every step.',
    color: '#1A292F',
  },
  {
    icon: <FiAward size={24} />,
    title: 'Quality',
    desc: 'From formulation selection to final delivery, we maintain the highest standards of safety and efficacy.',
    color: '#6B8E99',
  },
  {
    icon: <FiHeart size={24} />,
    title: 'Empathy',
    desc: 'We listen to the needs of doctors and the hopes of patients to ensure our solutions truly make a difference.',
    color: '#C5A059',
  },
  {
    icon: <FiCpu size={24} />,
    title: 'Innovation',
    desc: 'Data-driven strategies to stay ahead of the evolving healthcare needs of every citizen across Bharat.',
    color: '#FF6B6B',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        tag="About Us"
        title="A Higher Standard of Care"
        subtitle="We harmonize advanced scientific formulations with the practical healthcare requirements of the Indian market."
      />

      {/* ─── INTRO TWO-COL ─── */}
      <section className="bg-body-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="sec-tag">Who We Are</span>
              <span className="brand-divider-l" />
              <h2 className="font-display font-bold text-navy mb-6" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
                Bridging Science and the Clinic
              </h2>
              <p className="font-body text-base text-b-text leading-[1.88] mb-5">
                Biospire operates with a dedicated focus: to harmonize advanced scientific formulations
                with the practical healthcare requirements of the Indian market. We recognize that
                modern medicine is most effective when it is accessible, reliable, and specifically
                tailored to the diverse needs found across Bharat.
              </p>
              <p className="font-body text-base text-b-text leading-[1.88] mb-8">
                Our identity is built on the belief that wellness requires a blend of data-driven
                strategies and genuine empathy. By focusing on thoughtfully designed combinations,
                we empower healthcare professionals to deliver better outcomes. We don't just see
                products — we see solutions that carry a responsibility to the doctors who
                prescribe them and the families who rely on them.
              </p>
              <Link to="/portfolio" className="btn-primary px-7 py-3.5 rounded-lg text-sm font-bold">
                View Our Portfolio <FiArrowRight />
              </Link>
            </div>

            {/* Journey card */}
            <div className="card-dark p-10 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-gold/5" />
              <span className="font-body text-[11px] tracking-[3px] uppercase text-gold font-semibold block mb-5">
                The Biospire Journey
              </span>
              <blockquote className="font-display text-[1.15rem] italic text-white/90 leading-[1.88] mb-6">
                "Incorporated in June 2025, Biospire was founded on a shared commitment to
                excellence and a deep respect for life. Our leadership brings together a diverse
                range of expertise, united by a singular observation: that the pharmaceutical
                landscape is ready for a more personalized, ethical approach to healthcare."
              </blockquote>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                "With a foundational background in pharmaceutical marketing, we recognized the
                critical gaps between laboratory innovation and the doctor's clinic. We saw that
                healthcare professionals were searching for more than just a brand — they were
                looking for precision formulations designed for real-world recovery."
              </p>
              <div className="w-12 h-0.5 bg-gold rounded mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="bg-alt-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="sec-tag">Our Direction</span>
            <span className="brand-divider" />
            <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <FiTarget size={32} />,
                label: 'Our Mission',
                iconBg: '#1A292F',
                text: '"To redefine trust, care, and excellence in the pharmaceutical landscape — one partnership at a time — through an unwavering commitment to ethical practices and a deep respect for life."',
                bg: 'linear-gradient(135deg,#1A292F 0%,#243a41 100%)',
              },
              {
                icon: <FiGlobe size={32} />,
                label: 'Our Vision',
                iconBg: '#6B8E99',
                text: '"To contribute meaningfully to a healthier and better future for every citizen of Bharat by becoming a benchmark for sustainable growth and patient-centric healthcare solutions."',
                bg: 'linear-gradient(135deg,#6B8E99 0%,#4a6e78 100%)',
              },
            ].map((m, i) => (
              <div key={i} className="rounded-2xl p-12 relative overflow-hidden" style={{ background: m.bg }}>
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/5" />
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6">
                  {m.icon}
                </div>
                <span className="font-body text-[11px] tracking-[3px] uppercase text-gold font-semibold block mb-4">
                  {m.label}
                </span>
                <p className="font-display text-[1.2rem] italic text-white/92 leading-[1.85]">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="bg-body-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="sec-tag">What Drives Us</span>
            <span className="brand-divider" />
            <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="card p-8 text-center" style={{ borderBottom: `3px solid ${v.color}` }}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mx-auto mb-5"
                  style={{ background: v.color }}
                >
                  {v.icon}
                </div>
                <h4 className="font-display text-[1.3rem] font-bold mb-3" style={{ color: v.color }}>
                  {v.title}
                </h4>
                <p className="font-body text-sm text-meta leading-[1.75]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIRECTORS ─── */}
      <section className="bg-alt-bg py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="sec-tag">Leadership</span>
          <span className="brand-divider" />
          <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
            From the Desk of the Directors
          </h2>
          <blockquote
            className="font-display italic text-navy leading-[1.9] max-w-3xl mx-auto mb-14 font-medium"
            style={{ fontSize: 'clamp(1.1rem,2vw,1.3rem)' }}
          >
            "At Biospire, our work is fueled by a simple but profound belief: that healthcare is
            most effective when it is guided by absolute integrity. We founded this company to bring
            a fresh, professional perspective to the pharmaceutical landscape — one that prioritizes
            the patient's journey above all else. By combining our diverse professional backgrounds,
            we are dedicated to bridging the critical space between laboratory innovation and the
            doctor's clinic. Our focus remains on the practical needs of the Indian market, ensuring
            we provide healthcare professionals with the precise formulations required for the
            long-term vitality and well-being of every citizen across Bharat."
          </blockquote>

          <div className="flex justify-center gap-20 flex-wrap">
            {['Shilpi Shrivastava', 'Priyanka Shrivastava'].map((name, i) => (
              <div key={i} className="text-center">
                {/* TODO: Replace with actual director photo */}
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white"
                  style={{ background: 'linear-gradient(135deg,#6B8E99,#1A292F)' }}
                >
                  <FiUser size={36} />
                </div>
                <p className="font-body font-semibold text-navy text-base mb-1">{name}</p>
                <p className="font-body text-sm text-b-teal">Director, Biospire Lifesciences Pvt. Ltd.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
