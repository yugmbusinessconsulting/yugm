"use client";
import Link from "next/link";
import Image from "next/image";
import { Globe, Share2, Link2 } from "lucide-react";

const services = [
  { label: "Share Market ITR", href: "/share-market-itr" },
  { label: "DSA Loan Services", href: "/#services" },
  { label: "HR & Business Consulting", href: "/#services" },
  { label: "Digital Marketing", href: "/#services" },
  { label: "IT Services", href: "/#services" },
];

const taxLinks = [
  { label: "ITR Filing", href: "/itr-filing" },
  { label: "Share Market ITR", href: "/share-market-itr" },
];

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Why Choose Us", href: "/#why" },
  { label: "Client Stories", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#070f1a",
        color: "rgba(255,255,255,.65)",
        padding: "64px 0 28px",
      }}
    >
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}
      >
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 14 }}>
              <div style={{ background: "#fff", borderRadius: 8, padding: "4px 8px", flexShrink: 0 }}>
                <Image
                  src="/logo.png"
                  alt="Yugm Business Consulting"
                  width={168}
                  height={68}
                  style={{ height: 53, width: "auto", objectFit: "contain", display: "block" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                <span style={{ fontWeight: 800, fontSize: 18, color: "#fff" }}>
                  Yugm Business Consulting
                </span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Pvt. Ltd.
                </span>
              </div>
            </Link>
            <p
              style={{
                fontSize: 13.5,
                color: "rgba(255,255,255,.45)",
                lineHeight: 1.7,
                maxWidth: 280,
                marginBottom: 20,
              }}
            >
              Your trusted partner for ITR filing, financial solutions, HR
              consulting, digital marketing, IT services, and business growth
              advisory in Maharashtra.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { Icon: Globe, label: "Facebook" },
                { Icon: Share2, label: "Instagram" },
                { Icon: Link2, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: 34,
                    height: 34,
                    background: "rgba(255,255,255,.08)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,.7)",
                    textDecoration: "none",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(200,149,42,0.8)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,.7)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon style={{ width: 15, height: 15 }} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: ".1em",
                marginBottom: 18,
              }}
            >
              Services
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    style={{
                      fontSize: 13.5,
                      color: "rgba(255,255,255,.5)",
                      textDecoration: "none",
                    }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tax & Company col */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: ".1em",
                marginBottom: 18,
              }}
            >
              Tax & Advisory
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 24,
              }}
            >
              {taxLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    style={{
                      fontSize: 13.5,
                      color: "rgba(255,255,255,.5)",
                      textDecoration: "none",
                    }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: ".1em",
                marginBottom: 18,
              }}
            >
              Company
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {companyLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    style={{
                      fontSize: 13.5,
                      color: "rgba(255,255,255,.5)",
                      textDecoration: "none",
                    }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: ".1em",
                marginBottom: 18,
              }}
            >
              Contact
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <a
                href="tel:+917304227714"
                style={{
                  fontSize: 13.5,
                  color: "rgba(255,255,255,.5)",
                  textDecoration: "none",
                }}
              >
                +91-7304227714
              </a>
              <a
                href="mailto:info@yugmbusiness.in"
                style={{
                  fontSize: 13.5,
                  color: "rgba(255,255,255,.5)",
                  textDecoration: "none",
                }}
              >
                info@yugmbusiness.in
              </a>
              <p
                style={{
                  fontSize: 12.5,
                  color: "rgba(255,255,255,.32)",
                  lineHeight: 1.65,
                  marginTop: 6,
                }}
              >
                New Mumbai, Maharashtra
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.32)" }}>
            © 2024 Yugm Business Consulting. All rights reserved.
          </p>
          <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.32)" }}>
            Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  );
}
