"use client";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import {
  Banknote, Users, Megaphone, Monitor, Scale, FileText, TrendingUp, Building2,
  Target, Zap, Lock, MapPin, Phone, Mail, Clock,
  CheckCircle2, Trophy, Briefcase, Handshake,
} from "lucide-react";

/* ── shared style tokens ─────────────────────────────────── */
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

/* ── data ────────────────────────────────────────────────── */
const services = [
  {
    Icon: FileText,
    title: "ITR Filing (Share Market Specialized)",
    desc: "Expert Income Tax Return filing for share market traders (F&O, Intraday), salaried individuals, and businesses — maximizing your tax efficiency.",
    bullets: [
      "Share Market & F&O Specialized ITR",
      "Individual & business ITR filing",
      "Tax planning & consultation",
      "Proper carry-forward loss treatment",
    ],
    link: "/itr-filing",
  },
  {
    Icon: Banknote,
    title: "DSA Loan Services",
    desc: "We help individuals and businesses access the right financial solutions quickly through our partnerships with leading banks and NBFCs.",
    bullets: [
      "Quick loan processing",
      "Multiple bank & NBFC partnerships",
      "Expert guidance for best loan options",
      "End-to-end documentation support",
    ],
  },
  {
    Icon: Users,
    title: "HR & Business Growth Consulting",
    desc: "Build strong teams and scalable business structures by aligning human resources with business objectives for long-term growth.",
    bullets: [
      "Recruitment & talent acquisition",
      "HR policy development",
      "Performance management systems",
      "Organizational development strategies",
    ],
  },
  {
    Icon: Megaphone,
    title: "Digital Marketing Services",
    desc: "Build strong brand visibility and generate quality leads through data-driven strategies tailored to your target audience.",
    bullets: [
      "Social Media Marketing (SMM)",
      "Search Engine Optimization (SEO)",
      "Paid Ads — Google & Social Media",
      "Brand awareness & lead generation",
    ],
  },
  {
    Icon: Monitor,
    title: "IT Services",
    desc: "Leverage technology to improve efficiency and digital presence through customized, modern technology solutions.",
    bullets: [
      "Website Design & Development",
      "Software Development",
      "Technical Support & Maintenance",
      "Digital Infrastructure Setup",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Yugm made my home loan process incredibly smooth. They handled all documentation, found the best bank rate, and disbursement happened within two weeks. Truly professional service.",
    name: "Rajesh Patil",
    role: "Home Loan Client, Navi Mumbai",
    initial: "R",
    color: "#0d2b4e",
  },
  {
    quote:
      "Their ITR filing service for my F&O trading account was excellent. They handled carry-forward losses properly and explained every section of the return clearly.",
    name: "Priya Deshmukh",
    role: "F&O Trader, Pune",
    initial: "P",
    color: "#c8952a",
  },
  {
    quote:
      "The digital marketing team tripled our leads in three months through SEO and paid ad campaigns. Best decision we made for our business growth.",
    name: "Amol Shinde",
    role: "Business Owner, Nashik",
    initial: "A",
    color: "#1e6b4c",
  },
];

const whyFeatures = [
  {
    Icon: Target,
    title: "Personalized Solutions",
    desc: "Every client receives a customized strategy aligned with their unique goals and financial profile.",
  },
  {
    Icon: Building2,
    title: "Multi-Bank Partnerships",
    desc: "Access to 20+ leading banks and NBFCs ensures the most competitive rates for your loan requirements.",
  },
  {
    Icon: Zap,
    title: "Fast & Hassle-Free",
    desc: "From application to approval and disbursement, we handle every step efficiently with minimal friction.",
  },
  {
    Icon: Lock,
    title: "Complete Confidentiality",
    desc: "Your financial and personal data is handled with absolute discretion and privacy at every step.",
  },
];

const whyStats = [
  { num: "2000+", label: "Clients Served", sub: "Individuals, SMEs & corporates across Maharashtra" },
  { num: "20+", label: "Bank & NBFC Partners", sub: "Giving you the best loan options" },
  { num: "3+", label: "Years of Expertise", sub: "Deep domain knowledge across all verticals" },
  { num: "8", label: "Service Verticals", sub: "One partner for all your business needs" },
];

/* ── reusable micro components ────────────────────────────── */
function Badge({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "clamp(26px, 4vw, 38px)",
        fontWeight: 800,
        color: C.navy,
        lineHeight: 1.2,
        marginBottom: 14,
      }}
    >
      {children}
    </h2>
  );
}

