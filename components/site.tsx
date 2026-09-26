/**
 * Unified exports for AAVA components and data.
 * Components are organized into their respective folders:
 * - Layout: components/layout/ (Header, Footer, ScrollProgress, Reveal, PageIntro)
 * - UI: components/ui/ (ArrowLink, button)
 * - Projects: components/projects/ (ProjectGrid, projects data)
 * - Contact: components/contact/ (ContactForm)
 * - Services: app/services/page.tsx (ServiceList and services content)
 */

export * from "./layout/ScrollProgress"
export * from "./layout/Reveal"
export * from "./layout/Header"
export * from "./layout/Footer"
export * from "./layout/PageIntro"
export * from "./ui/ArrowLink"
export * from "./projects/projects-data"
export * from "./projects/ProjectGrid"
export * from "./contact/ContactForm"
export { ServiceList, services } from "@/app/services/page"
