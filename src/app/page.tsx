"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Sparkle, 
  Scissors, 
  Smartphone, 
  Star,
  Quote
} from "lucide-react";
import { useAppointment } from "../components/AppointmentProvider";

const previewServices = [
  {
    title: "Couture Hair Styling",
    desc: "Bespoke cuts and luxury finish engineered by international master stylists to enhance your unique structural aesthetics.",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800",
    price: "From $120",
  },
  {
    title: "Balayage & Couture Color",
    desc: "Hand-painted dimensional hues using organic French clay formulas, tailored specifically to your skin tone and movement.",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800",
    price: "From $280",
  },
  {
    title: "Royal Beard Grooming",
    desc: "Traditional hot-towel straight-razor shave combined with premium botanical oils and expert facial beard sculpting.",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800",
    price: "From $85",
  },
  {
    title: "Bespoke Dermal Facials",
    desc: "Revitalizing micro-infusions and deep hydration treatments that leave your skin exceptionally radiant and sculpted.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800",
    price: "From $190",
  },
  {
    title: "Red Carpet Makeup",
    desc: "Fashion-forward, high-definition makeup application for private events, luxury weddings, and cinematic galas.",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800",
    price: "From $250",
  },
  {
    title: "Botanical Hair Spa",
    desc: "Deep restructuring hair mask infused with essential oils, combined with a therapeutic Japanese head massage.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800",
    price: "From $150",
  },
];

const pillars = [
  {
    icon: <Scissors className="text-gold w-6 h-6" />,
    title: "Master Artists",
    desc: "Our directors and technicians are sourced globally, holding certifications from premium academies in Milan, Paris, and Tokyo.",
  },
  {
    icon: <Sparkle className="text-gold w-6 h-6" />,
    title: "Haute Formulations",
    desc: "We exclusively formulate with premium European products—Oribe, Balmain Hair Couture, and luxury botanical elixirs.",
  },
  {
    icon: <Award className="text-gold w-6 h-6" />,
    title: "The Sensory Experience",
    desc: "Complimentary champagne bar, private acoustic zoning, heated leather styling chairs, and absolute relaxation focus.",
  },
  {
    icon: <ShieldCheck className="text-gold w-6 h-6" />,
    title: "Surgical Hygiene",
    desc: "Medical-grade sterilization for all implements, private air filtration, and individual single-use ecological linens.",
  },
  {
    icon: <HeartHandshake className="text-gold w-6 h-6" />,
    title: "Bespoke Consultations",
    desc: "Detailed 15-minute microscopic hair and skin diagnostics before every service to curate a truly custom care roadmap.",
  },
  {
    icon: <Smartphone className="text-gold w-6 h-6" />,
    title: "Digital Concierge",
    desc: "Seamless virtual waitlists, SMS reminders, direct chat line with your stylist, and cashless priority invitations.",
  },
];

const galleryPreview = [
  {
    url: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=600",
    title: "Main Styling Room",
    size: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=600",
    title: "Therapeutic Spa Suite",
    size: "col-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600",
    title: "Lacquered Nail Atelier",
    size: "col-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600",
    title: "Editorial Cuts",
    size: "col-span-1 md:col-span-2",
  },
];

const testimonials = [
  {
    quote: "AURA is not merely a salon; it is a vital sensory sanctuary. Alessandro Silva is a structural hair genius who understands how weight and flow complement facial bone structure. The service is impeccably luxury.",
    author: "Elena Rostova",
    role: "Vogue Creative Contributor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
    rating: 5,
  },
  {
    quote: "The Royal Barbering is the finest ritual I have experienced globally. From the eucalyptus hot steam towels to the premium Oribe oils and precise straight blade trim by Marcus, it is pure art.",
    author: "Maximilian Vane",
    role: "Architect & Designer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    rating: 5,
  },
  {
    quote: "Immaculate environment, high-end design, and organic champagne. Clarisse curated a custom golden balayage that has completely transformed my confidence. Absolutely elite standard.",
    author: "Victoria Sterling",
    role: "Luxury Brand Consultant",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
    rating: 5,
  },
];

