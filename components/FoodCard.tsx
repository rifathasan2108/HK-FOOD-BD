
import React from 'react';
import { Star, Clock, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { FoodItem } from '../types';

interface FoodCardProps {
  food: FoodItem;
  onAddToCart: (food: FoodItem) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ food, onAddToCart }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
          <span className="text-xs font-bold text-gray-900">{food.rating}</span>
        </div>
        <div className="absolute bottom-4 right-4 bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-bold">
          {food.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
            {food.name}
          </h3>
          <span className="text-lg font-extrabold text-orange-600">${food.price.toFixed(2)}</span>
        </div>

        <div className="flex items-center gap-4 text-gray-400 text-xs font-medium mb-6">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{food.prepTime}</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <span>Free Delivery</span>
        </div>

        <button 
          onClick={() => onAddToCart(food)}
          className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/10"
        >
          <Plus className="w-4 h-4" />
          Add to Order
        </button>
      </div>
    </motion.div>
  );
};

export default FoodCard;
