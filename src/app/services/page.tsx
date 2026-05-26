"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, DollarSign, Sparkles, Scissors, Smile, Gift, Calendar } from "lucide-react";
import { useAppointment } from "../../components/AppointmentProvider";

const categories = [
  { id: "hair", name: "Hair Atelier", icon: <Scissors size={16} /> },
  { id: "skin", name: "Advanced Skin", icon: <Smile size={16} /> },
  { id: "beard", name: "Barber & Shave", icon: <Scissors size={16} /> },
  { id: "bridal", name: "Bridal & Gala", icon: <Gift size={16} /> },
  { id: "spa", name: "Spa & Massage", icon: <Sparkles size={16} /> },
  { id: "nails", name: "Nail Atelier", icon: <Sparkles size={16} /> },
];

const servicesData = [
  // HAIR SERVICES
  {
    id: "h1",
    category: "hair",
    title: "Couture Haircut & Blowout",
    desc: "A meticulous dry-cutting consult, botanical wash, diagnostic hair mask, and signature styling that enhances your natural flow.",
    price: "$125",
    duration: "60 Min",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600",
  },
  {
    id: "h2",
    category: "hair",
    title: "Signature French Clay Balayage",
    desc: "Hand-painted organic blonde dimensional accents. Creates a soft, low-maintenance sun-kissed reflection tailored to you.",
    price: "$295",
    duration: "150 Min",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600",
  },
  {
    id: "h3",
    category: "hair",
    title: "Couture Full Gloss & Pigment",
    desc: "Ammonia-free restructuring glaze that injects dense pigment, mirror-like shine, and vital nutrition into dull locks.",
    price: "$160",
    duration: "90 Min",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600",
  },
  {
    id: "h4",
    category: "hair",
    title: "Japanese Head Spa Ritual",
    desc: "Scalp detoxification, microscopic analysis, herbal mist therapy, and an advanced pressure-point head massage to relieve deep tension.",
    price: "$150",
    duration: "75 Min",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600",
  },

  // SKIN TREATMENTS
  {
    id: "s1",
    category: "skin",
    title: "Dermal Glow Hydra Infusion",
    desc: "Advanced multi-stage fluid extraction and serum infusion to deeply exfoliate, hydrate, and plump fatigued skin.",
    price: "$210",
    duration: "60 Min",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600",
  },
  {
    id: "s2",
    category: "skin",
    title: "Caviar Cellular Restorative Facial",
    desc: "Ultra-luxury anti-aging treatment utilizing white sturgeon caviar extract, collagen shields, and sculpting jade therapy.",
    price: "$320",
    duration: "90 Min",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600",
  },
  {
    id: "s3",
    category: "skin",
    title: "LED Phototherapy Sculpting",
    desc: "High-density LED light array paired with microcurrent stimulation to stimulate ATP production, tighten muscles, and soothe inflammation.",
    price: "$180",
    duration: "50 Min",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600",
  },

  // BEARD GROOMING
  {
    id: "b1",
    category: "beard",
    title: "Royal Straight-Razor Shave",
    desc: "Traditional cutthroat blade shave with hot essential-oil towels, botanical pre-shave lather, facial massage, and ice-stone finish.",
    price: "$85",
    duration: "45 Min",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600",
  },
  {
    id: "b2",
    category: "beard",
    title: "Executive Beard Sculpting",
    desc: "Precise clipper and shear contour alignment matching your facial structure, finished with premium Oribe Sandalwood Beard Balm.",
    price: "$75",
    duration: "40 Min",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600",
  },

  // BRIDAL PACKAGES
  {
    id: "br1",
    category: "bridal",
    title: "The Atelier Bride (Trial + Big Day)",
    desc: "Full comprehensive package including pre-wedding styling trial, private bridal suite experience, champagne, hair, veil placement, and HD makeup.",
    price: "$780",
    duration: "240 Min",
    image: "https://images.unsplash.com/photo-1522337094846-8a818192de2f?q=80&w=600",
  },
  {
    id: "br2",
    category: "bridal",
    title: "Gala Evening Red Carpet Glamour",
    desc: "High-definition camera-ready makeup application, dynamic structural updos, eyelash extensions, and full-body shimmer setting.",
    price: "$250",
    duration: "95 Min",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600",
  },

  // SPA & RELAXATION
  {
    id: "sp1",
    category: "spa",
    title: "Sensory Hot Stone Full Massage",
    desc: "Heated volcanic basalt stones combined with deep Swedish strokes to melt hyper-contracted muscles and balance internal energy centers.",
    price: "$240",
    duration: "90 Min",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600",
  },
  {
    id: "sp2",
    category: "spa",
    title: "Aromatherapy Detoxification",
    desc: "Custom-blended French lavender, eucalyptus, and rose absolute essential oils paired with lymphatic drainage strokes to boost circulation.",
    price: "$195",
    duration: "75 Min",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600",
  },

  // NAIL SERVICES
  {
    id: "n1",
    category: "nails",
    title: "Luxury Caviar Gel Manicure",
    desc: "Delicate nail prep, dynamic cuticle care, organic walnut skin scrub, luxury paraffin wrap, gel coating, and signature hand massage.",
    price: "$95",
    duration: "60 Min",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600",
  },
  {
    id: "n2",
    category: "nails",
    title: "Aura Botanical Pedicure Spa",
    desc: "Soak in essential rose petal bath, organic volcanic scrub, deep callus sanding, volcanic clay leg mask, hot towels, and gel lacquer coating.",
    price: "$120",
    duration: "75 Min",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c9?q=80&w=600",
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("hair");
  const { openBooking } = useAppointment();

  const filteredServices = servicesData.filter((service) => service.category === activeCategory);

  return (
    <div className="relative w-full pt-32 pb-24">
      {/* Texture background */}
      <div className="absolute inset-0 luxury-noise pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Immersive Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium">The Signature Directory</span>
          <h1 className="text-5xl md:text-7xl font-display font-light text-white leading-tight">
            Menu of <span className="italic text-gold-gradient font-normal">Luxury Services</span>
          </h1>
          <p className="text-zinc-400 font-sans font-light text-sm md:text-base leading-relaxed">
            Every service at AURA begins with an expert custom consultation and is structured as a restorative sensory ritual. We blend elite products with handcrafted artistry.
          </p>
        </div>

        {/* Categories Menu Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 border-b border-zinc-900 pb-8">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-6 py-3.5 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 flex items-center gap-2 cursor-pointer ${
                  isSelected 
                    ? "text-black bg-gold-gradient shadow-[0_0_20px_rgba(197,168,128,0.25)]" 
                    : "text-zinc-400 border border-zinc-900 hover:border-zinc-800 hover:text-white bg-transparent"
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                onClick={openBooking}
                className="group flex flex-col sm:flex-row bg-[#121212] border border-zinc-900/80 hover:border-gold/30 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_10px_35px_rgba(0,0,0,0.45)]"
              >
                {/* Image */}
                <div className="relative w-full sm:w-44 lg:w-56 h-56 sm:h-auto overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 sm:hidden" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-white group-hover:text-gold transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-xs md:text-sm font-sans font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Metadata & CTAs */}
                  <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap items-center justify-between gap-4 font-sans">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5 text-zinc-500">
                        <Clock size={14} className="text-gold" />
                        <span className="text-xs uppercase tracking-wider">{service.duration}</span>
                      </div>
                      <div className="text-gold font-semibold text-base tracking-wide">
                        {service.price}
                      </div>
                    </div>
                    
                    <button className="text-[10px] font-semibold uppercase tracking-widest text-white group-hover:text-gold transition-colors flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 py-1.5 px-3.5 rounded group-hover:border-gold/30">
                      Reserve <Sparkles size={10} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* VIP Custom Consultation Notice */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#121212] via-[#1c1c1c]/50 to-[#121212] border border-zinc-900 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium">Bespoke Design Suite</span>
          <h2 className="text-3xl font-display font-semibold text-white">Require a Private Styling Suite or Custom Bridal Concierge?</h2>
          <p className="text-zinc-400 font-sans font-light text-sm max-w-2xl mx-auto leading-relaxed">
            Our luxury studio features double-enclosed VIP rooms for total acoustic and visual privacy, catering to celebrity guests, high-profile clients, or special events. Custom packages can be curated by our general manager.
          </p>
          <div className="flex flex-wrap gap-4 justify-center font-sans">
            <button
              onClick={openBooking}
              className="bg-gold-gradient text-black font-semibold text-xs tracking-wider uppercase py-3.5 px-8 rounded hover:bg-gold-light transition-all duration-300 cursor-pointer"
            >
              Inquire VIP Suite
            </button>
            <a
              href="tel:+12125558888"
              className="border border-zinc-800 hover:border-gold text-zinc-300 hover:text-gold font-semibold text-xs tracking-wider uppercase py-3.5 px-8 rounded transition-all duration-300"
            >
              Call Manager
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
