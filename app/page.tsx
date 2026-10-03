import { ArrowLink, Footer, Header, Reveal } from "@/components/site"
import { HeroFullscreen } from "@/components/HeroFullscreen"
import { WhatWeDoSection } from "@/components/WhatWeDoSection"
import { ProjectBannerSlider } from "@/components/ProjectBannerSlider"

const industries = [
  {
    num: "01",
    title: "Food & Beverage",
    desc: "Hygienic process design, FSSAI-compliant plant setup, and utility systems for food and beverage manufacturers.",
    icon: "⚙",
    link: "/services",
  },
  {
    num: "02",
    title: "Garment & Textile",
    desc: "Plant layout, MEP, and process engineering for denim, apparel, and textile processing facilities.",
    icon: "⌗",
    link: "/services",
  },
  {
    num: "03",
    title: "Steel & Heavy Industry",
    desc: "Process flow, electrical, and structural engineering for metal fabrication and heavy manufacturing plants.",
    icon: "◬",
    link: "/services",
  },
]

const whyAavaPoints = [
  "Quick understanding of user requirements and fast conceptualisation",
  "A team of experienced engineers across disciplines, working under one roof",
  "Better coordination between disciplines — fewer clashes, fewer surprises on site",
  "Strong exposure to regulatory and statutory requirements across states",
  "Value drawn from 20+ years of hands-on project execution experience",
]

const featuredProjects = [
  {
    sector: "Garment & Textile",
    client: "Ashapura Garments Ltd.",
    division: "Denim & Trouser Division",
    summary:
      "Turnkey design and execution covering the cutting unit, special-operation sewing lines, wet processing, smart production conveying, and staff kitchen & dining facilities.",
    href: "/projects",
  },
  {
    sector: "Food & Beverage",
    client: "Everest Food Products Pvt. Ltd.",
    division: "Phase 1 & 2",
    summary:
      "Process and MEP design for a multi-phase food manufacturing facility, from spice processing through to plant utilities.",
    href: "/projects",
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* ================= FULLSCREEN 100VH HERO WITH STITCHED IMAGE & SCROLL ACTIONS ================= */}
        <HeroFullscreen />

        {/* ================= INDUSTRIES BAND (3 CARDS) ================= */}
        <Reveal>
          <section className="sector-band" aria-label="Industries">
            <div className="wrap">
              <div className="section-label">
                <span>Industries Band</span>
                <p>
                  Focused sector
                  <br />
                  depth &amp; expertise.
                </p>
              </div>

              <div className="sector-grid">
                {industries.map((item) => (
                  <article className="sector-card" key={item.title}>
                    <div>
                      <div className="sector-card-top">
                        <span className="sector-no">{item.num}</span>
                        <span className="sector-icon">{item.icon}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p className="color-fade-text">{item.desc}</p>
                    </div>
                    <ArrowLink href={item.link}>Explore discipline</ArrowLink>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ================= WHAT WE DO (OVERVIEW) ================= */}
        <Reveal>
          <WhatWeDoSection />
        </Reveal>

        {/* ================= MIDDLE BANNER SLIDER: COMPANY WORK SHOWCASE ================= */}
        <Reveal>
          <ProjectBannerSlider />
        </Reveal>

        {/* ================= WHY AAVA (5 STRENGTHS) ================= */}
        <Reveal>
          <section className="proof" aria-label="Why Choose AAVA">
            <div className="wrap proof-inner">
              <div>
                <span className="eyebrow">Why AAVA</span>
                <h2>
                  Better coordination.<br />
                  <span className="accent-text">Better outcomes.</span>
                </h2>
                <p className="color-fade-text" style={{ maxWidth: "420px", marginTop: "16px" }}>
                  Eliminating engineering silos so your manufacturing projects
                  finish on schedule, strictly within budget, and without site clashes.
                </p>
              </div>

              <div className="proof-list">
                {whyAavaPoints.map((strength, idx) => (
                  <div className="proof-item" key={strength}>
                    <div className="proof-num">0{idx + 1}</div>
                    <p className="color-fade-text">{strength}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ================= FEATURED PROJECTS (TEASERS) ================= */}
        <Reveal>
          <section className="featured wrap" aria-label="Featured Projects">
            <div className="section-label">
              <span>Featured Projects</span>
              <p>
                Built to work.
                <br />
                Built to scale.
              </p>
              <div style={{ marginTop: "20px" }}>
                <ArrowLink href="/projects">View all projects</ArrowLink>
              </div>
            </div>

            <div className="feature-cards">
              {featuredProjects.map((project, idx) => (
                <article className="feature-card" key={project.client}>
                  <div>
                    <span className="card-kicker">
                      0{idx + 1} / {project.sector}
                    </span>
                    <h3>{project.client}</h3>
                    <h4>{project.division}</h4>
                    <p className="color-fade-text">{project.summary}</p>
                  </div>
                  <ArrowLink href={project.href}>View project details</ArrowLink>
                </article>
              ))}
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  )}
