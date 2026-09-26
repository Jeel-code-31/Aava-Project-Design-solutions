import { Footer, Header, PageIntro, ProjectGrid, Reveal } from "@/components/site"
import { Activity, CheckCircle2, Factory, ShieldCheck, Sparkles } from "lucide-react"

const activeEngagements = [
  {
    name: "Everest Food Products",
    sector: "Food & Beverage",
    scope: "Multiple Work Streams & Process Utilities",
  },
  {
    name: "New Burry Fashion",
    sector: "Garment & Textile",
    scope: "Turnkey Plant Engineering",
  },
  {
    name: "Abhisneh Textiles",
    sector: "Garment & Textile",
    scope: "Process Flow & MEP Design",
  },
  {
    name: "Jhaveri Spices",
    sector: "Food & Beverage",
    scope: "Spice Processing Plant Infrastructure",
  },
  {
    name: "JKH",
    sector: "Steel & Heavy Industry",
    scope: "Industrial Utility & Structural Engineering",
  },
  {
    name: "Agrizo Foods",
    sector: "Food & Beverage",
    scope: "Hygienic Process Layout & Utilities",
  },
  {
    name: "Safal Foods",
    sector: "Food & Beverage",
    scope: "Comprehensive Turnkey Execution",
  },
]

export default function Projects() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageIntro
          eyebrow="Selected work"
          title="Projects that perform."
          text="From concept to commissioned plant, our work spans the full manufacturing landscape — engineered with precision and built to run."
        />

        <ProjectGrid />

        {/* ================= CURRENTLY IN PROGRESS SECTION ================= */}
        <Reveal>
          <div className="wrap">
            <section className="progress-card" aria-label="Currently in progress">
              <div className="progress-header">
                <div className="progress-live-pill">
                  <span className="live-beacon" />
                  Currently in progress
                </div>
                <span className="text-xs font-semibold tracking-wide text-[var(--muted-text)]">
                  Active On-Site &amp; Design Deliveries
                </span>
              </div>

              <div className="progress-content-layout">
                <div className="progress-text-block">
                  <h3>
                    Live Engineering &amp; Turnkey Projects
                  </h3>
                  <p>
                    Beyond the completed work above, AAVA is actively delivering
                    engineering, MEP, and turnkey projects for clients including
                    New Burry Fashion, Abhisneh Textiles, Jhaveri Spices, Everest
                    Food Products (multiple work streams), JKH, Agrizo Foods, and
                    Safal Foods, among others, across the Food, Garment, and Steel
                    &amp; Heavy Industry sectors.
                  </p>

                  <div className="progress-badges-row">
                    <div className="progress-meta-tag">
                      <Factory className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                      <span>Multi-Sector Depth</span>
                    </div>
                    <div className="progress-meta-tag">
                      <ShieldCheck className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                      <span>Zero Site Clashes</span>
                    </div>
                    <div className="progress-meta-tag">
                      <Activity className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                      <span>Turnkey Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Active Client Showcase Cards */}
                <div className="progress-clients-grid">
                  {activeEngagements.map((item) => (
                    <div className="progress-client-card" key={item.name}>
                      <div className="progress-client-top">
                        <span className="progress-client-name">{item.name}</span>
                        <span className="progress-client-status" title="Active Execution" />
                      </div>
                      <span className="progress-client-sector">{item.sector}</span>
                      <span className="progress-client-scope">{item.scope}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </Reveal>

        {/* ================= CLIENT FEEDBACK TESTIMONIAL ================= */}
        <Reveal>
          <section className="quote wrap" aria-label="Client Feedback">
            <span
              className="eyebrow"
              style={{ display: "block", marginBottom: "16px" }}
            >
              Client Feedback
            </span>
            <blockquote>
              “We all stand to acknowledge your blind commitment and dedication.”
            </blockquote>
            <cite>
              — Sanjeev Shah, Everest Food Products Pvt. Ltd.
            </cite>
            <p className="quote-context">
              Written on the occasion of the formal inauguration of Everest’s new
              spice factory at Umbergaon, reflecting on a two-year project
              delivered from concept through to a state-of-the-art facility
              completed with precision and speed.
            </p>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
