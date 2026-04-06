import { useState } from 'react'
import PageHero from '../components/PageHero'
import {
  FiMapPin, FiMail, FiPhone, FiCreditCard,
  FiSend, FiCheckCircle, FiUser, FiMessageSquare,
  FiBriefcase
} from 'react-icons/fi'

const CONTACT_DETAILS = [
  {
    icon: <FiMapPin size={22} />,
    label: 'Registered Office',
    value: '[Your Full Office Address], Nagpur, Maharashtra, India.',
    href: null,
    color: '#1A292F',
  },
  {
    icon: <FiMail size={22} />,
    label: 'Email Address',
    value: 'biospirelifesciences2025@gmail.com',
    href: 'mailto:biospirelifesciences2025@gmail.com',
    color: '#6B8E99',
  },
  {
    icon: <FiPhone size={22} />,
    label: 'Contact Number',
    value: '+91 97307 75907',
    href: 'tel:+919730775907',
    color: '#C5A059',
  },
  {
    icon: <FiCreditCard size={22} />,
    label: 'CIN',
    value: 'U46497MH2025PTC451141',
    href: null,
    color: '#1A292F',
    small: true,
  },
]

const REACH_OUT = [
  { icon: <FiBriefcase size={18} />, title: 'Partnership Enquiry',  desc: 'Distributors, stockists, and C&F agents looking to onboard Biospire.' },
  { icon: <FiUser size={18} />,      title: 'Healthcare Professionals', desc: 'Doctors and pharmacists interested in prescribing or stocking our formulations.' },
  { icon: <FiMessageSquare size={18} />, title: 'General Enquiry', desc: 'Questions about our products, company, or pipeline — we\'d love to hear from you.' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', org: '', type: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    // TODO: wire up to your backend / email service
    setSent(true)
  }

  return (
    <>
      <PageHero
        tag="Get In Touch"
        title="Contact Our Corporate Office"
        subtitle="Whether you're a distributor, healthcare professional, or simply curious — we'd love to hear from you."
      />

      {/* ─── REASON TO REACH OUT ─── */}
      <section className="bg-alt-bg py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {REACH_OUT.map((r, i) => (
              <div key={i} className="card p-7 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: i === 0 ? '#1A292F' : i === 1 ? '#6B8E99' : '#C5A059' }}>
                  {r.icon}
                </div>
                <div>
                  <h4 className="font-body font-bold text-navy text-sm mb-1.5">{r.title}</h4>
                  <p className="font-body text-xs text-meta leading-[1.7]">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTACT GRID ─── */}
      <section className="bg-body-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* ── Corporate Details (2 cols) ── */}
            <div className="lg:col-span-2">
              <span className="sec-tag">Our Details</span>
              <span className="brand-divider-l" />
              <h2 className="font-display font-bold text-navy mb-8"
                style={{ fontSize: 'clamp(1.8rem,2.5vw,2.3rem)' }}>
                Biospire Lifesciences<br />
                <span className="text-b-teal font-normal italic">Private Limited</span>
              </h2>

              <div className="flex flex-col gap-6">
                {CONTACT_DETAILS.map((c, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-0.5"
                      style={{ background: c.color }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p className="font-body text-[11px] font-semibold tracking-[1.5px] uppercase text-meta mb-1">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="font-body text-navy no-underline font-medium hover:text-b-teal transition-colors duration-300"
                          style={{ fontSize: c.small ? '13px' : '15px' }}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p
                          className="font-body text-b-text leading-relaxed"
                          style={{ fontSize: c.small ? '13px' : '15px' }}
                        >
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Small note */}
              <div className="mt-10 p-5 rounded-xl bg-alt-bg border border-b-teal/20">
                <p className="font-body text-xs text-meta leading-[1.75]">
                  <strong className="text-navy">Response time:</strong> We aim to respond to all
                  enquiries within <strong className="text-navy">24 business hours</strong>.
                  Partnership enquiries are prioritized.
                </p>
              </div>
            </div>

            {/* ── Contact Form (3 cols) ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-panel p-8 md:p-10">
                {!sent ? (
                  <>
                    <h3 className="font-display text-[1.8rem] font-bold text-navy mb-2">
                      Send Us a Message
                    </h3>
                    <p className="font-body text-sm text-meta mb-8">
                      Fill in the form below and our team will get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-body text-[13px] font-semibold text-navy block mb-1.5">
                            Full Name <span className="text-coral">*</span>
                          </label>
                          <input
                            name="name" type="text" required
                            placeholder="Your full name"
                            value={form.name} onChange={handleChange}
                            className="input"
                          />
                        </div>
                        <div>
                          <label className="font-body text-[13px] font-semibold text-navy block mb-1.5">
                            Email Address <span className="text-coral">*</span>
                          </label>
                          <input
                            name="email" type="email" required
                            placeholder="you@example.com"
                            value={form.email} onChange={handleChange}
                            className="input"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-body text-[13px] font-semibold text-navy block mb-1.5">
                            Phone Number
                          </label>
                          <input
                            name="phone" type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={form.phone} onChange={handleChange}
                            className="input"
                          />
                        </div>
                        <div>
                          <label className="font-body text-[13px] font-semibold text-navy block mb-1.5">
                            Organization
                          </label>
                          <input
                            name="org" type="text"
                            placeholder="Clinic / pharmacy / company"
                            value={form.org} onChange={handleChange}
                            className="input"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-body text-[13px] font-semibold text-navy block mb-1.5">
                          Enquiry Type
                        </label>
                        <select
                          name="type"
                          value={form.type} onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select enquiry type…</option>
                          <option value="partnership">Partnership / Distribution</option>
                          <option value="doctor">Healthcare Professional</option>
                          <option value="pharmacy">Pharmacy / Stockist</option>
                          <option value="product">Product Information</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-body text-[13px] font-semibold text-navy block mb-1.5">
                          Message <span className="text-coral">*</span>
                        </label>
                        <textarea
                          name="message" required rows={5}
                          placeholder="Tell us how we can help you, or describe your interest in partnering with Biospire Lifesciences…"
                          value={form.message} onChange={handleChange}
                          className="input resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full py-4 rounded-xl text-base font-bold justify-center"
                      >
                        <FiSend size={17} />
                        Send Message
                      </button>
                    </form>
                  </>
                ) : (
                  /* ── Success state ── */
                  <div className="text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                      <FiCheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="font-display text-[2rem] font-bold text-navy mb-3">
                      Message Sent!
                    </h3>
                    <p className="font-body text-base text-meta leading-relaxed max-w-sm mx-auto mb-8">
                      Thank you for reaching out. Our team will get back to you within
                      24 business hours.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name:'',email:'',phone:'',org:'',type:'',message:'' }) }}
                      className="btn-outline px-8 py-3 rounded-xl text-sm font-bold"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPANY INFO BANNER ─── */}
      <section className="py-14 px-6 bg-navy">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="font-display text-[22px] font-bold text-white tracking-[3px] block">
              BIOSPIRE LIFESCIENCES
            </span>
            <span className="font-body text-[11px] text-gold tracking-[2.5px] uppercase font-semibold">
              Private Limited · Est. June 2025
            </span>
          </div>
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="font-body text-[10px] tracking-[1.5px] uppercase text-white/40 mb-1">Location</p>
              <p className="font-body text-sm text-white/75">Nagpur, Maharashtra, India</p>
            </div>
            <div>
              <p className="font-body text-[10px] tracking-[1.5px] uppercase text-white/40 mb-1">Email</p>
              <a href="mailto:biospirelifesciences2025@gmail.com" className="font-body text-sm text-b-teal no-underline">
                biospirelifesciences2025@gmail.com
              </a>
            </div>
            <div>
              <p className="font-body text-[10px] tracking-[1.5px] uppercase text-white/40 mb-1">Phone</p>
              <a href="tel:+919730775907" className="font-body text-sm text-white/75 no-underline">
                +91 97307 75907
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
