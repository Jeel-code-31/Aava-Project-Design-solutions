"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export interface BannerSlide {
  id: string
  client: string
  title: string
  division: string
  location: string
  sector: string
  scope: string
  image: string
  specs?: string[]
  href: string
}

export const bannerSlides: BannerSlide[] = [
  {
    id: "everest",
    client: "Everest Food Products Pvt. Ltd.",
    title: "Phase 1 & 2 Spice Processing Plant",
    division: "Turnkey Process & MEP Infrastructure",
    location: "Umbergaon & Mumbai, Gujarat / Maharashtra",
    sector: "Food & Beverage",
    scope: "End-to-end process and MEP design across two major expansion phases.",
    image: "/images/hero-plant.jpg",
    href: "/projects",
  },
  {
    id: "ashapura",
    client: "Ashapura Garments Ltd.",
    title: "Denim & Trouser Integrated Facility",
    division: "Automated Apparel & Wet Processing Plant",
    location: "India",
    sector: "Garment & Textile",
    scope: "Turnkey layout and MEP delivery covering high-speed apparel production.",
    image: "/images/textile-plant.jpg",
    href: "/projects",
  },
  {
    id: "llabdhi",
    client: "Llabdhi Metals & Suraasa Fabrication",
    title: "Heavy Structural & Metal Fabrication Facility",
    division: "High-Bay Structural & Power Distribution",
    location: "Patalganga & Taloja, Maharashtra",
    sector: "Steel & Heavy Industry",
    scope: "High-bay PEB structural engineering and heavy electrical infrastructure.",
    image: "/images/steel-plant.jpg",
    href: "/projects",
  },
  {
    id: "organic-india",
    client: "Organic India (TATA Group)",
    title: "Multi-Phase Herbal & Agro-Processing Plant",
    division: "Hygienic MEP & Civil Plant Expansion",
    location: "Rath & Barabanki, Uttar Pradesh",
    sector: "Food & Beverage / Agro",
    scope: "Multi-phase plant development including hygienic process infrastructure.",
    image: "/images/spices-processing.jpg",
    href: "/projects",
  },
  {
    id: "packaging",
    client: "Kunal Packaging & Aakash Beverages",
    title: "High-Speed Bottling & Packaging Complex",
    division: "Automated Lines & Central Utility Infrastructure",
    location: "Umbergaon & Bhiwandi, Maharashtra / Gujarat",
    sector: "Packaging & Beverages",
    scope: "Turnkey project delivery for high-speed automated bottling and packaging.",
    image: "/images/packaging-plant.jpg",
    href: "/projects",
  },
]

const SLIDE_DURATION = 5500

export function ProjectBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (bannerSlides.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerSlides.length)
    }, SLIDE_DURATION)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {bannerSlides.map((slide, index) => {
        const isActive = index === currentIndex

        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              isActive
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            }`}
          >
            {/* Background Image with Ken-Burns scale effect */}
            <div
              key={isActive ? `${slide.id}-active` : `${slide.id}-idle`}
              className={`absolute inset-0 h-full w-full transition-transform duration-[5500ms] ease-out ${
                isActive ? "scale-105 md:scale-108" : "scale-100"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        )
      })}

    </section>
  )
}