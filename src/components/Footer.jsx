import { Link } from 'react-router-dom'
import { FiMapPin, FiMail, FiPhone, FiArrowRight } from 'react-icons/fi'

const COL_LINKS = [
  { label: 'Home',      to: '/'          },
  { label: 'About Us',  to: '/about'     },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Quality',   to: '/quality'   },
  { label: 'Why Us',    to: '/why-us'    },
  { label: 'Partner',   to: '/partner'   },
  { label: 'Contact',   to: '/contact'   },
]

export default function Footer() {
  return (
    <footer className="footer-bg pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-[26px] font-bold text-white tracking-[4px] block mb-1">
              BIOSPIRE
            </span>
            <span className="font-body text-[9px] text-gold tracking-[3px] uppercase font-semibold">
              LIFESCIENCES PVT. LTD.
            </span>
            <p className="font-display italic text-white/60 text-base mt-4 leading-relaxed">
              "Partner in Progressive Healthcare…"
            </p>
            <p className="font-body text-sm mt-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Est. June 2025 · Nagpur, MH
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-[11px] text-gold tracking-[2.5px] uppercase font-bold mb-5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {COL_LINKS.map(l => (
                <Link key={l.to} to={l.to}
                  className="font-body text-sm no-underline flex items-center gap-1.5 group transition-colors duration-300"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  <FiArrowRight className="text-b-teal opacity-0 group-hover:opacity-100 transition-opacity -ml-1" size={12} />
                  <span className="group-hover:text-b-teal transition-colors">{l.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body text-[11px] text-gold tracking-[2.5px] uppercase font-bold mb-5">
              Products
            </h4>
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-body text-sm font-semibold text-white/80">LOHIVA™</p>
                <p className="font-body text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>Iron with Enhanced Absorption</p>
                <span className="font-body text-[10px] font-bold tracking-wider uppercase mt-1 inline-block px-2 py-0.5 rounded-sm text-navy" style={{ background: '#C5A059' }}>Coming Soon</span>
              </div>
              <div className="mt-2">
                <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Bone Health <span className="text-[11px]">— Pipeline</span></p>
                <p className="font-body text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Metabolic Wellness <span className="text-[11px]">— Pipeline</span></p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[11px] text-gold tracking-[2.5px] uppercase font-bold mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <FiMapPin className="text-b-teal mt-0.5 flex-shrink-0" size={15} />
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
                  Nagpur, Maharashtra, India
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FiMail className="text-b-teal flex-shrink-0" size={15} />
                <a href="mailto:biospirelifesciences2025@gmail.com" className="font-body text-sm text-b-teal no-underline hover:text-gold transition-colors">
                  biospirelifesciences2025@gmail.com
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <FiPhone className="text-b-teal flex-shrink-0" size={15} />
                <a href="tel:+919730775907" className="font-body text-sm no-underline hover:text-b-teal transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  +91 97307 75907
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="hr-gold mb-5" />

        {/* Copyright — very last line */}
        <p className="font-body text-[12.5px] text-center tracking-wide" style={{ color: 'rgba(255,255,255,0.32)' }}>
          © 2025 BIOSPIRE LIFESCIENCES PRIVATE LIMITED. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
