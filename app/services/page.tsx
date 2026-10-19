"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2, ChevronDown, LayoutGrid, List, Sparkles } from "lucide-react"
import { Footer, Header, PageIntro, Reveal } from "@/components/site"

export interface ServiceItem {
  id: string
  number: string
  name: string
  subtitle: string
  description: string
  image: string
  category: string
  tags: string[]
  details: string[]
}

export const services: ServiceItem[] = [
  {
    id: "process",
    number: "01",
    name: "Process Design",
    subtitle: "Mass Balances, P&ID & Automation",
    description:
      "Understanding your product, recipe, and throughput before a single wall is drawn.",
    image: "/images/process-engineering.jpg",
    category: "Process Engineering",
    tags: ["Process Flow (PFD)", "P&ID Schematics", "Recipe Automation", "Autodosing"],
    details: [
      "Preparation of comprehensive process flow diagrams (PFD).",
      "Equipment sizing and technical specifications for process lines.",
      "Conceptual equipment layouts tailored strictly to throughput.",
      "Preparation of detailed Piping & Instrumentation Diagrams (P&ID).",
      "Conceptualising plant instrumentation and control architectures.",
      "Process automation: Recipe management, powder handling (IBCs, autodosing), bulk storage silos.",
    ],
  },
  {
    id: "electrical",
    number: "02",
    name: "Electrical Design",
    subtitle: "Substations, Panels & High-Reliability Power",
    description:
      "Power that's sized right the first time — and engineered for zero downtime.",
    image: "/images/electrical-substation.jpg",
    category: "Power & Systems",
    tags: ["HT/LT Substations", "PCC / MCC Panels", "DG Synchronization", "Earthing"],
    details: [
      "Block-wise electrical load lists, transformer sizing, and substation design.",
      "DG sizing and synchronization to ensure 100% backup power reliability.",
      "Design of Power Control Centers (PCC) and Motor Control Centers (MCC).",
      "Cable tray routing engineered for optimum distance and minimum voltage drop.",
      "Hazardous area classification and zoning across the full plot plan.",
      "Earthing pits, lightning protection grid, cable schedules, and tray layouts.",
    ],
  },
  {
    id: "mep",
    number: "03",
    name: "MEP Design",
    subtitle: "Clean Utilities, HVAC & Piping Networks",
    description:
      "Mechanical, electrical and plumbing — the vital utility systems that keep a plant running.",
    image: "/images/mep-utilities.jpg",
    category: "Mechanical & Piping",
    tags: ["Cleanroom HVAC", "Process Steam", "Fire Hydrant Networks", "BMS Controls"],
    details: [
      "Mechanical: Equipment layouts planned around unidirectional men-and-material movement.",
      "HVAC: Cleanroom design basis by area, GMP area classification, AHU and pressure segregation.",
      "Piping: Line lists, pipe rack requirements, bulk BOQ, and process steam/chilled water headers.",
      "Fire & Safety: NFPA/NBC compliant hydrant network design, hose reels, fire barriers, and escape routes.",
      "Utility Automation: Centralized BMS/EMS controls for boilers, chillers, and compressed air loops.",
    ],
  },
  {
    id: "civil",
    number: "04",
    name: "Civil & Structural Design",
    subtitle: "Heavy Foundations & PEB Framing",
    description:
      "Buildings designed around the manufacturing process — not the other way around.",
    image: "/images/civil-structural.jpg",
    category: "Structures & PEB",
    tags: ["Machine Pit Foundations", "PEB Steel Framing", "Dynamic Load Analysis", "Effluent Roads"],
    details: [
      "Finalisation of structural dynamic load lists tailored to machine specifications.",
      "Detailed structural analysis for high-load industrial buildings and structures.",
      "Column and beam framing plans coordinated with architectural machinery layouts.",
      "Heavy vibration-isolated equipment foundations, crane girders, and machine pits.",
      "Industrial effluent drainage channels, internal heavy-duty roadways, and site grading.",
    ],
  },
  {
    id: "architecture",
    number: "05",
    name: "Plant Layout & Architecture",
    subtitle: "Masterplanning & Material Flow",
    description:
      "Every square metre planned for production efficiency, logistics, and future expansion.",
    image: "/images/plant-architecture.jpg",
    category: "Masterplanning",
    tags: ["Plot Masterplan", "Unidirectional Flow", "Docking Staging", "3D Elevations"],
    details: [
      "Overall plot planning for modular, phase-wise expansion with segregated truck and personnel access.",
      "Building allocation to suit hazardous zoning, statutory fire setbacks, and green belts.",
      "Finalisation of plinth and road levels for optimal storm-water drainage; 3D perspective elevations.",
      "Workspace ergonomics, canteen and QC lab placement, and airlocks to prevent cross-contamination.",
    ],
  },
  {
    id: "pmc",
    number: "06",
    name: "Project Management",
    subtitle: "On-Site Supervision & Commissioning",
    description:
      "We stay with the project from planning and procurement through to successful plant startup.",
    image: "/images/project-management.jpg",
    category: "EPCM & Execution",
    tags: ["Site Supervision", "Vendor Techno-Commercial", "Procurement BOQ", "Commissioning"],
    details: [
      "Direct supervision of site work executed by civil, mechanical, and MEP contractors.",
      "Comprehensive site management covering construction sequencing, safety audits, and schedule tracking.",
      "Active coordination bridge between the client, architects, and multi-disciplinary contractors.",
      "Procurement advisory: Tender specifications, definitive BOQs, bid vetting, and vendor negotiations.",
    ],
  },
  {
    id: "compliance",
    number: "07",
    name: "Compliance & Regulatory",
    subtitle: "FSSAI, FDA & Statutory Approvals",
    description:
      "First-pass statutory approvals, eliminating costly design rework cycles.",
    image: "/images/compliance-regulatory.jpg",
    category: "Regulatory & Standards",
    tags: ["FSSAI Certified", "FDA Plumbing Norms", "GMP Cleanrooms", "Statutory Approvals"],
    details: [
      "Food safety standards and hygienic zoning built into plant design from the initial layout stage.",
      "Statutory awareness drawn from 20+ years of industrial project executions across Indian states.",
      "Support for regulatory documentation, drawing sign-offs, and compliance inspections (FSSAI, GMP, FDA).",
      "Environmental consent-to-establish (CTE/CTO) engineering support and hazardous area compliance.",
    ],
  },
  {
    id: "feasibility",
    number: "08",
    name: "Feasibility & DPR",
    subtitle: "CAPEX Estimation & 3D Modeling",
    description:
      "Know what you’re building and what it truly costs before you commit capital.",
    image: "/images/feasibility-dpr.jpg",
    category: "Advisory & DPR",
    tags: ["Real-World CAPEX", "Machinery Selection", "3D Layout Review", "Timeline Roadmaps"],
    details: [
      "CAPEX estimation close to real-world costs for budget control and financing readiness.",
      "Evaluation of machinery vendor inputs and correct technical assignment.",
      "Assessment of energy-efficient process equipment to lower running lifecycle costs.",
      "Interactive 3D layout conceptualisation with client review to eliminate site rework.",
      "Realistic project scheduling with early milestone flagging for critical-path procurement.",
    ],
  },
]

