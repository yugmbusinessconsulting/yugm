import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, Trophy, Lightbulb, Target, Lock, Globe, Rocket, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – Yugm Business Consulting",
  description:
    "Learn about Yugm Business Consulting — our story, mission, vision, core values, and the expert team serving individuals and businesses across Maharashtra.",
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

const values = [
  {
    Icon: Handshake,
    title: "Trust & Transparency",
    desc: "We build every client relationship on honesty, clear communication, and ethical practices. No hidden fees, no misleading advice — only straightforward, trustworthy guidance.",
  },
  {
    Icon: Trophy,
    title: "Excellence",
    desc: "We hold ourselves to the highest professional standards in every service we deliver, from filing a single ITR to advising on complex business strategy.",
  },
  {
    Icon: Lightbulb,
    title: "Innovation",
    desc: "We continuously evolve our processes and adopt the latest tools to deliver faster, smarter, and more accurate solutions for our clients.",
  },
  {
    Icon: Target,
    title: "Client-First",
    desc: "Every decision we make centers around what is best for the client. We listen, understand, and act in your best interest — always.",
  },
  {
    Icon: Lock,
    title: "Confidentiality",
    desc: "Your financial and personal data is handled with the highest level of discretion. We maintain strict data privacy at every step.",
  },
  {
    Icon: Globe,
    title: "Accessibility",
    desc: "Quality professional services should not be a luxury. We offer expert guidance at accessible price points with doorstep service across Maharashtra.",
  },
];

const milestones = [
  {
    year: "2021",
    title: "Founded in New Mumbai",
    desc: "Yugm Business Consulting was established in New Mumbai with a focus on DSA loan services, helping individuals and businesses access credit facilities through leading banks.",
    color: C.gold,
  },
  {
    year: "2022",
    title: "Expanded into Consulting",
    desc: "Added HR & Business Growth Consulting and Digital Marketing services to our portfolio, helping SMEs build stronger teams and stronger online presence.",
    color: "#2d9b6a",
  },
  {
    year: "2023",
    title: "Full-Spectrum Advisory",
    desc: "Launched IT Services, ITR Filing (including specialized Share Market ITR), Risk & Legal Advisory, and Financial Transaction Advisory — becoming a true one-stop partner.",
    color: "#8e44ad",
  },
  {
    year: "2024",
    title: "2000+ Clients & Growing",
    desc: "Serving over 500 satisfied clients across Maharashtra with 8 service verticals, 20+ banking partnerships, and a dedicated team of domain experts.",
    color: C.navy2,
  },
];

const areas = [
  { city: "New Mumbai", sub: "Head Office" },
  { city: "Pune", sub: "Active Client Base" },
  { city: "Mumbai", sub: "Corporate Clients" },
  { city: "Nashik", sub: "Business & SME" },
  { city: "Jalgaon", sub: "Loan & Tax Services" },
  { city: "Latur", sub: "Expanding Coverage" },
];

const pillars = [
  {
    label: "Mission",
    Icon: Rocket,
    text: "To empower individuals and businesses across Maharashtra with integrated financial, HR, digital, and advisory solutions that drive real, measurable, and sustainable growth.",
  },
  {
    label: "Vision",
    Icon: Eye,
    text: "To become Maharashtra's most trusted integrated business consulting partner — the first call every entrepreneur, professional, and investor makes when they need expert guidance.",
  },
];

