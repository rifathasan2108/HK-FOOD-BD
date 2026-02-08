
export interface FoodItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  prepTime: string;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
}
