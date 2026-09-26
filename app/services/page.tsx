"use client"

import { useState } from "react"
import { Footer, Header, PageIntro } from "@/components/site"

export interface ServiceItem {
  name: string
  description: string
  details: string[]
}

export const services: ServiceItem[] = [
  {
    name: "Process Design",
    description:
      "Understanding your product, recipe, and throughput before a single wall is drawn.",
    details: [
      "Preparation of process flow diagrams.",
      "Equipments specifications for process.",
      "Conceptual equipment layouts to suit the process.",
      "Preparation of P&I Diagrams.",
      "Conceptualising plant instrumentation and control schemes",
      "Process automation: Recipe management, Powder handling(IBCS, containers, autodosing), Bulk powder handling(Stirage soils, bulk containers).",
    ],
  },
  {
    name: "Electrical Design",
    description:
      "Power that's sized right the first time-and safe by design",
    details: [
      "Block-wise electrical load lists, transformer sizing, and substation design.",
      "DG sizing to cover backup power requirements.",
      "Design of Power Control Centers(PCC), Motor Control centers (MCC).",
      "Cable tray routing planned for optimum distance Hazardous area zoning across the full plot plan",
      "Earthing and lightning protection Cable schedules and tray layouts",
    ],
  },
  {
    name: "MEP Design",
    description:
      "Mechanical, electrical and plumbing- The systems that keep a plant running.",
    details: [
      "Mechanical: equipment layouts planned around men-and-material movement; layouts reviewed for equipment removal, servicing, and gravity flow; BOQ and tender documentation for fabrication, erection, insulation, and painting",
      "HVAC: design basis by area, GMP review of layout and area classification, AHU and pressure segregation, ducting and equipment routing, turnkey tender documentation for supply, installation, and commissioning",
      "Piping: line lists and pipe-routing diagrams, pipe rack requirements and routing for the full plot plan, bulk BOQ for procurement",
      "Fire & Safety: P&ID for the fire hydrant system, hydrant network design, layout of hydrants/hose boxes/extinguishers/lightning arrestors, escape routing and assembly points, detailed bill of materials",
      "Instrumentation & Automation: design and detailing of controls based on process needs; utility automation covering data acquisition, pumping system operation, heating & cooling controls, compressed air systems, boiler selection, steam systems, HVAC and refrigeration systems, Environment Monitoring Systems (EMS), and Building Management Systems (BMS)",
    ],
  },
  {
    name: "Civil & Structural Design",
    description:
      "Buildings designed around the manufacturing process — not the other way around.",
    details: [
      "Finalisation of structural load lists for design",
      "Detailed structural analysis for buildings and structures",
      "Framing plans (columns and beams) to suit architectural layouts",
      "BOQ preparation and tender documentation",
    ],
  },
  {
    name: "Plant Layout & Architecture",
    description:
      "Every square metre planned for production efficiency, logistics, and future expansion.",
    details: [
      "Overall plot planning for modular, phase-wise expansion with defined men-and-material movement",
      "Building allocation to suit hazardous zoning, statutory requirements, operational needs, and energy-efficient running costs",
      "Finalisation of building and road levels to suit storm-water drainage Elevations and 3D perspective views",
      "Construction and layout of buildings, workspace layout, utilities planning (air/water/energy/HVAC), waste disposal planning, and measures to prevent cross-contamination",
    ],
  },
  {
    name: "Project Management",
    description:
      "We stay with the project from planning and execution through to successful plant operation.",
    details: [
      "Direct supervision of site work executed by construction and MEP contractors, so work stays in conformity with specifications and the project schedule",
      "Site management covering construction sequencing, on-line supervision, and safety compliance",
      "Coordination between the client and multiple sub-contractors",
      "Procurement support: planning quotations from suppliers/sub-contractors, bid summary preparation, price and terms negotiation, and finalisation of sub-agreements and work orders",
    ],
  },
  {
    name: "Compliance & Regulatory",
    description:
      "First-pass approvals, not revision cycles.",
    details: [
      "Food safety standards built into plant design from the layout stage",
      "Statutory-norm awareness drawn from projects executed across India, incorporated directly into plant design",
      "Support for regulatory documentation and inspections (FSSAI, GMP, and equivalent international standards as applicable)",
    ],
  },
  {
    name: "Feasibility & DPR",
    description:
      "Know what you’re building and what it truly costs before you commit.",
    details: [
      "Capex estimation close to real-world costs, for better planning and cost-overrun control",
      "Evaluation of vendor inputs and correct technical assignment",
      "Assessment and selection of efficient machinery to increase productivity and reduce running costs",
      "3D layout conceptualisation with client-team review to reduce rework at the construction stage",
      "Realistic timeline assessment, with early flagging if resources are inadequate",
    ],
  },
]

export function ServiceList() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <div className="service-list">
      {services.map((item, i) => (
        <div
          className={active === i ? "service active" : "service"}
          key={item.name}
        >
          <button
            onClick={() => setActive(active === i ? null : i)}
            aria-expanded={active === i}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            <strong>{item.name}</strong>
            <b>{active === i ? "−" : "+"}</b>
          </button>

          {active === i && (
            <div className="service-detail">
              <p>{item.description}</p>
              <ul>
                {item.details.map((detail, index) => (
                  <li key={`${item.name}-${index}`}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Services() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageIntro
          eyebrow="Our disciplines"
          title="One firm. Every discipline."
          text="Most manufacturing projects fail not because of bad engineering in one discipline, but because of the gaps between disciplines-process decision that don't account for electircal loads, HVAC Designs that clash with structural beams, civil drawings that don't reflect the final equipment layout.AAVA WAS built to close those gaps. Our process, electrical MEP, and civil engineers work from the same drawings in the same co-ordination loop from day one"
        />

        <section className="services-wrap wrap">
          <ServiceList />
        </section>

        <section className="service-note wrap">
          <span className="eyebrow">The AAVA difference</span>
          <h2>
            Designed once.<br />
            <span className="accent-text">Designed right.</span>
          </h2>
          <p>
            Our process, electrical, MEP, and civil engineers work from the same
            drawings, in the same coordination loop, from day one — avoiding
            expensive rework on the plant floor.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
