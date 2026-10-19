import Image from "next/image"
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
    image: "/images/food-beverage-industry.jpg",
    tag: "Sanitary Process & MEP",
  },
  {
    num: "02",
    title: "Garment & Textile",
    desc: "Plant layout, MEP, and process engineering for denim, apparel, and textile processing facilities.",
    icon: "⌗",
    link: "/services",
    image: "/images/garment-textile-industry.jpg",
    tag: "Automated Line Layout",
  },
  {
    num: "03",
    title: "Steel & Heavy Industry",
    desc: "Process flow, electrical, and structural engineering for metal fabrication and heavy manufacturing plants.",
    icon: "◬",
    link: "/services",
    image: "/images/steel-heavy-industry.jpg",
    tag: "High-Load PEB & Substation",
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
    image: "/images/garment-textile-industry.jpg",
    location: "India",
  },
  {
    sector: "Food & Beverage",
    client: "Everest Food Products Pvt. Ltd.",
    division: "Phase 1 & 2",
    summary:
      "Process and MEP design for a multi-phase food manufacturing facility, from spice processing through to plant utilities.",
    href: "/projects",
    image: "/images/projects-everest-inauguration.jpg",
    location: "Umbergaon, Gujarat",
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* ================= FULLSCREEN 100VH HERO WITH STITCHED IMAGE & SCROLL ACTIONS ================= */}
        <HeroFullscreen />

        {/* ================= INDUSTRIES BAND (3 CARDS WITH AI IMAGES) ================= */}
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
                  <article className="sector-card group overflow-hidden" key={item.title}>
                    <div>
                      {/* Section AI Image Container */}
                      <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-sm)] border border-[var(--line)] bg-[var(--surface-muted)]">
                        <Image
                          src={item.image}
                          alt={`${item.title} facility engineering by AAVA`}
                          fill
                          sizes="(max-width: 768px) 100vw, 360px"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,16,0.6)] via-transparent to-transparent opacity-60" />
                        <span className="absolute bottom-2.5 left-2.5 rounded bg-[var(--terracotta)] px-2 py-0.5 text-[11px] font-semibold tracking-wider text-white uppercase">
                          {item.tag}
                        </span>
                      </div>

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

        {/* ================= WHY AAVA (5 STRENGTHS + COLLABORATIVE DESIGN PHOTO) ================= */}
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

                {/* Team Multi-Discipline Engineering Coordination Image */}
                <div className="relative mt-8 aspect-[16/10] w-full max-w-[460px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] shadow-lg">
                  <Image
                    src="/images/why-aava-coordination.jpg"
                    alt="AAVA integrated engineering consultancy team reviewing 3D plant CAD model and blueprints"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,16,0.85)] via-[rgba(20,18,16,0.2)] to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block rounded bg-[var(--terracotta)] px-2 py-0.5 text-[10.5px] font-bold tracking-wider uppercase">
                      Single-Roof Multi-Discipline
                    </span>
                    <p className="mt-1 text-xs text-stone-200">
                      Zero cross-discipline site clashes engineered through unified 3D coordination
                    </p>
                  </div>
                </div>
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

        {/* ================= FEATURED PROJECTS (TEASERS WITH REALISTIC PLANT PHOTOS) ================= */}
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
                <article className="feature-card group overflow-hidden" key={project.client}>
                  <div>
                    {/* Featured Project Image */}
                    <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-sm)] border border-[var(--line)] bg-[var(--surface-muted)]">
                      <Image
                        src={project.image}
                        alt={`${project.client} ${project.division} facility`}
                        fill
                        sizes="(max-width: 768px) 100vw, 540px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,16,0.65)] via-transparent to-transparent opacity-70" />
                      <span className="absolute bottom-2.5 left-2.5 rounded bg-[var(--terracotta)] px-2 py-0.5 text-[11px] font-semibold tracking-wider text-white uppercase">
                        {project.location}
                      </span>
                    </div>

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
  )
}
