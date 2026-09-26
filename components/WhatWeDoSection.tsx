"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { ArrowLink } from "@/components/site"

interface DisciplineItem {
  id: string
  number: string
  title: string
  shortCategory: string
  headline: string
  deliverables: string[]
  sectors: string
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement
}

const disciplines: DisciplineItem[] = [
  {
    id: "process",
    number: "01",
    title: "Process & Plant Design",
    shortCategory: "Process Flow",
    headline:
      "Hygienic equipment layout, mass balances, and regulatory process flow designed before a single wall is raised.",
    deliverables: [
      "Process Flow (PFD) & P&ID",
      "Equipment Sizing & Specs",
      "Hygienic Zoning & CIP Loops",
      "FSSAI & Regulatory Compliance",
    ],
    sectors: "Food, Beverage & Agrochemicals",
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: "electrical",
    number: "02",
    title: "Electrical & Power Systems",
    shortCategory: "HT / LT Power",
    headline:
      "High-reliability power distribution engineered for zero downtime, balanced harmonics, and peak energy efficiency.",
    deliverables: [
      "Substation & Transformer Yard",
      "HT/LT Panel & MCC Schematics",
      "DG Sync & Harmonic Mitigation",
      "Factory Cable Routing & Earthing",
    ],
    sectors: "Continuous 24/7 Manufacturing",
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "mep",
    number: "03",
    title: "Mechanical & Process MEP",
    shortCategory: "Clean Utilities",
    headline:
      "Integrated steam, piping, compressed air, and specialized ventilation designed to eliminate on-site spatial clashes.",
    deliverables: [
      "Process Steam & Boiler Systems",
      "Cleanroom & Factory HVAC",
      "Compressed Air & Gas Loops",
      "Hydrant & Fire Protection",
    ],
    sectors: "Textile, Food & Chemical Plants",
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 12h.01" />
        <path d="M17 12h.01" />
        <path d="M7 12h.01" />
        <path d="M6 2v4" />
        <path d="M18 2v4" />
        <path d="M6 18v4" />
        <path d="M18 18v4" />
      </svg>
    ),
  },
  {
    id: "civil",
    number: "04",
    title: "Civil & Structural Design",
    shortCategory: "Structures & PEB",
    headline:
      "High-load industrial foundations and PEB structural framing built specifically around heavy machinery specs.",
    deliverables: [
      "Heavy Machine Foundations & Pits",
      "Pre-Engineered Building (PEB) Design",
      "Dynamic Load & Crane Calculations",
      "Effluent Drainage & Roadways",
    ],
    sectors: "Heavy Industry & Fabrication",
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
        <path d="M9 3v18" />
        <path d="M15 3v18" />
      </svg>
    ),
  },
  {
    id: "architecture",
    number: "05",
    title: "Plant Architecture & Masterplanning",
    shortCategory: "Flow & Zoning",
    headline:
      "Strategic layout planning that streamlines raw material arrival, process routing, dispatch logistics, and expansion.",
    deliverables: [
      "Comprehensive Master Site Layout",
      "Unidirectional Material & Man Flow",
      "Admin, Quality Lab & Canteen Planning",
      "Statutory Greenery & Fire Setbacks",
    ],
    sectors: "Industrial Greenfield & Expansion",
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9h1" />
        <path d="M9 13h1" />
        <path d="M9 17h1" />
      </svg>
    ),
  },
  {
    id: "epcm",
    number: "06",
    title: "Turnkey EPCM & Execution",
    shortCategory: "Single Accountability",
    headline:
      "End-to-end procurement advisory, vendor techno-commercial vetting, on-site supervision, and commissioning handoff.",
    deliverables: [
      "Tender Specifications & Precise BOQs",
      "Vendor Techno-Commercial Vetting",
      "Single-Roof On-Site Coordination",
      "Commissioning & Regulatory Sign-off",
    ],
    sectors: "Turnkey Industrial Plants",
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
]

const lifecycleStages = [
  {
    step: "01",
    phase: "Concept & DPR",
    desc: "Feasibility studies, throughput modeling & statutory framework",
  },
  {
    step: "02",
    phase: "Multi-Discipline Engineering",
    desc: "Integrated 3D design across process, electrical, MEP & civil",
  },
  {
    step: "03",
    phase: "Procurement & Tenders",
    desc: "Definitive BOQs, tender packaging & unbiased vendor evaluations",
  },
  {
    step: "04",
    phase: "Commissioning & Plant Handover",
    desc: "Site supervision, trial runs & smooth commercial startup",
  },
]

