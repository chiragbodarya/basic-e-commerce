'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState('');

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="max-w-4xl mx-auto px-6 h-full flex flex-col pt-32">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-32/40 font-black text-slate-900 tracking-tight">Search <span className="text-primary italic">LUXE</span></h2>
          <button
            onClick={onClose}
            className="z-10 p-4 bg-slate-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-all active:scale-95 shadow-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <form onSubmit={handleSearch} className="relative group">
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search luxury collections..."
            className="w-full bg-slate-50 border-b-4 border-slate-200 py-6 text-24/32 md:text-32/40 font-bold text-slate-900 focus:outline-none focus:border-primary transition-all placeholder:text-slate-300"
          />
          <button type="submit" className="absolute right-0 bottom-6 text-slate-400 group-focus-within:text-primary transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </form>

        <div className="mt-16 space-y-12 animate-in slide-in-from-bottom-8 duration-700">
          <div>
            <h4 className="text-12/16 font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Trending Searches</h4>
            <div className="flex flex-wrap gap-4">
              {['Elite Acoustics', 'Summer Essentials', 'Premium Watches', 'Smart Tech', 'Limited Edition'].map((tag) => (
                <button key={tag} className="px-6 py-2.5 bg-white border border-slate-200 rounded-full text-14/18 font-bold text-slate-700 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/5 transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-slate-100">
            <div className="space-y-4">
              <h4 className="text-12/16 font-black uppercase tracking-[0.2em] text-slate-400">Need Assistance?</h4>
              <p className="text-16/22 text-slate-500">Our concierge team is available 24/7 for personalized shopping.</p>
              <Link href="/contact" onClick={onClose} className="inline-block text-16/22 font-bold text-primary underline underline-offset-8">Talk to an Agent &rarr;</Link>
            </div>
            <div className="space-y-4">
              <h4 className="text-12/16 font-black uppercase tracking-[0.2em] text-slate-400">Recent Updates</h4>
              <p className="text-16/22 text-slate-500">Check out our latest arrivals and seasonal lookbooks.</p>
              <Link href="/shop" onClick={onClose} className="inline-block text-16/22 font-bold text-primary underline underline-offset-8">Explore All &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
