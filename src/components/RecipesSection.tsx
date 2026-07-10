import { recipesData } from "../data";
import { Clock, Users, ArrowUpRight, ChefHat, Flame, Snowflake } from "lucide-react";
import { useState } from "react";

export default function RecipesSection() {
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

  return (
    <section id="recipes" className="py-24 bg-[#eef5f0] text-gray-900 relative">
      {/* Organic top background shape */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#041107] to-transparent opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-800/10 text-emerald-800 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <ChefHat className="w-3.5 h-3.5" />
            Culinary Adaptability
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-gray-900 leading-tight">
            Kitchen Tested. <br />Chef Approved.
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg max-w-xl">
            From industrial freezing tunnels to high-heat commercial convection ovens, Hulpak containers are built to preserve flavor, bake uniformly, and present beautifully.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipesData.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white border border-emerald-900/5 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image slot */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Recipe Specs */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        {recipe.prepTime}
                      </div>
                      <div className="flex items-center gap-1 text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                        <Users className="w-3.5 h-3.5 text-emerald-400" />
                        {recipe.servings} Servings
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {recipe.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono tracking-wide font-medium bg-emerald-500/10 text-emerald-800 border border-emerald-500/10 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {recipe.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedRecipe(selectedRecipe === recipe.id ? null : recipe.id)}
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium text-sm py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer"
                >
                  {selectedRecipe === recipe.id ? "Close Details" : "Read Recipe Application"}
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${selectedRecipe === recipe.id ? "rotate-45" : ""}`} />
                </button>
              </div>

              {/* Expanded Recipe Guidelines (Drawer effect within card) */}
              {selectedRecipe === recipe.id && (
                <div className="bg-emerald-900/5 border-t border-emerald-900/10 p-5 font-sans text-xs text-gray-700 animate-fade-in">
                  <h4 className="font-bold text-emerald-900 uppercase tracking-wider mb-3">
                    Cooking Instructions
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">1.</span>
                      Prepare ingredients and pack tightly into the Hulpak tray.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">2.</span>
                      Bake in conventional oven at 180°C. Silver walls will conduct heat rapidly and lock in moisture.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">3.</span>
                      Cool slightly, then slide on the matching rigid lid. Press down the hemmed borders for transport.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">4.</span>
                      Wholly recyclable! After enjoyment, rinse lightly and drop in your green recycling bin.
                    </li>
                  </ul>

                  {/* Thermo details */}
                  <div className="mt-4 pt-3 border-t border-emerald-900/10 flex items-center gap-4 text-[10px] text-emerald-800 font-mono font-bold">
                    <div className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" /> OVEN SAFE
                    </div>
                    <div className="flex items-center gap-1">
                      <Snowflake className="w-3.5 h-3.5" /> FREEZER SAFE
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
