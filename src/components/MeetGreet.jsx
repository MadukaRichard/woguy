export default function MeetGreet() {
  const steps = [
    {
      n: "01",
      title: "Click to Connect",
      desc: "Use any of the contact options below to start a conversation directly with Jason's team.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
    },
    {
      n: "02",
      title: "Share Your Details",
      desc: "Let the team know your preferred date, city, and any special requests for your meet & greet experience.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      ),
    },
    {
      n: "03",
      title: "Confirm & Experience",
      desc: "Once confirmed, get ready for an unforgettable personal moment with one of Hollywood's greatest legends.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="mg-section" id="meet-greet">
      <div className="mg-bg" />

      <div className="mg-inner">
        <div className="mg-header sr">
          <span className="section-tag" style={{ color: "var(--gold)" }}>
            <span style={{ background:"var(--gold)", display:"inline-block", width:22, height:1, marginRight:8 }}/>
            Personal Experience
          </span>
          <h2 className="mg-title">
            Meet &amp; Greet<br /><em>with Jason</em>
          </h2>
          <p className="mg-subtitle">
            A rare, intimate opportunity to meet Jason in person.
            Limited spots available — reach out directly to secure yours.
          </p>
        </div>

        <div className="mg-body">
          <div className="mg-steps sr d1">
            {steps.map((s, i) => (
              <div className="mg-step" key={i}>
                <div className="mg-step-icon">{s.icon}</div>
                <div className="mg-step-content">
                  <div className="mg-step-num">{s.n}</div>
                  <div className="mg-step-title">{s.title}</div>
                  <div className="mg-step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mg-cta-card sr d2">
            <div className="mg-cta-top">
              <div className="mg-cta-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <div>
                <div className="mg-cta-label">Book a Meet &amp; Greet</div>
                <div className="mg-cta-number" style={{fontSize:"0.82rem", color:"var(--muted)"}}>Multiple ways to connect</div>
              </div>
            </div>

            <p className="mg-cta-body">
              Our team responds within 24 hours. Choose your preferred platform to reach Jason's team directly.
            </p>

            <div className="mg-availability">
              <div className="mg-avail-dot" />
              <span>Team is currently available</span>
            </div>

            {/* Email Management */}
            <a
              href="tel:+13152666017"
              className="mg-whatsapp-btn"
              style={{marginBottom:"10px", background:"var(--accent)"}}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Management · +1 (315) 266-6017
            </a>

            {/* Main Phone */}
            <a
              href="tel:+14196891433"
              className="mg-whatsapp-btn"
              style={{marginBottom:"10px", background:"#3a76f0"}}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Main Line · +1 (419) 689-1433
            </a>

            {/* Email */}
            <a
              href="mailto:jasonmomoa73090@gmail.com"
              className="mg-whatsapp-btn"
              style={{background:"#1a8a4a"}}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><polyline points="1,4 12,13 23,4"/>
              </svg>
              Email · jasonmomoa73090@gmail.com
            </a>

            <p className="mg-disclaimer">
              Direct line to Jason's management team · Confidential &amp; secure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