export default function Home() {
  const { openBooking } = useAppointment();

  return (
    <div className="relative w-full">
      {/* Texture micro-layer */}
      <div className="absolute inset-0 luxury-noise pointer-events-none opacity-20 z-10" />

      {/* ====================================================
          SECTION 1 — HERO SECTION
          ==================================================== */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Fullscreen Video/Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=1800"
            alt="AURA Luxury Salon Background"
            className="w-full h-full object-cover opacity-45 scale-105 filter saturate-[0.85] contrast-[1.05]"
          />
          {/* Luxurious Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/80" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-gold font-sans font-semibold inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 animate-spin-slow" /> Haute Couture Beauty Studio
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-light text-white tracking-wide leading-tight">
              Luxury Grooming <br />
              <span className="font-semibold italic text-gold-gradient">Redefined</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-zinc-300 text-base md:text-xl font-sans font-light max-w-2xl mx-auto leading-relaxed"
          >
            Indulge in high-fashion cuts, organic coloring, and advanced sensory wellness, customized by international master artists.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center font-sans"
          >
            <button
              onClick={openBooking}
              className="w-full sm:w-auto bg-gold-gradient text-black py-4 px-8 rounded font-medium tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-500 hover:shadow-[0_0_25px_rgba(197,168,128,0.25)] text-xs cursor-pointer hover-shimmer"
            >
              Book Invitation
            </button>
            <Link
              href="/services"
              className="w-full sm:w-auto btn-luxury-outline text-white py-4 px-8 rounded font-medium tracking-[0.2em] uppercase hover:text-gold transition-all duration-500 text-xs flex items-center justify-center gap-2"
            >
              Explore Services <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Luxury scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-sans">
              Discover Aura
            </span>
            <div className="w-[1px] h-12 bg-zinc-800 relative overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-full h-4 bg-gold top-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          SECTION 2 — SERVICES PREVIEW
          ==================================================== */}
      <section className="bg-[#0A0A0A] py-28 border-t border-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium">Bespoke Rituals</span>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-white">
                Bespoke Specialty Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs uppercase tracking-[0.2em] font-sans text-gold hover:text-white flex items-center gap-2 group transition-colors"
            >
              View Full Menu <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={openBooking}
                className="group relative bg-[#121212] rounded-xl overflow-hidden border border-zinc-900 hover:border-gold/30 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              >
                {/* Image Wrap */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
                  <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-zinc-800/80 text-gold px-3 py-1.5 rounded text-xs font-sans font-medium tracking-wide">
                    {service.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-semibold text-white group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm font-sans font-light leading-relaxed h-16 overflow-hidden">
                    {service.desc}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-wider text-gold group-hover:text-white transition-colors duration-300 font-sans font-medium">
                    Reserve Experience <Sparkles size={12} className="group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 3 — WHY CHOOSE US
          ==================================================== */}
      <section className="bg-[#070707] py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full filter blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium">Artistry & Excellence</span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white">
              The Six Pillars of AURA
            </h2>
            <p className="text-zinc-400 font-sans font-light text-sm md:text-base leading-relaxed">
              We separate ourselves through surgical execution, bespoke hospitality, and sourcing the finest elements in the global beauty industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-[#121212]/50 backdrop-blur-md rounded-xl p-8 border border-zinc-900 hover:border-gold/20 hover:bg-[#121212] transition-all duration-500 space-y-4 shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white">{pillar.title}</h3>
                <p className="text-zinc-400 text-sm font-sans font-light leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 4 — GALLERY PREVIEW
          ==================================================== */}
      <section className="bg-[#0A0A0A] py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium">Ambience Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-white">
                Inside The Atelier
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-xs uppercase tracking-[0.2em] font-sans text-gold hover:text-white flex items-center gap-2 group transition-colors"
            >
              Browse Gallery <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryPreview.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-xl h-80 ${item.size || ""}`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                  <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">Salon Ambience</span>
                  <h4 className="text-xl font-display font-semibold text-white mt-1">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 5 — CLIENT TESTIMONIALS
          ==================================================== */}
      <section className="bg-[#070707] py-28 border-t border-zinc-950/60 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -bottom-[20%] right-[10%] w-[500px] h-[500px] bg-gold/2 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium">Verified Elegance</span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white">
              The Society Reviews
            </h2>
            <p className="text-zinc-400 font-sans font-light text-sm">
              Read testimonies of prominent figures and creative leaders who call AURA their absolute styling base.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <motion.div
                key={test.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#121212] rounded-xl p-8 border border-zinc-900 flex flex-col justify-between space-y-8 relative"
              >
                <Quote className="absolute top-6 right-6 text-zinc-900 w-12 h-12 -z-0" />
                
                <div className="space-y-4 relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="fill-gold text-gold w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm font-sans font-light leading-relaxed italic">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-900 relative z-10">
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="w-12 h-12 rounded-full object-cover border border-zinc-800"
                  />
                  <div className="font-sans">
                    <h4 className="text-sm font-semibold text-white tracking-wide">{test.author}</h4>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-light">{test.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 6 — BOOKING CTA
          ==================================================== */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-[#121212] border border-gold/25 rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden shadow-[0_0_50px_rgba(197,168,128,0.1)]">
            {/* Texture background */}
            <div className="absolute inset-0 luxury-noise pointer-events-none opacity-40" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full filter blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full filter blur-[80px]" />

            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium inline-block">Secure Your Suite</span>
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-white leading-tight">
                Book Your Luxury <br />
                <span className="italic text-gold-gradient font-light">AURA Experience</span> Today
              </h2>
              <p className="text-zinc-400 font-sans font-light text-sm md:text-base leading-relaxed">
                Whether seeking an editorial transformation or a therapeutic botanical escape, our master artists await. Contact the concierge or book instantly via mobile.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 max-w-md mx-auto font-sans">
              <button
                onClick={openBooking}
                className="w-full bg-gold-gradient text-black py-4 px-8 rounded font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300 text-xs shadow-md cursor-pointer hover-shimmer"
              >
                Book Reservation
              </button>
              <a
                href="https://wa.me/12125558888?text=Hi%20Aura%20Salon,%20I'd%20like%20to%20request%20a%20luxury%20appointment%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-zinc-800 hover:border-gold hover:text-gold text-zinc-300 py-4 px-8 rounded font-semibold tracking-[0.2em] uppercase transition-all duration-300 text-xs bg-black flex items-center justify-center gap-2"
              >
                WhatsApp Booking
              </a>
            </div>
            
            <div className="pt-2 relative z-10 text-[11px] text-zinc-500 font-sans tracking-widest uppercase">
              Immediate Concierge: <a href="tel:+12125558888" className="text-gold font-medium hover:underline">+1 (212) 555-8888</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
