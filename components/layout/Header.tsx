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

    handleScroll()

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <ScrollProgress />

      <div className={`sticky top-0 z-50 w-full border-b backdrop-blur-[14px] transition-all duration-300 ${scrolled ? "border-[#e2dbd0] bg-[#faf7f2]/95 shadow-[0_4px_24px_-4px_rgba(20,26,30,0.06)]" : "border-[#e2dbd0]/60 bg-[#faf7f2]/80"}`}>
        <header className="mx-auto flex min-h-[84px] w-[min(1160px,calc(100%-48px))] items-center justify-between transition-[min-height] duration-300 md:min-h-[72px]">
          <Link className="group flex items-center gap-3 text-[14px] font-bold tracking-[0.12em] text-[#141a1e] transition-transform duration-200 hover:-translate-y-px" href="/">
            <span className="grid size-9 place-items-center rounded-[5px] border-[1.5px] border-[#141a1e] bg-white font-[var(--font-display)] text-xl font-semibold tracking-normal shadow-[0_2px_6px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:rotate-[-3deg] group-hover:scale-105 group-hover:border-[#b85d34] group-hover:text-[#b85d34] group-hover:shadow-[0_4px_14px_rgba(184,93,52,0.22)]">A</span>

            <span>
              AAVA <small>PROJECT & DESIGN SOLUTIONS</small>
            </span>
          </Link>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>

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
                className="relative px-0 py-1.5 text-[13.5px] font-medium text-[#48545f] transition-colors hover:text-[#141a1e]"
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
