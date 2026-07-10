import { useState } from "react";
import { recipesData } from "../data";
import { Clock, Users, Flame, Utensils, Search, ChevronRight, Scale, CheckCircle2, Bookmark, Heart, FlameKindling } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import recipe1 from "../assets/images/cottage_pie_container_1783613381913.jpg";
import recipe2 from "../assets/images/ham_cheese_quiche_1783613397839.jpg";
import recipe3 from "../assets/images/Fishermans-Pie.jpg";
import recipe4 from "../assets/images/Bobotie.jpg";
import logoWhite from "../assets/images/hulpak-logo-long-white.png";

// Enhance recipe data locally with ingredients and instructions for a rich user experience
interface FullRecipe {
  id: string;
  title: string;
  description: string;
  prepTime: string;
  servings: number;
  image: string;
  tags: string[];
  containerCode: string;
  bakingTemp: string;
  ingredients: string[];
  steps: string[];
}

const detailedRecipes: FullRecipe[] = [
  {
    id: "rec-1",
    title: "Traditional Cottage Pie",
    description: "Hearty seasoned beef, carrots, and sweet peas under a golden, peak-textured mashed potato crust baked right in our HP-320 tray.",
    prepTime: "45 mins",
    servings: 4,
    image: recipe1,
    tags: ["Oven Baked", "Comfort Food", "HP-320 Tray"],
    containerCode: "HP-320",
    bakingTemp: "180°C (350°F)",
    ingredients: [
      "500g extra lean minced beef",
      "1 large onion, finely chopped",
      "2 medium carrots, small diced",
      "1/2 cup sweet garden peas",
      "2 tbsp tomato paste & 1 tbsp Worcestershire sauce",
      "1 cup beef stock",
      "4 large potatoes (for the mash top)",
      "2 tbsp butter & 1/4 cup warm milk",
      "Salt, ground black pepper, and nutmeg to taste"
    ],
    steps: [
      "Boil the potatoes in salted water until completely soft. Drain, add butter, warm milk, salt, and a pinch of nutmeg. Mash until smooth and fluffy.",
      "Brown the minced beef with onions and diced carrots in a hot pan. Drain excess fat if necessary.",
      "Stir in the tomato paste, Worcestershire sauce, and beef stock. Simmer for 15 minutes until the sauce is rich and thick, then stir in the sweet peas.",
      "Spoon the beef filling directly into the Hulpak HP-320 Gourmet Tray, leveling the surface.",
      "Spread the mashed potato evenly on top. Use a fork to create textured ridges (these will turn crispy and golden).",
      "Bake in a preheated oven at 180°C for 25 minutes or until the potato peak turns beautifully golden brown."
    ]
  },
  {
    id: "rec-2",
    title: "Baked Ham & Cheese Quiche",
    description: "Rich savory egg custard loaded with smoked country ham, matured cheddar cheese, and fresh chives, baked crispy in our HP-220 round tray.",
    prepTime: "35 mins",
    servings: 6,
    image: recipe2,
    tags: ["Easy Prep", "Breakfast/Brunch", "HP-220 Tray"],
    containerCode: "HP-220",
    bakingTemp: "190°C (375°F)",
    ingredients: [
      "1 roll puff pastry sheet",
      "150g smoked wood-fired ham, cubed",
      "1.5 cups matured sharp cheddar cheese, grated",
      "4 large organic eggs",
      "1 cup fresh whipping cream or double thick milk",
      "A handful of fresh chives, snipped",
      "A pinch of ground nutmeg, sea salt, and black pepper"
    ],
    steps: [
      "Roll out the puff pastry sheet and gently press it into the Hulpak HP-220 Round Baking Tray. Trim off any hanging edges.",
      "Scatter the cubed smoked ham and grated mature cheddar cheese evenly over the pastry bottom.",
      "In a bowl, whisk together the eggs, whipping cream, snipped chives, salt, black pepper, and a pinch of nutmeg.",
      "Carefully pour the egg custard mixture over the ham and cheese in the tray.",
      "Bake in the preheated oven at 190°C for 30 to 35 minutes until the quiche center is set and the top boasts a lovely golden tint."
    ]
  },
  {
    id: "rec-3",
    title: "Traditional Fisherman's Pie",
    description: "Succulent cubes of fresh hake, kingklip, and prawns poached in a dill-infused white sauce, crowned with cheesy mashed potatoes, baked in our HP-320 tray.",
    prepTime: "50 mins",
    servings: 4,
    image: recipe3,
    tags: ["Seafood", "Elegant Bake", "HP-320 Tray"],
    containerCode: "HP-320",
    bakingTemp: "180°C (350°F)",
    ingredients: [
      "400g mixed fresh white fish fillets (hake/kingklip), skinless & cubed",
      "150g fresh prawns, deveined",
      "2 cups whole milk",
      "1 bay leaf & a few peppercorns",
      "50g butter & 50g all-purpose flour (for the roux)",
      "1 tbsp fresh dill, chopped",
      "4 medium potatoes, boiled and mashed with butter",
      "1/2 cup grated gouda or parmesan cheese"
    ],
    steps: [
      "Gently poach the white fish cubes in milk with the bay leaf and peppercorns for 5 minutes. Strain the poaching milk and set aside (do not discard!).",
      "In a small saucepan, melt the butter and stir in the flour. Cook for 1 minute, then gradually whisk in the warm poaching milk until a smooth, thick sauce forms.",
      "Stir the fresh dill and seafood (fish and raw prawns) gently into the warm sauce.",
      "Pour the seafood mixture into the premium Hulpak HP-320 container.",
      "Top with the fluffy mashed potato, sprinkle grated cheese on top, and bake at 180°C for 25-30 minutes until bubbling and golden."
    ]
  },
  {
    id: "rec-4",
    title: "South African Bobotie",
    description: "Classic spiced minced meat baked with an egg-based topping, featuring a perfect balance of savory, sweet, and tangy flavors. Baked golden and fragrant in our premium Hulpak containers.",
    prepTime: "55 mins",
    servings: 6,
    image: recipe4,
    tags: ["Spiced Beef", "South African Classic", "Baked Perfection"],
    containerCode: "HP-320",
    bakingTemp: "180°C (350°F)",
    ingredients: [
      "500g lean minced beef or lamb",
      "1 thick slice of white bread soaked in milk",
      "2 medium onions, chopped",
      "1 tbsp Cape Malay curry powder & 1 tsp turmeric",
      "2 tbsp fruit chutney & 1 tbsp apricot jam",
      "1 tbsp lemon juice & 1/2 cup seedless raisins",
      "2 large eggs & 1/2 cup whole milk (for the custard custard)",
      "4 bay leaves"
    ],
    steps: [
      "Sauté the onions in a pan until soft and golden. Stir in the curry powder and turmeric to release their rich aromatics.",
      "Add the minced beef and cook until browned. Squeeze out the milk from the soaked bread, crumble it, and add it to the meat along with chutney, jam, lemon juice, and raisins. Simmer for 10 mins.",
      "Spoon the spiced meat mixture into the Hulpak HP-320 container, pressing it down firmly to create a compact, flat base.",
      "Whisk the eggs together with the whole milk and a pinch of salt. Pour this liquid custard carefully over the pressed meat.",
      "Lay the bay leaves flat on top of the egg custard. Bake in the oven at 180°C for 25 to 30 minutes until the egg topping is set and beautifully golden."
    ]
  }
];

