
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-emerald-700 bg-emerald-100 rounded-full">
                #1 Food Delivery Service
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                Fresh Food <br />
                <span className="text-orange-500 italic">Delivered</span> <br className="hidden md:block" />
                to Your Door.
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Delicious meals from your favorite local restaurants, delivered straight to you in less than 30 minutes. Satisfaction guaranteed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl mx-auto lg:mx-0 bg-white p-2 rounded-2xl md:rounded-full shadow-2xl shadow-orange-500/10 border border-gray-100 flex flex-col md:flex-row items-center gap-2"
            >
              <div className="flex-1 flex items-center gap-3 px-4 w-full border-b md:border-b-0 md:border-r border-gray-100 py-3 md:py-0">
                <MapPin className="text-orange-500 w-5 h-5 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Enter your delivery address..." 
                  className="w-full text-gray-700 placeholder-gray-400 focus:outline-none text-sm font-medium"
                />
              </div>
              <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl md:rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 active:scale-95">
                <Search className="w-4 h-4" />
                Find Food
              </button>
            </motion.div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/100/100?random=${i+10}`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-orange-600">
                  +2k
                </div>
              </div>
              <p className="text-sm font-medium text-gray-600">
                <span className="font-bold text-gray-900">2,500+</span> Happy Customers
              </p>
            </div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&h=800&auto=format&fit=crop" 
                alt="Delicious Food" 
                className="w-full h-auto object-cover rounded-[3rem] shadow-2xl"
              />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-12 -right-6 md:-right-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-50"
              >
                <div className="bg-emerald-100 p-2 rounded-xl">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400">Rating</p>
                  <p className="text-sm font-extrabold text-gray-900">4.9 (12k Reviews)</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-50"
              >
                <div className="bg-orange-100 p-2 rounded-xl">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400">Fastest Delivery</p>
                  <p className="text-sm font-extrabold text-gray-900">~20 Mins</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
