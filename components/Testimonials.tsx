
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Happy Clients</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">What Our Foodies Say</h2>
          <p className="text-gray-500">Don't just take our word for it—listen to our active community of food lovers from all around the world.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-[3rem] shadow-sm relative group"
            >
              <div className="absolute top-8 right-8 text-emerald-100 group-hover:text-emerald-500 transition-colors duration-300">
                <Quote className="w-12 h-12 fill-current" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-orange-500 fill-orange-500" />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed mb-8">"{t.content}"</p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-orange-100 object-cover"
                />
                <div>
                  <p className="text-sm font-extrabold text-gray-900">{t.name}</p>
                  <p className="text-xs font-medium text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
