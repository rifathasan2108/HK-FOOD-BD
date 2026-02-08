
import React from 'react';
import { ShoppingCart, User, Menu, Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-orange-500 p-2 rounded-xl">
            <ShoppingCart className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            Foodie<span className="text-orange-500">.</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#categories" className="hover:text-orange-500 transition-colors">Categories</a>
          <a href="#popular" className="hover:text-orange-500 transition-colors">Popular</a>
          <a href="#testimonials" className="hover:text-orange-500 transition-colors">Reviews</a>
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <button className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-orange-500 px-4 py-2 transition-colors">
            <User className="w-4 h-4" />
            Sign In
          </button>
          <button className="hidden md:block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
            Register
          </button>

          <div className="relative cursor-pointer group">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-orange-500 p-3 rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center"
            >
              <ShoppingCart className="text-white w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] font-bold h-5 w-5 rounded-full border-2 border-white flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.div>
          </div>

          <button className="md:hidden p-2 text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
