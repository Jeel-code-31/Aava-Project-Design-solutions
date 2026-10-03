"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight

      if (docHeight > 0) {
        const pct = Math.min(100, Math.max(0, Math.round((scrollY / docHeight) * 100)))
        setProgress(pct)
      }

      if (scrollY > 120) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Radius = 46.5 => Circumference = 2 * PI * 46.5 = 292.17
  const circumference = 292.17
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`aava-back-to-top ${isVisible ? "is-visible" : ""}`}
      aria-label={`Scroll to top of page, currently at ${progress}%`}
      title="Scroll to top"
    >
      <svg
        viewBox="0 0 100 100"
        className="aava-top-svg"
        aria-hidden="true"
      >
        <defs>
          {/* Gradient for progress stroke */}
          <linearGradient id="aavaProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A66B" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#E5A93C" />
          </linearGradient>

          {/* Circular path for clockwise repeating text */}
          <path
            id="aavaCircleTextPath"
            d="M 50,50 m -37.5,0 a 37.5,37.5 0 1,1 75,0 a 37.5,37.5 0 1,1 -75,0"
          />
        </defs>

        {/* Outer Dark Glassmorphic Disc */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="#330C11"
          fillOpacity="0.94"
          stroke="rgba(201, 166, 107, 0.3)"
          strokeWidth="1"
        />

        {/* Outer Track for Progress Ring */}
        <circle
          cx="50"
          cy="50"
          r="46.5"
          fill="none"
          stroke="rgba(201, 166, 107, 0.18)"
          strokeWidth="2.5"
        />

        {/* Dynamic Scroll Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r="46.5"
          fill="none"
          stroke="url(#aavaProgressGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 50 50)"
          className="aava-progress-circle"
        />

        {/* Continuous Looping Rotating Text "AAVA • AAVA • AAVA • AAVA •" */}
        <g className="aava-text-ring">
          <text className="aava-circular-text">
            <textPath
              href="#aavaCircleTextPath"
              startOffset="0%"
              textLength="235.62"
              lengthAdjust="spacing"
            >
              AAVA • AAVA • AAVA • AAVA •{" "}
            </textPath>
          </text>
        </g>

        {/* Inner Core Disc */}
        <circle
          cx="50"
          cy="50"
          r="26"
          fill="#4A171D"
          stroke="rgba(201, 166, 107, 0.35)"
          strokeWidth="1"
        />
      </svg>

      {/* Center Core Content: Up Arrow & Live Scroll Percentage */}
      <div className="aava-top-center">
        <ArrowUp className="aava-top-arrow" size={14} strokeWidth={2.5} />
        <span className="aava-top-percent">{progress}%</span>
      </div>
    </button>
  )
}
