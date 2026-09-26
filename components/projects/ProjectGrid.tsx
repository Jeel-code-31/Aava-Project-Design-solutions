"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight, Building2, MapPin, Search, X } from "lucide-react"
import { projects } from "./projects-data"

export function ProjectGrid() {
  const [filter, setFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filterCategories = [
    "All",
    "Food & Beverage",
    "Garment & Textile",
    "Steel & Heavy Industry",
    "Packaging",
    "Warehousing",
    "Industrial",
    "Corporate / Facility",
  ]

  // Dynamic count of projects per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length }
    for (const cat of filterCategories) {
      if (cat === "All") continue
      counts[cat] = projects.filter((p) => {
        if (cat === "Food & Beverage") return p.sector.includes("Food & Beverage")
        if (cat === "Industrial") {
          return p.sector.includes("Industrial") || p.sector.includes("Manufacturing")
        }
        return p.sector === cat
      }).length
    }
    return counts
  }, [])

  // Filtered and searched projects
  const shown = useMemo(() => {
    return projects.filter((p) => {
      // Category condition
      let matchesCategory = false
      if (filter === "All") {
        matchesCategory = true
      } else if (filter === "Food & Beverage") {
        matchesCategory = p.sector.includes("Food & Beverage")
      } else if (filter === "Industrial") {
        matchesCategory =
          p.sector.includes("Industrial") || p.sector.includes("Manufacturing")
      } else {
        matchesCategory = p.sector === filter
      }

      if (!matchesCategory) return false

      // Search query condition
      if (!searchQuery.trim()) return true
      const q = searchQuery.toLowerCase().trim()
      return (
        p.name.toLowerCase().includes(q) ||
        (p.title && p.title.toLowerCase().includes(q)) ||
        p.sector.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.text.toLowerCase().includes(q) ||
        p.tags.toLowerCase().includes(q)
      )
    })
  }, [filter, searchQuery])

  const hasActiveFilters = filter !== "All" || searchQuery.trim() !== ""

  const handleReset = () => {
    setFilter("All")
    setSearchQuery("")
  }

  return (
    <>
      <div className="project-controls wrap">
        {/* Search Bar */}
        <div className="project-search-wrapper">
          <Search className="w-4 h-4 project-search-icon" />
          <input
            type="text"
            className="project-search-input"
            placeholder="Search by client, sector, location, or discipline..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects"
          />
          {searchQuery && (
            <button
              className="project-search-clear"
              onClick={() => setSearchQuery("")}
              title="Clear search"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="filters">
          {filterCategories.map((f) => (
            <button
              className={filter === f ? "active" : ""}
              key={f}
              onClick={() => setFilter(f)}
            >
              <span>{f}</span>
              <span className="filter-count">{categoryCounts[f] ?? 0}</span>
            </button>
          ))}
        </div>

        {/* Results Status Line */}
        <div className="project-results-status">
          <span>
            Showing <strong>{shown.length}</strong> of{" "}
            <strong>{projects.length}</strong> featured projects
            {filter !== "All" && ` in ${filter}`}
          </span>
          {hasActiveFilters && (
            <button className="project-reset-btn" onClick={handleReset}>
              Reset filters
            </button>
          )}
        </div>
      </div>

      <div className="project-grid wrap">
        {shown.length === 0 ? (
          <div className="project-empty-state">
            <h3>No projects found</h3>
            <p>
              No project records matched your search criteria. Try modifying
              your keywords or{" "}
              <button
                className="project-reset-btn"
                style={{ display: "inline" }}
                onClick={handleReset}
              >
                reset filters
              </button>
              .
            </p>
          </div>
        ) : (
          shown.map((p, i) => (
            <article className="project-card" key={p.name}>
              {/* Card Header with Badges and Live Status */}
              <div>
                <div className="project-card-header">
                  <div className="project-card-badges">
                    <span className="project-card-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="project-card-sector">
                      <Building2 className="w-3.5 h-3.5 inline-block" />
                      {p.sector}
                    </span>
                    <span className="project-card-location">
                      <MapPin className="w-3.5 h-3.5 inline-block" />
                      {p.location}
                    </span>
                  </div>

                  <span className="project-status-dot">
                    <span className="pulse-dot" />
                    Completed
                  </span>
                </div>

                {/* Card Title & Content */}
                <div className="project-card-body">
                  <h3 className="project-card-title">{p.name}</h3>

                  {p.title && (
                    <div className="project-card-subtitle">
                      {p.title.includes("Paradigm Services") ? (
                        <span className="partner-badge">
                          Delivered in association with{" "}
                          <strong>Paradigm Services</strong>
                        </span>
                      ) : (
                        p.title
                      )}
                    </div>
                  )}

                  <p className="project-card-text">{p.text}</p>
                </div>
              </div>

              {/* Card Footer with Tags and Action Micro-interaction */}
              <div className="project-card-footer">
                <div className="tags">
                  {p.tags.split(" · ").map((t) => (
                    <span key={t} className="project-tag-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-card-action">
                  <span>Commissioned Facility</span>
                  <ArrowUpRight className="w-4 h-4 action-arrow" />
                </div>
              </div>

              {/* Bottom expanding accent gradient border */}
              <div className="card-hover-border" aria-hidden="true" />
            </article>
          ))
        )}
      </div>
    </>
  )
}
