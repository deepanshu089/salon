"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, Clock, User, Phone, Mail, Award, CheckCircle, Sparkles } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "Hair Styling & Design",
    stylist: "No Preference (First Available)",
    notes: "",
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate luxury appointment processing
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "Hair Styling & Design",
      stylist: "No Preference (First Available)",
      notes: "",
    });
    setFormState("idle");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl glassmorphism z-10 max-h-[90vh] flex flex-col"
          >
            {/* Ambient luxury glow lines */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-gradient" />
            
            {/* Close Button */}
            <button
              onClick={resetForm}
              className="absolute top-4 right-4 text-zinc-400 hover:text-gold transition-colors duration-300 p-2 rounded-full hover:bg-white/5"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto p-8 md:p-10 flex-grow">
              {formState === "idle" && (
                <>
                  <div className="text-center mb-8">
                    <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium">Bespoke Experience</span>
                    <h3 className="text-3xl md:text-4xl font-display font-semibold mt-2 text-white">
                      Request An Appointment
                    </h3>
                    <p className="text-zinc-400 text-sm mt-2 max-w-md mx-auto font-sans font-light">
                      Indulge in a premium self-care treatment curated by international master stylists. Please details your preferences below.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans block">Full Name</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                            <User size={16} />
                          </span>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Lord / Lady Name"
                            className="w-full bg-[#121212] border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-gold transition-colors font-sans"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans block">Phone Number</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                            <Phone size={16} />
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full bg-[#121212] border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-gold transition-colors font-sans"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2 col-span-1 md:col-span-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans block">Email Address</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                            <Mail size={16} />
                          </span>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.elegance@domain.com"
                            className="w-full bg-[#121212] border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-gold transition-colors font-sans"
                          />
                        </div>
                      </div>

                      {/* Date */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans block">Preferred Date</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                            <Calendar size={16} />
                          </span>
                          <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gold transition-colors font-sans [color-scheme:dark]"
                          />
                        </div>
                      </div>

                      {/* Time */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans block">Preferred Time</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                            <Clock size={16} />
                          </span>
                          <input
                            type="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gold transition-colors font-sans [color-scheme:dark]"
                          />
                        </div>
                      </div>

                      {/* Service Choice */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans block">Service Package</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                            <Sparkles size={16} />
                          </span>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gold transition-colors font-sans appearance-none"
                          >
                            <option>Hair Styling & Design</option>
                            <option>Balayage & Couture Coloring</option>
                            <option>Royal Beard Grooming & Shave</option>
                            <option>Bespoke Skin Therapy & Facial</option>
                            <option>Bridal / Red Carpet Makeup</option>
                            <option>Elite Hand & Foot Therapy</option>
                            <option>Signature Botanical Hair Spa</option>
                            <option>Deep Relaxation Therapy</option>
                          </select>
                        </div>
                      </div>

                      {/* Stylist Choice */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans block">Preferred Professional</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                            <Award size={16} />
                          </span>
                          <select
                            name="stylist"
                            value={formData.stylist}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gold transition-colors font-sans appearance-none"
                          >
                            <option>No Preference (First Available)</option>
                            <option>Alessandro Silva (Master Stylist)</option>
                            <option>Clarisse Dupont (Couture Color Director)</option>
                            <option>Marcus Vance (Executive Barber Specialist)</option>
                            <option>Yuki Tanaka (Senior Skin Therapist)</option>
                            <option>Isabella Rossi (Celebrity Makeup Artist)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Special requests */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans block">Special Requests & Inquiries</label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Let us know if you require refreshments, specific music, privacy options, or custom requests..."
                        className="w-full bg-[#121212] border border-zinc-800 rounded-lg p-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-gold transition-colors font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-gold-gradient text-black py-4 px-6 rounded-lg font-sans font-medium tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-500 hover:shadow-[0_0_25px_rgba(197,168,128,0.3)] text-sm cursor-pointer hover-shimmer"
                      >
                        Request Invitation
                      </button>
                    </div>
                  </form>
                </>
              )}

              {formState === "submitting" && (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full border-2 border-zinc-800" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-t-gold border-r-transparent border-b-transparent border-l-transparent"
                    />
                    <Sparkles className="absolute inset-0 m-auto text-gold animate-pulse" size={24} />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans">Connecting to AURA</span>
                    <h3 className="text-2xl font-display font-medium text-white">Validating Selection</h3>
                    <p className="text-zinc-400 text-sm max-w-xs font-sans font-light">
                      Curating options with our salon director. Designing your bespoke experience...
                    </p>
                  </div>
                </div>
              )}

              {formState === "success" && (
                <div className="py-8 text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="mx-auto w-16 h-16 bg-gold/10 border border-gold/40 flex items-center justify-center rounded-full text-gold"
                  >
                    <CheckCircle size={36} />
                  </motion.div>

                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium">Reservation Received</span>
                    <h3 className="text-3xl font-display font-semibold text-white">Welcome to AURA</h3>
                    <p className="text-zinc-400 text-sm max-w-md mx-auto font-sans font-light">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>. Your inquiry for <span className="text-white font-medium">{formData.service}</span> has been securely routed to our concierge team.
                    </p>
                  </div>

                  <div className="bg-[#121212] border border-zinc-800/80 rounded-xl p-5 max-w-md mx-auto text-left space-y-3 font-sans text-xs">
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 uppercase tracking-wider">Appointment Class</span>
                      <span className="text-gold font-medium uppercase tracking-widest">{formData.stylist === "No Preference (First Available)" ? "Bespoke Standard" : "Elite Reserved"}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 uppercase tracking-wider">Date & Time</span>
                      <span className="text-zinc-300 font-medium">{formData.date} at {formData.time}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 uppercase tracking-wider">Master Specialist</span>
                      <span className="text-zinc-300 font-medium">{formData.stylist}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 uppercase tracking-wider">Contact Phone</span>
                      <span className="text-zinc-300 font-medium">{formData.phone}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto font-sans">
                    <a
                      href={`https://wa.me/15550000000?text=Hi%20Aura%20Salon,%20I%20have%20requested%20an%20appointment%20for%20${encodeURIComponent(formData.service)}%20on%20${formData.date}%20at%20${formData.time}.%20My%20name%20is%20${encodeURIComponent(formData.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase transition-colors"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.46L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.799-4.382 9.802-9.77.001-2.61-1.01-5.063-2.846-6.898C16.398 2.052 13.933.993 11.999.993c-5.399 0-9.794 4.385-9.797 9.774-.001 2.083.524 4.116 1.519 5.845l-.992 3.616 3.731-.978zm11.587-6.915c-.328-.164-1.942-.958-2.242-1.069-.3-.111-.519-.164-.737.164-.219.328-.848 1.069-1.039 1.288-.19.219-.383.246-.711.082-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.147-.146.328-.383.493-.574.164-.19.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.737-1.777-1.011-2.433-.267-.641-.539-.553-.737-.563-.19-.01-.41-.012-.629-.012-.219 0-.575.082-.875.41-.3.328-1.147 1.121-1.147 2.734 0 1.613 1.175 3.169 1.339 3.388.164.219 2.313 3.532 5.602 4.954.782.338 1.392.54 1.868.692.786.25 1.5.215 2.064.13.629-.094 1.942-.793 2.215-1.559.273-.766.273-1.422.191-1.559-.082-.137-.3-.219-.628-.383z" />
                      </svg>
                      Confirm via WhatsApp
                    </a>
                    <button
                      onClick={resetForm}
                      className="flex-1 border border-zinc-800 hover:border-gold hover:text-gold text-zinc-300 py-3 px-4 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
                    >
                      Close Portal
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
