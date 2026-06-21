import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Louis Dental Center | Precision Dental Laboratory",
    template: "%s | Louis Dental Center",
  },
  description:
    "Premium digital dental laboratory delivering precision crown, bridge, implant, full-arch, and CAD/CAM design solutions.",
  keywords: [
    "dental laboratory",
    "digital dental lab",
    "CAD/CAM dental design",
    "implant restorations",
    "crown and bridge",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
