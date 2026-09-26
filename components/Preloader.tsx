"use client"

import React, { useEffect, useState } from "react"

export function Preloader() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<"drawing" | "engineering" | "ready" | "exit" | "hidden">("drawing")

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden"

    // Stage 1: Progress counter (0 to 100%)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Smooth organic progress acceleration
        const increment = prev < 35 ? 3 : prev < 75 ? 5 : 7
        return Math.min(100, prev + increment)
      })
    }, 38)

    // Stage 2: Reveal "engineering" after cursive "aava" handwriting animation (~600ms)
    const engTimer = setTimeout(() => {
      setPhase("engineering")
    }, 600)

    // Stage 3: Ready state when progress hits 100% (~1450ms)
    const readyTimer = setTimeout(() => {
      setPhase("ready")
    }, 1450)

    // Stage 4: Exit curtain raise (~1850ms)
    const exitTimer = setTimeout(() => {
      setPhase("exit")
      document.body.style.overflow = ""
    }, 1900)

    // Stage 5: Unmount component from DOM (~2700ms)
    const hideTimer = setTimeout(() => {
      setPhase("hidden")
    }, 2750)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(engTimer)
      clearTimeout(readyTimer)
      clearTimeout(exitTimer)
      clearTimeout(hideTimer)
      document.body.style.overflow = ""
    }
  }, [])

  if (phase === "hidden") return null

  return (
    <aside
      className={`aava-preloader ${phase === "exit" ? "is-exiting" : ""}`}
      aria-label="Loading AAVA Engineering"
      role="dialog"
      aria-modal="true"
    >
      {/* Ambient Lighting & Blueprint Lines */}
      <div className="preloader-ambient-glow" aria-hidden="true"></div>
      <div className="preloader-grid-bg" aria-hidden="true">
        <div className="preloader-grid-line vertical line-1"></div>
        <div className="preloader-grid-line vertical line-2"></div>
        <div className="preloader-grid-line horizontal line-h"></div>
      </div>

      {/* Center Brand Experience */}
      <div className="preloader-center-content">
        {/* Architectural Eyebrow Tag */}
        <div className="preloader-top-tag">
          <span className="preloader-spark-mark">✦✦</span>
          {/* <span className="preloader-status-text">EPCM CONSULTANCY</span> */}
        </div>

        {/* The Stylish Cursive "aava" Signature using Brush Script MT */}
        <div className="preloader-cursive-container" aria-label="aava">
          <div className="preloader-cursive-inner">
            <span className="curly preloader-curly-brand">AAVA</span>
            <span className="preloader-spark-mark" aria-hidden="true">
              ✦
            </span>
          </div>
        </div>

        {/* Architectural Center Hairline Divider */}
        <div
          className={`preloader-divider-wrap ${phase !== "drawing" ? "is-expanded" : ""}`}
          aria-hidden="true"
        >
          <span className="preloader-divider-line"></span>
          <span className="preloader-divider-node"></span>
        </div>

        {/* "engineering" Typography Below */}
        <div className={`preloader-engineering-wrap ${phase !== "drawing" ? "is-revealed" : ""}`}>
          <span className="preloader-engineering-title">Project Design & Solutions</span>
          <span className="preloader-descriptor">PLANTS · PROCESS · EPCM</span>
        </div>
      </div>

      {/* Bottom Progress Bar & Telemetry */}
      <div className="preloader-bottom-bar">
        <div className="preloader-bar-track">
          <div
            className="preloader-bar-fill"
            style={{ width: `${progress}%` }}
            aria-hidden="true"
          ></div>
        </div>

        <div className="preloader-bottom-meta">
          <span className="preloader-meta-label">INITIALIZING WORKSPACE</span>
          <span className="preloader-counter" aria-live="polite">
            {String(progress).padStart(3, "0")}%
          </span>
        </div>
      </div>
    </aside>
  )
}
