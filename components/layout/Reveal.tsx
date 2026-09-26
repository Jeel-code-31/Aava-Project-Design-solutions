"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Reveal component with bidirectional scroll fade-in & fade-out
 */
export function Reveal({
  children,
  className = "",
  initialVisible = false,
}: {
  children: React.ReactNode
  className?: string
  initialVisible?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(initialVisible)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const rect = element.getBoundingClientRect()
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight

    if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
      setVisible(true)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      {
        threshold: 0.08,
        rootMargin: "-20px 0px -20px 0px",
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-[opacity,transform,filter] duration-700 [will-change:opacity,transform,filter] ${visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-7 opacity-[0.12] blur-[4px]"} ${className}`}
    >
      {children}
    </div>
  )
}