export function WhatWeDoSection() {
  const [activeDiscipline, setActiveDiscipline] = useState<string | null>(null)

  return (
    <section className="what-section-container wrap" aria-label="What We Do">
      {/* Top Header Grid */}
      <div className="what-header-grid">
        <div className="what-header-label">
          <div className="what-eyebrow-pill">
            <span className="what-eyebrow-beacon"></span>
            <span className="what-eyebrow-text">WHAT WE DO</span>
            <span className="what-eyebrow-sep">/</span>
            <span className="what-eyebrow-sub">EPCM CONSULTANCY</span>
          </div>

          <h2 className="what-main-title">
            One team.
            <br />
            <span className="accent-text">Every discipline.</span>
          </h2>
          <p className="what-main-subtitle">
            From concept to running plant — eliminating engineering silos so
            facilities are designed once, correctly, without on-site clashes.
          </p>
        </div>

        {/* Narrative & Metrics */}
        <div className="what-header-narrative">
          <p className="what-lead-copy">
            AAVA Project &amp; Design Solutions is an integrated EPCM
            consultancy built to capitalize on India’s industrial growth. We
            synchronize process, electrical, MEP, civil, and structural
            engineering under one roof.
          </p>
          <p className="what-sub-copy color-fade-text">
            Most industrial facilities suffer from misaligned contractors and
            design clashes that delay startups and inflate CAPEX. By housing
            all design and management disciplines together, we ensure complete
            spatial and operational harmony before construction begins.
          </p>

          <div className="what-quick-stats">
            <div className="what-stat-item">
              <span className="what-stat-number">6+</span>
              <span className="what-stat-caption">Disciplines Under One Roof</span>
            </div>
            <div className="what-stat-divider"></div>
            <div className="what-stat-item">
              <span className="what-stat-number">Zero</span>
              <span className="what-stat-caption">Cross-Discipline Site Clashes</span>
            </div>
            <div className="what-stat-divider"></div>
            <div className="what-stat-item">
              <span className="what-stat-number">Turnkey</span>
              <span className="what-stat-caption">Accountability from Day 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Stage EPCM Lifecycle Timeline */}
      <div className="what-lifecycle-strip">
        <div className="what-lifecycle-header">
          <span className="what-lifecycle-tag">THE EPCM DELIVERY BLUEPRINT</span>
          <span className="what-lifecycle-sub">
            How we translate your investment into a commissioned plant
          </span>
        </div>

        <div className="what-lifecycle-grid">
          {lifecycleStages.map((stage, idx) => (
            <div className="what-lifecycle-card" key={stage.step}>
              <div className="what-lifecycle-step-top">
                <span className="what-lifecycle-num">{stage.step}</span>
                {idx < lifecycleStages.length - 1 && (
                  <ArrowRight className="what-lifecycle-arrow" size={14} strokeWidth={2} aria-hidden="true" />
                )}
              </div>
              <h4 className="what-lifecycle-title">{stage.phase}</h4>
              <p className="what-lifecycle-desc">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modern 6-Discipline Capability Cards Grid */}
      <div className="what-disciplines-wrapper">
        <div className="what-disciplines-topbar">
          <div>
            <span className="what-disciplines-badge">CORE CAPABILITIES</span>
            <h3 className="what-disciplines-heading">
              Integrated Multi-Disciplinary Engineering
            </h3>
          </div>
          <div className="what-disciplines-actions">
            <Link className="what-action-btn dark" href="/services">
              <span>View Detailed Scope of Work</span>
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="what-disciplines-grid">
          {disciplines.map((item) => {
            const Icon = item.icon
            const isHovered = activeDiscipline === item.id

            return (
              <article
                className={`what-discipline-card ${isHovered ? "is-focused" : ""}`}
                key={item.id}
                onMouseEnter={() => setActiveDiscipline(item.id)}
                onMouseLeave={() => setActiveDiscipline(null)}
              >
                <div className="what-card-header">
                  <div className="what-card-badges">
                    <span className="what-card-num">{item.number}</span>
                    <span className="what-card-category">{item.shortCategory}</span>
                  </div>
                  <div className="what-card-icon-wrap">
                    <Icon className="what-card-icon" />
                  </div>
                </div>

                <div className="what-card-body">
                  <h4 className="what-card-title">{item.title}</h4>
                  <p className="what-card-headline">{item.headline}</p>

                  <div className="what-card-deliverables">
                    <span className="what-deliverables-heading">
                      Key Deliverables:
                    </span>
                    <ul className="what-deliverables-list">
                      {item.deliverables.map((deliv) => (
                        <li key={deliv}>
                          <span className="what-check-icon">✓</span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="what-card-footer">
                  <div className="what-card-sectors">
                    <span className="what-sector-label">Focus:</span>
                    <span className="what-sector-value">{item.sectors}</span>
                  </div>
                  <Link
                    href="/services"
                    className="what-card-link"
                    aria-label={`Learn more about ${item.title}`}
                  >
                    <span>Discipline Specs</span>
                    <ArrowUpRight className="what-link-arrow" size={14} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="what-bottom-banner">
        <div className="what-bottom-content">
          <h4>Have a plant expansion or greenfield manufacturing project in mind?</h4>
          <p>
            Connect with our engineering leads to review your throughput, layout
            drawings, or preliminary project reports.
          </p>
        </div>
        <div className="what-bottom-actions">
          <Link className="what-cta-primary" href="/contact">
            <span>Start a Conversation</span>
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
          </Link>
          <ArrowLink href="/about">Learn our single-roof methodology</ArrowLink>
        </div>
      </div>
    </section>
  )
}
