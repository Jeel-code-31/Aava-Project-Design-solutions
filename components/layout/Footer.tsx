import Link from "next/link"

export function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="wrap footer">
        <div>
          <div className="footer-brand">AAVA</div>

          <p
            style={{
              fontWeight: 600,
              fontSize: "16px",
              color: "#FFF4E6",
            }}
          >
            Engineering plants.
            <br />
            Delivering results.
          </p>

          <p
            style={{
              marginTop: "14px",
              fontSize: "13.5px",
              color: "#D8C5B5",
            }}
          >
            End-to-end EPCM consultancy for Food, Garment &amp; Steel
            manufacturing — from concept to commissioned plant.
          </p>
        </div>

        <div className="footer-links">
          <span className="footer-title">Navigation</span>

          <Link href="/services">Our Disciplines</Link>
          <Link href="/projects">Selected Projects</Link>
          <Link href="/about">About AAVA</Link>
          <Link href="/contact">Get in Touch</Link>
        </div>

        <div className="footer-contact">
          <span className="footer-title">
            Contact &amp; Offices
          </span>

          <span>Flat No. 404, Shubham Residency,</span>
          <span>Sector 14, Navde, Navi Mumbai,</span>
          <span>PIN – 410208, Maharashtra, India</span>

          <a
            href="mailto:aavaproject3@gmail.com"
            style={{ marginTop: "6px" }}
          >
            aavaproject3@gmail.com
          </a>

          <a href="tel:+919426174925">
            +91 94261 74925
          </a>

          <a href="tel:+919136377797">
            +91 91363 77797
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 AAVA Project &amp; Design Solutions. All rights
            reserved.
          </span>

          <span>
            Built for better plants. Designed once, correctly.
          </span>
        </div>
      </footer>
    </div>
  )
}
