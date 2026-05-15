"use client";
import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  BarChart2,
  FileText,
  Clock,
  Phone,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

const carryForwardData = [
  { type: "Intraday Trading Loss", period: "4 Years", color: "#e74c3c" },
  { type: "F&O Trading Loss", period: "8 Years", color: "#3498db" },
  { type: "Short Term Capital Loss", period: "8 Years", color: "#2ecc71" },
  { type: "Long Term Capital Loss", period: "8 Years", color: "#f1c40f" },
];

const features = [
  {
    Icon: BarChart2,
    title: "Profit & Loss Reporting",
    desc: "Accurate calculation and reporting of your trading P&L across all segments.",
  },
  {
    Icon: TrendingUp,
    title: "Loss Carry-Forward",
    desc: "Ensure your trading losses are carried forward correctly to offset future profits.",
  },
  {
    Icon: ShieldCheck,
    title: "Tax Compliance",
    desc: "Stay compliant with complex tax laws related to F&O and intraday trading.",
  },
  {
    Icon: Zap,
    title: "Fast Processing",
    desc: "Expert handling of your tax returns for quick and accurate filing.",
  },
];

export default function ShareMarketITRPage() {
  return (
    <>
      {/* ── BANNER ─────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.navy} 0%, #0a1e35 60%, #091929 100%)`,
          padding: "160px 24px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 55% 70% at 80% 50%, rgba(200,149,42,.15) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <nav style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, fontSize: 13.5, color: "rgba(255,255,255,.5)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,.5)", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <Link href="/services" style={{ color: "rgba(255,255,255,.5)", textDecoration: "none" }}>Services</Link>
            <span>›</span>
            <span style={{ color: C.goldLt }}>Share Market ITR</span>
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
            Specialized Taxation Service
          </span>

          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 60px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              maxWidth: 850,
              marginBottom: 20,
            }}
          >
            Specialized <br />
            <span style={{ color: C.goldLt }}>Share Market ITR Filing</span>
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
            Expert Tax Solutions for F&O, Intraday, and Capital Gains
          </p>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.6,
              maxWidth: 640,
              marginBottom: 40,
            }}
          >
            Maximize your carry-forward benefits and ensure 100% compliance with professional ITR filing tailored for traders and investors.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
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
                transition: "background 0.2s",
              }}
            >
              Get Started Now →
            </Link>
            <a
              href="tel:+917304227714"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                background: "rgba(255,255,255,.05)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              <Phone style={{ width: 16, height: 16 }} strokeWidth={1.75} /> Call Expert
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY IMPORTANT ────────────────────────────────── */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "center",
            }}
            className="sm-grid"
          >
            <div>
              <Badge>Why It Matters</Badge>
              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 38px)",
                  fontWeight: 800,
                  color: C.navy,
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                Why Specialized Filing is Crucial for Traders
              </h2>
              <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8, marginBottom: 18 }}>
                Share market taxation is complex. Whether it&apos;s speculative income from intraday or non-speculative business income from F&O, each category has specific reporting requirements.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Accurate P&L reporting across all segments",
                  "Proper classification of trading income",
                  "Audit requirement assessment",
                  "Maximum deduction of eligible business expenses",
                ].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <CheckCircle2 style={{ width: 20, height: 20, color: C.gold }} />
                    <span style={{ fontSize: 15, fontWeight: 500, color: C.navy }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: C.bg,
                borderRadius: 24,
                padding: "40px",
                border: `1px solid ${C.border}`,
                position: "relative"
              }}
            >
              <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                <AlertCircle style={{ width: 32, height: 32, color: "#e74c3c" }} />
                <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy }}>Don&apos;t Lose Your Losses</h3>
              </div>
              <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7, marginBottom: 24 }}>
                If you don&apos;t file your ITR on time, you permanently lose the ability to carry forward trading losses. This means you won&apos;t be able to offset them against future profits, resulting in higher taxes later.
              </p>
              <div style={{ background: "#fff", padding: "20px", borderRadius: 12, border: `1px solid ${C.border}` }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 4 }}>Example Impact:</p>
                <p style={{ fontSize: 13, color: C.muted }}>₹10 Lakh trading loss in Year 1
If filed correctly on time, this loss can be carried forward for up to 8 assessment years and adjusted against future eligible profits.
Suppose you earn ₹4 Lakh profit in Year 2
➡️ Taxable profit becomes ₹0 (adjusted from previous loss)
Year 3 profit ₹6 Lakh
➡️ Remaining loss adjusted again, taxable profit can still be ₹0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARRY FORWARD TABLE ──────────────────────────── */}
      <section style={{ padding: "100px 0", background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <Badge>Loss Carry Forward</Badge>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: C.navy }}>Maximize Your Tax Benefits</h2>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              border: `1px solid ${C.border}`,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
            className="carry-grid"
          >
            {carryForwardData.map((item, i) => (
              <div
                key={item.type}
                style={{
                  padding: "40px 24px",
                  borderRight: i < 3 ? `1px solid ${C.border}` : "none",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background: item.color + "15",
                    border: `2px solid ${item.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: 20,
                    fontWeight: 800,
                    color: item.color,
                  }}
                >
                  {item.period.split(" ")[0]}
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{item.type}</h4>
                <p style={{ fontSize: 13, color: C.muted }}>Can be carried forward for {item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.navy} 0%, #0a1e35 100%)`,
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: "#fff", marginBottom: 16 }}>Ready to File Your Share Market ITR?</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,.7)", marginBottom: 36 }}>
            Get expert assistance for accurate reporting and maximum tax savings.
          </p>
          <Link
            href="/#contact"
            style={{
              padding: "16px 40px",
              background: C.gold,
              color: "#fff",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Contact Our Expert Today
          </Link>
        </div>
      </section>
    </>
  );
}

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
