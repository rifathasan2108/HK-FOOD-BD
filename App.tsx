
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import FoodCard from './components/FoodCard';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { POPULAR_DISHES } from './constants';
import { FoodItem, CartItem } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const addToCart = (food: FoodItem) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === food.id);
      if (existing) {
        return prev.map(item => item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...food, quantity: 1 }];
    });
    
    setShowNotification(food.name);
    setTimeout(() => setShowNotification(null), 3000);
  };

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen selection:bg-orange-100 selection:text-orange-600">
      <Header cartCount={cartTotalItems} />
      
      <main>
        <Hero />
        
        <CategorySection />

        <section id="popular" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Customer Favorites</span>
                <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Popular Dishes</h2>
              </div>
              <div className="flex gap-2">
                <button className="px-5 py-2 rounded-full border border-orange-500 text-orange-500 font-bold text-sm hover:bg-orange-500 hover:text-white transition-all">Trending</button>
                <button className="px-5 py-2 rounded-full border border-gray-200 text-gray-500 font-bold text-sm hover:border-orange-500 hover:text-orange-500 transition-all">Offers</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-10">
              {POPULAR_DISHES.map((food, idx) => (
                <motion.div
                  key={food.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <FoodCard food={food} onAddToCart={addToCart} />
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-gray-900/10 active:scale-95">
                Explore Full Menu
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-orange-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to satisfy your cravings?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Join thousands of foodies who get fresh meals delivered in minutes. Use code <span className="text-white font-bold underline">NEWFOODIE20</span> for 20% off!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-white text-orange-500 px-10 py-4 rounded-2xl font-bold shadow-xl transition-all hover:bg-gray-100 active:scale-95">
                Order Now
              </button>
              <button className="w-full sm:w-auto bg-orange-600 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all hover:bg-orange-700 active:scale-95">
                Download App
              </button>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />

      {/* Cart Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4"
          >
            <div className="bg-white/20 p-2 rounded-lg">
              <span className="text-lg">🍱</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-100">Added to cart</p>
              <p className="text-sm font-extrabold">{showNotification}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
