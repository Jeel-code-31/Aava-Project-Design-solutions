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
          </div>

          <div>
            <p className="large-copy">
              <strong>Breifly Our Stroy<br /></strong>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
