export default function PageHero({ tag, title, subtitle, bg, image }) {
  return (
    <section
      className="relative overflow-hidden pt-36 pb-20 px-6"
      style={{ background: bg || 'linear-gradient(135deg,#1A292F 0%,#243a41 60%,#2e5462 100%)' }}
    >
      {/* Background image */}
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Light tint — keeps photo clearly visible while text stays legible */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg,rgba(16,26,30,0.55) 0%,rgba(26,41,47,0.42) 55%,rgba(46,84,98,0.38) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center,transparent 35%,rgba(16,26,30,0.30) 100%)' }}
          />
        </>
      )}

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
        style={{ background: 'rgba(107,142,153,0.08)' }} />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full"
        style={{ background: 'rgba(197,160,89,0.06)' }} />

      {/* Thin gold line top */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: 'linear-gradient(90deg,transparent,#C5A059,transparent)' }} />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {tag && (
          <span
            className="font-body text-[11px] font-semibold tracking-[3.5px] uppercase text-gold block mb-3"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}
          >
            {tag}
          </span>
        )}
        <h1
          className="font-display font-bold text-white leading-tight"
          style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', textShadow: '0 2px 14px rgba(0,0,0,0.7)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-base mt-5 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.95)', textShadow: '0 1px 8px rgba(0,0,0,0.75)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
