"use client";
import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  User, Building2, BarChart2, Lightbulb, Bell,
  TrendingDown, Shield, FileText, ClipboardList, TrendingUp,
  Briefcase, ShoppingBag, Activity, Monitor, HeartPulse, UserPlus,
  Phone,
} from "lucide-react";



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

/* ── data ─────────────────────────────────────────────────── */
const itrServices = [
  {
    Icon: BarChart2,
    title: "Share Market & Investor ITR Filing",
    desc: "Specialized ITR filing for clients involved in intraday trading, F&O, delivery, and mutual funds. We handle capital gain/loss reporting and carry-forward benefits.",
    tags: ["Intraday", "F&O", "Mutual Funds", "Capital Gains"],
    highlight: true,
  },
  {
    Icon: User,
    title: "Individual ITR Filing",
    desc: "For salaried employees, pensioners, and self-employed professionals. We ensure accurate calculation of income, deductions under 80C/80D and other sections, and timely submission.",
    tags: ["Salaried", "Pensioners", "Self-employed"],
  },
  {
    Icon: Building2,
    title: "Business & Professional ITR Filing",
    desc: "For proprietors, traders, consultants, freelancers, and small businesses. We handle P&L preparation, balance sheet, and applicable ITR forms for business clients.",
    tags: ["Proprietors", "Consultants", "Freelancers"],
  },
  {
    Icon: Lightbulb,
    title: "Tax Saving Guidance",
    desc: "We help clients understand all eligible deductions and tax-saving investment options under Chapter VI-A to legally minimize tax liability.",
    tags: ["80C", "80D", "HRA", "NPS"],
  },
  {
    Icon: Bell,
    title: "Notice & Compliance Support",
    desc: "Assistance in responding to income tax notices, departmental queries, scrutiny assessments, and demand notices with expert guidance.",
    tags: ["Notices", "Scrutiny", "Demand Letters"],
  },
];

const whyYugm = [
  "Accurate & Timely Filing",
  "Expert Guidance at Every Step",
  "Complete Confidentiality",
  "Affordable & Transparent Charges",
  "Fast Service & Dedicated Support",
  "Special Expertise in Share Market ITR",
  "Accurate P&L Reporting",
  "Loss Carry Forward Guidance",
];

const whoCanContact = [
  { Icon: Briefcase, label: "Salaried Employees" },
  { Icon: ShoppingBag, label: "Business Owners" },
  { Icon: Activity, label: "Traders & Investors" },
  { Icon: Monitor, label: "Freelancers" },
  { Icon: HeartPulse, label: "Professionals" },
  { Icon: UserPlus, label: "First-Time Tax Filers" },
];

