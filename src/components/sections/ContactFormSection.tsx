'use client';

import React from 'react';
import { Input, Select, Radio, Textarea } from "@/src/components/ui";

export default function ContactFormSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: 'general',
    type: 'individual',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting LUXE! We will get back to you soon.');
    console.log(formData);
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50 animate-in fade-in slide-in-from-right-8 duration-700">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="Your professional email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <Select
          label="Inquiry Topic"
          options={[
            { label: 'General Inquiry', value: 'general' },
            { label: 'Order Status', value: 'order' },
            { label: 'Returns & Refunds', value: 'returns' },
            { label: 'Technical Support', value: 'tech' },
          ]}
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
        />

        <Radio
          label="Are you contacting as:"
          options={[
            { label: 'Individual Customer', value: 'individual' },
            { label: 'Business Partner', value: 'business' }
          ]}
          name="user_type"
          value={formData.type}
          onChange={(e) => setFormData({...formData, type: (e.target as HTMLInputElement).value})}
        />

        <Textarea
          label="Your Detailed Message"
          placeholder="How can our luxury support team assist you today?"
          required
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />

        <button type="submit" className="w-full btn-primary py-4 text-16/22 tracking-widest uppercase">
          Send Secret Transmission
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
        </button>
      </form>
    </div>
  );
}
