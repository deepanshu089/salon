import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppointmentProvider from "../components/AppointmentProvider";
import SmoothScroll from "../components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AURA | Haute Couture Luxury Unisex Salon & Spa",
  description: "Experience premium styling, beauty treatments, luxury beard grooming, and fashion-forward bridal makeup at AURA. Handcrafted grooming and wellness tailored for the refined individual.",
  keywords: "luxury salon, high-end unisex salon, premium beauty studio, bespoke hair styling, luxury bridal makeup, professional groomers, international salon aesthetic",
  authors: [{ name: "AURA Luxury Studios" }],
  openGraph: {
    title: "AURA | Haute Couture Luxury Unisex Salon & Spa",
    description: "Experience premium styling, beauty treatments, luxury beard grooming, and fashion-forward bridal makeup at AURA. Handcrafted grooming and wellness tailored for the refined individual.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-[#C5A880]/30 selection:text-[#C5A880]">
        <SmoothScroll>
          <AppointmentProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </AppointmentProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
