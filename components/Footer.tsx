
import React from 'react';
import { ShoppingCart, Facebook, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-500 p-2 rounded-xl">
                <ShoppingCart className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                Foodie<span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Delivering happiness through your stomach since 2024. Quality food, fast delivery, satisfied soul.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all text-gray-400 hover:text-white">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 flex items-center gap-2">About Us <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-orange-500 flex items-center gap-2">Our Menu <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-orange-500 flex items-center gap-2">Partners <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-orange-500 flex items-center gap-2">Contact <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Help & Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-500">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-orange-500">Returns</a></li>
              <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Download App</h4>
            <p className="text-gray-400 text-sm mb-6">Get 20% off your first order when you download our app!</p>
            <div className="flex flex-col gap-3">
              <button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-6 py-2 rounded-xl flex items-center gap-3 transition-colors">
                <div className="bg-white p-1 rounded">🍏</div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-400">App Store</p>
                  <p className="text-sm font-bold">Download Now</p>
                </div>
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-6 py-2 rounded-xl flex items-center gap-3 transition-colors">
                <div className="bg-white p-1 rounded">🤖</div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-400">Play Store</p>
                  <p className="text-sm font-bold">Download Now</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs">© 2024 Foodie Inc. All rights reserved.</p>
          <p className="text-gray-500 text-xs">Built with ❤️ for Food Lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
