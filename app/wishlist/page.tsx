'use client';

import React from 'react';
import Link from 'next/link';
import { staticData } from "@/src/utils/staticData";

export default function WishlistPage() {
  const [items, setItems] = React.useState(staticData.topProducts.slice(2, 5));

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="space-y-4">
            <span className="text-primary font-bold uppercase tracking-widest text-14/18">Personal Vault</span>
            <h1 className="text-40/48 md:text-48/56 font-black text-slate-900 tracking-tight leading-tight">
              My <span className="text-primary italic">Wishlist</span>
            </h1>
          </div>
          <p className="text-16/22 text-slate-500 font-medium">You have {items.length} premium items saved for later.</p>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {items.map((product) => (
              <div key={product.id} className="group bg-white rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5 overflow-hidden flex flex-col h-full">
                <div className="aspect-[4/5] bg-slate-100 grayscale group-hover:grayscale-0 transition-all duration-500 relative flex items-center justify-center">
                  <span className="text-slate-300 font-bold uppercase tracking-widest text-12/16">Product Image</span>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-slate-400 hover:text-red-500 hover:bg-white shadow-sm transition-all active:scale-90"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>

                <div className="p-8 flex flex-col flex-grow items-start space-y-4">
                  <div className="space-y-1 w-full">
                    <span className="text-10/14 font-black uppercase tracking-widest text-primary/60">{product.category}</span>
                    <h3 className="text-20/28 font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-20/28 font-black text-slate-900 tracking-tight">${product.price.toFixed(2)}</span>
                    <div className="flex text-amber-400">
                       <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                       <span className="text-12/16 font-bold text-slate-400 ml-1">{product.rating}</span>
                    </div>
                  </div>

                  <button className="w-full btn-primary py-3.5 text-12/16 font-black tracking-widest uppercase transition-all shadow-primary/20 mt-auto group-hover:scale-[1.02] active:scale-95 duration-150">
                    Add to Luxury Cart
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <h2 className="text-32/40 font-bold text-slate-900 mb-4 tracking-tight">Your vault is <span className="text-primary italic">empty</span></h2>
            <p className="text-16/22 text-slate-500 mb-8 max-w-sm mx-auto">Start curating your dream collection by saving items you love!</p>
            <Link href="/shop" className="btn-primary inline-flex text-16/22">Go to Collection</Link>
          </div>
        )}
      </div>
    </div>
  );
}
