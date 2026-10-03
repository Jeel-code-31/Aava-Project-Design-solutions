"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  return (
    <form
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      {sent ? (
        <div className="grid gap-3 border border-[var(--line)] bg-[var(--surface)] p-6 text-[var(--body-text)] shadow-[0_4px_20px_rgba(28,25,23,0.06)] rounded-lg">
          <span className="text-2xl text-[var(--terracotta)]">✓</span>

          <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--ink)]">Thank you for reaching out.</h3>

          <p className="text-[var(--muted-text)]">
            Our engineering team will review your requirements
            and be in touch shortly.
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-[13px] font-semibold text-[var(--ink)]">
              Name

              <input
                className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3.5 py-3 text-[14px] font-normal text-[var(--ink)] outline-none transition-all placeholder:text-[var(--muted-text)]/70 focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta-soft)] shadow-sm"
                required
                placeholder="Your full name"
              />
            </label>

            <label className="grid gap-2 text-[13px] font-semibold text-[var(--ink)]">
              Company

              <input
                className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3.5 py-3 text-[14px] font-normal text-[var(--ink)] outline-none transition-all placeholder:text-[var(--muted-text)]/70 focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta-soft)] shadow-sm"
                placeholder="Company or plant name"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-[13px] font-semibold text-[var(--ink)]">
              Email

              <input
                className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3.5 py-3 text-[14px] font-normal text-[var(--ink)] outline-none transition-all placeholder:text-[var(--muted-text)]/70 focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta-soft)] shadow-sm"
                required
                type="email"
                placeholder="you@company.com"
              />
            </label>

            <label className="grid gap-2 text-[13px] font-semibold text-[var(--ink)]">
              Phone

              <input
                className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3.5 py-3 text-[14px] font-normal text-[var(--ink)] outline-none transition-all placeholder:text-[var(--muted-text)]/70 focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta-soft)] shadow-sm"
                placeholder="+91 98765 43210"
              />
            </label>
          </div>

          <label className="grid gap-2 text-[13px] font-semibold text-[var(--ink)]">
            Sector

            <select className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3.5 py-3 text-[14px] font-normal text-[var(--ink)] outline-none transition-all focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta-soft)] shadow-sm" defaultValue="">
              <option value="" disabled className="bg-white text-[var(--muted-text)]">
                Select your industry sector
              </option>

              <option className="bg-white text-[var(--ink)]">Food &amp; Beverage</option>
              <option className="bg-white text-[var(--ink)]">Garment &amp; Textile</option>
              <option className="bg-white text-[var(--ink)]">Steel &amp; Heavy Industry</option>
              <option className="bg-white text-[var(--ink)]">Packaging / Warehousing</option>
              <option className="bg-white text-[var(--ink)]">Other Manufacturing</option>
            </select>
          </label>

          <label className="grid gap-2 text-[13px] font-semibold text-[var(--ink)]">
            Project brief

            <textarea
              className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3.5 py-3 text-[14px] font-normal text-[var(--ink)] outline-none transition-all placeholder:text-[var(--muted-text)]/70 focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta-soft)] shadow-sm"
              required
              rows={5}
              placeholder="Tell us about your plant, capacity, timeline, or engineering challenge..."
            />
          </label>

          <button
            className="button contact-submit-btn"
            type="submit"
          >
            <span>Send enquiry</span>
            <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </>
      )}
    </form>
  )
}
