"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useAppointment } from "./AppointmentProvider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useAppointment();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigate
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-zinc-900/60 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="relative flex items-center justify-center w-9 h-9 border border-gold/60 rounded-full group-hover:border-gold transition-colors duration-500">
              <Sparkles className="text-gold w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
            </span>
            <span className="font-display text-2xl font-bold tracking-[0.25em] text-white group-hover:text-gold transition-colors duration-500">
              AURA
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-xs uppercase tracking-[0.2em] font-sans font-light transition-all duration-300 py-2 hover:text-gold block"
                >
                  <span className={isActive ? "text-gold font-medium" : "text-zinc-300"}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call-to-action Book Appointment Button */}
          <div className="hidden md:block">
            <button
              onClick={openBooking}
              className="bg-transparent border border-gold/40 text-gold hover:text-black hover:bg-gold-gradient hover:border-transparent py-2.5 px-6 rounded text-xs uppercase tracking-[0.2em] font-sans font-medium transition-all duration-500 shadow-[0_0_15px_rgba(197,168,128,0.05)] cursor-pointer hover-shimmer"
            >
              Book Reservation
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-gold transition-colors p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 bg-[#0A0A0A] flex flex-col justify-between pt-28 pb-16 px-8 md:hidden overflow-y-auto"
          >
            {/* Ambient luxury background styling */}
            <div className="absolute inset-0 luxury-noise pointer-events-none opacity-40" />
            <div className="absolute top-[20%] right-[10%] w-60 h-60 bg-gold/5 rounded-full filter blur-[80px]" />
            <div className="absolute bottom-[20%] left-[10%] w-60 h-60 bg-gold-dark/5 rounded-full filter blur-[80px]" />

            {/* Menu Links */}
            <nav className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between border-b border-zinc-900/60 pb-3"
                    >
                      <span
                        className={`text-2xl font-display transition-colors duration-300 ${
                          isActive ? "text-gold italic pl-2 font-medium" : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {link.name}
                      </span>
                      <span className="text-zinc-600 text-xs font-sans tracking-widest group-hover:text-gold transition-colors">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA in Drawer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-6 relative z-10 w-full"
            >
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(openBooking, 300);
                }}
                className="w-full bg-gold-gradient text-black py-4 px-6 rounded text-xs uppercase tracking-[0.2em] font-sans font-semibold text-center hover:bg-gold-light transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(197,168,128,0.2)]"
              >
                Book An Appointment
              </button>
              
              <div className="text-center text-[10px] text-zinc-500 font-sans tracking-[0.15em] uppercase">
                AURA Studio &bull; Unisex Grooming Redefined
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