export default function AboutPage() {
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
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 24,
              fontSize: 13.5,
              color: "rgba(255,255,255,.5)",
            }}
          >
            <Link href="/" style={{ color: "rgba(255,255,255,.5)", textDecoration: "none" }}>
              Home
            </Link>
            <span>›</span>
            <span style={{ color: C.goldLt }}>About Us</span>
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
            Our Story
          </span>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 52px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              maxWidth: 740,
              marginBottom: 18,
            }}
          >
            About{" "}
            <span style={{ color: C.goldLt }}>Yugm Business Consulting</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.75,
              maxWidth: 660,
              marginBottom: 40,
            }}
          >
            A trusted name in integrated business consulting, helping
            individuals and enterprises across Maharashtra navigate finance, HR,
            technology, compliance, and growth — all under one roof.
          </p>

          {/* Stat strip */}
          <div
            style={{
              display: "flex",
              gap: 40,
              flexWrap: "wrap",
              paddingTop: 36,
              borderTop: "1px solid rgba(255,255,255,.1)",
            }}
          >
            {[
              { n: "3+", l: "Years of Service" },
              { n: "2000+", l: "Satisfied Clients" },
              { n: "8", l: "Service Verticals" },
              { n: "20+", l: "Bank Partners" },
              { n: "100%", l: "Confidentiality" },
            ].map(({ n, l }) => (
              <div key={l}>
                <p style={{ fontSize: 28, fontWeight: 800, color: C.goldLt, lineHeight: 1 }}>{n}</p>
                <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.5)", marginTop: 4 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ─────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "center",
            }}
            className="about-grid"
          >
            <div>
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
                Who We Are
              </span>
              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 38px)",
                  fontWeight: 800,
                  color: C.navy,
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                A Team Built Around Your Success
              </h2>
              <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8, marginBottom: 18 }}>
                Yugm Business Consulting was founded with a simple but powerful belief — that every individual and business deserves access to professional financial, operational, and digital expertise, not just large corporations with big budgets.
              </p>
              <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8, marginBottom: 18 }}>
                Based in New Mumbai, Maharashtra, we have been serving clients for over three years. Our team brings together expertise in finance, taxation, human resources, digital marketing, information technology, and business law — giving clients a truly integrated support system.
              </p>
              <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8 }}>
                Whether you are a salaried individual filing your first ITR, a trader navigating F&O taxation, a startup building your HR framework, or an established business seeking growth advisory — Yugm is your dedicated partner at every stage.
              </p>
            </div>

            {/* Mission & Vision cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {pillars.map((p) => (
                <div
                  key={p.label}
                  style={{
                    background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navy2} 100%)`,
                    borderRadius: 18,
                    padding: "32px 28px",
                    color: "#fff",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "rgba(200,149,42,.2)",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <p.Icon style={{ width: 18, height: 18, color: C.goldLt }} strokeWidth={1.75} />
                    </div>
                    <span
                      style={{
                        fontSize: 11.5,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: ".12em",
                        color: C.goldLt,
                      }}
                    >
                      Our {p.label}
                    </span>
                  </div>
                  <p style={{ fontSize: 16, color: "rgba(255,255,255,.78)", lineHeight: 1.75 }}>
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ────────────────────────────────────── */}
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
              What We Stand For
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
              Our Core Values
            </h2>
            <p style={{ fontSize: 16, color: C.muted, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              These six principles guide every decision, every interaction, and every service we deliver.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="values-grid"
          >
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "#fff",
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "rgba(200,149,42,.12)",
                    border: "1px solid rgba(200,149,42,.25)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <v.Icon style={{ width: 22, height: 22, color: C.gold }} strokeWidth={1.75} />
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: C.navy,
                    marginBottom: 10,
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY ────────────────────────────────────── */}
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
              Our Growth Story
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 800,
                color: C.navy,
                lineHeight: 1.2,
              }}
            >
              Our Journey
            </h2>
          </div>

          <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
            {/* vertical line */}
            <div
              style={{
                position: "absolute",
                left: 36,
                top: 0,
                bottom: 0,
                width: 2,
                background: `linear-gradient(to bottom, ${C.gold}, ${C.navy2})`,
                borderRadius: 2,
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {milestones.map((m) => (
                <div
                  key={m.year}
                  style={{ display: "flex", gap: 32, alignItems: "flex-start" }}
                >
                  {/* Year badge */}
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      background: m.color,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: 15,
                      color: "#fff",
                      flexShrink: 0,
                      zIndex: 1,
                      boxShadow: `0 4px 16px ${m.color}50`,
                    }}
                  >
                    {m.year}
                  </div>
                  <div
                    style={{
                      background: C.bg,
                      border: `1px solid ${C.border}`,
                      borderRadius: 14,
                      padding: "24px 28px",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: C.navy,
                        marginBottom: 8,
                      }}
                    >
                      {m.title}
                    </h3>
                    <p style={{ fontSize: 14.5, color: C.muted, lineHeight: 1.7 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AREAS WE SERVE ─────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.navy} 0%, #0a1e35 100%)`,
          padding: "80px 0",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(200,149,42,.18)",
                color: C.goldLt,
                fontWeight: 700,
                fontSize: 11.5,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: 50,
                marginBottom: 14,
              }}
            >
              Coverage
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 12,
              }}
            >
              Areas We Serve
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,.6)", maxWidth: 500, margin: "0 auto" }}>
              Serving clients across major cities and districts of Maharashtra with doorstep service and online support.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 16,
            }}
            className="areas-grid"
          >
            {areas.map((a) => (
              <div
                key={a.city}
                style={{
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 14,
                  padding: "20px 16px",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: 14.5, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                  {a.city}
                </p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,.45)" }}>{a.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ────────────────────────── */}
      <section style={{ background: C.bg, padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
            className="diff-grid"
          >
            <div>
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
                Our Approach
              </span>
              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 38px)",
                  fontWeight: 800,
                  color: C.navy,
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                What Makes Us Different
              </h2>
              {[
                {
                  t: "One-Stop Partner",
                  d: "Instead of managing five different consultants, agencies, and advisors, you have one dedicated team that handles everything — finance, HR, digital, IT, compliance, and tax.",
                },
                {
                  t: "Proactive, Not Reactive",
                  d: "We don't wait for problems to arise. We proactively review your situation, flag risks, and suggest improvements before they become costly issues.",
                },
                {
                  t: "Doorstep & Online Service",
                  d: "Can't visit our office? We come to you. All documentation, consultations, and follow-ups can be handled at your doorstep or fully online.",
                },
                {
                  t: "Affordable Expert Access",
                  d: "The quality of service we provide was previously accessible only to large enterprises. We've made it available to every individual, freelancer, and small business at transparent, affordable pricing.",
                },
              ].map(({ t, d }) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    gap: 14,
                    marginBottom: 24,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      background: C.gold,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      color: "#fff",
                      fontWeight: 800,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 15, color: C.navy, marginBottom: 4 }}>{t}</p>
                    <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navy2} 100%)`,
                borderRadius: 20,
                padding: "44px 36px",
                color: "#fff",
              }}
            >
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28, lineHeight: 1.3 }}>
                Ready to Work With a Partner Who Puts You First?
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.7)", lineHeight: 1.75, marginBottom: 32 }}>
                Whether you have a specific need today or want to explore how we can support your long-term goals, we&apos;re here to help. No obligation. No pressure. Just expert advice.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "14px 28px",
                    background: C.gold,
                    color: "#fff",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  Get in Touch →
                </Link>
                <Link
                  href="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "14px 28px",
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
          </div>
        </div>
      </section>
    </>
  );
}
