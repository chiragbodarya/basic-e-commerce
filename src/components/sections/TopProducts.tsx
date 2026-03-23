'use client';

import React from 'react';
import Link from 'next/link';
import { staticData } from "@/src/utils/staticData";

export default function TopProducts() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 px-4">
           <div className="space-y-2">
              <span className="text-primary font-black uppercase text-12/16 tracking-widest">Trending Now</span>
              <h3 className="text-40/48 font-black text-slate-900 tracking-tight">Elite <span className="text-primary underline decoration-primary/10">Showcase</span></h3>
           </div>
           <Link href="/shop" className="text-14/18 font-black text-primary hover:tracking-[0.1em] transition-all uppercase underline underline-offset-8">Explore All Products &rarr;</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {staticData.topProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5 overflow-hidden flex flex-col items-start p-2">
              <div className="w-full aspect-[4/5] bg-slate-100 rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-500 relative flex items-center justify-center mb-6">
                {product.isNew && <span className="absolute top-4 left-4 bg-primary text-white text-10/14 font-black px-3 py-1 rounded-full uppercase">NEW</span>}
                {product.isSale && <span className="absolute top-4 left-4 bg-red-500 text-white text-10/14 font-black px-3 py-1 rounded-full uppercase">SALE</span>}
                <span className="text-slate-300 font-bold uppercase tracking-widest text-12/16">Product Image</span>
                <button className="absolute bottom-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 btn-primary p-4 rounded-full shadow-2xl transition-all duration-300">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                </button>
              </div>
              <div className="px-6 pb-8 space-y-4 w-full">
                <div className="space-y-1">
                  <span className="text-10/14 font-black uppercase tracking-widest text-slate-400">{product.category}</span>
                  <h5 className="font-bold text-slate-900 text-18/24 group-hover:text-primary transition-colors">{product.name}</h5>
                </div>
                <div className="flex items-center justify-between w-full pt-4 border-t border-slate-50">
                   <div className="flex items-baseline space-x-2">
                      <span className="text-20/28 font-black text-slate-900">${product.price.toFixed(2)}</span>
                      {product.oldPrice && <span className="text-14/18 text-slate-400 line-through">${product.oldPrice.toFixed(2)}</span>}
                   </div>
                   <div className="flex text-amber-400 items-center">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                      <span className="text-12/16 font-black text-slate-900 ml-1">{product.rating}</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
