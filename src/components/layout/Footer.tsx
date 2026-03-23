'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">

        <div className="space-y-6">
          <Link href="/" className="text-32/40 font-bold text-gradient tracking-tight">
            LUXE
          </Link>
          <p className="text-14/18 text-slate-400 leading-relaxed">
            Elevating your lifestyle since 2024. Curated collections of premium essentials for the modern shopper. Excellence is our standard.
          </p>
          <div className="flex space-x-6">
            <Link href="" ></Link>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-14/18 font-semibold text-white uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4">
            <li><Link href="/shop" className="text-14/18 text-slate-400 hover:text-white transition-all underline-offset-4 hover:underline">Shop All</Link></li>
            <li><Link href="/new-arrivals" className="text-14/18 text-slate-400 hover:text-white transition-all underline-offset-4 hover:underline">New Arrivals</Link></li>
            <li><Link href="/sale" className="text-14/18 text-slate-400 hover:text-white transition-all underline-offset-4 hover:underline text-red-400">Seasonal Sale</Link></li>
            <li><Link href="/track-order" className="text-14/18 text-slate-400 hover:text-white transition-all underline-offset-4 hover:underline">Track Your Order</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-14/18 font-semibold text-white uppercase tracking-widest">Support</h4>
          <ul className="space-y-4">
            <li><Link href="/shipping" className="text-14/18 text-slate-400 hover:text-white transition-all underline-offset-4 hover:underline">Shipping Policy</Link></li>
            <li><Link href="/returns" className="text-14/18 text-slate-400 hover:text-white transition-all underline-offset-4 hover:underline">Returns & Refunds</Link></li>
            <li><Link href="/faq" className="text-14/18 text-slate-400 hover:text-white transition-all underline-offset-4 hover:underline">Help & FAQ</Link></li>
            <li><Link href="/contact" className="text-14/18 text-slate-400 hover:text-white transition-all underline-offset-4 hover:underline">Contact Executive</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-14/18 font-semibold text-white uppercase tracking-widest">Newsletter</h4>
          <p className="text-14/18 text-slate-400">Join our newsletter and receive 10% off your first luxury purchase.</p>
          <form className="relative space-y-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-14/18 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-500"
            />
            <button className="w-full bg-white text-slate-900 font-semibold py-3 rounded-lg text-14/18 hover:bg-slate-100 transition-colors shadow-lg active:scale-95 duration-150">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-12/16 text-slate-500 uppercase tracking-widest">
        <p>&copy; 2024 LUXE E-COMMERCE. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-all">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-all">Terms</Link>
          <Link href="/legal" className="hover:text-white transition-all">Legal</Link>
        </div>
      </div>
    </footer>
  );
}
