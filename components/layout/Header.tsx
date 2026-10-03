"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { ScrollProgress } from "./ScrollProgress"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    const handleResize = () => {
      if (window.innerWidth > 900) setOpen(false)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <ScrollProgress />

      <div
        className={`site-header-wrapper sticky top-0 z-50 w-full border-b backdrop-blur-[16px] transition-all duration-300 ${
          scrolled
            ? "border-[#806044] bg-[#4A171D]/95 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)]"
            : "border-[#806044]/60 bg-[#4A171D]/85"
        }`}
      >
        <header className="site-header mx-auto flex min-h-[84px] w-[min(1160px,calc(100%-48px))] items-center justify-between transition-[min-height] duration-300 relative max-md:min-h-[72px] max-sm:w-[calc(100%-32px)]">
          <Link
            className="brand group flex items-center gap-2.5 sm:gap-3 text-[14px] font-bold tracking-[0.12em] text-[#FFF4E6] transition-transform duration-200 hover:-translate-y-px"
            href="/"
            onClick={() => setOpen(false)}
          >
            <span className="brand-mark grid size-9 place-items-center rounded-[5px] border-[1.5px] border-[#806044] bg-[#3D1217] font-[var(--font-display)] text-xl font-semibold tracking-normal text-[#C9A66B] shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:border-[#C9A66B] group-hover:text-[#FFF4E6] group-hover:shadow-[0_4px_14px_rgba(201,166,107,0.35)] shrink-0">
              A
            </span>

            <span className="leading-tight">
              AAVA <small className="hidden xs:inline-block text-[#D8C5B5] tracking-widest text-[8px] sm:text-[9px] font-semibold uppercase ml-1">PROJECT &amp; DESIGN SOLUTIONS</small>
            </span>
          </Link>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            type="button"
          >
            <span>{open ? "Close ✕" : "Menu ☰"}</span>
          </button>

          {/* Mobile backdrop overlay */}
          {open && (
            <div
              className="nav-mobile-backdrop"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
          )}

          <nav className={open ? "nav open" : "nav"}>
            {[
              ["About", "/about"],
              ["Services", "/services"],
              ["Projects", "/projects"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="nav-link relative px-0 py-1.5 text-[13.5px] font-medium text-[#D8C5B5] transition-colors hover:text-[#FFF4E6]"
              >
                {label}
              </Link>
            ))}

            <Link
              className="nav-cta"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="nav-cta-arrow" size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
          </nav>
        </header>
      </div>
    </>
  )
}
