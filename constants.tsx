
import React from 'react';
import { Pizza, Utensils, Coffee, Cake, Sandwich, Fish } from 'lucide-react';
import { FoodItem, Category, Testimonial } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Pizza', icon: <Pizza className="w-6 h-6" /> },
  { id: '2', name: 'Burgers', icon: <Sandwich className="w-6 h-6" /> },
  { id: '3', name: 'Sushi', icon: <Fish className="w-6 h-6" /> },
  { id: '4', name: 'Desserts', icon: <Cake className="w-6 h-6" /> },
  { id: '5', name: 'Coffee', icon: <Coffee className="w-6 h-6" /> },
  { id: '6', name: 'All', icon: <Utensils className="w-6 h-6" /> },
];

export const POPULAR_DISHES: FoodItem[] = [
  {
    id: 'f1',
    name: 'Truffle Mushroom Pizza',
    price: 18.50,
    rating: 4.8,
    prepTime: '20-25 mins',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&h=400&auto=format&fit=crop',
    category: 'Pizza'
  },
  {
    id: 'f2',
    name: 'Double Wagyu Burger',
    price: 14.99,
    rating: 4.9,
    prepTime: '15-20 mins',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&h=400&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: 'f3',
    name: 'Salmon Dragon Roll',
    price: 22.00,
    rating: 4.7,
    prepTime: '30-35 mins',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&h=400&auto=format&fit=crop',
    category: 'Sushi'
  },
  {
    id: 'f4',
    name: 'Berries & Cream Waffle',
    price: 9.50,
    rating: 4.6,
    prepTime: '10-15 mins',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&h=400&auto=format&fit=crop',
    category: 'Desserts'
  },
  {
    id: 'f5',
    name: 'Avocado Quinoa Bowl',
    price: 12.00,
    rating: 4.5,
    prepTime: '10-12 mins',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&h=400&auto=format&fit=crop',
    category: 'All'
  },
  {
    id: 'f6',
    name: 'Spicy Ramen Miso',
    price: 16.00,
    rating: 4.8,
    prepTime: '15-20 mins',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=600&h=400&auto=format&fit=crop',
    category: 'All'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Food Blogger',
    content: "The delivery was surprisingly fast, and the Truffle Pizza arrived piping hot! Best service in the city.",
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: 't2',
    name: 'Mark Thompson',
    role: 'Daily Customer',
    content: "I use Foodie almost every day. Their app is so easy to use and the selection of restaurants is unmatched.",
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: 't3',
    name: 'Emily Chen',
    role: 'Fitness Coach',
    content: "Love the healthy options! Finding high-protein meals that actually taste good used to be a challenge.",
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];
