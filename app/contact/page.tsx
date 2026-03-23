import React from 'react';
import ContactInfo from "@/src/components/sections/ContactInfo";
import ContactFormSection from "@/src/components/sections/ContactFormSection";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20 font-sans">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ContactInfo />
          <ContactFormSection />
        </div>
      </div>
    </div>
  );
}
