'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SearchOverlay from './SearchOverlay';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100' : 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-24/32 font-black text-gradient tracking-tighter">
                LUXE
              </Link>
            </div>

            <nav className="hidden md:flex space-x-10 items-center">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/shop" className="nav-link">Shop</Link>
              <Link href="/wishlist" className="nav-link">Wishlist</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4 sm:space-x-5">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-slate-700 hover:text-primary p-2 rounded-full hover:bg-slate-50 transition-all active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>

              <Link href="/wishlist" className="text-slate-700 hover:text-primary p-2 rounded-full hover:bg-slate-50 transition-all hidden xs:block active:scale-95">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </Link>

              <Link href="/cart" className="relative text-slate-700 hover:text-primary p-2 rounded-full hover:bg-slate-50 transition-all active:scale-95">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                <span className="absolute top-1 right-1 bg-primary text-white text-10/14 w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-white">0</span>
              </Link>

              <Link href="/account" className="text-slate-700 hover:text-primary p-2 rounded-full hover:bg-slate-50 transition-all border-l pl-4 border-slate-200 ml-2 hidden sm:block active:scale-95">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
