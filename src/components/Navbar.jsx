import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const LINKS = [
  { label: 'Home',      to: '/'          },
  { label: 'About',     to: '/about'     },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Quality',   to: '/quality'   },
  { label: 'Why Us',    to: '/why-us'    },
  { label: 'Partner',   to: '/partner'   },
  { label: 'Contact',   to: '/contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const linkClass = ({ isActive }) =>
    `nav-link text-sm ${isActive ? 'active' : ''}`

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400
      ${scrolled ? 'nav-solid py-3' : 'nav-transparent py-5'}`}>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="no-underline flex items-baseline gap-2.5">
          <span className="font-display text-[26px] font-bold text-white tracking-[4px] uppercase leading-none">
            BIOSPIRE
          </span>
          <span className="font-body text-[9px] text-gold tracking-[2.5px] uppercase font-semibold hidden sm:inline">
            LIFESCIENCES
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn-primary px-5 py-2.5 rounded-lg text-[13px] tracking-wide"
          >
            Become a Partner
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-2xl bg-transparent border-none cursor-pointer p-1"
          aria-label="Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden px-6 py-5 flex flex-col gap-4"
          style={{ background: 'rgba(15,28,33,0.98)', backdropFilter: 'blur(20px)' }}>
          {LINKS.map(l => (
            <NavLink
              key={l.to} to={l.to} end={l.to === '/'} className={linkClass}
              onClick={() => setOpen(false)}
              style={{ fontSize: '15px' }}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary px-5 py-3 rounded-lg text-sm text-center justify-center mt-1"
          >
            Become a Partner
          </Link>
        </div>
      )}
    </nav>
  )
}
