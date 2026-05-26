"use client";

import React, { createContext, useContext, useState } from "react";
import BookingModal from "./BookingModal";

interface AppointmentContextType {
  openBooking: () => void;
  closeBooking: () => void;
  isBookingOpen: boolean;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export default function AppointmentProvider({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <AppointmentContext.Provider value={{ openBooking, closeBooking, isBookingOpen }}>
      {children}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppointment must be used within an AppointmentProvider");
  }
  return context;
}
