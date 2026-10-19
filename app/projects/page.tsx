import Image from "next/image"
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

        {/* ================= CURRENTLY IN PROGRESS SECTION WITH ON-SITE ERECTION PHOTO ================= */}
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

                  {/* Active Construction & Commissioning Photo */}
                  <div className="relative mt-6 aspect-[16/10] w-full max-w-[480px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] shadow-md">
                    <Image
                      src="/images/projects-live-progress.jpg"
                      alt="Active Turnkey Industrial Plant Erection and MEP Commissioning"
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,16,0.7)] via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="rounded bg-[var(--terracotta)] px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                        Active Site Supervision
                      </span>
                      <p className="mt-1 text-xs text-stone-200">
                        Multi-disciplinary on-site commissioning and contractor coordination
                      </p>
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

        {/* ================= CLIENT FEEDBACK TESTIMONIAL WITH EVEREST UMBERGAON FACTORY PHOTO ================= */}
        <Reveal>
          <section className="quote wrap" aria-label="Client Feedback">
            <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-center">
              <div>
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
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] shadow-lg">
                <Image
                  src="/images/projects-everest-inauguration.jpg"
                  alt="Everest Food Products Umbergaon Spice Complex Formal Inauguration"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,16,0.7)] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="rounded bg-[var(--terracotta)] px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                    Umbergaon Spice Complex
                  </span>
                  <p className="mt-1 text-xs text-stone-200">
                    Turnkey execution delivered on schedule from concept to commercial commissioning
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
