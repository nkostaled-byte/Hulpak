import { Product, Recipe, WhyChooseUsItem } from "./types";

import prod1 from "./assets/images/products/Packaging Photos -1.jpg";
import prod2 from "./assets/images/products/Packaging Photos -2.jpg";
import prod3 from "./assets/images/products/AL82P.jpg";
import prod4 from "./assets/images/products/Packaging Photos -5.jpg";
import prod5 from "./assets/images/products/Packaging Photos -6.jpg";
import prod6 from "./assets/images/products/Packaging Photos -7.jpg";
import prod7 from "./assets/images/products/Packaging Photos -8.jpg";
import prod8 from "./assets/images/products/easter-product.jpg";

import recipe1 from "./assets/images/cottage_pie_container_1783613381913.jpg";
import recipe2 from "./assets/images/ham_cheese_quiche_1783613397839.jpg";
import recipe3 from "./assets/images/Bobotie.jpg";

export const productsData: Product[] = [
  {
    id: "prod-1",
    name: "HP-320 Rectangular Gourmet Tray",
    code: "HP-320",
    dimensions: "201 x 109 x 49 mm",
    capacity: "750 ml",
    image: prod1,
    description: "Perfect for family portion cottage pies, pastas, and baked dishes. High-rigidity construction.",
    isEcoFriendly: true
  },
  {
    id: "prod-2",
    name: "HP-220 Round Baking Container",
    code: "HP-220",
    dimensions: "185 x 35 mm",
    capacity: "620 ml",
    image: prod2,
    description: "Excellent for quiches, tarts, and sweet pies. Designed for uniform heat conduction.",
    isEcoFriendly: true
  },
  {
    id: "prod-3",
    name: "HP-450 Premium Loaf Pan",
    code: "HP-450",
    dimensions: "235 x 102 x 70 mm",
    capacity: "1100 ml",
    image: prod3,
    description: "Ideal for fresh bread baking, artisanal meat loaves, and visual pound cakes.",
    isEcoFriendly: true
  },
  {
    id: "prod-4",
    name: "HP-500 Deep Catering Tray",
    code: "HP-500",
    dimensions: "320 x 260 x 60 mm",
    capacity: "3500 ml",
    image: prod4,
    description: "Heavy-duty large roasting container for hospitality and catering service.",
    isEcoFriendly: true
  },
  {
    id: "prod-5",
    name: "HP-110 Souffle Ramekin",
    code: "HP-110",
    dimensions: "85 x 40 mm",
    capacity: "150 ml",
    image: prod5,
    description: "Miniature sizing for desserts, sauces, single cupcakes, or high-end samples.",
    isEcoFriendly: true
  },
  {
    id: "prod-6",
    name: "HP-1000 Multi-Compartment Tray",
    code: "HP-1000",
    dimensions: "240 x 190 x 40 mm",
    capacity: "950 ml",
    image: prod6,
    description: "Dual-cavity design ideal for complete meal packaging, side pairings, and deliveries.",
    isEcoFriendly: true
  },
  {
    id: "prod-7",
    name: "HP-800 Half-Size Gastronorm",
    code: "HP-800",
    dimensions: "325 x 176 x 65 mm",
    capacity: "2200 ml",
    image: prod7,
    description: "Standard industrial catering dimensions. Superb thermal seal compatibility.",
    isEcoFriendly: true
  },
  {
    id: "prod-8",
    name: "HP-650 Square Dessert Pan",
    code: "HP-650",
    dimensions: "205 x 205 x 45 mm",
    capacity: "1400 ml",
    image: prod8,
    description: "Versatile medium tray for square brownies, casseroles, and freezer storage.",
    isEcoFriendly: true
  }
];

export const recipesData: Recipe[] = [
  {
    id: "rec-1",
    title: "Traditional Cottage Pie",
    description: "Hearty seasoned beef, carrots, and sweet peas under a golden, peak-textured mashed potato crust baked right in our HP-320 tray.",
    prepTime: "45 mins",
    servings: 4,
    image: recipe1,
    tags: ["Oven Baked", "Comfort Food", "HP-320 Tray"]
  },
  {
    id: "rec-2",
    title: "Baked Ham & Cheese Quiche",
    description: "Rich savory egg custard loaded with smoked country ham, matured cheddar cheese, and fresh chives, baked crispy in our HP-220 round tray.",
    prepTime: "35 mins",
    servings: 6,
    image: recipe2,
    tags: ["Easy Prep", "Breakfast/Brunch", "HP-220 Tray"]
  },
  {
    id: "rec-3",
    title: "South African Bobotie",
    description: "Classic spiced minced meat baked with an egg-based topping, featuring a perfect balance of savory, sweet, and tangy flavors. Baked golden and fragrant in our premium Hulpak containers.",
    prepTime: "55 mins",
    servings: 6,
    image: recipe3,
    tags: ["Spiced Beef", "South African Classic", "Baked Perfection"]
  }
];

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: "why-1",
    title: "Flash Freezing Compatible",
    description: "Designed to handle extreme cold down to -40°C without cracking, warping, or compromising food hygiene and container strength.",
    iconName: "snowflake"
  },
  {
    id: "why-2",
    title: "Film Sealing Compatible",
    description: "Features flat, precise upper rims engineered for hermetic heat-sealing films, extending shell life and ensuring spill-proof delivery.",
    iconName: "shield-check"
  },
  {
    id: "why-3",
    title: "Oven, Grill & Microwave Friendly",
    description: "Highly versatile conductive metal. Wholly safe for conventional ovens, high-heat grills, and modern microwave ovens.",
    iconName: "flame"
  },
  {
    id: "why-4",
    title: "Extremely Cost-Effective",
    description: "Premium performance at fractional costs. Low overhead, cheap logistics, and optimized nested space storage.",
    iconName: "coins"
  },
  {
    id: "why-5",
    title: "Branded Printing & Customization",
    description: "Showcase your brand. We can emboss, stamp, or high-definition print custom brand logos, instructions, and artwork onto lids.",
    iconName: "printer"
  },
  {
    id: "why-6",
    title: "Leak-Proof & Sealable Rims",
    description: "Engineered fold-down hemmed edges. Lock lids securely in place to guard against leaks, oils, and vertical compressions.",
    iconName: "droplet"
  }
];
