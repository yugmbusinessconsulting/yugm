import type { Metadata } from "next";
import Link from "next/link";
import { Banknote, Users, Megaphone, Monitor, Scale, FileText, TrendingUp, Building2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services – Yugm Business Consulting",
  description:
    "Explore our specialized service verticals at Yugm Business Consulting — DSA Loans, HR Consulting, Digital Marketing, IT Services, and ITR Filing.",
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

const services = [
  {
    id: "itr-filing",
    Icon: FileText,
    number: "01",
    title: "ITR Filing (Share Market Specialized)",
    tagline: "Specialized Share Market, F&O and Business ITR Filing",
    desc: "We offer professional Income Tax Return (ITR) filing services for individuals, professionals, and businesses. Our experts ensure accurate tax calculations and timely filing while maximizing eligible deductions and benefits.",
    detail:
      "We assist clients in maintaining proper financial records, minimizing tax liabilities legally, and ensuring compliance with income tax regulations. We specialize in Share Market ITR — covering intraday, F&O, delivery, and mutual funds with proper carry-forward loss treatment.",
    benefits: [
      "Specialized Share Market and F&O ITR expertise",
      "Accurate tax calculation with maximum eligible deductions",
      "Timely filing to avoid penalties and interest",
      "Carry-forward loss guidance for traders and investors",
      "Tax planning and year-round consultation",
      "Assistance with income tax notices and compliance",
    ],
    loanTypes: [
      "Share Market ITR (F&O, Intraday)",
      "Individual ITR Filing",
      "Business & Professional ITR",
      "Tax Saving Guidance",
      "Notice & Compliance Support",
      "Tax Planning Consultation",
    ],
    link: "/itr-filing",
    color: "#27ae60",
  },
  {
    id: "dsa-loans",
    Icon: Banknote,
    number: "02",
    title: "DSA Loan Services",
    tagline: "Fast, expert access to the right loan for your needs",
    desc: "Our DSA (Direct Selling Agent) Loan Services help individuals and businesses access the right financial solutions quickly and efficiently. We partner with leading banks and NBFCs to assist clients in securing personal loans, business loans, home loans, loan against property, and other credit facilities.",
    detail:
      "Our team evaluates the client's financial profile, understands their requirements, and connects them with the most suitable lenders. From documentation and application to approval and disbursement, we provide complete support to ensure a smooth and hassle-free loan process.",
    benefits: [
      "Quick loan processing with minimal documentation",
      "Multiple bank and NBFC partnerships for best rates",
      "Expert guidance on choosing the right loan product",
      "End-to-end documentation and application support",
      "Follow-up until final disbursement",
      "Doorstep assistance available",
    ],
    loanTypes: [
      "Personal Loan",
      "Home Loan",
      "Business Loan",
      "Loan Against Property",
      "Car Loan",
      "Gold Loan",
    ],
    color: "#c8952a",
  },
  {
    id: "hr-consulting",
    Icon: Users,
    number: "03",
    title: "HR & Business Growth Consulting",
    tagline: "Build the team and structure your business needs to scale",
    desc: "Our HR and Business Growth Consulting services are designed to help organizations build strong teams and scalable business structures. We assist companies in developing effective HR policies, recruitment strategies, employee engagement frameworks, and performance management systems.",
    detail:
      "By aligning human resources with business objectives, we help organizations improve productivity, reduce employee turnover, and create a strong foundation for long-term growth.",
    benefits: [
      "Structured recruitment and talent acquisition process",
      "Custom HR policy development aligned to your culture",
      "Performance management systems and appraisal frameworks",
      "Employee engagement and retention strategies",
      "Organizational structure and role design",
      "Scalable HR frameworks that grow with your business",
    ],
    loanTypes: [
      "Recruitment & Talent Acquisition",
      "HR Policy Development",
      "Performance Management",
      "Organizational Development",
      "Employee Engagement",
      "Workforce Planning",
    ],
    color: "#2d9b6a",
  },
  {
    id: "digital-marketing",
    Icon: Megaphone,
    number: "04",
    title: "Digital Marketing Services",
    tagline: "Grow your brand visibility and generate quality leads online",
    desc: "In today's digital world, online presence is essential for business growth. Our Digital Marketing services help businesses build strong brand visibility and generate quality leads through data-driven marketing strategies.",
    detail:
      "We provide comprehensive solutions including social media marketing, search engine optimization (SEO), paid advertising, content marketing, and brand promotion to help businesses reach their target audience effectively.",
    benefits: [
      "Data-driven strategies tailored to your target audience",
      "Increased brand visibility across digital platforms",
      "Quality lead generation for measurable ROI",
      "Social media growth and community building",
      "Improved search engine rankings through SEO",
      "Transparent reporting and campaign performance tracking",
    ],
    loanTypes: [
      "Social Media Marketing (SMM)",
      "Search Engine Optimization (SEO)",
      "Google & Social Media Ads",
      "Content Marketing",
      "Brand Awareness Campaigns",
      "Lead Generation Strategies",
    ],
    color: "#e67e22",
  },
  {
    id: "it-services",
    Icon: Monitor,
    number: "05",
    title: "IT Services",
    tagline: "Modern technology solutions to power your business forward",
    desc: "Our IT Services focus on helping businesses leverage technology to improve efficiency, productivity, and digital presence. We provide customized technology solutions including website development, software solutions, system integration, and technical support.",
    detail:
      "Our team ensures that businesses stay competitive by implementing modern digital tools that simplify operations and improve customer experience.",
    benefits: [
      "Custom website design built for performance and conversions",
      "Tailored software solutions for your business workflows",
      "Reliable technical support and maintenance",
      "Digital infrastructure planning and setup",
      "System integration to unify your tools",
      "Scalable solutions that grow with your business",
    ],
    loanTypes: [
      "Website Design & Development",
      "Software Development",
      "Technical Support & Maintenance",
      "Digital Infrastructure Setup",
      "System Integration",
      "E-commerce Solutions",
    ],
    color: "#8e44ad",
  },
];

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

export default function ServicesPage() {
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
            <span style={{ color: C.goldLt }}>Services</span>
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
            What We Offer
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
            Integrated Services for Every{" "}
            <span style={{ color: C.goldLt }}>Business Challenge</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.75,
              maxWidth: 640,
              marginBottom: 40,
            }}
          >
            Five specialized verticals — one dedicated team. From financial services to technology, HR, and ITR filing, we cover essential aspects of your business journey.
          </p>

          {/* Quick nav pills */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "7px 16px",
                  background: "rgba(255,255,255,.08)",
                  border: "1px solid rgba(255,255,255,.15)",
                  color: "rgba(255,255,255,.8)",
                  borderRadius: 50,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <s.Icon style={{ width: 13, height: 13 }} strokeWidth={2} />
                {s.title.split(" ")[0]}
                {s.title.split(" ")[1] ? " " + s.title.split(" ")[1] : ""}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ────────────────────────────────── */}
      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          style={{
            background: idx % 2 === 0 ? "#fff" : C.bg,
            padding: "96px 0",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: idx % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                gap: 72,
                alignItems: "center",
                direction: idx % 2 !== 0 ? "rtl" : "ltr",
              }}
              className="svc-detail-grid"
            >
              {/* Text side */}
              <div style={{ direction: "ltr" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: C.muted,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.number}
                  </span>
                  <span
                    style={{
                      width: 32,
                      height: 1,
                      background: C.border,
                      display: "inline-block",
                    }}
                  />
                  <Badge>{s.title}</Badge>
                </div>

                <h2
                  style={{
                    fontSize: "clamp(24px, 3.5vw, 34px)",
                    fontWeight: 800,
                    color: C.navy,
                    lineHeight: 1.2,
                    marginBottom: 12,
                  }}
                >
                  {s.tagline}
                </h2>

                <p style={{ fontSize: 15.5, color: C.muted, lineHeight: 1.8, marginBottom: 14 }}>
                  {s.desc}
                </p>
                <p style={{ fontSize: 15.5, color: C.muted, lineHeight: 1.8, marginBottom: 28 }}>
                  {s.detail}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                  {s.benefits.map((b) => (
                    <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span
                        style={{
                          width: 22,
                          height: 22,
                          background: s.color,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          color: "#fff",
                          fontWeight: 800,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ fontSize: 14.5, color: C.text, lineHeight: 1.6 }}>{b}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link
                    href={s.id === "itr-filing" ? "/itr-filing" : (s.link ?? "/contact")}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 24px",
                      background: s.color,
                      color: "#fff",
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: 14.5,
                      textDecoration: "none",
                    }}
                  >
                    {s.id === "itr-filing" ? "ITR Filing Details →" : (s.link ? "View Full Details →" : "Get Started →")}
                  </Link>
                  <Link
                    href={s.id === "itr-filing" ? "/share-market-itr" : "/contact"}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 24px",
                      background: "transparent",
                      color: C.navy,
                      border: `1.5px solid ${C.border}`,
                      borderRadius: 8,
                      fontWeight: 600,
                      fontSize: 14.5,
                      textDecoration: "none",
                    }}
                  >
                    {s.id === "itr-filing" ? "Share Market ITR →" : "Talk to an Expert"}
                  </Link>
                </div>
              </div>

              {/* Visual card side */}
              <div style={{ direction: "ltr" }}>
                <div
                  style={{
                    background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navy2} 100%)`,
                    borderRadius: 20,
                    padding: "36px 32px",
                    color: "#fff",
                  }}
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      background: `${s.color}25`,
                      border: `2px solid ${s.color}50`,
                      borderRadius: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <s.Icon style={{ width: 28, height: 28, color: s.color }} strokeWidth={1.5} />
                  </div>
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
                    Key Services Include
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {s.loanTypes.map((lt) => (
                      <div
                        key={lt}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          background: "rgba(255,255,255,.06)",
                          border: "1px solid rgba(255,255,255,.09)",
                          borderRadius: 10,
                          padding: "12px 16px",
                        }}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            background: s.color,
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: 14, color: "rgba(255,255,255,.82)", fontWeight: 500 }}>
                          {lt}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: 24,
                      paddingTop: 20,
                      borderTop: "1px solid rgba(255,255,255,.1)",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
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
                      <Phone style={{ width: 16, height: 16, color: C.goldLt }} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,.5)", marginBottom: 2 }}>
                        Need guidance on this service?
                      </p>
                      <a
                        href="tel:+917304227714"
                        style={{ fontSize: 15, fontWeight: 700, color: C.goldLt, textDecoration: "none" }}
                      >
                        +91-7304227714
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA STRIP ──────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.navy} 0%, #0a1e35 100%)`,
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Not Sure Which Service You Need?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.75,
              marginBottom: 32,
            }}
          >
            Our team will assess your situation and recommend the right combination of services — at no obligation.
          </p>
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
        </div>
      </section>
    </>
  );
}
