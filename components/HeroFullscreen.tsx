"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowDown } from "lucide-react"

interface Hotspot {
  id: string
  x: number // percentage from left
  y: number // percentage from top
  title: string
  discipline: string
  description: string
}

const facilityData = {
  food: {
    title: "Food & Beverage Processing Facility",
    badge: "HYGIENIC PROCESS & MEP",
    image: "/images/hero-plant.jpg",
    specs: ["FSSAI Cleanroom Class 100k", "CIP Process Loops", "Sanitary Drainage"],
    hotspots: [
      {
        id: "f1",
        x: 62,
        y: 66,
        title: "Stainless Process Enclosures",
        discipline: "PROCESS DESIGN",
        description: "Aseptic packaging and automated batching loops engineered for zero cross-contamination.",
      },
      {
        id: "f2",
        x: 78,
        y: 28,
        title: "Overhead MEP Manifold",
        discipline: "MEP & UTILITIES",
        description: "Heavy steam, chilled water, and compressed air distribution coordinated on unified racks.",
      },
      {
        id: "f3",
        x: 88,
        y: 52,
        title: "Cleanroom Air Partitions",
        discipline: "HVAC & AIR FLOW",
        description: "Positive pressure zoning maintaining sanitary atmospheric integrity across production.",
      },
    ] as Hotspot[],
  },
  garment: {
    title: "Garment & Textile Smart Facility",
    badge: "AUTOMATED APPAREL PRODUCTION",
    image: "/images/textile-plant.jpg",
    specs: ["Assyst Bulmer Cutting Units", "Smart Overhead Conveying", "HVAC Humidity Control"],
    hotspots: [
      {
        id: "g1",
        x: 60,
        y: 72,
        title: "Automated Cutting Spreaders",
        discipline: "PROCESS LAYOUT",
        description: "Synchronized CAD/CAM fabric cutting lines with high-efficiency dust extraction.",
      },
      {
        id: "g2",
        x: 74,
        y: 38,
        title: "Smart Overhead Conveying",
        discipline: "ELECTRICAL & MEP",
        description: "Motorized production conveying lines reducing manual material transit by 45%.",
      },
      {
        id: "g3",
        x: 86,
        y: 24,
        title: "Conditioned Air Ducts",
        discipline: "HVAC & VENTILATION",
        description: "Regulated humidity & temperature control for fabric stability and high productivity.",
      },
    ] as Hotspot[],
  },
}

