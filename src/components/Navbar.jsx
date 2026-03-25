import { useState } from "react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [open, setOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const close = () => { setOpen(false); setGalleryOpen(false); };

  const galleryImages = [
    { src: "https://i.pinimg.com/736x/2e/5f/3f/2e5f3fde5dfd28018156897cb330e8f1.jpg", caption: "The King of Atlantis" },
    { src: "https://i.pinimg.com/736x/bb/85/29/bb8529e45290d64739010db83e56193e.jpg", caption: "Red Carpet", onError: (e) => { e.target.src = "https://i.pinimg.com/736x/d2/3e/1a/d23e1a0b2c4f5e6d7a8b9c0d1e2f3a4b.jpg"; } },
    { src: "https://i.pinimg.com/736x/be/74/54/be74541af3b6dbabd000e02b51d5a387.jpg", caption: "On Set", onError: (e) => { e.target.src = "https://i.pinimg.com/1200x/1a/2b/3c/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d.jpg"; } },
    { src: "https://i.pinimg.com/736x/3f/22/54/3f225496315752bfc2b36ab4cc15bcc9.jpg", caption: "Ocean Guardian", onError: (e) => { e.target.src = "https://i.pinimg.com/736x/b2/c3/d4/b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7.jpg"; } },
    { src: "https://i.pinimg.com/736x/ca/47/32/ca4732d0358404d9dd92d363d87146c3.jpg", caption: "Dune Chronicles", onError: (e) => { e.target.src = "https://i.pinimg.com/1200x/c4/d5/e6/c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9.jpg"; } },
    { src: "https://i.pinimg.com/1200x/a6/11/6f/a6116f34fe85ebc093792daf4a1da07d.jpg", caption: "Hawaii Roots", onError: (e) => { e.target.src = "https://i.pinimg.com/736x/e5/f6/a7/e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.jpg"; } },
    { src: "https://i.pinimg.com/736x/7e/1f/13/7e1f1313849c61eddbf04cee940e0b53.jpg", caption: "Khal Drogo Era", onError: (e) => { e.target.src = "https://i.pinimg.com/1200x/2c/3d/4e/2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f.jpg"; } },
    { src: "https://i.pinimg.com/736x/97/17/5a/97175a1430ee72764d118d4afefda12c.jpg", caption: "Film Premiere Glow", onError: (e) => { e.target.src = "https://i.pinimg.com/736x/5f/6a/7b/5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c.jpg"; } },
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">Jason</div>

        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#discography">Filmography</a>
          <button
            className="nav-gallery-btn"
            onClick={() => setGalleryOpen(true)}
            aria-label="Open Gallery"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            Gallery
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            className="nav-theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              /* Sun icon */
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
            <span>{darkMode ? "Light" : "Dark"}</span>
          </button>

          <a href="#contact" className="nav-btn">Get in touch</a>
        </div>

        <button
          className={`nav-hamburger${open ? " open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav-mobile-menu${open ? " open" : ""}`}>
        <a href="#hero"         onClick={close}>Home</a>
        <a href="#about"        onClick={close}>About</a>
        <a href="#discography"  onClick={close}>Filmography</a>
        <a href="#"             onClick={() => { setOpen(false); setGalleryOpen(true); }}>Gallery</a>
        <button
          onClick={() => { toggleDarkMode(); setOpen(false); }}
          className="nav-mobile-theme"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
        <a href="#contact"      onClick={close} className="nav-btn">Get in touch</a>
      </div>

      {galleryOpen && (
        <div className="gallery-overlay" onClick={() => setGalleryOpen(false)}>
          <div className="gallery-panel" onClick={e => e.stopPropagation()}>
            <div className="gallery-panel-header">
              <div>
                <span className="section-tag" style={{marginBottom:0}}>Visual Archive</span>
                <h3 className="gallery-panel-title">Gallery</h3>
              </div>
              <button className="gallery-close" onClick={() => setGalleryOpen(false)} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((img, i) => (
                <div className="gallery-item" key={i}>
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    onError={img.onError}
                  />
                  <div className="gallery-item-caption">{img.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
