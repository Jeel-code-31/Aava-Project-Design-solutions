import Image from "next/image"
import { Footer, Header, PageIntro } from "@/components/site"
import { PrinciplesThread } from "@/components/about/PrinciplesThread"
import { SectorsShowcase } from "@/components/about/SectorsShowcase"

export default function About() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageIntro
          eyebrow="The AAVA story"
          title="Engineering with the whole picture in mind."
          text="AAVA was built around a simple observation: clients need more than drawings. They need a partner who understands the technical depth of engineering and the practical realities of getting a plant built, approved, and running."
        />

        <section className="story wrap">
          <div className="story-aside">
            <span>Founded by</span>
            <strong>
              Avinash
              <br />
              Chandel
            </strong>
            <small>
              Educational Details: BE Electrical Engineering (BE)
              <br />
              20+ years of hands-on project execution
            </small>

            {/* Founder Leadership Portrait */}
            <div className="relative mt-6 aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] shadow-md">
              <Image
                src="/images/about-founder-engineering.jpg"
                alt="Avinash Chandel, Founder & Lead Engineer at AAVA Project & Design Solutions"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,16,0.75)] via-transparent to-transparent" />
              <span className="absolute bottom-2.5 left-2.5 right-2.5 text-center text-[10.5px] font-semibold text-white tracking-wider uppercase">
                20+ Years Execution Excellence
              </span>
            </div>
          </div>

          <div>
            <p className="large-copy">
              <strong>Briefly Our Story<br /></strong>
              AAVA Project &amp; Design Solutions was founded by Avinash Chandel,
              a BE (Electrical Engineering) graduate with more than 20 years of
              experience in project execution and industrial design.
            </p>
            <p>
              Alongside running AAVA, he serves as Associate Consultant with
              Paradigm Services Pvt. Ltd. AAVA was built around a gap seen
              repeatedly on site: clients needed more than drawings. They needed
              a partner who understood both the technical depth of industrial
              engineering and the practical realities of getting a plant built,
              approved, and running on time.
            </p>
            <p>
              Bringing together specialists across process design, electrical
              engineering, MEP systems, and civil &amp; structural work, AAVA
              offers the full engineering stack under one roof — eliminating the
              handoffs and friction that typically appear when a project is
              split across disconnected consultants.
            </p>
            <p>
              Today AAVA works primarily across Food manufacturing and Garment
              &amp; textile production, with an expanding practice in Steel
              &amp; heavy industry, packaging, and warehousing.
            </p>
          </div>
        </section>

        <section className="principles">
          <PrinciplesThread />
        </section>

        <SectorsShowcase />

        <section className="credentials wrap">
          <div className="section-label">
            <span>Credentials</span>
            <p>
              Qualified to
              <br />
              go further.
            </p>
          </div>

          <div>
            <div className="credential-item">
              <strong style={{ color: "var(--terracotta)" }}>FSSAI</strong>
              <span>
                Food Safety Supervisor Certificate of Competence (Manufacturing)
              </span>
            </div>
            <div className="credential-item">
              <strong style={{ color: "var(--terracotta)" }}>FDA / IFPTI</strong>
              <span>
                Certificate of Training, Plumbing Controls for Commercial Food Establishments
              </span>
            </div>

            {/* Food Safety & FDA Compliance Verification Photo */}
            <div className="relative mt-8 aspect-[16/9] w-full max-w-[540px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] shadow-md">
              <Image
                src="/images/credentials-compliance.jpg"
                alt="FSSAI & FDA Sanitary Plumbing & Hygiene Compliance Verification in Cleanroom"
                fill
                sizes="(max-width: 768px) 100vw, 540px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,16,0.7)] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="rounded bg-[var(--terracotta)] px-2 py-0.5 text-[10.5px] font-bold tracking-wider uppercase">
                  FSSAI &amp; FDA Certified Facility
                </span>
                <p className="mt-1 text-xs text-stone-200">
                  Plumbing controls, sanitary drainage &amp; hygiene zoning certified to global standards
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
