import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – Yugm Business Consulting",
  description:
    "Get in touch with Yugm Business Consulting. Reach us by phone, email, or fill out our enquiry form — we respond within 24 hours.",
};

const C = {
  navy: "#0d2b4e",
  navy2: "#163a65",
  gold: "#c8952a",
  goldLt: "#f0b940",
  bg: "#f4f7fb",
  muted: "#5a718a",
  border: "#dde4ef",
  text: "#1e2d3d",
};

const contactDetails = [
  {
    icon: "📍",
    label: "Head Office",
    lines: [
      "Navi Mumbai,",
      "Maharashtra",
      "India",
    ],
    action: null,
  },
  {
    icon: "📞",
    label: "Phone Numbers",
    lines: ["+91-7304227714"],
    action: "tel",
  },
  {
    icon: "✉️",
    label: "Email Address",
    lines: ["info@yugmbusiness.in"],
    action: "mailto",
  },
  {
    icon: "🕐",
    label: "Business Hours",
    lines: [
      "Monday – Friday: 9:00 AM – 7:00 PM",
      "Saturday: 9:00 AM – 5:00 PM",
      "Sunday: By Appointment Only",
    ],
    action: null,
  },
];

const services = [
  "DSA Loan Services",
  "HR & Business Growth Consulting",
  "Digital Marketing Services",
  "IT Services",
  "ITR Filing",
  "Share Market ITR Filing",
];

const faqs = [
  {
    q: "How quickly will you respond to my enquiry?",
    a: "We aim to respond to all enquiries within 24 hours on business days. For urgent matters, please call us directly at +91-7304227714.",
  },
  {
    q: "Is the initial consultation free?",
    a: "Yes. Our initial consultation is completely free and carries no obligation. We will understand your requirements and suggest the right service before any commitment.",
  },
  {
    q: "Can I get services if I am outside Navi Mumbai?",
    a: "Absolutely. We serve clients across Maharashtra through doorstep visits and fully online service delivery. Location is not a barrier.",
  },
  {
    q: "What documents should I keep ready before contacting you for a loan?",
    a: "For most loan enquiries, it helps to have: PAN card, Aadhaar, latest 3-month salary slips or 2-year ITR (for self-employed), bank statements, and property documents if applicable. Our team will guide you through the specific list for your loan type.",
  },
  {
    q: "Do you help with ITR for people who have traded in the stock market?",
    a: "Yes — this is one of our specializations. We handle ITR for intraday traders, F&O traders, delivery investors, and mutual fund clients, including proper carry-forward loss treatment.",
  },
  {
    q: "Can one person use multiple services from Yugm?",
    a: "Certainly. Many clients use us for ITR filing, loan assistance, and digital marketing simultaneously. We coordinate across services so you have a seamless, unified experience.",
  },
];

