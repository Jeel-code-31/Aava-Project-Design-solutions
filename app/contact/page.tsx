import { ContactForm, Footer, Header, PageIntro } from "@/components/site"

export default function Contact() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageIntro
          eyebrow="Start a conversation"
          title="Have a Project in Mind?"
          text="Tell us about your plant, your capacity goals, your timeline, or your engineering challenge — we’ll get back to you."
        />

        <section className="contact wrap">
          <div className="contact-info">
            <span className="accent-text">AAVA Project & Design Solutions</span>
            <h2>
              Let&apos;s make<br />
              <span className="accent-text">it work.</span>
            </h2>
            <p>
              Flat No. 404, Shubham Residency,
              <br />
              Sector 14, Navde, Navi Mumbai,
              <br />
              PIN – 410208, Maharashtra, India
            </p>
            <a href="mailto:aavaproject3@gmail.com">aavaproject3@gmail.com</a>
            <a href="tel:+919426174925">+91 94261 74925</a>
            <a href="tel:+919136377797">+91 91363 77797</a>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  )
}
