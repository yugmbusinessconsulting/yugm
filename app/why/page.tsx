import type { Metadata } from "next";
import Link from "next/link";
import {
  Target, Building2, Zap, Briefcase, Lock, MapPin, Banknote, Phone,
  MessageSquare, Search, PenTool, Settings, CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us – Yugm Business Consulting",
  description:
    "Discover why hundreds of individuals and businesses across Maharashtra trust Yugm Business Consulting — our process, commitments, partnerships, and proven track record.",
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

const reasons = [
  {
    Icon: Target,
    title: "Personalized, Customized Solutions",
    desc: "We never offer cookie-cutter packages. Every client's financial situation, business context, and goals are unique — so our solutions are too. Before recommending anything, we take the time to deeply understand your profile, challenges, and objectives.",
    points: [
      "Individual financial assessment before every engagement",
      "Service recommendations aligned to your specific goals",
      "Flexible engagement models — one-time or ongoing",
      "Solutions that scale as your needs evolve",
    ],
  },
  {
    Icon: Building2,
    title: "20+ Bank & NBFC Partnerships",
    desc: "Our multi-lender network is one of our strongest assets. Instead of being tied to one or two banks, we work with 20+ leading financial institutions — giving you access to the most competitive rates, terms, and approval chances.",
    points: [
      "Access to PSU banks, private banks, and NBFCs",
      "Comparison of offers from multiple lenders",
      "Faster approvals through established relationships",
      "Higher loan amounts and better LTV ratios",
    ],
  },
  {
    Icon: Zap,
    title: "Fast & Completely Hassle-Free Process",
    desc: "We handle all the heavy lifting — from collecting documents to following up with banks and filing with the tax department. You stay informed and in control, without being overwhelmed by the process.",
    points: [
      "Complete end-to-end process management",
      "Digital document collection and submission",
      "Regular status updates throughout the process",
      "Dedicated point of contact for every client",
    ],
  },
  {
    Icon: Briefcase,
    title: "Expert, Multi-Domain Team",
    desc: "Our team combines expertise across finance, taxation, HR, digital marketing, IT, and legal domains. Instead of coordinating between multiple agencies, you get all the expertise you need under one roof.",
    points: [
      "Domain specialists, not generalists",
      "Cross-functional collaboration for complex needs",
      "Ongoing training and certification in each vertical",
      "Direct access to senior experts — no junior-only handling",
    ],
  },
  {
    Icon: Lock,
    title: "Complete Confidentiality & Data Security",
    desc: "Your financial records, business data, and personal information are handled with the highest standards of privacy and discretion. We never share, sell, or misuse client information.",
    points: [
      "Strict non-disclosure practices across all engagements",
      "Secure handling of financial and personal documents",
      "Data used solely for delivering your requested service",
      "Team bound by professional confidentiality obligations",
    ],
  },
  {
    Icon: MapPin,
    title: "Doorstep & Online Service Delivery",
    desc: "We bring our services to you — not the other way around. Whether you prefer in-person consultations at your office, home, or our branch, or fully digital handling, we adapt to what works best for you.",
    points: [
      "Doorstep document collection across Maharashtra",
      "Online consultations via video or phone",
      "Digital form filling and submission",
      "WhatsApp and email support for quick queries",
    ],
  },
  {
    Icon: Banknote,
    title: "Affordable & Transparent Pricing",
    desc: "Professional expertise should not be out of reach. We offer competitive, transparent pricing with no hidden charges. You know exactly what you are paying for before we begin.",
    points: [
      "Upfront fee disclosure — no surprises",
      "Flexible payment options for different budgets",
      "No commission from lenders that affects your advice",
      "Volume discounts for businesses with multiple needs",
    ],
  },
  {
    Icon: Phone,
    title: "Dedicated Post-Service Support",
    desc: "Our relationship does not end when the service is delivered. We stay available for follow-up questions, ongoing compliance needs, and future requirements as your situation changes.",
    points: [
      "Post-filing support for ITR queries and notices",
      "Annual tax planning review for returning clients",
      "Ongoing HR and strategy advisory access",
      "Priority support for long-term clients",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "We begin with a free, no-obligation conversation to understand your needs — whether it is a loan, tax filing, HR challenge, or business growth goal.",
    Icon: MessageSquare,
  },
  {
    step: "02",
    title: "Needs Assessment",
    desc: "Our expert analyses your financial profile, business context, and specific requirements to identify the right service mix and approach.",
    Icon: Search,
  },
  {
    step: "03",
    title: "Custom Solution Design",
    desc: "We design a tailored solution — whether that is matching you with the best lender, building your HR framework, or preparing your tax return.",
    Icon: PenTool,
  },
  {
    step: "04",
    title: "Execution & Support",
    desc: "Our team handles the entire execution — documentation, applications, filings, or campaign setup — while keeping you informed at every stage.",
    Icon: Settings,
  },
  {
    step: "05",
    title: "Review & Follow-Through",
    desc: "We follow up until the outcome is complete — approval, disbursement, filing confirmation, or campaign results — and remain available for ongoing support.",
    Icon: CheckCircle2,
  },
];

const stats = [
  { num: "2000+", label: "Happy Clients", sub: "Across Maharashtra" },
  { num: "20+", label: "Bank Partners", sub: "For best loan rates" },
  { num: "3+", label: "Years Active", sub: "Proven track record" },
  { num: "8", label: "Service Areas", sub: "Full-spectrum coverage" },
  { num: "100%", label: "Confidentiality", sub: "Data privacy guaranteed" },
  { num: "24hr", label: "Response Time", sub: "For all enquiries" },
];

const faqs = [
  {
    q: "Do I need to visit your office?",
    a: "Not at all. We offer complete doorstep service across Maharashtra and fully digital handling via phone, email, and WhatsApp. You can complete the entire process without stepping into our office.",
  },
  {
    q: "How do you ensure the best loan rate for me?",
    a: "We compare offers from 20+ banks and NBFCs simultaneously. Based on your credit profile, income, and requirements, we identify lenders most likely to offer the best rate and approval probability.",
  },
  {
    q: "Can you help with multiple services at once?",
    a: "Absolutely. Many of our clients use two or more services. For example, a business owner might use us for both ITR filing and HR consulting. We coordinate across services to give you a seamless experience.",
  },
  {
    q: "What happens if I receive a tax notice after you file my ITR?",
    a: "We provide post-filing support. If you receive a notice related to a return we filed, we assist you in understanding and responding to it at no extra charge for straightforward queries.",
  },
  {
    q: "Is my financial information safe with you?",
    a: "Yes. We treat all client data with the highest confidentiality. Your documents and financial information are used solely to deliver your requested service and are never shared with third parties.",
  },
];

export default function WhyPage() {
  return (
    <>
      {/* ── BANNER ─────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.navy} 0%, #0a1e35 60%, #091929 100%)`,
          padding: "140px 24px 90px",
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
            <span style={{ color: C.goldLt }}>Why Choose Us</span>
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
            Our Advantage
          </span>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 52px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              maxWidth: 720,
              marginBottom: 18,
            }}
          >
            Why Hundreds of Clients Choose{" "}
            <span style={{ color: C.goldLt }}>Yugm Business Consulting</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.75,
              maxWidth: 620,
            }}
          >
            From personalized guidance to multi-bank partnerships, fast turnaround, and complete confidentiality — here is what sets us apart.
          </p>
        </div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────── */}
      <section
        style={{
          background: C.gold,
          padding: "36px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 16,
            textAlign: "center",
          }}
          className="stats-strip"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.9)", marginTop: 4 }}>{s.label}</p>
              <p style={{ fontSize: 11.5, color: "rgba(255,255,255,.68)", marginTop: 2 }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8 REASONS ──────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
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
              8 Strong Reasons
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 800,
                color: C.navy,
                lineHeight: 1.2,
                marginBottom: 14,
              }}
            >
              What Makes Yugm Different
            </h2>
            <p style={{ fontSize: 16, color: C.muted, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              Not just claims — concrete commitments backed by our process, partnerships, and proven results.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
            }}
            className="reasons-grid"
          >
            {reasons.map((r, i) => (
              <div
                key={r.title}
                style={{
                  background: i % 4 < 2 ? "#fff" : C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 18,
                  padding: "36px 32px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      background: "rgba(200,149,42,.12)",
                      border: "1px solid rgba(200,149,42,.25)",
                      borderRadius: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <r.Icon style={{ width: 24, height: 24, color: C.gold }} strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: C.navy, lineHeight: 1.3, paddingTop: 4 }}>
                    {r.title}
                  </h3>
                </div>
                <p style={{ fontSize: 14.5, color: C.muted, lineHeight: 1.75, marginBottom: 20 }}>
                  {r.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {r.points.map((p) => (
                    <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          background: C.gold,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 10,
                          color: "#fff",
                          fontWeight: 800,
                          flexShrink: 0,
                          marginTop: 3,
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ fontSize: 13.5, color: C.text, lineHeight: 1.6 }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ────────────────────────────────────── */}
      <section style={{ background: C.bg, padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
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
              How We Work
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 800,
                color: C.navy,
                lineHeight: 1.2,
                marginBottom: 14,
              }}
            >
              Our 5-Step Process
            </h2>
            <p style={{ fontSize: 16, color: C.muted, maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              A clear, structured approach that ensures every client gets the best outcome with the least friction.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 20,
              position: "relative",
            }}
            className="process-grid"
          >
            {/* Connecting line */}
            <div
              style={{
                position: "absolute",
                top: 40,
                left: "10%",
                right: "10%",
                height: 2,
                background: `linear-gradient(to right, ${C.gold}, ${C.navy2})`,
                zIndex: 0,
              }}
              className="hidden md:block"
            />

            {process.map((p, i) => (
              <div
                key={p.step}
                style={{
                  background: "#fff",
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: "28px 22px",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    background: i === 0 || i === 4 ? C.navy : C.gold,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    boxShadow: `0 4px 14px rgba(200,149,42,.3)`,
                  }}
                >
                  <p.Icon style={{ width: 22, height: 22, color: "#fff" }} strokeWidth={1.75} />
                </div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: C.gold,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  Step {p.step}
                </p>
                <h3
                  style={{
                    fontSize: 14.5,
                    fontWeight: 700,
                    color: C.navy,
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
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
              Questions Answered
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                color: C.navy,
                marginBottom: 12,
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: "24px 28px",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: 16, color: C.navy, marginBottom: 10 }}>
                  Q: {faq.q}
                </p>
                <p style={{ fontSize: 14.5, color: C.muted, lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.navy} 0%, #0a1e35 100%)`,
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(200,149,42,.1) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Ready to Experience the Yugm Difference?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.75,
              marginBottom: 36,
            }}
          >
            Join 2000+ clients who trust us with their financial, business, and compliance needs. Start with a free consultation — no commitment required.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                background: C.gold,
                color: "#fff",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              Book a Free Consultation →
            </Link>
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                background: "transparent",
                color: "#fff",
                border: "2px solid rgba(255,255,255,.4)",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