const quickLinks = [
  { label: "DSA Loans", href: "/services#dsa-loans" },
  { label: "ITR Filing", href: "/itr-filing" },
  { label: "Share Market ITR", href: "/itr-filing#share-market" },
  { label: "HR Consulting", href: "/services#hr-consulting" },
  { label: "Digital Marketing", href: "/services#digital-marketing" },
  { label: "IT Services", href: "/services#it-services" },
  { label: "Risk & Legal", href: "/services#risk-legal" },
  { label: "Financial Advisory", href: "/services#financial-advisory" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── BANNER ─────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.navy} 0%, #0a1e35 60%, #091929 100%)`,
          padding: "140px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 55% 70% at 80% 50%, rgba(200,149,42,.11) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <nav style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, fontSize: 13.5, color: "rgba(255,255,255,.5)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,.5)", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <span style={{ color: C.goldLt }}>Contact Us</span>
          </nav>

          <span
            style={{
              display: "inline-block",
              background: "rgba(200,149,42,.18)",
              border: "1px solid rgba(200,149,42,.35)",
              color: C.goldLt,
              fontWeight: 700,
              fontSize: 11.5,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 50,
              marginBottom: 18,
            }}
          >
            Get in Touch
          </span>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 52px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              maxWidth: 700,
              marginBottom: 18,
            }}
          >
            Let&apos;s Talk — We&apos;re{" "}
            <span style={{ color: C.goldLt }}>Here to Help</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.75,
              maxWidth: 600,
              marginBottom: 36,
            }}
          >
            Whether you have a specific question, need a service, or just want expert advice — reach out and we will get back to you within 24 hours.
          </p>

          {/* Quick contact strip */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a
              href="tel:+917304227714"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 22px",
                background: C.gold,
                color: "#fff",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              📞 +91-7304227714
            </a>
            <a
              href="mailto:info@yugmbusiness.in"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 22px",
                background: "rgba(255,255,255,.1)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              ✉️ info@yugmbusiness.in
            </a>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ───────────────────────────── */}
      <section style={{ background: C.bg, padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 60,
              alignItems: "start",
            }}
            className="contact-main-grid"
          >
            {/* Left — contact details */}
            <div>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 800,
                  color: C.navy,
                  marginBottom: 8,
                }}
              >
                Contact Information
              </h2>
              <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7, marginBottom: 36 }}>
                Reach out through any of the channels below. Our team is available Monday through Saturday to assist you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
                {contactDetails.map(({ icon, label, lines, action }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      background: "#fff",
                      border: `1px solid ${C.border}`,
                      borderRadius: 14,
                      padding: "20px 22px",
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        background: C.bg,
                        border: `1px solid ${C.border}`,
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: ".09em",
                          color: C.gold,
                          marginBottom: 5,
                        }}
                      >
                        {label}
                      </p>
                      {lines.map((line) =>
                        action === "tel" ? (
                          <a
                            key={line}
                            href={`tel:${line.replace(/[^+\d]/g, "")}`}
                            style={{
                              display: "block",
                              fontSize: 14.5,
                              color: C.text,
                              textDecoration: "none",
                              lineHeight: 1.7,
                              fontWeight: 500,
                            }}
                          >
                            {line}
                          </a>
                        ) : action === "mailto" ? (
                          <a
                            key={line}
                            href={`mailto:${line}`}
                            style={{
                              display: "block",
                              fontSize: 14.5,
                              color: C.navy,
                              textDecoration: "none",
                              fontWeight: 600,
                              lineHeight: 1.7,
                            }}
                          >
                            {line}
                          </a>
                        ) : (
                          <p
                            key={line}
                            style={{
                              fontSize: 14.5,
                              color: C.text,
                              lineHeight: 1.7,
                            }}
                          >
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick service links */}
              <div
                style={{
                  background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navy2} 100%)`,
                  borderRadius: 16,
                  padding: "28px 24px",
                  color: "#fff",
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: C.goldLt,
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    marginBottom: 16,
                  }}
                >
                  Quick Service Links
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                  }}
                >
                  {quickLinks.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,.72)",
                        textDecoration: "none",
                        padding: "7px 12px",
                        background: "rgba(255,255,255,.07)",
                        borderRadius: 8,
                        border: "1px solid rgba(255,255,255,.1)",
                        fontWeight: 500,
                      }}
                    >
                      → {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ──────────────────────────────── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(200,149,42,.14)",
                color: C.gold,
                fontWeight: 700,
                fontSize: 11.5,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: 50,
                marginBottom: 14,
              }}
            >
              After You Contact Us
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                color: C.navy,
                marginBottom: 12,
              }}
            >
              What Happens Next?
            </h2>
            <p style={{ fontSize: 16, color: C.muted, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              A simple, transparent process from your first contact to a delivered result.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
            className="next-steps-grid"
          >
            {[
              { icon: "📩", step: "1", title: "We Receive Your Enquiry", desc: "Your form submission or call is picked up by our team immediately." },
              { icon: "📞", step: "2", title: "We Call You Within 24hrs", desc: "A dedicated team member calls you to understand your needs in detail." },
              { icon: "📋", step: "3", title: "We Assess & Recommend", desc: "We evaluate your situation and recommend the right service and approach." },
              { icon: "🚀", step: "4", title: "We Begin Working", desc: "Once you agree, we start immediately — no unnecessary delays." },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: "28px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: C.navy,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    margin: "0 auto 16px",
                  }}
                >
                  {item.icon}
                </div>
                <p style={{ fontSize: 11, fontWeight: 700, color: C.gold, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>
                  Step {item.step}
                </p>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 8, lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section style={{ background: C.bg, padding: "80px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(200,149,42,.14)",
                color: C.gold,
                fontWeight: 700,
                fontSize: 11.5,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: 50,
                marginBottom: 14,
              }}
            >
              FAQs
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 34px)",
                fontWeight: 800,
                color: C.navy,
                marginBottom: 12,
              }}
            >
              Common Questions Before You Contact Us
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: "22px 26px",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: 15.5, color: C.navy, marginBottom: 10 }}>
                  {faq.q}
                </p>
                <p style={{ fontSize: 14.5, color: C.muted, lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES QUICK LIST ─────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.navy} 0%, #0a1e35 100%)`,
          padding: "64px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
            }}
            className="cta-bottom-grid"
          >
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 12, lineHeight: 1.3 }}>
                Not sure which service you need?
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,.65)", lineHeight: 1.7, marginBottom: 24 }}>
                Tell us about your situation and we will recommend the right service combination for free.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="tel:+917304227714"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 24px",
                    background: C.gold,
                    color: "#fff",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  📞 Call Us Now
                </a>
                <Link
                  href="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 24px",
                    background: "rgba(255,255,255,.1)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,.2)",
                    borderRadius: 8,
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  View All Services
                </Link>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              {services.map((s) => (
                <div
                  key={s}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.1)",
                    borderRadius: 8,
                    padding: "10px 14px",
                    fontSize: 13,
                    color: "rgba(255,255,255,.78)",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      background: C.gold,
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
