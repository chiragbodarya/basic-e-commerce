'use client';

import React from 'react';
import Link from 'next/link';
import { staticData } from "@/src/utils/staticData";

export default function CartPage() {
  const [items, setItems] = React.useState([
    { ...staticData.topProducts[0], quantity: 1 },
    { ...staticData.topProducts[1], quantity: 2 },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15.00;
  const total = subtotal + shipping;

  return (
    <div className="bg-white min-h-screen py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-40/48 font-black text-slate-900 mb-12 tracking-tight">Shopping <span className="text-primary underline decoration-primary/20">Cart</span></h1>

        <div className="flex flex-col lg:flex-row gap-16">

          <div className="flex-grow space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center gap-8 p-6 bg-slate-50/50 rounded-3xl border border-slate-100 group hover:border-primary/20 transition-all hover:bg-white hover:shadow-2xl hover:shadow-primary/5">
                <div className="w-40 h-40 bg-slate-200 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                   <span className="text-slate-400 font-bold uppercase tracking-widest text-12/16">Product Image</span>
                </div>
                <div className="flex-grow space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-20/28 font-bold text-slate-900 leading-tight">{item.name}</h3>
                    <button className="text-slate-400 hover:text-red-500 p-2 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                  <p className="text-14/18 text-slate-500 font-medium">Category: {item.category}</p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 border border-slate-200 rounded-full px-2 py-1 bg-white shadow-sm">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-900 font-bold transition-all active:scale-90"
                      >-</button>
                      <span className="text-16/22 font-black w-8 text-center text-slate-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-900 font-bold transition-all active:scale-90"
                      >+</button>
                    </div>
                    <span className="text-20/28 font-black text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}

            <Link href="/shop" className="inline-flex items-center text-primary font-bold hover:underline underline-offset-8 mt-4 group text-16/22">
              <svg className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Continue Shopping
            </Link>
          </div>

          <div className="w-full lg:w-96 space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="p-8 bg-slate-900 text-slate-300 rounded-[2.5rem] shadow-2xl border border-slate-800 space-y-6">
              <h4 className="text-20/28 font-bold text-white mb-6 flex items-center">
                Order Summary
                <svg className="ml-2 w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </h4>
              <div className="space-y-4 border-b border-slate-800 pb-6 text-12/16 font-medium uppercase tracking-widest">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Luxury Shipping</span>
                  <span className="text-white">${shipping.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between text-20/28 font-black text-white py-2">
                <span>Total</span>
                <span className="text-primary-light">${total.toFixed(2)}</span>
              </div>
              <button className="w-full btn-primary py-4 text-16/22 tracking-widest transition-all shadow-primary/40 hover:scale-[1.02] active:scale-95 duration-150">
                PROCEED TO CHECKOUT
                <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </button>
            </div>

            <div className="p-8 bg-primary/5 border-2 border-primary/10 rounded-[2.5rem] flex items-center space-x-4">
               <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               </div>
               <div>
                  <h5 className="font-bold text-slate-900 tracking-tight text-16/22">LUXE Guarantee</h5>
                  <p className="text-12/16 text-slate-500">Premium quality & 30-day returns</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