/* ── page ─────────────────────────────────────────────────── */
export default function ITRFilingPage() {
  return (
    <>
      {/* ══ PAGE BANNER ════════════════════════════════════════ */}
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
              "radial-gradient(ellipse 55% 70% at 75% 50%, rgba(200,149,42,.12) 0%, transparent 60%)",
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
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 24,
              fontSize: 13.5,
              color: "rgba(255,255,255,.55)",
            }}
          >
            <Link
              href="/"
              style={{ color: "rgba(255,255,255,.55)", textDecoration: "none" }}
            >
              Home
            </Link>
            <span>›</span>
            <span style={{ color: C.goldLt }}>ITR Filing Services</span>
          </nav>

          <div
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
            Tax Filing Services
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 60px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              maxWidth: 800,
              marginBottom: 20,
            }}
          >
            Fast & Trusted <br />
            <span style={{ color: C.goldLt }}>ITR Filing Services</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(18px, 2.5vw, 22px)",
              color: "#fff",
              fontWeight: 600,
              lineHeight: 1.4,
              maxWidth: 700,
              marginBottom: 12,
            }}
          >
            For Salaried, Business & Share Market Traders
          </p>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.6,
              maxWidth: 640,
              marginBottom: 30,
            }}
          >
            Fast & Expert ITR Filing for Salaried, Business Owners & Share Market Traders. <br />
            <strong style={{ color: C.goldLt, fontSize: 20 }}>1000+ Returns Filed</strong>
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
            {[
              "Secure Data",
              "CA Expert Guidance",
              "Fast Support"
            ].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, color: "#fff", fontSize: 16, fontWeight: 500 }}>
                <span style={{ color: C.goldLt, fontSize: 20 }}>✔</span>
                {item}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link
              href="/#contact"
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
              File My ITR Now →
            </Link>
            <Link
              href="/share-market-itr"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 28px",
                background: "rgba(255,255,255,.05)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Share Market ITR Specialized →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ ITR SERVICES ══════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
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
              Our ITR Services
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
              Complete ITR Filing Solutions
            </h2>
            <p
              style={{
                fontSize: 16,
                color: C.muted,
                maxWidth: 580,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Our goal is to make tax filing simple, accurate, and stress-free
              for every client — from first-time filers to experienced investors.
            </p>
          </div>

          {/* 5 service cards — 3+2 layout */}
          <div
            className="itr-cards-top"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 22,
              marginBottom: 22,
            }}
          >
            {itrServices.slice(0, 3).map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </div>
          <div
            className="itr-cards-bottom"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 22,
              maxWidth: 820,
              margin: "0 auto",
            }}
          >
            {itrServices.slice(3).map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </div>
        </div>
      </section>


      {/* ══ WHO CAN CONTACT ═══════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
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
              Who We Serve
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 34px)",
                fontWeight: 800,
                color: C.navy,
                marginBottom: 12,
              }}
            >
              Who Can Contact Us?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: C.muted,
                maxWidth: 500,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              We serve a wide range of clients with different tax filing needs
              and complexities.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 16,
              marginBottom: 56,
            }}
            className="who-contact-grid"
          >
            {whoCanContact.map((w) => (
              <div
                key={w.label}
                className="who-card"
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: "24px 16px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.borderColor = C.gold;
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(13,43,78,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: "rgba(200,149,42,.1)",
                    border: "1px solid rgba(200,149,42,.2)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  <w.Icon style={{ width: 24, height: 24, color: C.gold }} strokeWidth={1.75} />
                </div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: C.navy,
                    lineHeight: 1.3,
                  }}
                >
                  {w.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════════ */}
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
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(200,149,42,.1) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            File Your ITR With Confidence
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.75,
              marginBottom: 36,
            }}
          >
            Avoid penalties, claim refunds, carry forward losses, and stay
            financially compliant with professional assistance from Yugm
            Business Consulting.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                background: C.gold,
                color: "#fff",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              Contact Us for Hassle-Free ITR Filing →
            </Link>
            <a
              href="tel:+917304227714"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                background: "transparent",
                color: "#fff",
                border: "2px solid rgba(255,255,255,.4)",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              <Phone style={{ width: 16, height: 16 }} strokeWidth={1.75} /> Call Us Now
            </a>
          </div>

          {/* Trust strip */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              marginTop: 48,
              paddingTop: 36,
              borderTop: "1px solid rgba(255,255,255,.1)",
              flexWrap: "wrap",
            }}
          >
            {[
              { n: "2000+", l: "Clients Filed" },
              { n: "100%", l: "Accuracy Guarantee" },
              { n: "24hr", l: "Fast Turnaround" },
              { n: "₹0", l: "Hidden Charges" },
            ].map(({ n, l }) => (
              <div key={l} style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: C.goldLt,
                    lineHeight: 1,
                  }}
                >
                  {n}
                </p>
                <p
                  style={{
                    fontSize: 12.5,
                    color: "rgba(255,255,255,.5)",
                    marginTop: 4,
                  }}
                >
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Service card sub-component ───────────────────────────── */
function ServiceCard({
  s,
}: {
  s: {
    Icon: LucideIcon;
    title: string;
    desc: string;
    tags: string[];
    highlight?: boolean;
  };
}) {
  const C_local = {
    navy: "#0d2b4e",
    gold: "#c8952a",
    goldLt: "#f0b940",
    muted: "#5a718a",
    border: "#dde4ef",
    bg: "#f4f7fb",
  };

  return (
    <div
      style={{
        background: s.highlight
          ? `linear-gradient(135deg, ${C_local.navy} 0%, #163a65 100%)`
          : "#fff",
        border: s.highlight ? "none" : `1px solid ${C_local.border}`,
        borderRadius: 16,
        padding: "30px 26px",
        color: s.highlight ? "#fff" : "inherit",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "default"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        if (!s.highlight) {
          e.currentTarget.style.boxShadow = "0 12px 24px rgba(13,43,78,.12)";
          e.currentTarget.style.borderColor = C_local.gold;
        } else {
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(13,43,78,0.4)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        if (!s.highlight) {
          e.currentTarget.style.borderColor = C_local.border;
        }
      }}
    >
      {s.highlight && (
        <span
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: C_local.gold,
            color: "#fff",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            padding: "3px 10px",
            borderRadius: 50,
          }}
        >
          Specialized
        </span>
      )}
      <div
        style={{
          width: 52,
          height: 52,
          background: s.highlight
            ? "rgba(200,149,42,.2)"
            : C_local.bg,
          borderRadius: 13,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 18,
        }}
      >
        <s.Icon
          style={{ width: 24, height: 24, color: s.highlight ? C_local.goldLt : C_local.navy }}
          strokeWidth={1.75}
        />
      </div>
      <h3
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: s.highlight ? "#fff" : C_local.navy,
          marginBottom: 10,
          lineHeight: 1.3,
        }}
      >
        {s.title}
      </h3>
      <p
        style={{
          fontSize: 13.5,
          color: s.highlight ? "rgba(255,255,255,.72)" : C_local.muted,
          lineHeight: 1.7,
          marginBottom: 18,
        }}
      >
        {s.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {s.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 50,
              background: s.highlight
                ? "rgba(255,255,255,.12)"
                : "rgba(200,149,42,.12)",
              color: s.highlight ? "rgba(255,255,255,.8)" : C_local.gold,
              border: s.highlight
                ? "1px solid rgba(255,255,255,.15)"
                : "1px solid rgba(200,149,42,.2)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
