import { useState } from "react";
import { productsData } from "../data";
import { Search, SlidersHorizontal, Leaf, ZoomIn, Info, Minimize2, Scale, Mail, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoWhite from "../assets/images/hulpak-logo-long-white.png";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [enquiredId, setEnquiredId] = useState<string | null>(null);

  // Keep track of loaded and failed image states
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Categories helper based on code prefixes or names
  const getCategory = (code: string) => {
    if (code.includes("320") || code.includes("1000") || code.includes("450")) return "gourmet";
    if (code.includes("220") || code.includes("110") || code.includes("650")) return "baking";
    if (code.includes("500") || code.includes("800")) return "catering";
    return "other";
  };

  const categories = [
    { id: "all", label: "All Containers" },
    { id: "gourmet", label: "Rectangular Gourmet" },
    { id: "baking", label: "Round & Square Baking" },
    { id: "catering", label: "Catering & Roasting" },
  ];

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "all" || getCategory(product.code) === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleEnquire = (productId: string) => {
    setEnquiredId(productId);
    setTimeout(() => {
      setEnquiredId(null);
    }, 3000);
  };

  return (
    <div className="bg-[#020703] min-h-screen text-white font-sans py-24 px-6 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-950/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-4"
          >
            <Leaf className="w-3.5 h-3.5" />
            Infinite Recyclability
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Aluminium Catalogue
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Explore South Africa's premier range of high-rigidity, hermetically sealable, infinitely recyclable aluminium containers built for culinary perfection and zero-waste circularity.
          </motion.p>
        </div>

        {/* Filter & Search Bar with Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
          }}
          className="p-6 mb-12 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === category.id
                    ? "bg-[#4C9E39] text-white shadow-[0_4px_15px_rgba(76,154,57,0.3)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search code, dimensions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 focus:bg-white/10 text-white pl-11 pr-4 py-2.5 rounded-xl border border-white/10 focus:border-emerald-500/50 outline-none transition-all duration-300 text-sm font-sans"
            />
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "20px",
                }}
                className="p-5 flex flex-col justify-between group hover:border-[#4C9E39]/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] h-full"
              >
                <div>
                  {/* Image slot */}
                  <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#0b170e] to-slate-900 overflow-hidden mb-5 flex items-center justify-center border border-white/5">
                    {/* Shimmering Skeleton Screen */}
                    {!loadedImages[product.id] && !failedImages[product.id] && (
                      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 animate-pulse" />
                    )}

                    {product.image && !failedImages[product.id] ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        onLoad={() => setLoadedImages((prev) => ({ ...prev, [product.id]: true }))}
                        onError={() => setFailedImages((prev) => ({ ...prev, [product.id]: true }))}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                          loadedImages[product.id] ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-neutral-800/80">
                        <img 
                          src={logoWhite} 
                          alt="Hulpak Logo" 
                          className="h-7 object-contain mb-3 opacity-40"
                        />
                        <span className="text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase">
                          Premium Spec
                        </span>
                      </div>
                    )}

                    {/* Sealable/Eco Badges */}
                    <span className="absolute top-3 right-3 bg-[#0c2f16]/90 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 backdrop-blur-sm shadow-sm z-10">
                      <Check className="w-3 h-3" /> 100% Recyclable
                    </span>

                    {/* Technical Code */}
                    <span className="absolute bottom-3 left-3 bg-black/75 text-white/90 border border-white/10 px-2.5 py-0.5 rounded text-[11px] font-mono backdrop-blur-sm z-10">
                      {product.code}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specs and Enquiry */}
                <div className="mt-6 pt-5 border-t border-white/5">
                  <div className="grid grid-cols-2 gap-2.5 mb-5">
                    <div className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 p-2 rounded-lg">
                      <Minimize2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <div className="overflow-hidden">
                        <p className="text-[8px] text-gray-500 font-mono uppercase tracking-wider">Dimensions</p>
                        <p className="text-[11px] font-semibold text-gray-300 truncate font-mono">{product.dimensions}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 p-2 rounded-lg">
                      <Scale className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <div className="overflow-hidden">
                        <p className="text-[8px] text-gray-500 font-mono uppercase tracking-wider">Capacity</p>
                        <p className="text-[11px] font-semibold text-gray-300 truncate font-mono">{product.capacity}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleEnquire(product.code)}
                    className="w-full bg-[#4C9E39] hover:bg-[#5bb347] text-white font-extrabold text-xs tracking-wider uppercase py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_12px_rgba(76,158,57,0.15)] group-hover:shadow-[0_4px_20px_rgba(76,158,57,0.3)] active:scale-95"
                  >
                    {enquiredId === product.code ? (
                      <>
                        <Check className="w-4 h-4 text-white animate-bounce" />
                        Enquiry Sent
                      </>
                    ) : (
                      <>
                        <Mail className="w-3.5 h-3.5 text-white" />
                        Enquire pricing
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white/[0.02] rounded-3xl border border-white/5 max-w-md mx-auto"
          >
            <Info className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-1">No products found</h3>
            <p className="text-gray-400 text-sm">We couldn't find any products matching your search criteria. Please try another search term or change your active filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
