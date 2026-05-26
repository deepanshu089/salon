"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle, 
  MessageSquare, 
  User,
  Send
} from "lucide-react";

const instagramSnaps = [
  { id: 1, url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=300", tag: "@aura_studios" },
  { id: 2, url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=300", tag: "@aura_styling" },
  { id: 3, url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=300", tag: "@aura_headspa" },
  { id: 4, url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=300", tag: "@aura_skincare" },
  { id: 5, url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300", tag: "@aura_bridal" },
  { id: 6, url: "https://images.unsplash.com/photo-1600611598977-ee59b55239a1?q=80&w=300", tag: "@aura_ambience" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Elite Service Reservation",
    message: "",
    refreshment: "Champagne Brut",
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate luxury validation
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Elite Service Reservation",
      message: "",
      refreshment: "Champagne Brut",
    });
    setFormState("idle");
  };

  return (
    <div className="relative w-full pt-32 pb-24">
      {/* Background Texture */}
      <div className="absolute inset-0 luxury-noise pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium">Bespoke Hospitality</span>
          <h1 className="text-5xl md:text-7xl font-display font-light text-white leading-tight">
            Connect with <span className="italic text-gold-gradient font-normal">Our Concierge</span>
          </h1>
          <p className="text-zinc-400 font-sans font-light text-sm md:text-base leading-relaxed">
            Have a custom inquiry, private styling request, or wishing to secure a reservation? Drop us a line below. Our concierge team will reach back within 2 business hours.
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 items-start">
          
          {/* COLUMN 1 — BEAUTIFUL INQUIRY FORM (Lg: col-span-7) */}
          <div className="lg:col-span-7 bg-[#121212] border border-zinc-900 rounded-2xl p-8 md:p-10 shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-gradient" />
            
            <AnimatePresence mode="wait">
              {formState !== "success" ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">Priority routing</span>
                    <h3 className="text-2xl font-display font-semibold text-white">Send An Inquiry</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-sans">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full bg-[#1c1c1c] border border-zinc-800 focus:border-gold py-3 px-4 rounded text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors font-sans"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-sans">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-[#1c1c1c] border border-zinc-800 focus:border-gold py-3 px-4 rounded text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-sans">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@luxurylife.com"
                        className="w-full bg-[#1c1c1c] border border-zinc-800 focus:border-gold py-3 px-4 rounded text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-sans">Subject / Department</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-[#1c1c1c] border border-zinc-800 focus:border-gold py-3 px-4 rounded text-sm text-white focus:outline-none transition-colors font-sans appearance-none"
                        >
                          <option>Elite Service Reservation</option>
                          <option>Bridal & Private Gala Inquiries</option>
                          <option>VIP Sealed Suite Bookings</option>
                          <option>Media & Brand Collaboration</option>
                          <option>Complaints & Suggestions</option>
                        </select>
                      </div>

                      {/* Refreshment Option */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-sans">Refreshment Preference</label>
                        <select
                          name="refreshment"
                          value={formData.refreshment}
                          onChange={handleChange}
                          className="w-full bg-[#1c1c1c] border border-zinc-800 focus:border-gold py-3 px-4 rounded text-sm text-white focus:outline-none transition-colors font-sans appearance-none"
                        >
                          <option>Champagne Brut</option>
                          <option>Tuscan Red Wine</option>
                          <option>Organic Japanese Green Tea</option>
                          <option>Bespoke Cold Brew Espresso</option>
                          <option>Sparkling Elderflower Soda</option>
                          <option>Mineral Water (Infused Citrus)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-sans">Your Message</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Detail your styling dreams, skin concerns, or customized scheduling wishes..."
                        className="w-full bg-[#1c1c1c] border border-zinc-800 focus:border-gold p-4 rounded text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full bg-gold-gradient text-black py-4 px-6 rounded font-sans font-medium tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300 text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {formState === "submitting" ? (
                          <>Connecting to Concierge...</>
                        ) : (
                          <>
                            Transmit Inquiry <Send size={12} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="mx-auto w-16 h-16 bg-gold/10 border border-gold/40 flex items-center justify-center rounded-full text-gold">
                    <CheckCircle size={32} />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium">Inquiry Secured</span>
                    <h3 className="text-3xl font-display font-semibold text-white">Message Transmitted</h3>
                    <p className="text-zinc-400 text-sm max-w-md mx-auto font-sans font-light">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>. Your inquiry regarding <span className="text-white font-medium">{formData.subject}</span> has been routed to our general manager.
                    </p>
                  </div>
                  <div className="bg-[#1c1c1c] border border-zinc-800 rounded-xl p-5 max-w-sm mx-auto text-left space-y-2 text-xs font-sans">
                    <div className="flex justify-between pb-1.5 border-b border-zinc-900 text-zinc-500">
                      <span>Preferred Refreshment</span>
                      <span className="text-zinc-300 font-medium">{formData.refreshment}</span>
                    </div>
                    <div className="flex justify-between pt-1.5 text-zinc-500">
                      <span>Routing Department</span>
                      <span className="text-gold font-medium uppercase">{formData.subject.split(" ")[0]}</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={resetForm}
                      className="border border-zinc-800 hover:border-gold hover:text-gold text-zinc-300 py-3 px-8 rounded text-xs font-sans tracking-widest uppercase transition-all duration-300 cursor-pointer"
                    >
                      Write New Message
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* COLUMN 2 — STUDIO DETAILS & MAPS (Lg: col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Panels */}
            <div className="bg-[#121212] border border-zinc-900 rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-display font-semibold text-white">Atelier New York</h3>
              
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
                  <a href="mailto:concierge@aurasalons.com" className="hover:text-gold transition-colors font-medium">concierge@aurasalons.com</a>
                </li>
                <li className="flex items-start gap-3 pt-2 border-t border-zinc-900/60">
                  <Clock size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between gap-6">
                      <span>Mon - Sat</span>
                      <span className="text-white">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span>Sunday</span>
                      <span className="text-white">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Direct WhatsApp Call */}
              <div className="pt-2 border-t border-zinc-900/60">
                <a
                  href="https://wa.me/12125558888?text=Hi%20Aura%20Salon,%20I'd%20like%20to%20chat%20with%20a%20stylist."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-4 rounded flex items-center justify-center gap-2 text-xs font-sans font-semibold tracking-widest uppercase transition-all duration-300"
                >
                  <MessageSquare size={16} /> Direct WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Custom Styled Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-zinc-900 shadow-md h-80 relative bg-[#121212]">
              {/* Gold borders */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-gradient z-10" />
              
              <iframe
                title="AURA Luxury Salon Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0967329598284!2d-73.9740520234164!3d40.76043267138547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258faec679e95%3A0xe9f79b369dbd1f4b!2sAvenue%20Montaigne!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(110%) saturate(60%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* ====================================================
            INSTAGRAM GALLERY SECTION
            ==================================================== */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium flex items-center justify-center gap-1.5">
              <svg className="w-3 h-3 fill-current text-gold" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg> Digital Footprint
            </span>
            <h3 className="text-3xl font-display font-semibold text-white">#InsideAURA</h3>
            <p className="text-zinc-400 font-sans font-light text-xs md:text-sm">
              Follow our daily digital lookbook. Double tap to capture behind-the-scenes transformations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramSnaps.map((snap) => (
              <a
                key={snap.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden border border-zinc-900/60 hover:border-gold/30 transition-all duration-500"
              >
                <img
                  src={snap.url}
                  alt="AURA Instagram snap"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-1.5">
                  <svg className="w-4 h-4 fill-current text-gold" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span className="text-[10px] font-sans tracking-wide text-zinc-300">{snap.tag}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
