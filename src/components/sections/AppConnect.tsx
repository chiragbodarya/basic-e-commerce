'use client';

import React from 'react';
import Link from 'next/link';
import { staticData } from "@/src/utils/staticData";

export default function AppConnect() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
       <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          <div className="max-w-xl text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 px-4">
             <h3 className="text-40/48 md:text-64/72 font-black text-white tracking-tighter leading-tight">
                Luxury follows you, <br />
                <span className="text-primary italic">Everywhere.</span>
             </h3>
             <p className="text-18/24 text-slate-400 leading-relaxed">Download the LUXE mobile experience and get exclusive early access to premium collections and personalized rewards.</p>
             <div className="flex flex-wrap justify-center lg:justify-start gap-6 border-t border-white/5 pt-10">
                <Link href={staticData.appLinks.android} target="_blank" className="flex items-center space-x-4 bg-white/5 hover:bg-white text-white hover:text-slate-900 px-8 py-4 rounded-2xl border border-white/10 transition-all group active:scale-95 duration-150">
                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414C16.8929 15.3414 16.381 15.8532 16.381 16.4834C16.381 17.1135 16.8929 17.6254 17.523 17.6254C18.1531 17.6254 18.665 17.1135 18.665 16.4834C18.665 15.8532 18.1531 15.3414 17.523 15.3414ZM12.0001 1.5C6.21043 1.5 1.5 6.21043 1.5 12C1.5 17.7896 6.21043 22.5 12.0001 22.5C17.7897 22.5 22.5 17.7896 22.5 12C22.5 6.21043 17.7897 1.5 12.0001 1.5ZM17.18 19.3102V13.8824H6.82025V19.3102H5.50024V11.2007C5.50024 10.4284 6.1287 9.79997 6.90096 9.79997H17.0991C17.8714 9.79997 18.4998 10.4284 18.4998 11.2007V19.3102H17.18ZM6.47697 15.3414C5.84687 15.3414 5.33496 15.8532 5.33496 16.4834C5.33496 17.1135 5.84687 17.6254 6.47697 17.6254C7.10707 17.6254 7.61899 17.1135 7.61899 16.4834C7.61899 15.8532 7.10707 15.3414 6.47697 15.3414Z"></path></svg>
                   <div className="text-left">
                      <p className="text-10/14 font-black uppercase tracking-widest opacity-60">Get it on</p>
                      <p className="text-20/28 font-bold">Google Play</p>
                   </div>
                </Link>
                <Link href={staticData.appLinks.ios} target="_blank" className="flex items-center space-x-4 bg-white/5 hover:bg-white text-white hover:text-slate-900 px-8 py-4 rounded-2xl border border-white/10 transition-all group active:scale-95 duration-150">
                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .76-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91 1.62.06 2.87.65 3.51 1.54-1.26.77-2.1 2.22-2.07 3.73.04 1.8 1.49 2.65 3.35 1.54.49 1.44 1.14 2.82.71 3.94zM16.4 3.5c-.7 1.1-2.14 1.9-3.21 1.76a2.7 2.7 0 011.66-3.51c.85-.3 2.15.5 1.55 1.75z"></path></svg>
                   <div className="text-left">
                      <p className="text-10/14 font-black uppercase tracking-widest opacity-60">Request on</p>
                      <p className="text-20/28 font-bold">App Store</p>
                   </div>
                </Link>
             </div>
          </div>

          <div className="hidden lg:flex w-96 h-[32rem] bg-slate-800 rounded-[4rem] border-[12px] border-slate-700 shadow-2xl relative animate-in zoom-in duration-1000 rotate-6 hover:rotate-0 transition-transform duration-700">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-2xl flex items-center justify-center">
                <div className="w-12 h-1.5 bg-slate-600 rounded-full" />
             </div>
             <div className="w-full h-full flex items-center justify-center p-8 text-center bg-slate-900 rounded-[3rem]">
                <span className="text-primary italic font-black text-40/48 opacity-20 uppercase tracking-[0.2em] -rotate-45">LUXE MOBILE</span>
             </div>
          </div>
       </div>
    </section>
  );
}
