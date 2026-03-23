import React from 'react';

export default function ContactInfo() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-700">
      <div className="space-y-4 text-left">
        <span className="text-primary font-bold uppercase tracking-widest text-14/18">Contact Support</span>
        <h1 className="text-40/48 md:text-48/56 font-black text-slate-900 tracking-tight leading-tight">
          How can we <span className="text-primary">help</span> you today?
        </h1>
        <p className="text-18/24 text-slate-500 max-w-md">
          Have a question about an order or just want to say hi? Reach out to our dedicated support team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h4 className="text-18/24 font-bold text-slate-900 mb-1">Email Us</h4>
          <p className="text-14/18 text-slate-500 mb-3">Response within 24h</p>
          <a href="mailto:support@luxe.com" className="text-primary font-bold hover:underline text-16/22">support@luxe.com</a>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
          </div>
          <h4 className="text-18/24 font-bold text-slate-900 mb-1">Visit Office</h4>
          <p className="text-14/18 text-slate-500 mb-3">Mon-Fri, 9am - 6pm</p>
          <p className="text-primary font-bold text-16/22">New York, NY 10001</p>
        </div>
      </div>

      <div className="bg-slate-200 h-64 rounded-3xl overflow-hidden grayscale relative flex items-center justify-center border-4 border-white shadow-xl">
         <span className="text-slate-400 font-black italic text-20/28 uppercase tracking-widest opacity-30 select-none">INTERACTIVE MAP LOADING...</span>
      </div>
    </div>
  );
}
