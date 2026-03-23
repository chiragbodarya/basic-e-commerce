'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { staticData } from "@/src/utils/staticData";
import Link from 'next/link';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  
  const results = staticData.topProducts.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query)
  );

  return (
    <div className="bg-white min-h-screen py-24 md:py-32 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4">
           <h1 className="text-40/48 font-black text-slate-900 tracking-tight">Search Results for: <span className="text-primary italic">"{query}"</span></h1>
           <p className="text-16/22 text-slate-500">We found {results.length} items matching your luxury standards.</p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {results.map((product) => (
              <div key={product.id} className="group bg-slate-50 p-2 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5 cursor-pointer">
                 <div className="aspect-[4/5] bg-slate-200 rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center relative">
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-12/16">Product Image</span>
                 </div>
                 <div className="p-6 space-y-4">
                    <div className="space-y-1">
                       <span className="text-10/14 font-black uppercase tracking-widest text-primary/60">{product.category}</span>
                       <h3 className="text-18/24 font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-white">
                       <span className="text-20/28 font-black text-slate-900 tracking-tight">${product.price.toFixed(2)}</span>
                       <button className="p-2 bg-white text-primary rounded-full shadow-sm hover:bg-primary hover:text-white transition-all">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                       </button>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200">
             <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-slate-200 mx-auto mb-8 shadow-sm">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
             </div>
             <h2 className="text-32/40 font-black text-slate-900 mb-4 tracking-tight">No results <span className="text-primary italic">found</span></h2>
             <p className="text-16/22 text-slate-500 max-w-sm mx-auto mb-12">We couldn't find any premium collections matching your request. Try refining your keywords or browse our new arrivals.</p>
             <Link href="/shop" className="btn-primary px-10 py-4 text-16/22">Browse Collections</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <React.Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    }>
      <SearchContent />
    </React.Suspense>
  );
}
