"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, Compass, Heart, Users, Quote, Shield } from "lucide-react";
import { useAppointment } from "../../components/AppointmentProvider";

const directors = [
  {
    name: "Alessandro Silva",
    role: "Founder & Master Art Director",
    bio: "With over 18 years crafting haute-couture styles in Milan and Paris, Alessandro is renowned for his structural dry-cutting technique that highlights unique facial bone configurations.",
    specialty: "Structural Cuts & Editorial Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    quote: "Hair is three-dimensional sculpture in movement. It must adapt to the way you walk, talk, and exist.",
  },
  {
    name: "Clarisse Dupont",
    role: "Couture Color Director",
    bio: "Trained at the prestigious Paris Color Academy, Clarisse pioneered our signature French clay hand-painted balayage. She creates highly dimensional hues that require zero harsh ammonia.",
    specialty: "Balayage, Color Correction, & Gloss",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400",
    quote: "Color is light captured. I design dimensional reflections that complement individual skin undertones.",
  },
  {
    name: "Marcus Vance",
    role: "Executive Barber Specialist",
    bio: "Marcus spent 14 years in luxury Mayfair barbershops, perfecting classical straight-razor alignments. He combines traditional hot towel steam grooming with advanced beard skin care.",
    specialty: "Hot Towel Razor Shaves & Beard Sculpting",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    quote: "Grooming is a meditative ritual. It is where traditional razor precision meets modern botanical health.",
  },
  {
    name: "Yuki Tanaka",
    role: "Senior Dermal Therapist",
    bio: "Hailing from Kyoto, Yuki is a master of Japanese facial pressure massage and dermal hydration. She customizes our caviar cellular facials using advanced organic micro-infusion.",
    specialty: "Hydrafacials, Cellular Peels, & Jade Therapy",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
    quote: "Skin is a mirror of holistic wellness. We soothe inflammation to unlock an organic, lasting cellular glow.",
  },
];

const values = [
  {
    icon: <Compass className="text-gold w-6 h-6" />,
    title: "Artistic Direction",
    desc: "We do not believe in templates. Every styling cut is engineered after a detailed microscopic mapping of your hair structure and natural crown fall.",
  },
  {
    icon: <Shield className="text-gold w-6 h-6" />,
    title: "Ecological luxury",
    desc: "AURA is committed to green luxury. We formulate exclusively with biodynamic, cruelty-free European ingredients that contain no sulphates or petroleum.",
  },
  {
    icon: <Award className="text-gold w-6 h-6" />,
    title: "Acoustic & Sensory Zoning",
    desc: "Our space is engineered with custom sound insulation, private botanical lighting, and signature room aromatherapy to guarantee a deeply restorative escape.",
  },
  {
    icon: <Users className="text-gold w-6 h-6" />,
    title: "Global Apprenticeships",
    desc: "All technicians under our directors complete 500 hours of specialized internal training annually to master advanced styling, skin science, and safety protocols.",
  },
];

