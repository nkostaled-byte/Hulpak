export interface Product {
  id: string;
  name: string;
  code: string;
  dimensions: string;
  capacity: string;
  image?: string;
  description: string;
  isEcoFriendly: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: string;
  servings: number;
  image: string;
  tags: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
