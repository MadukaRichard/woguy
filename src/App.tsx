import { useEffect, useState } from "react";
import "./App.css";
// @ts-ignore
import Navbar from "./components/Navbar";
// @ts-ignore
import Hero from "./components/Hero";
// @ts-ignore
import About from "./components/About";
// @ts-ignore
import FanCard from "./components/FanCard";
// @ts-ignore
import MeetGreet from "./components/MeetGreet";
// @ts-ignore
import Discography from "./components/Discography";
// @ts-ignore
import Footer from "./components/Footer";

const BRANDS = [
  { name: "Warner Bros.",      Icon: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg> },
  { name: "DC Studios",        Icon: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { name: "Legendary Pictures", Icon: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg> },
  { name: "Apple TV+",         Icon: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg> },
  { name: "On the Roam",       Icon: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { name: "HBO / Max",         Icon: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
];

const PROJECTS = [
  { bg: "bg1", tag: "DC Blockbuster",   title: "Aquaman",        sub: "2018 · $1.15B Box Office · #1 DC Film of All Time",
    image: "https://wallpapers.com/images/high/aquaman-in-stealth-movie-u8a1x5igky85zqn7.webp" },
  { bg: "bg2", tag: "Sci-Fi Epic",      title: "Dune Franchise", sub: "2021–2024 · Duncan Idaho · Denis Villeneuve",
    image: "https://i.pinimg.com/736x/ca/47/32/ca4732d0358404d9dd92d363d87146c3.jpg" },
  { bg: "bg3", tag: "Breakout Role",    title: "Game of Thrones", sub: "2011–2012 · Khal Drogo · Global Icon",
    image: "https://www.tvguide.com/a/img/resize/ac0b5dcfc483db895a9e654be15b44079165d151/hub/2017/11/30/18f6b9bf-2273-4f1c-933b-2914191c1a21/171130-jason-momoa-game-of-thrones.jpg?auto=webp&fit=crop&height=1080&width=1920" },
];

const STATS = [
  { n: "60+",   l: "Film & TV Roles"   },
  { n: "$2B+",  l: "Box Office Total"  },
  { n: "4",     l: "Major Franchises"  },
  { n: "25+",   l: "Years Active"      },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("vis"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".sr").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={darkMode ? "theme-dark" : "theme-light"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />

      {/* BRANDS */}
      <div className="brands">
        <div className="brands-label">Studios &amp; Partners</div>
        <div className="brands-track">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <div className="brand-pill" key={i}>
              <b.Icon />{b.name}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <About />

      {/* FAN CARD */}
      <FanCard />

      {/* MEET & GREET */}
      <MeetGreet />

      {/* DISCOGRAPHY / FILMOGRAPHY */}
      <Discography />

      {/* PROJECTS */}
      <div className="projects">
        {PROJECTS.map((p, i) => (
          <div className={`pc sr d${i}`} key={i}>
            <div className={`pc-bg ${p.bg}`} style={{ display: "flex", alignItems: "stretch", justifyContent: "stretch", overflow: "hidden" }}>
              <img
                src={p.image}
                alt={p.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", flex: 1 }}
              />
            </div>
            <div className="pc-overlay" />
            <div className="pc-info">
              <span className="pc-tag">{p.tag}</span>
              <div className="pc-title">{p.title}</div>
              <div className="pc-sub">{p.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* STATS */}
      <div className="stats">
        {STATS.map((s, i) => (
          <div className={`stat sr d${i}`} key={i}>
            <div className="stat-n">{s.n}</div>
            <div className="stat-l">{s.l}</div>
          </div>
        ))}
      </div>

      {/* QUOTE */}
      <section className="quote-wrap">
        <div className="q-watermark">JASON</div>
        <span className="q-mark">"</span>
        <blockquote>Be in love with your life. Every minute of it.</blockquote>
        <div className="q-by">— Jason Momoa</div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-left sr">
          <span className="section-tag">Get In Touch</span>
          <h2>Let's Create<br /><em>Something</em><br />Legendary</h2>
          <p>
            Whether it's a collaboration, appearance booking, or project inquiry —
            reach out and let's make something the world will remember.
          </p>
        </div>
        <div className="cf sr d1">
          <div className="cf-row">
            <input placeholder="Your name" />
            <input placeholder="Your email" />
          </div>
          <input placeholder="Subject" />
          <textarea placeholder="Tell me about your project..." />
          <a
            href="mailto:jasonmomoa73090@gmail.com"
            className="cf-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Message
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
