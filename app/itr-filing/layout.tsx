import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fast & Trusted ITR Filing Services – Yugm Business Consulting",
  description:
    "Fast & Expert ITR Filing for Salaried, Business Owners & Share Market Traders. 1000+ Returns Filed. Secure Data, CA Expert Guidance, Fast Support.",
};

export default function ITRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