export function ServiceList() {
  const [active, setActive] = useState<number | null>(0)
  const [viewMode, setViewMode] = useState<"grid" | "accordion">("grid")

  return (
    <div className="w-full">
      {/* View Switcher Controls */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-5">
        <div>
          <span className="text-xs font-bold tracking-wider text-[var(--terracotta)] uppercase">
            Discipline Portfolio
          </span>
          <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[var(--ink)]">
            Explore All 8 Specialized Engineering Practices
          </h3>
        </div>

        <div className="inline-flex rounded-lg border border-[var(--line)] bg-[var(--surface-muted)] p-1">
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`inline-flex items-center gap-2 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all ${
              viewMode === "grid"
                ? "bg-[var(--terracotta)] text-white shadow-sm"
                : "text-[var(--muted-text)] hover:text-[var(--ink)]"
            }`}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            <span>Card Grid View</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("accordion")}
            className={`inline-flex items-center gap-2 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all ${
              viewMode === "accordion"
                ? "bg-[var(--terracotta)] text-white shadow-sm"
                : "text-[var(--muted-text)] hover:text-[var(--ink)]"
            }`}
          >
            <List className="h-3.5 w-3.5" />
            <span>Accordion View</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: RESPONSIVE CARD GRID VIEW (ALL IMAGES DISPLAYED PROMINENTLY) */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--terracotta)] hover:shadow-xl"
            >
              <div>
                {/* Dedicated High-Res Discipline AI Image */}
                <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-muted)]">
                  <Image
                    src={item.image}
                    alt={`${item.name} engineering by AAVA`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,16,0.7)] via-[rgba(20,18,16,0.15)] to-transparent" />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded bg-[var(--surface)]/90 px-2 py-0.5 text-[11px] font-bold tracking-wider text-[var(--ink)] backdrop-blur-sm">
                      {item.number}
                    </span>
                    <span className="rounded bg-[var(--terracotta)] px-2 py-0.5 text-[11px] font-bold tracking-wider text-white uppercase shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  <span className="absolute bottom-2.5 left-3 text-xs font-semibold text-white/90 drop-shadow-md">
                    {item.subtitle}
                  </span>
                </div>

                {/* Card Title & Description */}
                <h4 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--terracotta)]">
                  {item.name}
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--body-text)]">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-[var(--terracotta-soft)] px-2.5 py-0.5 text-[11.5px] font-medium text-[var(--terracotta)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Deliverables List */}
                <div className="mt-6 border-t border-[var(--line)] pt-4">
                  <span className="text-xs font-bold tracking-wide text-[var(--muted-text)] uppercase">
                    Core Engineering Deliverables:
                  </span>
                  <ul className="mt-3 space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[13.5px] leading-snug text-[var(--body-text)]">
                        <span className="mt-0.5 text-[var(--terracotta)] font-bold">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-4">
                <span className="text-xs text-[var(--muted-text)]">
                  Single-Roof Multi-Discipline
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-[var(--terracotta)] transition-colors hover:text-[var(--ink)] uppercase"
                >
                  <span>Request Discipline Scope</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* VIEW 2: ACCORDION VIEW WITH EMBEDDED IMAGES */}
      {viewMode === "accordion" && (
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {services.map((item, i) => (
            <div key={item.id} className="transition-colors">
              <button
                type="button"
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
                className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[var(--terracotta)]"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="font-[var(--font-heading)] text-sm font-bold text-[var(--terracotta)]">
                    {item.number}
                  </span>
                  <div>
                    <strong className="font-[var(--font-heading)] text-xl font-semibold text-[var(--ink)] md:text-2xl">
                      {item.name}
                    </strong>
                    <span className="ml-3 hidden text-xs font-medium text-[var(--muted-text)] md:inline-block">
                      — {item.subtitle}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[var(--terracotta-soft)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--terracotta)] uppercase">
                    {item.category}
                  </span>
                  <span className="text-xl font-bold text-[var(--terracotta)]">
                    {active === i ? "−" : "+"}
                  </span>
                </div>
              </button>

              {active === i && (
                <div className="pb-8 pt-2">
                  <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-start">
                    <div>
                      <p className="text-[16px] leading-relaxed text-[var(--ink)] font-medium mb-4">
                        {item.description}
                      </p>
                      
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded bg-[var(--terracotta-soft)] px-2.5 py-0.5 text-[11.5px] font-medium text-[var(--terracotta)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs font-bold tracking-wide text-[var(--muted-text)] uppercase block mb-2">
                        Deliverables Scope:
                      </span>
                      <ul className="space-y-2">
                        {item.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2.5 text-[14px] leading-relaxed text-[var(--body-text)]"
                          >
                            <span className="mt-1 text-[var(--terracotta)] font-bold text-xs">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[var(--line)] shadow-md">
                      <Image
                        src={item.image}
                        alt={`${item.name} industrial discipline`}
                        fill
                        sizes="(max-width: 768px) 100vw, 480px"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,16,0.7)] via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="rounded bg-[var(--terracotta)] px-2 py-0.5 text-[10.5px] font-bold tracking-wider uppercase">
                          {item.name} Scope
                        </span>
                        <p className="mt-1 text-xs text-stone-200">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Services() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageIntro
          eyebrow="Our disciplines"
          title="One firm. Every discipline."
          text="Most manufacturing projects fail not because of bad engineering in one discipline, but because of the gaps between disciplines — process decisions that don't account for electrical loads, HVAC designs that clash with structural beams, civil drawings that don't reflect the final equipment layout. AAVA was built to close those gaps. Our process, electrical, MEP, and civil engineers work from the same drawings in the same coordination loop from day one."
        />

        {/* ================= ALL 8 SERVICES WITH RELEVANT IMAGES & RESPONSIVE LAYOUT ================= */}
        <section className="services-wrap wrap pb-20">
          <ServiceList />
        </section>

        {/* ================= THE AAVA DIFFERENCE WITH 3D BIM COORDINATION VISUAL ================= */}
        <Reveal>
          <section className="service-note wrap" aria-label="The AAVA Difference">
            <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
              <div>
                <span className="eyebrow">The AAVA difference</span>
                <h2>
                  Designed once.<br />
                  <span className="accent-text">Designed right.</span>
                </h2>
                <p className="mt-4 text-[15.5px] leading-relaxed text-[var(--body-text)]">
                  Our process, electrical, MEP, and civil engineers work from the same
                  drawings, in the same coordination loop, from day one — avoiding
                  expensive rework on the plant floor.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded bg-[var(--terracotta-soft)] px-3 py-1 text-xs font-semibold text-[var(--terracotta)]">
                    Zero Spatial Clashes
                  </span>
                  <span className="rounded bg-[var(--terracotta-soft)] px-3 py-1 text-xs font-semibold text-[var(--terracotta)]">
                    Unified 3D BIM Routing
                  </span>
                  <span className="rounded bg-[var(--terracotta-soft)] px-3 py-1 text-xs font-semibold text-[var(--terracotta)]">
                    Turnkey Handoff
                  </span>
                </div>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[var(--line)] shadow-lg">
                <Image
                  src="/images/services-bim-overview.jpg"
                  alt="AAVA 3D BIM Digital Twin Multi-Discipline Engineering Model"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,16,0.75)] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="rounded bg-[var(--terracotta)] px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                    Digital Twin 3D BIM Coordination
                  </span>
                  <p className="mt-1 text-xs text-stone-200">
                    Synchronized HVAC, piping headers, cable trays &amp; structural steel
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
