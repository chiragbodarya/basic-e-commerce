'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-slate-50">
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out transform">

        <div className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${activeSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -z-10" />
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000 px-4">
              <span className="inline-block px-4 py-1.5 bg-primary text-white text-10/14 font-black uppercase tracking-[0.2em] rounded-full">New Arrival</span>
              <h1 className="text-64/72 md:text-80/88 font-black text-slate-900 tracking-tighter leading-[0.9]">
                Royal <br /><span className="text-primary italic">Acoustics</span>
              </h1>
              <p className="text-18/24 text-slate-600 max-w-md font-medium leading-relaxed">Experience a new level of sound luxury with our latest wireless series.</p>
              <div className="flex gap-4">
                <Link href="/shop" className="btn-primary">Shop Now</Link>
                <Link href="/shop" className="btn-outline">Explore</Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center animate-in zoom-in duration-1000">
              <div className="w-[80%] aspect-square bg-white rounded-[3rem] shadow-2xl shadow-primary/10 flex items-center justify-center border-8 border-white group hover:scale-[1.02] transition-transform duration-500">
                <span className="text-primary/10 text-96/104 font-black italic">PRODUCT</span>
              </div>
            </div>
          </div>
        </div>

          <div className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${activeSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-transparent -z-10" />
            <div className="section-container flex flex-col items-center text-center px-4">
               <h2 className="text-72/80 font-black text-slate-900 mb-8 tracking-tighter">Summer <span className="text-primary underline decoration-primary/20">Sale</span></h2>
               <p className="text-24/32 font-bold text-slate-600 mb-8 max-w-lg italic">Up to 70% off on all luxury fashion items this month.</p>
               <Link href="/shop" className="btn-primary px-12 py-5 text-18/24">View All Deals</Link>
            </div>
          </div>

        <div className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${activeSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
            <div className="order-2 lg:order-1 flex justify-center">
               <div className="w-[70%] aspect-[3/4] bg-slate-900 rounded-[3rem] shadow-2xl flex items-center justify-center p-8">
                  <span className="text-white/20 text-40/48 font-black uppercase text-center tracking-widest">Premium Watch Series</span>
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-48/56 md:text-56/64 font-black text-slate-900 tracking-tight">Time <span className="text-primary">Evolved</span></h2>
              <p className="text-18/24 text-slate-600">The perfect merge of classic engineering and modern intelligence.</p>
              <Link href="/shop" className="btn-primary">Pre-order V2</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {[0, 1, 2].map((i) => (
          <button key={i} onClick={() => setActiveSlide(i)} className={`h-1.5 transition-all duration-300 rounded-full ${activeSlide === i ? 'w-10 bg-primary' : 'w-4 bg-slate-300'}`} />
        ))}
      </div>
    </section>
  );
}
