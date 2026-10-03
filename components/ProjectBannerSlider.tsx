"use client"

import Image from "next/image"
import { useEffect, useState, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface BannerSlide {
  id: string
  src: string
  alt: string
}

export const bannerSlides: BannerSlide[] = [
  {
    id: "hero-plant",
    src: "/images/hero-plant.jpg",
    alt: "AAVA Industrial Plant Engineering & Commissioning",
  },
  {
    id: "textile-plant",
    src: "/images/textile-plant.jpg",
    alt: "AAVA Textile & Garment Manufacturing Facility",
  },
  {
    id: "steel-plant",
    src: "/images/steel-plant.jpg",
    alt: "AAVA Steel & Heavy Fabrication Plant Engineering",
  },
  {
    id: "spices-processing",
    src: "/images/spices-processing.jpg",
    alt: "AAVA Food & Beverage Processing Plant",
  },
  {
    id: "packaging-plant",
    src: "/images/packaging-plant.jpg",
    alt: "AAVA High-Speed Bottling & Automated Packaging Complex",
  },
]

const SLIDE_DURATION = 5000

export function ProjectBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }, [])

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      nextSlide()
    }, SLIDE_DURATION)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [nextSlide, isHovered])

  return (
    <section className="banner-slider-section full-width-banner" aria-label="Visual Project Showcase">
      <div
        className="banner-slider-card banner-clean-image-slider"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Full Image Layers - Pure Visuals, No Gradient, No Text */}
        <div className="banner-slider-media">
          {bannerSlides.map((slide, index) => {
            const isActive = index === currentIndex
            return (
              <div
                key={slide.id}
                className={`banner-slide-layer ${isActive ? "active" : ""}`}
                aria-hidden={!isActive}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1160px"
                  className="banner-image"
                />
              </div>
            )
          })}
        </div>

        {/* Minimal Navigation Arrows */}
        <button
          type="button"
          className="banner-nav-arrow banner-nav-prev"
          onClick={prevSlide}
          aria-label="Previous image slide"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        <button
          type="button"
          className="banner-nav-arrow banner-nav-next"
          onClick={nextSlide}
          aria-label="Next image slide"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>

        {/* Minimal Navigation Dots */}
        <div className="banner-dots-cluster" role="tablist" aria-label="Slide indicators">
          {bannerSlides.map((slide, idx) => {
            const isActive = idx === currentIndex
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Slide ${idx + 1}`}
                className={`banner-dot-indicator ${isActive ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}