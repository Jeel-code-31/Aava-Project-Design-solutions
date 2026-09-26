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
        <div className="grid gap-3 border border-[#b85d34]/30 bg-[#b85d34]/[0.06] p-6 text-[#242d35]">
          <span className="text-2xl text-[#b85d34]">✓</span>

          <h3 className="font-[var(--font-display)] text-xl font-semibold text-[#141a1e]">Thank you for reaching out.</h3>

          <p>
            Our engineering team will review your requirements
            and be in touch shortly.
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-[13px] font-semibold text-[#141a1e]">
              Name

              <input
                className="border border-[#e2dbd0] bg-white px-3 py-3 text-[14px] font-normal outline-none transition-colors placeholder:text-[#48545f]/70 focus:border-[#b85d34]"
                required
                placeholder="Your full name"
              />
            </label>

            <label className="grid gap-2 text-[13px] font-semibold text-[#141a1e]">
              Company

              <input
                className="border border-[#e2dbd0] bg-white px-3 py-3 text-[14px] font-normal outline-none transition-colors placeholder:text-[#48545f]/70 focus:border-[#b85d34]"
                placeholder="Company or plant name"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-[13px] font-semibold text-[#141a1e]">
              Email

              <input
                className="border border-[#e2dbd0] bg-white px-3 py-3 text-[14px] font-normal outline-none transition-colors placeholder:text-[#48545f]/70 focus:border-[#b85d34]"
                required
                type="email"
                placeholder="you@company.com"
              />
            </label>

            <label className="grid gap-2 text-[13px] font-semibold text-[#141a1e]">
              Phone

              <input
                className="border border-[#e2dbd0] bg-white px-3 py-3 text-[14px] font-normal outline-none transition-colors placeholder:text-[#48545f]/70 focus:border-[#b85d34]"
                placeholder="+91 98765 43210"
              />
            </label>
          </div>

          <label className="grid gap-2 text-[13px] font-semibold text-[#141a1e]">
            Sector

            <select className="border border-[#e2dbd0] bg-white px-3 py-3 text-[14px] font-normal outline-none transition-colors focus:border-[#b85d34]" defaultValue="">
              <option value="" disabled>
                Select your industry sector
              </option>

              <option>Food &amp; Beverage</option>
              <option>Garment &amp; Textile</option>
              <option>Steel &amp; Heavy Industry</option>
              <option>Packaging / Warehousing</option>
              <option>Other Manufacturing</option>
            </select>
          </label>

          <label className="grid gap-2 text-[13px] font-semibold text-[#141a1e]">
            Project brief

            <textarea
              className="border border-[#e2dbd0] bg-white px-3 py-3 text-[14px] font-normal outline-none transition-colors placeholder:text-[#48545f]/70 focus:border-[#b85d34]"
              required
              rows={5}
              placeholder="Tell us about your plant, capacity, timeline, or engineering challenge..."
            />
          </label>

          <button
            className="inline-flex w-fit items-center gap-2 bg-[#141a1e] px-5 py-3 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            type="submit"
          >
            <span>Send enquiry</span>
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
          </button>
        </>
      )}
    </form>
  )
}
