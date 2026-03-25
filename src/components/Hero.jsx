export default function Hero() {
  const services = [
    ["#01", "Acting"],
    ["#02", "Production"],
    ["#03", "Activism"],
    ["#04", "Adventure"],
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-grain" />
      <div className="hero-side-text">Hawaii · Est. 1979 · Action Icon</div>

      <div className="hero-portrait">
        <div className="hero-glow" />
        <img
          className="hero-photo"
          src="https://wallpapers.com/images/hd/jason-momoa-as-aquaman-0jo5maf63mtd7vta.webp"
          alt="Jason Momoa"
        />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">Hey, I'm</div>
        <h1 className="hero-title">Jason<br /><em>Momoa</em></h1>

        <div className="hero-tagline">
          <strong>A warrior on screen. A guardian off it.</strong>
          <p>From Hawaii to the biggest screens on earth — living with passion, power, and purpose.</p>
        </div>

        <div className="hero-services">
          {services.map(([n, l], i) => (
            <div key={i}>
              <span className="svc-num">{n}</span>
              <span className="svc-name">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="fan-card-strip">
        <div className="fan-card-strip-inner">
          <div className="fan-card-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Official Fan Card
          </div>
          <div className="fan-card-text">
            <span className="fan-card-headline">Become an Ohana Member</span>
            <span className="fan-card-sub">Exclusive access · Giveaways · Recognition</span>
          </div>
          <div className="fan-card-perks">
            <div className="fan-perk">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              Top Fan Status
            </div>
            <div className="fan-perk">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
              </svg>
              Giveaway Access
            </div>
          </div>
          <a href="#fan-card" className="fan-card-cta">
            Get Your Card
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
