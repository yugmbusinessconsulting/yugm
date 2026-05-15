"use client";
import { useState, FormEvent } from "react";

const serviceOptions = [
  "Share Market ITR Filing",
  "ITR Filing",
  "DSA Loan Services",
  "HR & Business Growth Consulting",
  "Digital Marketing Services",
  "IT Services",
  "Risk, Legal & Governance Advisory",
  "Strategy & Business Growth Consulting",
  "Financial & Transaction Advisory",
  "Multiple Services",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  border: "1.5px solid #dde4ef",
  borderRadius: 8,
  fontSize: 14.5,
  color: "#1e2d3d",
  background: "#fff",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.18s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#1e2d3d",
  marginBottom: 7,
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          phone,
          service,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        style={{
          background: "#f4f7fb",
          borderRadius: 20,
          padding: "64px 40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            background: "#2d9b6a",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            fontSize: 28,
            color: "#fff",
          }}
        >
          ✓
        </div>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#0d2b4e",
            marginBottom: 10,
          }}
        >
          Enquiry Sent!
        </h3>
        <p style={{ fontSize: 15, color: "#5a718a" }}>
          We&apos;ll get back to you within 24 hours. Thank you for reaching out!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#f4f7fb",
        borderRadius: 20,
        padding: "44px 40px",
      }}
    >
      <h3
        style={{
          fontSize: 21,
          fontWeight: 700,
          color: "#0d2b4e",
          marginBottom: 28,
        }}
      >
        Send Us an Enquiry
      </h3>

      {/* Name row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 16,
        }}
      >
        <div>
          <label style={labelStyle}>First Name</label>
          <input
            type="text"
            placeholder="Your first name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Last Name</label>
          <input
            type="text"
            placeholder="Your last name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Phone + Email row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 16,
        }}
      >
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Email Address</label>
          <input
            type="email"
            placeholder="your@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Service dropdown */}
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>Service You&apos;re Interested In</label>
        <select
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select a service…</option>
          {serviceOptions.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle}>Your Message</label>
        <textarea
          placeholder="Tell us about your requirements…"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      {error && (
        <p style={{ color: "#c0392b", fontSize: 14, marginBottom: 16 }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: "15px",
          background: loading ? "#a07020" : "#c8952a",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontSize: 16,
          fontWeight: 700,
          cursor: loading ? "not-allowed" : "pointer",
          fontFamily: "inherit",
          letterSpacing: "0.01em",
          transition: "background 0.18s",
        }}
        onMouseEnter={(e) => {
          if (!loading) e.currentTarget.style.background = "#f0b940";
        }}
        onMouseLeave={(e) => {
          if (!loading) e.currentTarget.style.background = "#c8952a";
        }}
      >
        {loading ? "Sending…" : "Send Enquiry →"}
      </button>
    </form>
  );
}
