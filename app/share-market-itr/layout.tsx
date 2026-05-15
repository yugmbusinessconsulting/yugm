import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialized Share Market ITR Filing – Yugm Business Consulting",
  description:
    "Expert ITR filing for traders and investors. Specialized handling of F&O, intraday trading, and capital gains with maximum carry-forward benefits.",
};

export default function ShareMarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
