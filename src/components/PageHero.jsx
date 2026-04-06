export default function PageHero({ tag, title, subtitle, bg }) {
  return (
    <section
      className="relative overflow-hidden pt-36 pb-20 px-6"
      style={{ background: bg || 'linear-gradient(135deg,#1A292F 0%,#243a41 60%,#2e5462 100%)' }}
    >
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
          <span className="font-body text-[11px] font-semibold tracking-[3.5px] uppercase text-b-teal block mb-3">
            {tag}
          </span>
        )}
        <h1
          className="font-display font-bold text-white leading-tight"
          style={{ fontSize: 'clamp(2.4rem,5vw,4rem)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-base mt-5 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.72)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