export default function Recipes() {
  const [activeRecipeId, setActiveRecipeId] = useState<string>("rec-4"); // Default to the newly added Bobotie
  const [portions, setPortions] = useState<number>(1); // Scaling factor multiplier

  // Keep track of loaded and failed image states
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const activeRecipe = detailedRecipes.find((r) => r.id === activeRecipeId) || detailedRecipes[0];

  return (
    <div className="bg-[#020703] min-h-screen text-white font-sans py-24 px-6 relative overflow-hidden">
      {/* Visual glowing accents */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-4"
          >
            <Flame className="w-3.5 h-3.5" />
            Kitchen Tested. Chef Approved.
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Hulpak Culinary Hub
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            From high-heat commercial baking ovens to extreme-cold freezing chambers, discover how Hulpak containers maintain thermal stability and deliver immaculate presentation.
          </motion.p>
        </div>

        {/* Dynamic Split Layout: Selector Left / Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Selector Panel - Left (Lines & Cards) */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-emerald-400 mb-4 px-1">
              Select Cooking Guide
            </h2>
            
            {detailedRecipes.map((recipe) => (
              <motion.button
                key={recipe.id}
                onClick={() => {
                  setActiveRecipeId(recipe.id);
                  setPortions(1); // reset scale
                }}
                style={{
                  background: activeRecipeId === recipe.id ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.01)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: activeRecipeId === recipe.id ? "1px solid rgba(76, 158, 57, 0.4)" : "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "16px",
                }}
                className={`w-full p-4 text-left transition-all duration-300 flex items-center gap-4 group cursor-pointer ${
                  activeRecipeId === recipe.id ? "shadow-[0_8px_25px_rgba(76,158,57,0.1)]" : "hover:border-white/10 hover:bg-white/[0.03]"
                }`}
              >
                {/* Recipe thumb */}
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#0d1410] border border-white/5 relative flex items-center justify-center">
                  {!loadedImages[recipe.id + "-thumb"] && !failedImages[recipe.id + "-thumb"] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 animate-pulse" />
                  )}
                  {recipe.image && !failedImages[recipe.id + "-thumb"] ? (
                    <img 
                      src={recipe.image} 
                      alt={recipe.title} 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onLoad={() => setLoadedImages((prev) => ({ ...prev, [recipe.id + "-thumb"]: true }))}
                      onError={() => setFailedImages((prev) => ({ ...prev, [recipe.id + "-thumb"]: true }))}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                        loadedImages[recipe.id + "-thumb"] ? "opacity-100" : "opacity-0"
                      }`} 
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center p-1 text-center">
                      <span className="text-gray-500 text-[8px] font-mono leading-none">NO IMG</span>
                    </div>
                  )}
                </div>

                {/* Info summary */}
                <div className="grow overflow-hidden">
                  <h3 className={`font-display font-bold text-base truncate transition-colors ${
                    activeRecipeId === recipe.id ? "text-emerald-400" : "text-white group-hover:text-emerald-300"
                  }`}>
                    {recipe.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      {recipe.prepTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Utensils className="w-3.5 h-3.5 text-emerald-400" />
                      {recipe.containerCode}
                    </span>
                  </div>
                </div>

                <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform shrink-0 ${
                  activeRecipeId === recipe.id ? "translate-x-1 text-emerald-400" : "group-hover:translate-x-0.5"
                }`} />
              </motion.button>
            ))}
          </div>

          {/* Details Content Panel - Right (Glassmorphic) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRecipeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(15px)",
                  WebkitBackdropFilter: "blur(15px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "24px",
                }}
                className="p-6 md:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Main Recipe Image */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-white/5 bg-[#0d1410] flex items-center justify-center">
                  {!loadedImages[activeRecipe.id] && !failedImages[activeRecipe.id] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 animate-pulse" />
                  )}
                  {activeRecipe.image && !failedImages[activeRecipe.id] ? (
                    <img 
                      src={activeRecipe.image} 
                      alt={activeRecipe.title} 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onLoad={() => setLoadedImages((prev) => ({ ...prev, [activeRecipe.id]: true }))}
                      onError={() => setFailedImages((prev) => ({ ...prev, [activeRecipe.id]: true }))}
                      className={`w-full h-full object-cover ${
                        loadedImages[activeRecipe.id] ? "opacity-100" : "opacity-0"
                      }`} 
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-neutral-800/80">
                      <img 
                        src={logoWhite} 
                        alt="Hulpak Logo" 
                        className="h-10 object-contain mb-3 opacity-30"
                      />
                      <span className="text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase">
                        Premium Spec
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Category overlay tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {activeRecipe.tags.map((tag, i) => (
                      <span key={i} className="bg-black/60 backdrop-blur-sm text-emerald-400 border border-emerald-500/25 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recipe Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-6 border-b border-white/5 gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white">
                      {activeRecipe.title}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">
                      {activeRecipe.description}
                    </p>
                  </div>

                  {/* Portions custom adjustment */}
                  <div className="shrink-0 bg-white/5 p-3.5 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                    <span className="text-[9px] text-gray-400 font-mono uppercase tracking-wider mb-2">Adjust Scale</span>
                    <div className="flex items-center gap-2.5">
                      <button 
                        onClick={() => setPortions(Math.max(1, portions - 1))}
                        className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center font-bold text-sm select-none transition cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-sm font-mono font-bold text-emerald-400">{portions}x</span>
                      <button 
                        onClick={() => setPortions(Math.min(5, portions + 1))}
                        className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center font-bold text-sm select-none transition cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cooking Parameters Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex flex-col justify-center">
                    <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider mb-0.5">Prep Time</span>
                    <span className="text-sm font-bold text-gray-200">{activeRecipe.prepTime}</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex flex-col justify-center">
                    <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider mb-0.5">Bake Temp</span>
                    <span className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" />
                      {activeRecipe.bakingTemp}
                    </span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex flex-col justify-center">
                    <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider mb-0.5">Servings</span>
                    <span className="text-sm font-bold text-gray-200">{(activeRecipe.servings * portions).toFixed(0)} guests</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex flex-col justify-center">
                    <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider mb-0.5">Compatible Tray</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono underline cursor-pointer">{activeRecipe.containerCode}</span>
                  </div>
                </div>

                {/* Ingredients & Steps Tabs Layout */}
                <div className="space-y-8">
                  {/* Ingredients Section */}
                  <div>
                    <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                      <Utensils className="w-4.5 h-4.5 text-emerald-400" />
                      Required Ingredients
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeRecipe.ingredients.map((ing, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white/[0.01] border border-white/[0.03] p-2.5 rounded-lg">
                          <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">
                            {/* Simple scaling parser helper for quantities (multiplying if string starts with digits) */}
                            {portions > 1 && /^\d+/.test(ing)
                              ? ing.replace(/^(\d+)/, (match) => String(Number(match) * portions))
                              : ing
                            }
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cooking Steps Section */}
                  <div>
                    <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                      <FlameKindling className="w-4.5 h-4.5 text-emerald-400" />
                      Step-by-Step Culinary Guide
                    </h3>
                    <div className="space-y-4">
                      {activeRecipe.steps.map((step, idx) => (
                        <div key={idx} className="flex gap-4 items-start bg-white/[0.01] border border-white/[0.03] p-4 rounded-xl">
                          <div className="w-7 h-7 rounded-full bg-[#4C9E39] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 select-none">
                            {idx + 1}
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed pt-0.5">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Disclaimer */}
                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                    * HULPAK ALUMINIUM CONDUCTS HEAT 100% UNIFORMLY FOR SUPERB FOOD RETAINMENT *
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
