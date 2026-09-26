"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Factory, Shirt, UtensilsCrossed, PackageOpen, ArrowUpRight, House } from "lucide-react"

interface SectorData {
  id: string
  code: string
  title: string
  subtitle: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  stats: { label: string; value: string }
  deliverables: string[]
  standards: string[]
  featuredPlant: string
}

const sectors: SectorData[] = [
  {
    id: "food",
    code: "SEC-01",
    title: "Food & Beverage Manufacturing",
    subtitle: "Hygienic Process, Cleanroom Zoning & FDA/FSSAI Compliance",
    description:
      "Engineered from raw material intake to sterile packaging. We specialize in gravity-assisted process flows, automated autodosing recipe systems, and hygienic utility design.",
    icon: UtensilsCrossed,
    stats: { label: "Standard", value: "FSSAI / FDA" },
    deliverables: [
      "Milk & Milk Products, Indian Seets & savouries",
      "RTS beverages (Frozen & retort & Aseptic)",
      "RTC instant Mixes & pastes, pickles & chutneys",
      "Spices & sesoning, food ingredients(Sugar & tea), beverages(Fruits & CSDs) ",
    ],
    standards: ["FSSAI Certified", "GMP Hygiene Zoning", "CIP/SIP Automation"],
    featuredPlant: "Ready-to-eat snacks, dairy processing, spices & confectionery",
  },
  {
    id: "textile",
    code: "SEC-02",
    title: "Garment & Textile Production",
    subtitle: "High-Efficiency Sewing Floors, Wet Processing & ETP Design",
    description:
      "Integrated textile mill planning combining cutting units, automated overhead material handling, high-capacity steam distribution, and zero-liquid-discharge (ZLD) plants.",
    icon: Shirt,
    stats: { label: "Efficiency", value: "Smart Conveying" },
    deliverables: [
      "Men's Wear & ladies Wear",
      "furnishing, denims wet & dry producessing",
    ],
    standards: ["Zero Liquid Discharge", "Steam Heat Recovery", "Smart Conveyor Lines"],
    featuredPlant: "Export denim manufacturing, wet washing units & garment finishing",
  },
  {
    id: "steel",
    code: "SEC-03",
    title: "Steel & Heavy Engineering",
    subtitle: "Heavy Dynamic Load Framing, High-KVA Power & Process Ducts",
    description:
      "Heavy industrial facilities designed around crane bay capacities, furnace fume extraction, high-voltage substations, and robust structural steel framing.",
    icon: Factory,
    stats: { label: "Payload", value: "Heavy Crane Bays" },
    deliverables: [
      "Process Flow",
      "Electrical and Structural engineering",
      "Metal Fabrication Facilities",
    ],
    standards: ["IS Structural Codes", "Class 1 / Div 2 Zoning", "High-KVA Substations"],
    featuredPlant: "Tube rolling mills, metal fabrication plants & precision casting",
  },
  {
    id: "packaging",
    code: "SEC-04",
    title: "Packaging & Logistics Warehousing",
    subtitle: "ASRS Integration, Superflat Floors & Multi-Bay Freight Staging",
    description:
      "Turnkey logistics architecture focused on maximum volumetric storage, rapid truck docking turnaround, FM Global fire compliance, and modular phase-wise expansion.",
    icon: PackageOpen,
    stats: { label: "Logistics", value: "Modular ASRS" },
    deliverables: [
      "Placstics",
      "Laminates",
      "Industrial Gases",
      "Paper",
    ],
    standards: ["FM Global / NFPA", "Superflat Concrete", "Dock Optimization"],
    featuredPlant: "Cold storage hubs, corrugated carton units & distribution parks",
  },
  {
    id: "Wearhousing",
    code: "SEC-05",
    title: "Housing & Warehousing",
    subtitle: "ASRS Integration, Superflat Floors & Multi-Bay Freight Staging",
    description:
      "Turnkey logistics architecture focused on maximum volumetric storage, rapid truck docking turnaround, FM Global fire compliance, and modular phase-wise expansion.",
    icon: House,
    stats: { label: "Logistics", value: "Modular ASRS" },
    deliverables: [
      "General Wearhousing",
      "Cold Storage",
    ],
    standards: ["FM Global / NFPA", "Superflat Concrete", "Dock Optimization"],
    featuredPlant: "Cold storage hubs, corrugated carton units & distribution parks",
  },
]

export function SectorsShowcase() {
  const [activeSector, setActiveSector] = useState<SectorData>(sectors[0])

  return (
    <section className="sectors-creative-section" aria-label="Sectors We Serve">
      <div className="wrap">
        {/* Section Header */}
        <div className="sectors-head-bar">
          <div className="section-label">
            <span>Sectors We Serve</span>
          </div>
          <div className="sectors-head-copy">
            <p>
              Every industry comes with distinct process chemistry, hygiene thresholds,
              structural loads, and statutory authorities. Explore our specialized practice areas below.
            </p>
          </div>
        </div>

        {/* Interactive Sector Switcher & Blueprint Hub */}
        <div className="sectors-interactive-deck">
          {/* Left Column: Sector Navigation Cards */}
          <div className="sector-nav-rail">
            {sectors.map((sec, index) => {
              const isSelected = activeSector.id === sec.id
              const IconComp = sec.icon

              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setActiveSector(sec)}
                  className={`sector-nav-card ${isSelected ? "is-selected" : ""}`}
                >
                  <div className="sector-nav-header">
                    <span className="sector-code-badge">{sec.code}</span>
                    <span className="sector-tag-pill">{sec.stats.value}</span>
                  </div>

                  <div className="sector-nav-body">
                    <div className="sector-icon-wrap">
                      <IconComp className="sector-svg-icon" />
                    </div>
                    <div className="sector-nav-title-group">
                      <h4>{sec.title}</h4>
                    </div>
                  </div>

                  <div className="sector-nav-footer">
                    <span className="sector-selection-indicator">
                      {isSelected ? "Active Discipline Blueprint" : "Click to view blueprint"}
                    </span>
                    <ArrowUpRight className="sector-arrow-icon" />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column: Active Sector Blueprint Detail Pane */}
          <div className="sector-detail-display">
            {/* Architectural CAD frame markers */}
            <span className="cad-corner top-left" aria-hidden="true" />
            <span className="cad-corner top-right" aria-hidden="true" />
            <span className="cad-corner bottom-left" aria-hidden="true" />
            <span className="cad-corner bottom-right" aria-hidden="true" />

            <div className="sector-detail-header">
              <div className="sector-detail-meta" />
              <h3 className="sector-detail-title">{activeSector.title}</h3>
            </div>

            <ul className="deliverables-list">
              {activeSector.deliverables.map((item, idx) => (
                <li key={idx}>
                  <span className="item-bullet">0{idx + 1}</span>
                  <span className="item-text">{item}</span>
                </li>
              ))}
            </ul>

            <div className="sector-detail-action" style={{ marginTop: "6px" }}>
              <Link href="/services" className="sector-explore-btn">
                <span>Explore full discipline</span>
                <ArrowUpRight className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
