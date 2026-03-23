'use client';

import React from 'react';
import Link from 'next/link';
import { staticData } from "@/src/utils/staticData";

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center space-y-4 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-40/48 font-black text-slate-900 tracking-tight">Curated <span className="text-primary italic">Collections</span></h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
          {staticData.categories.map((cat, idx) => (
            <Link href={`/category/${cat.id}`} key={cat.id} className="group text-center space-y-6 animate-in fade-in zoom-in duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="aspect-square bg-slate-50 rounded-full border-4 border-white shadow-xl group-hover:shadow-primary/20 group-hover:border-primary/20 transition-all duration-500 overflow-hidden relative flex items-center justify-center grayscale group-hover:grayscale-0">
                 <span className="text-slate-300 font-bold uppercase tracking-widest text-10/14">{cat.name}</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-slate-900 uppercase tracking-widest text-14/18 group-hover:text-primary transition-colors">{cat.name}</h4>
                <p className="text-10/14 font-bold text-slate-400">{cat.count} ITEMS</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
