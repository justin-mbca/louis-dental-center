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
    "Your Comprehensive Dental Solution Center. Combining local support, digital dentistry, domestic manufacturing, and global production resources for modern dental practices.",
  keywords: [
    "dental laboratory",
    "digital dental lab",
    "CAD/CAM dental design",
    "implant restorations",
    "crown and bridge",
    "zirconia crowns",
    "all-on-x restorations",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
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
