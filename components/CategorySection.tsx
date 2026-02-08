
import React from 'react';
import { CATEGORIES } from '../constants';
import { motion } from 'framer-motion';

const CategorySection: React.FC = () => {
  return (
    <section id="categories" className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Popular Categories</h2>
            <p className="text-gray-500">Explore the best food from local vendors</p>
          </div>
          <button className="text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors">
            View All Categories &rarr;
          </button>
        </div>

        <div className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
          {CATEGORIES.map((cat, idx) => (
            <motion.button
              key={cat.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex-shrink-0 flex flex-col items-center gap-3 group"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 border shadow-sm ${idx === 0 ? 'bg-orange-500 text-white border-orange-500' : 'bg-gray-50 text-gray-600 border-gray-100 group-hover:bg-orange-50 group-hover:border-orange-200 group-hover:text-orange-500'}`}>
                {cat.icon}
              </div>
              <span className={`text-sm font-bold ${idx === 0 ? 'text-orange-600' : 'text-gray-600'}`}>
                {cat.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