export function HeroFullscreen() {
  const [activeSector, setActiveSector] = useState<"food" | "garment">("food")
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null)
  const [blueprintMode, setBlueprintMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const current = facilityData[activeSector]

  useEffect(() => {
    const handleScroll = () => {
      // Buttons emerge as soon as the user starts scrolling (> 25px)
      setScrolled(window.scrollY > 25)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="hero-fullscreen" aria-label="Introduction">
      {/* 100vh Background Stitched Image */}
      <div className={`hero-fullscreen-bg-wrapper`}>
        <Image
          src={current.image}
          alt={current.title}
          fill
          priority
          sizes="100vw"
          className="hero-fullscreen-img"
        />

        {/* CAD Grid Overlay toggle */}
        {blueprintMode && (
          <div className="hero-cad-fullscreen-overlay" aria-hidden="true">
            <div className="cad-grid-lines"></div>
            <div className="cad-reticle"></div>
            <span className="cad-hud-coords">CAD COORDINATION // EPCM-360 // SCALE 1:1</span>
          </div>
        )}

        {/* Architectural Cream Gradient Scrim (preserves crisp cream readability on left, reveals photo on right) */}
        {/* <div className="hero-fullscreen-scrim" aria-hidden="true" /> */}
      </div>

      {/* Main Content Container inside 100vh */}
      <div className="wrap hero-fullscreen-content">
        <div className="hero-copy-column">
          {/* Live Consultancy Eyebrow */}
          {/* <div className="hero-eyebrow-pill">
            <span className="eyebrow-beacon"></span>
            <span className="eyebrow-text">ENGINEERING CONSULTANCY</span>
            <span className="eyebrow-sep">/</span>
            <span className="eyebrow-sub">EPCM INDIA</span>
          </div> */}

          {/* Main Headline (Zero Italics, Normal Font Style) */}
          {/* <h1 className="hero-headline">
            Engineering Plants.
            <br />
            <span className="accent-text">Delivering Results.</span>
          </h1> */}

          {/* Subheadline */}
          {/* <p className="hero-subheadline color-fade-text">
            End-to-end EPCM consultancy for Food, Garment &amp; Steel
            manufacturing — from concept to commissioned plant.
          </p> */}

          {/* Sector Switcher Tabs on the 100vh Canvas */}
          <div className="hero-facility-selector" role="tablist" aria-label="Select facility showcase">
            <button
              type="button"
              role="tab"
              aria-selected={activeSector === "food"}
              className={`facility-tab ${activeSector === "food" ? "active" : ""}`}
              onClick={() => {
                setActiveSector("food")
                setActiveHotspot(null)
              }}
            >
              <span className="tab-indicator"></span>
              <span>Food &amp; Beverage Facility</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeSector === "garment"}
              className={`facility-tab ${activeSector === "garment" ? "active" : ""}`}
              onClick={() => {
                setActiveSector("garment")
                setActiveHotspot(null)
              }}
            >
              <span className="tab-indicator"></span>
              <span>Garment &amp; Textile Plant</span>
            </button>

            <button
              type="button"
              className={`facility-cad-btn ${blueprintMode ? "active" : ""}`}
              onClick={() => setBlueprintMode(!blueprintMode)}
              title="Toggle engineering CAD grid overlay"
            >
              {blueprintMode ? "Photo View" : "CAD Overlay"}
            </button>
          </div>

          {/* =======================================================
              SCROLL-TRIGGERED ACTIONS (APPEARS WHEN USER SCROLLS)
             ======================================================= */}
          <div className="hero-action-slot">
            {/* When not scrolled yet: Animated Scroll Prompt */}
            <div
              className={`hero-scroll-cue ${scrolled ? "is-hidden" : "is-visible"}`}
              onClick={() => window.scrollTo({ top: 120, behavior: "smooth" })}
              role="button"
              tabIndex={0}
            >
              <span className="scroll-cue-pulse"></span>
              <span className="scroll-cue-text">Scroll to reveal actions &amp; explore plant</span>
              <ArrowDown className="scroll-cue-arrow" size={14} strokeWidth={2} aria-hidden="true" />
            </div>

            {/* When user scrolls: The Two Buttons Emerge */}
            <div className={`hero-scroll-buttons ${scrolled ? "is-visible" : "is-hidden"}`}>
              <Link className="button dark hero-cta-btn" href="/projects">
                <span>View Projects</span>
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </Link>
              <Link className="button outline hero-cta-btn" href="/contact">
                <span>Get in Touch</span>
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </Link>
              <span className="scroll-unlocked-badge">
                <span className="unlocked-dot"></span>
                <span>Actions unlocked</span>
              </span>
            </div>
          </div>

          {/* Specifications Chips */}
          {/* <div className="hero-specs-list" aria-label="Key Plant Engineering Specs">
            {current.specs.map((spec) => (
              <span className="hero-spec-pill" key={spec}>
                <span className="spec-check-icon">✓</span>
                <span>{spec}</span>
              </span>
            ))}
          </div> */}
        </div>

        {/* Right Side: Interactive Hotspot Inspection Pins over the 100vh Image */}
        <div className="hero-hotspots-canvas" aria-label="Interactive plant inspection checkpoints">
          {current.hotspots.map((spot) => {
            const isActive = activeHotspot?.id === spot.id
            return (
              <div
                key={spot.id}
                className={`fullscreen-hotspot-pin ${isActive ? "active" : ""}`}
                style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                onMouseEnter={() => setActiveHotspot(spot)}
                onClick={() => setActiveHotspot(isActive ? null : spot)}
              >
                <button
                  type="button"
                  className="hotspot-trigger-btn"
                  aria-label={`Inspect ${spot.title}`}
                  aria-expanded={isActive}
                >
                  <span className="hotspot-pulse-ring"></span>
                  <span className="hotspot-center-dot">✦</span>
                </button>

                {isActive && (
                  <div className="fullscreen-hotspot-tooltip" role="tooltip">
                    <span className="tooltip-tag">{spot.discipline}</span>
                    <strong className="tooltip-heading">{spot.title}</strong>
                    <p className="tooltip-body">{spot.description}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Floating Stats Bar inside 100vh */}
      <div className="hero-fullscreen-bottombar wrap">
        <div className="bottombar-metric">
          <span className="metric-number">20+</span>
          <span className="metric-title">Years Project Execution</span>
        </div>
        <div className="bottombar-sep"></div>
        <div className="bottombar-metric">
          <span className="metric-number">100%</span>
          <span className="metric-title">Single-Roof Coordination</span>
        </div>
        <div className="bottombar-sep"></div>
        <div className="bottombar-metric">
          <span className="metric-number">0</span>
          <span className="metric-title">On-Site Clashes</span>
        </div>
        <div className="bottombar-sep"></div>
        <div className="bottombar-badge">
          <span className="badge-live-dot"></span>
          <span>FSSAI &amp; FDA COMPLIANT DESIGNS</span>
        </div>
      </div>

      {/* Sticky Floating Action Bar when scrolled deeper into the site */}
      {/* <div className={`floating-scroll-dock ${scrolled ? "dock-active" : ""}`}>
        <div className="floating-dock-inner">
          <span className="dock-label">AAVA EPCM</span>
          <Link className="dock-btn dark" href="/projects">
            View Projects <span>→</span>
          </Link>
          <Link className="dock-btn outline" href="/contact">
            Get in Touch <span>→</span>
          </Link>
        </div>
      </div> */}
    </section>
  )
}
