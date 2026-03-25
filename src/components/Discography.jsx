import { useState } from "react";

const ERAS = [
  { era: "Early Career", films: ["Baywatch (1999)", "North Shore (2004)", "Stargate: Atlantis (2004–2009)", "The Game (2006)", "Bullet to the Head (2012)"] },
  { era: "Rise to Fame", films: ["Game of Thrones (2011–2012)", "Conan the Barbarian (2011)", "The Red Road (2014–2015)", "Batman v Superman (2016)", "Justice League (2017)"] },
  { era: "Blockbuster Era", films: ["Aquaman (2018)", "See (2019–2022)", "Dune (2021)", "Aquaman and the Lost Kingdom (2023)", "Fast X (2023)", "Dune: Part Two (2024)"] },
  { era: "Production", films: ["Road to Paloma (2014)", "Once Upon a Time in Venice (2017)", "Frontier (2016–2018)", "The Last Manhunt (2022)", "On the Roam (2023)"] },
];

const RECENT = [
  { year: "2024", title: "Dune: Part Two", type: "Blockbuster Film", desc: "Returned as Duncan Idaho in Denis Villeneuve's epic sci-fi sequel, grossing over $700M worldwide to critical acclaim.", highlight: true },
  { year: "2023", title: "Aquaman & the Lost Kingdom", type: "DC Universe", desc: "Reprised his iconic role as Arthur Curry in the DC sequel, closing out his era as the King of Atlantis.", highlight: false },
  { year: "2023", title: "Fast X", type: "Action Franchise", desc: "Joined the Fast & Furious universe as the fearsome villain Dante — a career-defining antagonist role.", highlight: false },
  { year: "2022", title: "See (Season 3)", type: "Apple TV+ Series", desc: "Concluded the Emmy-nominated Apple TV+ series with a powerful performance as Baba Voss.", highlight: false },
];

const ICONIC = [
  { num: "01", title: "Khal Drogo",         year: "2011", note: "Game of Thrones · Breakout role" },
  { num: "02", title: "Aquaman",             year: "2018", note: "DC Universe · $1.1B Box Office" },
  { num: "03", title: "Duncan Idaho",        year: "2021", note: "Dune Franchise · Critically Acclaimed" },
  { num: "04", title: "Baba Voss",           year: "2019", note: "See · Apple TV+ Series Lead" },
  { num: "05", title: "Dante Reyes",         year: "2023", note: "Fast X · Scene-stealing villain" },
];

const COLLABS = [
  {
    partners: "Denis Villeneuve", title: "Dune (2021 & 2024)", years: "Sci-Fi Epic · Two-Part Saga",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
  },
  {
    partners: "James Wan", title: "Aquaman Franchise", years: "2018 · 2023 · DC Universe",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  {
    partners: "HBO / George R.R. Martin", title: "Game of Thrones", years: "2011–2012 · Global Phenomenon",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  },
];

export default function Discography() {
  const [activeEra, setActiveEra] = useState(0);

  return (
    <section className="disco" id="discography">
      <div className="disco-header sr">
        <span className="section-tag">The Filmography</span>
        <h2 className="disco-title">25 Years.<br /><em>A Legacy of Power.</em></h2>
        <p className="disco-intro">
          From Hawaiian beaches to intergalactic deserts — Jason Momoa has built one of the most
          electrifying careers in modern Hollywood, spanning television, blockbusters, and independent film.
        </p>
      </div>

      <div className="disco-block sr d1">
        <div className="disco-block-label"><span className="section-tag">Career Eras</span></div>
        <div className="disco-tabs">
          {ERAS.map((d, i) => (
            <button key={i} className={`disco-tab${activeEra === i ? " active" : ""}`} onClick={() => setActiveEra(i)}>
              {d.era}
            </button>
          ))}
        </div>
        <div className="disco-album-list">
          {ERAS[activeEra].films.map((a, i) => (
            <div className="disco-album-row" key={`${activeEra}-${i}`} style={{ animationDelay: `${i * 0.07}s` }}>
              <span className="disco-album-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="disco-album-name">{a}</span>
              <span className="disco-album-line" />
            </div>
          ))}
        </div>
      </div>

      <div className="disco-recent sr d1">
        <span className="section-tag">Recent Work · 2022–2024</span>
        <div className="disco-recent-grid">
          {RECENT.map((r, i) => (
            <div className={`disco-release${r.highlight ? " highlight" : ""}`} key={i}>
              <div className="dr-year">{r.year}</div>
              <div className="dr-type">{r.type}</div>
              <div className="dr-title">{r.title}</div>
              <div className="dr-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="disco-diamonds sr d2">
        <span className="section-tag">Iconic Roles</span>
        <p className="disco-diamonds-sub">Five performances that define his legendary career</p>
        <div className="disco-diamond-list">
          {ICONIC.map((d, i) => (
            <div className="dd-row" key={i}>
              <span className="dd-num">{d.num}</span>
              <div className="dd-info">
                <span className="dd-title">{d.title}</span>
                <span className="dd-note">{d.note}</span>
              </div>
              <span className="dd-year">{d.year}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="disco-collabs sr d2">
        <span className="section-tag">Key Collaborations</span>
        <div className="disco-collab-grid">
          {COLLABS.map((c, i) => (
            <div className="dc-card" key={i}>
              <div className="dc-icon">{c.icon}</div>
              <div className="dc-title">{c.title}</div>
              <div className="dc-partners">{c.partners}</div>
              <div className="dc-years">{c.years}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="disco-stats sr">
        {[
          ["60+",   "Roles Played"],
          ["$2B+",  "Box Office Total"],
          ["4",     "Major Franchises"],
          ["25+",   "Years in Industry"],
          ["180M+", "Global Followers"],
        ].map(([n, l]) => (
          <div className="disco-stat" key={l}>
            <span className="disco-stat-n">{n}</span>
            <span className="disco-stat-l">{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
