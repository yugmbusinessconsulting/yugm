"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/itr-filing", label: "ITR Filing" },
  { href: "/share-market-itr", label: "Share Market ITR" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why", label: "Why Us" },
];

const navy = "#0d2b4e";
const gold = "#c8952a";
const muted = "#5a718a";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "#fff",
          borderBottom: "1px solid rgba(200,149,42,.25)",
          boxShadow: "0 2px 16px rgba(13,43,78,.08)",
        }}
      >
        {/* Gold accent line at very top */}
        <div
          style={{
            height: 3,
            background: `linear-gradient(90deg, ${gold} 0%, #f0b940 50%, transparent 100%)`,
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 70,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image
              src="/logo.png"
              alt="Yugm Business Consulting"
              width={192}
              height={76}
              style={{ height: 62, width: "auto", objectFit: "contain" }}
              priority
            />
            <div className="header-brand-text" style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <span style={{ fontWeight: 800, fontSize: 18, color: navy, letterSpacing: "-0.2px" }}>
                Yugm Business Consulting
              </span>
              <span style={{ fontSize: 11.5, color: muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: isActive ? navy : muted,
                    background: isActive ? "rgba(13,43,78,.04)" : "transparent",
                    fontSize: 13.5,
                    fontWeight: isActive ? 700 : 500,
                    padding: "8px 13px",
                    borderRadius: 6,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = navy;
                      e.currentTarget.style.background = "rgba(13,43,78,.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = muted;
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {l.label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 4,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 4,
                        height: 4,
                        background: gold,
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <div
              style={{
                width: 1,
                height: 18,
                background: "rgba(200,149,42,.4)",
                margin: "0 8px",
              }}
            />
            <Link
              href="/contact"
              style={{
                background: navy,
                color: "#fff",
                fontSize: 13.5,
                fontWeight: 600,
                padding: "9px 20px",
                borderRadius: 6,
                textDecoration: "none",
                transition: "background 0.18s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = gold)}
              onMouseLeave={(e) => (e.currentTarget.style.background = navy)}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-1 cursor-pointer bg-transparent border-0"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu style={{ width: 24, height: 24, color: navy }} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#fff",
            zIndex: 1100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: `linear-gradient(90deg, ${gold} 0%, #f0b940 50%, transparent 100%)`,
            }}
          />
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "none",
              border: "none",
              color: navy,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Close menu"
          >
            <X style={{ width: 26, height: 26 }} strokeWidth={2} />
          </button>
          <Image
            src="/logo.png"
            alt="Yugm Business Consulting"
            width={160}
            height={64}
            style={{ height: 60, width: "auto", objectFit: "contain", marginBottom: 16 }}
          />
          {[...navLinks, { href: "/contact", label: "Get in Touch" }].map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: 20,
                  fontWeight: isActive ? 800 : 700,
                  color: l.href === "/contact" ? gold : (isActive ? gold : navy),
                  padding: "12px 32px",
                  borderRadius: 10,
                  textDecoration: "none",
                  background: isActive ? "rgba(200,149,42,.08)" : "transparent",
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
