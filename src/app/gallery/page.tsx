"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles, Sliders } from "lucide-react";

// Image database
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=800",
    title: "Master Styling Hall",
    category: "ambience",
    desc: "A view of our main styling lounge, outfitted with gold custom brass, bespoke Italian leather chairs, and private acoustic layouts.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800",
    title: "Therapeutic Hydrotherapy Suite",
    category: "ambience",
    desc: "Our high-end spa room featuring individual climate controls, soft acoustic damping, and volcanic hot stone setups.",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800",
    title: "Lacquered Nail Atelier",
    category: "ambience",
    desc: "Dedicated suite for elite hand manicures and organic luxury botanical scrubs.",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800",
    title: "Editorial Hair Blowout",
    category: "hair",
    desc: "A meticulous silk finishing blow drying treatment performed by our color directors.",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800",
    title: "Signature French Clay Balayage",
    category: "hair",
    desc: "Premium organic hand-painted dimensional highlights designed to catch structural light.",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800",
    title: "Couture Hair Glossing",
    category: "hair",
    desc: "Applying nourishing restructuring glaze to lock in rich pigment and maximum reflection.",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800",
    title: "Dermal Glow Skin Therapy",
    category: "skincare",
    desc: "Deep hydration Hydra facial and botanical dermal infusion at our advanced skincare clinic.",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800",
    title: "Cellular Jade Facial Sculpting",
    category: "skincare",
    desc: "Lymphatic facial massage using cooled sturgeon caviar compounds and luxury jade rollers.",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800",
    title: "Bridal Cosmetics & Design",
    category: "makeup",
    desc: "A premium, camera-ready bridal trial showcasing glowing matte skincare and eye shading.",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800",
    title: "Barber Razor Shaving",
    category: "makeup",
    desc: "An executive cutthroat blade shave with steamed essential-oil infused wraps.",
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Before/After Slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => {
    const originalImage = filteredImages[index];
    const originalIndex = galleryImages.findIndex(img => img.id === originalImage.id);
    setLightboxIndex(originalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  // Drag handler for Before/After Slider
  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, container);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, container);
  };

  return (
    <div className="relative w-full pt-32 pb-24">
      {/* Background Texture */}
      <div className="absolute inset-0 luxury-noise pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium">Visual Atelier</span>
          <h1 className="text-5xl md:text-7xl font-display font-light text-white leading-tight">
            The Exhibition <br />
            <span className="italic text-gold-gradient font-normal">of Aura Artistry</span>
          </h1>
          <p className="text-zinc-400 font-sans font-light text-sm md:text-base leading-relaxed">
            Delight in the visual archives of our luxury unisex studios. Browse our premium client makeovers, structural cuts, before/after transformations, and high-fashion aesthetics.
          </p>
        </div>

        {/* ====================================================
            BEFORE/AFTER INTERACTIVE TRANSFORM WIDGET
            ==================================================== */}
        <div className="mb-28 max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium flex items-center justify-center gap-1.5">
              <Sliders size={12} /> Interactive Transformation
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-white">Before & After Balayage</h3>
            <p className="text-zinc-400 font-sans font-light text-xs md:text-sm">
              Click and drag the gold handle left or right to witness Alessandro Silva's high-definition structural coloring.
            </p>
          </div>

          {/* Interactive Before/After container */}
          <div 
            className="relative h-[480px] w-full overflow-hidden rounded-2xl border border-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.5)] select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            {/* After Image (Full Background) */}
            <img 
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200" 
              alt="After Transformation" 
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-sm border border-gold/30 text-gold px-3.5 py-1.5 rounded text-xs font-sans tracking-widest uppercase font-semibold">
              After: Couture Finish
            </div>

            {/* Before Image (Cropped Overlay) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200" 
                alt="Before Transformation" 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: "100%", height: "100%" }}
                draggable="false"
              />
              <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm border border-zinc-700 text-zinc-300 px-3.5 py-1.5 rounded text-xs font-sans tracking-widest uppercase font-semibold">
                Before: Basic Texture
              </div>
            </div>

            {/* Vertical Golden Drag Handle Line */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-gold-gradient cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gold-gradient text-black flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(197,168,128,0.5)] border border-white/20 select-none">
                <span className="text-xs font-semibold">&harr;</span>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            THE PORTFOLIO GRID SECTION
            ==================================================== */}
        <div className="space-y-12">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 border-b border-zinc-900 pb-8">
            {["all", "ambience", "hair", "skincare", "makeup"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? "text-black bg-gold-gradient"
                    : "text-zinc-400 border border-zinc-900 hover:border-zinc-800 hover:text-white bg-transparent"
                }`}
              >
                {filter === "all" ? "All Artifacts" : filter}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={img.id}
                  onClick={() => openLightbox(index)}
                  className="group relative h-80 rounded-xl overflow-hidden border border-zinc-900/60 hover:border-gold/30 transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Zoom Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="w-10 h-10 bg-gold/15 border border-gold/40 rounded-full flex items-center justify-center text-gold backdrop-blur-sm shadow-[0_0_15px_rgba(197,168,128,0.2)]">
                      <ZoomIn size={18} />
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 pr-6 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">
                      {img.category}
                    </span>
                    <h4 className="text-lg font-display font-medium text-white mt-1 group-hover:text-gold-light transition-colors">
                      {img.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* ====================================================
          CINEMATIC LIGHTBOX / SLIDER MODAL
          ==================================================== */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Lightbox Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl z-10 flex flex-col md:flex-row bg-[#0A0A0A] border border-zinc-900 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Image side */}
              <div className="relative flex-grow h-[320px] md:h-[550px] bg-black flex items-center justify-center">
                <img
                  src={galleryImages[lightboxIndex].url}
                  alt={galleryImages[lightboxIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Left arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-gold hover:text-black border border-zinc-800 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Right arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-gold hover:text-black border border-zinc-800 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Sidebar Info side */}
              <div className="w-full md:w-80 p-8 flex flex-col justify-between bg-[#121212] border-t md:border-t-0 md:border-l border-zinc-900 relative">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-gold transition-colors duration-300 p-2 rounded-full hover:bg-white/5 cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="space-y-6 pt-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">
                      Exhibited: {galleryImages[lightboxIndex].category}
                    </span>
                    <h3 className="text-2xl font-display font-semibold text-white leading-tight">
                      {galleryImages[lightboxIndex].title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-xs md:text-sm font-sans font-light leading-relaxed">
                    {galleryImages[lightboxIndex].desc}
                  </p>
                </div>

                <div className="pt-8 border-t border-zinc-900/60 flex items-center justify-between text-xs text-zinc-500 font-sans">
                  <span>Artifact {lightboxIndex + 1} of {galleryImages.length}</span>
                  <span className="text-gold flex items-center gap-1">AURA Collection <Sparkles size={10} /></span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
