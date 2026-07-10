import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { productsData } from "../data";
import { ChevronLeft, ChevronRight, Scale, Minimize2, Check, Leaf } from "lucide-react";
import logoWhite from "../assets/images/hulpak-logo-long-white.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductCarousel() {
  // Keep track of loaded and failed image states
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-[#020703] to-[#041107] text-white overflow-hidden relative">
      {/* Decorative background forest light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-950/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-4">
              <Leaf className="w-3.5 h-3.5" />
              Eco-Friendly Aluminium Catalogue
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              Featured Products
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl text-base">
              Explore our premium, heavy-duty aluminium containers engineered for superb temperature endurance, rigid form, and complete recyclability.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              id="swiper-prev"
              className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 flex items-center justify-center transition-all duration-300 cursor-pointer group"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              id="swiper-next"
              className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 flex items-center justify-center transition-all duration-300 cursor-pointer group"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="swiper-container-relative -mx-3">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: "#swiper-prev",
              nextEl: "#swiper-next",
            }}
            pagination={{
              clickable: true,
              el: "#swiper-pagination-custom",
              renderBullet: (index, className) => {
                return `<span class="${className} swiper-bullet-custom bg-white/20 hover:bg-emerald-400 transition-colors"></span>`;
              }
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
              1280: {
                slidesPerView: 4,
                slidesPerGroup: 1,
              },
            }}
            className="px-3 pb-16"
          >
            {productsData.map((product) => (
              <SwiperSlide key={product.id} className="h-full">
                <div className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                  <div>
                    {/* Image / Placement Container */}
                    <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#0b170e] to-slate-900 overflow-hidden mb-6 flex items-center justify-center border border-white/5">
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
                          <span className="text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase">
                            Premium Design
                          </span>
                        </div>
                      )}

                      {/* Eco Friendly Overlay Tag */}
                      <span className="absolute top-3 right-3 bg-[#0c2f16]/90 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 backdrop-blur-sm shadow-sm z-10">
                        <Check className="w-3.5 h-3.5" /> 100% Recycled
                      </span>

                      {/* Code Badge */}
                      <span className="absolute bottom-3 left-3 bg-black/65 text-white/90 border border-white/10 px-2.5 py-0.5 rounded text-[11px] font-mono backdrop-blur-sm z-10">
                        {product.code}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg md:text-xl font-display font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Specs & CTA */}
                  <div className="mt-6 pt-5 border-t border-white/5">
                    {/* Technical Specs List */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 p-2 rounded-lg">
                        <Minimize2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div className="overflow-hidden">
                          <p className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">
                            Dimensions
                          </p>
                          <p className="text-xs font-medium text-gray-300 truncate font-mono">
                            {product.dimensions}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 p-2 rounded-lg">
                        <Scale className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div className="overflow-hidden">
                          <p className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">
                            Volume Capacity
                          </p>
                          <p className="text-xs font-medium text-gray-300 truncate font-mono">
                            {product.capacity}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_4px_12px_rgba(76,158,57,0.1)] group-hover:shadow-[0_4px_20px_rgba(76,158,57,0.25)]">
                      Enquire for Pricing
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Bullet Container */}
        <div id="swiper-pagination-custom" className="flex justify-center items-center gap-2 mt-4" />
      </div>
    </section>
  );
}
