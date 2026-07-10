import { whyChooseUsData } from "../data";
import { Snowflake, ShieldCheck, Flame, Coins, Printer, Droplets, Shield, Award, Leaf } from "lucide-react";

export default function WhyChooseUs() {
  // Map string names from data to real Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case "snowflake":
        return <Snowflake className="w-6 h-6 text-emerald-400" />;
      case "shield-check":
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case "flame":
        return <Flame className="w-6 h-6 text-emerald-400" />;
      case "coins":
        return <Coins className="w-6 h-6 text-emerald-400" />;
      case "printer":
        return <Printer className="w-6 h-6 text-emerald-400" />;
      case "droplet":
        return <Droplets className="w-6 h-6 text-emerald-400" />;
      default:
        return <Shield className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-[#020703] text-white overflow-hidden relative">
      {/* Dynamic background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Industry Standard of Excellence
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Why choose Hulpak (Pty) Ltd?
          </h2>
          <p className="text-gray-400 mt-4 text-base">
            Hulpak sets the benchmark in South Africa for circular packaging solutions, prioritizing visual beauty, extreme temperature durability, and low ecological impact.
          </p>
        </div>

        {/* CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsData.map((item) => (
            <div
              key={item.id}
              className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.04] hover:border-emerald-500/30 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.05)]"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-display font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* High-Impact Stat Strip */}
        <div className="mt-20 border-t border-white/10 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
              100%
            </p>
            <p className="text-xs text-emerald-400 font-mono uppercase tracking-widest font-bold mt-2">
              Recyclable Material
            </p>
            <p className="text-xs text-gray-500 mt-1">Infinite reuse loop without loss of strength</p>
          </div>

          <div>
            <p className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
              -40&deg;C
            </p>
            <p className="text-xs text-emerald-400 font-mono uppercase tracking-widest font-bold mt-2">
              Flash Freeze Ready
            </p>
            <p className="text-xs text-gray-500 mt-1">Stands the deepest cooling chambers</p>
          </div>

          <div>
            <p className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
              +350&deg;C
            </p>
            <p className="text-xs text-emerald-400 font-mono uppercase tracking-widest font-bold mt-2">
              Oven Resistance
            </p>
            <p className="text-xs text-gray-500 mt-1">Excellent high-convection heating</p>
          </div>

          <div>
            <p className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
              Zero
            </p>
            <p className="text-xs text-emerald-400 font-mono uppercase tracking-widest font-bold mt-2">
              Plastic Leaching
            </p>
            <p className="text-xs text-gray-500 mt-1">100% toxin-free for pure culinary tastes</p>
          </div>
        </div>

      </div>
    </section>
  );
}