/* ── page ─────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: "100vh",
          background: `linear-gradient(135deg, ${C.navy} 0%, #0a1e35 55%, #091929 100%)`,
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(200,149,42,.12) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "120px 24px 80px",
            width: "100%",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div>
            {/* live badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(200,149,42,.18)",
                border: "1px solid rgba(200,149,42,.35)",
                color: C.goldLt,
                fontSize: 13,
                fontWeight: 600,
                padding: "6px 16px",
                borderRadius: 50,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  background: C.goldLt,
                  borderRadius: "50%",
                }}
              />
              Trusted Across Maharashtra
            </div>

            <h1
              style={{
                fontSize: "clamp(34px, 5vw, 56px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.12,
                letterSpacing: "-0.5px",
                marginBottom: 20,
              }}
            >
              Integrated Solutions for{" "}
              <span style={{ color: C.goldLt }}>Business Growth</span>
              {" & "}
              <span style={{ color: C.goldLt }}>Financial Success</span>
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,.7)",
                lineHeight: 1.7,
                maxWidth: 500,
                marginBottom: 36,
              }}
            >
              Yugm Business Consulting is your one-stop partner for ITR filing,
              loans, HR consulting, digital marketing, IT services, legal
              compliance, and strategic advisory — all under one roof.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link
                href="#services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 28px",
                  background: C.gold,
                  color: "#fff",
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Explore Services →
              </Link>
              <Link
                href="/itr-filing"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 28px",
                  background: "transparent",
                  color: "#fff",
                  border: "2px solid rgba(255,255,255,.45)",
                  borderRadius: 6,
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                ITR Filing Services
              </Link>
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: 32,
                marginTop: 52,
                paddingTop: 36,
                borderTop: "1px solid rgba(255,255,255,.1)",
                flexWrap: "wrap",
              }}
            >
              {[
                { n: "3+", l: "Years of Service" },
                { n: "8", l: "Service Verticals" },
                { n: "2000+", l: "Satisfied Clients" },
                { n: "20+", l: "Bank Partners" },
              ].map(({ n, l }) => (
                <div key={l} style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      color: C.goldLt,
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </span>
                  <span
                    style={{
                      fontSize: 12.5,
                      color: "rgba(255,255,255,.5)",
                      marginTop: 4,
                    }}
                  >
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — service card */}
          <div className="hidden md:block">
            <div
              style={{
                background: "rgba(255,255,255,.06)",
                border: "1px solid rgba(255,255,255,.12)",
                borderRadius: 18,
                padding: 28,
                backdropFilter: "blur(16px)",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: C.goldLt,
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                  marginBottom: 20,
                }}
              >
                Our Service Portfolio
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                {services.map((s) => (
                  <div
                    key={s.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      background: "rgba(255,255,255,.05)",
                      border: "1px solid rgba(255,255,255,.08)",
                      borderRadius: 10,
                      padding: "12px 14px",
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        background: C.gold,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <s.Icon style={{ width: 16, height: 16, color: "#fff" }} strokeWidth={1.75} />
                    </div>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "rgba(255,255,255,.88)",
                        lineHeight: 1.3,
                      }}
                    >
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ═════════════════════════════════════════════ */}
      <section id="about" style={{ background: C.bg, padding: "96px 0" }}>
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
            {/* Left */}
            <div>
              <Badge>About Yugm Business Consulting</Badge>
              <SectionHeading>
                Your Trusted Partner for Holistic Business Solutions
              </SectionHeading>
              <p
                style={{
                  fontSize: 15.5,
                  color: C.muted,
                  lineHeight: 1.75,
                  marginBottom: 12,
                }}
              >
                Based in Navi Mumbai, Maharashtra, Yugm Business
                Consulting has been empowering individuals and businesses for
                over three years with integrated financial, consulting, and
                technology solutions.
              </p>
              <p
                style={{
                  fontSize: 15.5,
                  color: C.muted,
                  lineHeight: 1.75,
                  marginBottom: 32,
                }}
              >
                We partner with leading banks, NBFCs, and industry experts to
                deliver end-to-end support — from securing the right loan to
                filing your ITR and building strategies for long-term business
                growth.
              </p>
              {/* Pillars */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
              >
                {[
                  { Icon: CheckCircle2, t: "Trusted", d: "Transparent processes and ethical practices at every step" },
                  { Icon: Trophy, t: "Experienced", d: "3+ years serving clients across diverse industry segments" },
                  { Icon: Briefcase, t: "Professional", d: "Expert team with deep domain knowledge and certifications" },
                  { Icon: Handshake, t: "Client-First", d: "Every solution customized to your unique needs and goals" },
                ].map(({ Icon: PillarIcon, t, d }) => (
                  <div
                    key={t}
                    style={{
                      background: "#fff",
                      border: `1px solid ${C.border}`,
                      borderRadius: 12,
                      padding: "20px 18px",
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        background: `linear-gradient(135deg, ${C.navy}, ${C.navy2})`,
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <PillarIcon style={{ width: 18, height: 18, color: "#fff" }} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          color: C.navy,
                          marginBottom: 3,
                        }}
                      >
                        {t}
                      </p>
                      <p style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.5 }}>
                        {d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — dark metric card */}
            <div
              style={{
                background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navy2} 100%)`,
                borderRadius: 20,
                padding: "48px 40px",
                color: "#fff",
              }}
            >
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 14,
                  lineHeight: 1.3,
                }}
              >
                Serving Thousands of Clients Across Maharashtra
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,.7)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                From first-time loan applicants to growing SMEs and established
                corporations, we provide the guidance, expertise, and
                partnerships needed to achieve financial and operational success.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                {[
                  { v: "2000+", l: "Happy Clients" },
                  { v: "20+", l: "Bank Partners" },
                  { v: "8", l: "Services Offered" },
                  { v: "3+", l: "Years Active" },
                ].map(({ v, l }) => (
                  <div
                    key={l}
                    style={{
                      background: "rgba(255,255,255,.08)",
                      borderRadius: 12,
                      padding: "18px",
                      border: "1px solid rgba(255,255,255,.1)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: C.goldLt,
                        lineHeight: 1,
                      }}
                    >
                      {v}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,.6)",
                        marginTop: 4,
                      }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════ */}
      <section id="services" style={{ background: "#fff", padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          {/* Intro */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 52,
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <Badge>What We Offer</Badge>
              <SectionHeading>
                Comprehensive Services
                <br />
                Tailored to Your Needs
              </SectionHeading>
            </div>
            <p
              style={{
                fontSize: 16,
                color: C.muted,
                maxWidth: 340,
                lineHeight: 1.7,
              }}
            >
              Eight specialized verticals working together to provide seamless,
              end-to-end support for individuals and businesses.
            </p>
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 22,
            }}
            className="services-grid"
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="svc-card"
                style={{
                  background: "#fff",
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: "30px 26px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(13,43,78,.12)";
                  e.currentTarget.style.borderColor = C.gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = C.border;
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: "#eef2f8",
                    borderRadius: 13,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <s.Icon style={{ width: 24, height: 24, color: C.navy }} strokeWidth={1.75} />
                </div>
                <h3
                  style={{
                    fontSize: 15.5,
                    fontWeight: 700,
                    color: C.navy,
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: C.muted,
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}
                >
                  {s.desc}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                  }}
                >
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: 12.5,
                        color: C.muted,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          background: C.gold,
                          borderRadius: "50%",
                          marginTop: 6,
                          flexShrink: 0,
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.link ?? "/#contact"}
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: C.navy,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY US ════════════════════════════════════════════ */}
      <section
        id="why"
        style={{
          background: `linear-gradient(135deg, ${C.navy} 0%, #0a1e35 100%)`,
          padding: "96px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(200,149,42,.1) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="why-grid"
        >
          {/* Left */}
          <div>
            <div
              style={{
                display: "inline-block",
                background: "rgba(200,149,42,.14)",
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
              Why Yugm
            </div>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 18,
              }}
            >
              A Single, Trusted Partner for Every Business Need
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,.65)",
                lineHeight: 1.75,
                marginBottom: 36,
              }}
            >
              We eliminate the complexity of dealing with multiple vendors. Our
              integrated approach ensures every aspect of your financial,
              operational, and digital needs is handled by a coordinated team of
              experts.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              {whyFeatures.map((f) => (
                <div
                  key={f.title}
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "rgba(200,149,42,.18)",
                      border: "1px solid rgba(200,149,42,.3)",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <f.Icon style={{ width: 20, height: 20, color: C.goldLt }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#fff",
                        marginBottom: 4,
                      }}
                    >
                      {f.title}
                    </p>
                    <p
                      style={{
                        fontSize: 13.5,
                        color: "rgba(255,255,255,.6)",
                        lineHeight: 1.6,
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stat cards */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          >
            {whyStats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  background:
                    i === 0
                      ? "rgba(200,149,42,.14)"
                      : "rgba(255,255,255,.06)",
                  border:
                    i === 0
                      ? "1px solid rgba(200,149,42,.3)"
                      : "1px solid rgba(255,255,255,.1)",
                  borderRadius: 16,
                  padding: "28px 22px",
                  gridColumn: i === 0 ? "span 2" : undefined,
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 800,
                    color: C.goldLt,
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: 4,
                  }}
                >
                  {s.label}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════ */}
      <section
        id="testimonials"
        style={{ background: C.bg, padding: "96px 0" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <Badge>Client Stories</Badge>
            <SectionHeading>Trusted by Hundreds of Clients</SectionHeading>
            <p
              style={{
                fontSize: 16,
                color: C.muted,
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Real experiences from individuals and businesses we&apos;ve helped
              grow and succeed.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="testi-grid"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "#fff",
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: "30px 26px",
                }}
              >
                {/* Stars */}
                <div
                  style={{
                    display: "flex",
                    gap: 3,
                    marginBottom: 16,
                    color: C.gold,
                    fontSize: 16,
                  }}
                >
                  {"★★★★★"}
                </div>
                <p
                  style={{
                    fontSize: 14.5,
                    color: C.text,
                    lineHeight: 1.75,
                    marginBottom: 24,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: t.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: 14,
                        color: C.navy,
                      }}
                    >
                      {t.name}
                    </p>
                    <p style={{ fontSize: 12.5, color: C.muted }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ═══════════════════════════════════════════ */}
      <section id="contact" style={{ background: "#fff", padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Badge>Get in Touch</Badge>
            <SectionHeading>Let&apos;s Start a Conversation</SectionHeading>
            <p
              style={{
                fontSize: 16,
                color: C.muted,
                maxWidth: 500,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Tell us about your needs and our team will get back to you within
              24 hours.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 60,
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Left info */}
            <div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: C.navy,
                  marginBottom: 12,
                }}
              >
                Contact Information
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: C.muted,
                  lineHeight: 1.7,
                  marginBottom: 36,
                }}
              >
                Reach out directly or fill out the enquiry form and we&apos;ll
                connect you with the right expert from our team.
              </p>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 22 }}
              >
                {[
                  {
                    ContactIcon: MapPin,
                    value:
                      "Navi Mumbai,\nMaharashtra, India",
                  },
                  {
                    ContactIcon: Phone,
                    label: "Phone",
                    value: "+91-7304227714",
                    isPhone: true,
                  },
                  {
                    ContactIcon: Mail,
                    label: "Email",
                    value: "info@yugmbusiness.com",
                    isEmail: true,
                  },
                  {
                    ContactIcon: Clock,
                    label: "Business Hours",
                    value:
                      "Monday – Saturday: 9:00 AM – 6:00 PM\nSunday: By Appointment",
                  },
                ].map(({ ContactIcon, label, value, isPhone, isEmail }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: C.bg,
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <ContactIcon style={{ width: 20, height: 20, color: C.navy }} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: ".08em",
                          color: C.gold,
                          marginBottom: 3,
                        }}
                      >
                        {label}
                      </p>
                      <div>
                        {value.split("\n").map((line, i) =>
                          isPhone ? (
                            <a
                              key={i}
                              href={`tel:${line.replace(/[^+\d]/g, "")}`}
                              style={{
                                display: "block",
                                fontSize: 14,
                                color: C.text,
                                textDecoration: "none",
                                lineHeight: 1.6,
                              }}
                            >
                              {line}
                            </a>
                          ) : isEmail ? (
                            <a
                              key={i}
                              href={`mailto:${line}`}
                              style={{
                                display: "block",
                                fontSize: 14,
                                color: C.navy,
                                textDecoration: "none",
                                fontWeight: 600,
                              }}
                            >
                              {line}
                            </a>
                          ) : (
                            <p
                              key={i}
                              style={{
                                fontSize: 14,
                                color: C.text,
                                lineHeight: 1.6,
                              }}
                            >
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
