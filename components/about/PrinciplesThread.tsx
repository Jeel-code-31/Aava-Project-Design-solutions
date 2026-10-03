"use client"

import React, { useEffect, useRef, useState } from "react"

export interface PrincipleItem {
  num: string
  title: string
  desc: string
}

export const principlesData: PrincipleItem[] = [
  {
    num: "01",
    title: "Precision over speed",
    desc: "We take the time to get the engineering right the first time. Rework on a plant floor costs far more than a careful drawing review.",
  },
  {
    num: "02",
    title: "Full-discipline coordination",
    desc: "Process, electrical, MEP, and civil work is planned together, not handed off in sequence — so clashes are caught on paper, not on site.",
  },
  {
    num: "03",
    title: "Delivery accountability",
    desc: "We stay with a project through construction supervision and commissioning. The job isn’t done when drawings are issued — it’s done when the plant runs.",
  },
  {
    num: "04",
    title: "Confidentiality & trust",
    desc: "We maintain complete confidentiality with every client, work under Non-Disclosure Agreements, and protect proprietary processes.",
  },
]

export function PrinciplesThread() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeIndices, setActiveIndices] = useState<number[]>([])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return

          const rect = containerRef.current.getBoundingClientRect()
          const windowHeight = window.innerHeight

          // Section starts illuminating when top enters 65% of viewport
          // And fully completes when bottom is at 45% of viewport
          const startTrigger = windowHeight * 0.7
          const endTrigger = windowHeight * 0.4
          const totalDistance = rect.height + (startTrigger - endTrigger)
          const currentDistance = startTrigger - rect.top

          const progress = Math.min(Math.max(currentDistance / totalDistance, 0), 1)
          setScrollProgress(progress)

          // Thresholds for each card (01 to 04)
          const thresholds = [0.1, 0.35, 0.62, 0.86]
          const activated: number[] = []

          thresholds.forEach((threshold, idx) => {
            if (progress >= threshold) {
              activated.push(idx)
            }
          })

          setActiveIndices(activated)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // initial evaluation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Dynamic thread brightness based on scroll progress:
  // Thread gets progressively brighter and glows more intensely as user scrolls down
  const threadBrightness = 1 + scrollProgress * 0.75
  const threadGlowSize = 8 + scrollProgress * 20
  const threadGlowOpacity = 0.35 + scrollProgress * 0.55

  return (
    <div className="principles-thread-section" ref={containerRef}>
      {/* Section Header */}
      <div className="principles-header-wrap">
        <div className="section-label">
          <span>How we work</span>
          <p>
            Our Working Principles.
          </p>
        </div>
      </div>

      {/* The Interactive Thread Conduit & Cards */}
      <div className="thread-timeline-wrapper">
        {/* Background thread track */}
        <div className="thread-spine-track" aria-hidden="true" />

        {/* Dynamic bright illuminated thread that extends down on scroll */}
        <div
          className="thread-spine-active"
          style={{
            height: `${Math.min(Math.max(scrollProgress * 100, 0), 100)}%`,
            filter: `brightness(${threadBrightness}) drop-shadow(0 0 ${threadGlowSize}px rgba(201, 166, 107, ${threadGlowOpacity}))`,
          }}
          aria-hidden="true"
        >
          {/* Laser Head beacon at the leading tip of the glowing thread */}
          {scrollProgress > 0.02 && (
            <div className="thread-laser-head">
              <span className="laser-core" />
              <span className="laser-pulse-ring" />
            </div>
          )}
        </div>

        {/* Timeline items list */}
        <div className="thread-items-list">
          {principlesData.map((item, index) => {
            const isActivated = activeIndices.includes(index)
            const isLeft = index % 2 === 0 // Alternate left / right on desktop

            return (
              <div
                key={item.num}
                className={`thread-row ${isLeft ? "row-left" : "row-right"} ${isActivated ? "is-activated" : "is-standby"
                  }`}
              >
                {/* Milestone Node on the thread */}
                <div
                  className={`thread-node ${isActivated ? "node-active" : ""}`}
                  aria-hidden="true"
                >
                  <div className="node-outer-ring">
                    {isActivated && <span className="node-sonar-pulse" />}
                  </div>
                  <div className="node-center-dot" />
                  <span className="node-index-label">{item.num}</span>
                </div>

                {/* Horizontal branch line connecting thread to card */}
                <div
                  className={`thread-branch-wire ${isActivated ? "branch-active" : ""
                    }`}
                  aria-hidden="true"
                />

                {/* Redesigned Architectural Card */}
                <article
                  className={`principle-thread-card ${isActivated ? "card-revealed" : "card-dimmed"
                    }`}
                >
                  {/* Precision Corner Crosshair Accents */}
                  <span className="cad-corner top-left" aria-hidden="true" />
                  <span className="cad-corner top-right" aria-hidden="true" />
                  <span className="cad-corner bottom-left" aria-hidden="true" />
                  <span className="cad-corner bottom-right" aria-hidden="true" />

                  {/* Staggered Element 1: Header with Index and Category Badge */}
                  <div className="thread-card-header reveal-step-1">
                    <div className="thread-card-badge">
                      <span className="badge-pulse-indicator" />
                      <span className="badge-number">PRINCIPLE {item.num}</span>
                    </div>
                  </div>

                  {/* Staggered Element 2: Principle Title */}
                  <h3 className="thread-card-title reveal-step-2">
                    {item.title}
                  </h3>

                  {/* Staggered Element 3: Description Paragraph */}
                  <p className="thread-card-desc reveal-step-3">
                    {item.desc}
                  </p>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
