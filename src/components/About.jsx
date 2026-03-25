export default function About() {
  return (
    <section className="about-full" id="about">
      <div className="af-image-col sr">
        <div className="af-img-wrap">
          <img
            src="https://wallpapers.com/images/high/jason-momoa-braven-g9jzw28arsa11m5d.webp"
            onError={(e) => { e.target.src = "https://i.pinimg.com/736x/3b/f3/9c/3bf39c3c0e2f3c98e8a56dce3e6bfa1c.jpg"; }}
            alt="Jason Momoa"
          />
          <div className="af-img-caption">
            <span>Nānākuli, Hawaii</span>
            <span>Est. 1979</span>
          </div>
        </div>
        <div className="af-credentials">
          {[
            ["60+", "Film & TV Roles"],
            ["4", "Major Franchises"],
            ["180M+", "Social Followers"],
            ["15+", "Years of Action"],
          ].map(([n, l]) => (
            <div className="af-cred" key={l}>
              <span className="af-cred-n">{n}</span>
              <span className="af-cred-l">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="af-text-col sr d1">
        <span className="section-tag">The Legend</span>
        <h2 className="af-heading">
          More Than a Star —<br /><em>A Force</em>
        </h2>
        <div className="af-body">
          <p>
            Jason Momoa is a globally recognized actor, producer, and environmental activist
            whose commanding presence and raw authenticity have made him one of Hollywood's
            most magnetic stars. Born in Honolulu, Hawaii, he rose from humble beginnings to
            portray iconic warriors including <strong>Aquaman</strong>, <strong>Khal Drogo</strong> in Game of Thrones,
            and <strong>Duncan Idaho</strong> in the Dune franchise.
          </p>
          <p>
            Beyond the screen, Momoa is a fierce advocate for ocean conservation and
            indigenous rights, channeling his Hawaiian roots into real-world change. His
            production company On the Roam has built a reputation for bold, character-driven
            storytelling that defies genre conventions.
          </p>
          <p>
            With a magnetic personality, signature dreadlocks, and unapologetic spirit —
            Jason Momoa doesn't just play legends. He becomes them.
          </p>
        </div>
        <div className="af-tags">
          {[
            "Aquaman · DC Universe",
            "Khal Drogo · Game of Thrones",
            "Duncan Idaho · Dune",
            "Ocean Conservation Activist",
          ].map((t) => (
            <span className="af-tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="af-cta-row">
          <a href="#discography" className="cta-btn">
            Explore Filmography
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