export default function About() {
  const { openBooking } = useAppointment();

  return (
    <div className="relative w-full pt-32 pb-24">
      {/* Texture Background */}
      <div className="absolute inset-0 luxury-noise pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium">The Aura Philosophy</span>
          <h1 className="text-5xl md:text-7xl font-display font-light text-white leading-tight">
            Crafting Structural <br />
            <span className="italic text-gold-gradient font-normal">Beauty & Wellness</span>
          </h1>
          <p className="text-zinc-400 font-sans font-light text-sm md:text-base leading-relaxed">
            Founded in 2012, AURA represents a global unification of high-fashion cosmetology, advanced structural scalp diagnostics, and high-end hospitality.
          </p>
        </div>

        {/* ====================================================
            THE NARRATIVE SECTION (Brand story & large visual)
            ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
          {/* Narrative Text */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-semibold">The Heritage</span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white leading-tight">
              Where French Precision <br /> Meets Italian Organic Chemistry
            </h2>
            <p className="text-zinc-300 font-sans font-light text-sm md:text-base leading-relaxed">
              AURA began as a small styling laboratory in Rome. Our mission was simple: eliminate the aggressive chemicals of standard commercial salons and replace them with rich, organic botanical extracts, without sacrificing the high-definition durability of editorial cuts.
            </p>
            <p className="text-zinc-400 font-sans font-light text-sm leading-relaxed">
              Over the past decade, we expanded our studios to New York, establishing a bespoke studio model. We designed a space where styling chairs are placed in double-acoustically isolated zones, allowing our guests to rest, listen to custom music, or hold private consultations in complete serenity.
            </p>
            
            <div className="pt-4">
              <button
                onClick={openBooking}
                className="bg-gold-gradient text-black font-semibold text-xs tracking-widest uppercase py-4 px-8 rounded hover:bg-gold-light transition-all duration-300 shadow-md cursor-pointer hover-shimmer"
              >
                Inquire For Consultation
              </button>
            </div>
          </div>

          {/* Narrative Visual */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <img
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800"
              alt="AURA Salon Environment"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            <div className="absolute bottom-8 left-8 right-8 bg-[#121212]/80 backdrop-blur-md border border-gold/20 p-6 rounded-xl space-y-2">
              <Quote className="text-gold w-6 h-6" />
              <p className="text-zinc-300 text-xs italic font-sans font-light leading-relaxed">
                &ldquo;We created a space that doesn't feel like a factory. AURA is a sensory ritual where time slows down, allowing hair and skin to restore in peace.&rdquo;
              </p>
              <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                — Alessandro Silva, Founder
              </span>
            </div>
          </div>
        </div>

        {/* ====================================================
            THE CORE VALUES GRID
            ==================================================== */}
        <div className="mb-28 bg-[#070707] py-16 px-8 md:px-12 rounded-2xl border border-zinc-900/60 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/3 rounded-full filter blur-[100px]" />
          
          <div className="relative z-10 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-semibold">Bespoke Standards</span>
              <h2 className="text-3xl font-display font-semibold text-white">Our Commitments to You</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-[#121212] border border-zinc-800/80 rounded-xl p-8 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/30">
                    {v.icon}
                  </div>
                  <h4 className="text-lg font-display font-semibold text-white">{v.title}</h4>
                  <p className="text-zinc-400 text-sm font-sans font-light leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ====================================================
            THE TEAM SECTION (Stylist cards)
            ==================================================== */}
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">The Creators</span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white">The Master Directors</h2>
            <p className="text-zinc-400 font-sans font-light text-sm">
              Our specialists are holding international certifications and lead styling designs across top-tier global galas and private estates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directors.map((stylist, index) => (
              <motion.div
                key={stylist.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#121212] rounded-2xl overflow-hidden border border-zinc-900 hover:border-gold/20 transition-all duration-500 shadow-lg flex flex-col sm:flex-row group"
              >
                {/* Visual */}
                <div className="relative w-full sm:w-48 lg:w-56 h-64 sm:h-auto overflow-hidden flex-shrink-0 bg-zinc-950">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/10 sm:hidden" />
                </div>

                {/* Info Text */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6">
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">{stylist.role}</span>
                      <h3 className="text-2xl font-display font-semibold text-white mt-0.5">{stylist.name}</h3>
                    </div>
                    <p className="text-zinc-400 text-xs md:text-sm font-sans font-light leading-relaxed">
                      {stylist.bio}
                    </p>
                    <div className="text-[11px] text-zinc-500 font-sans">
                      <span className="text-gold font-medium uppercase tracking-wider">Specialty: </span>
                      {stylist.specialty}
                    </div>
                  </div>

                  {/* Stylist wisdom quote */}
                  <div className="border-t border-zinc-900/60 pt-4 relative">
                    <Quote className="absolute top-3 right-0 text-zinc-900/60 w-8 h-8" />
                    <p className="text-[11px] text-zinc-400 italic font-sans font-light pr-8 leading-normal relative z-10">
                      &ldquo;{stylist.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
