"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";
import { useAppointment } from "./AppointmentProvider";

export default function Footer() {
  const { openBooking } = useAppointment();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070707] border-t border-zinc-900/60 pt-20 pb-8 overflow-hidden">
      {/* Background Microtexture and Glows */}
      <div className="absolute inset-0 luxury-noise pointer-events-none opacity-30" />
      <div className="absolute -bottom-[10%] -left-[10%] w-80 h-80 bg-gold/5 rounded-full filter blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Newsletter / Exclusive Club Invitation */}
        <div className="border-b border-zinc-900 pb-16 mb-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium">Exclusive Circle</span>
            <h4 className="text-2xl md:text-3xl font-display font-semibold text-white">Join the AURA Elite Membership</h4>
            <p className="text-zinc-400 text-sm max-w-lg font-sans font-light">
              Receive seasonal lookbooks, priority scheduling alerts, private event invitations, and VIP wellness updates from our directors.
            </p>
          </div>
          <div className="lg:col-span-2">
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your refined email"
                className="w-full bg-[#121212] border border-zinc-800 focus:border-gold py-4 pl-4 pr-32 text-sm text-white placeholder-zinc-600 focus:outline-none rounded transition-colors font-sans"
              />
              <button
                type="submit"
                className="absolute right-2 bg-gold-gradient text-black font-sans font-medium text-xs tracking-wider uppercase py-2.5 px-4 rounded hover:bg-gold-light transition-all duration-300 cursor-pointer"
              >
                {subscribed ? "Enrolled" : "Request"}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-gold mt-2 font-sans animate-pulse">
                Welcome to the AURA Inner Circle. An invitation will arrive shortly.
              </p>
            )}
          </div>
        </div>

        {/* Footer Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-max">
              <span className="relative flex items-center justify-center w-8 h-8 border border-gold/60 rounded-full">
                <Sparkles className="text-gold w-3.5 h-3.5" />
              </span>
              <span className="font-display text-xl font-bold tracking-[0.25em] text-white">
                AURA
              </span>
            </Link>
            <p className="text-zinc-400 text-sm font-sans font-light leading-relaxed">
              Crafting premium hair, skin, and grooming styles since 2012. Our salon blends high-end European fashion with personalized sensory rituals to establish a new gold standard of beauty and wellness.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#121212] hover:bg-gold hover:text-black text-zinc-400 flex items-center justify-center transition-all duration-300" aria-label="Follow us on Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#121212] hover:bg-gold hover:text-black text-zinc-400 flex items-center justify-center transition-all duration-300" aria-label="Follow us on Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#121212] hover:bg-gold hover:text-black text-zinc-400 flex items-center justify-center transition-all duration-300" aria-label="Follow us on Twitter/X">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-6">
            <h5 className="text-sm uppercase tracking-[0.2em] font-sans font-semibold text-white">Sitemap</h5>
            <ul className="space-y-3 font-sans text-sm font-light text-zinc-400">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Home Studio</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">Premium Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors">Ambience Gallery</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">The Salon Story</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">Contact & Address</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services Preview */}
          <div className="space-y-6">
            <h5 className="text-sm uppercase tracking-[0.2em] font-sans font-semibold text-white">Specialties</h5>
            <ul className="space-y-3 font-sans text-sm font-light text-zinc-400">
              <li>
                <span className="hover:text-gold transition-colors cursor-pointer" onClick={openBooking}>Balayage & Couture Color</span>
              </li>
              <li>
                <span className="hover:text-gold transition-colors cursor-pointer" onClick={openBooking}>Bespoke Bridal Design</span>
              </li>
              <li>
                <span className="hover:text-gold transition-colors cursor-pointer" onClick={openBooking}>Royal Shave & Beard Styling</span>
              </li>
              <li>
                <span className="hover:text-gold transition-colors cursor-pointer" onClick={openBooking}>Dermal Glow Hydra Facial</span>
              </li>
              <li>
                <span className="hover:text-gold transition-colors cursor-pointer" onClick={openBooking}>Therapeutic Hot Stone Massage</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-6">
            <h5 className="text-sm uppercase tracking-[0.2em] font-sans font-semibold text-white">Concierge</h5>
            <ul className="space-y-4 font-sans text-sm font-light text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>12 Haute Couture Boulevard, Suite 500, New York, NY 10019</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:+12125558888" className="hover:text-gold transition-colors">+1 (212) 555-8888</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href="mailto:concierge@aurasalons.com" className="hover:text-gold transition-colors">concierge@aurasalons.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between gap-4">
                    <span>Mon - Sat</span>
                    <span className="text-white">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sunday</span>
                    <span className="text-white">10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom / Copyright */}
        <div className="border-t border-zinc-900/60 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-500 font-sans tracking-wide text-center md:text-left">
            &copy; {new Date().getFullYear()} AURA Luxury Studios. All Rights Reserved. Crafted for the Elite.
          </div>
          <div className="flex items-center gap-6 text-xs text-zinc-500 font-sans tracking-wide">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Experience</Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-zinc-800 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300 text-zinc-400 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
