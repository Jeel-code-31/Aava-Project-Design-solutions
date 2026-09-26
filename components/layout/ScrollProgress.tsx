"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight

      if (totalHeight > 0) {
        setProgress((window.scrollY / totalHeight) * 100)
      }
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-[3px] bg-gradient-to-r from-[#b85d34] to-[#d97746] transition-[width] duration-75 ease-out"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  )
}
