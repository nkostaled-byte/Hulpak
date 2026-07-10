import { useState } from "react";
import { Leaf, Recycle, Zap, Globe, ShieldCheck, HelpCircle, ArrowRight, Gauge, ChevronRight, Award } from "lucide-react";
import { motion } from "motion/react";

export default function Sustainability() {
  const [trayCount, setTrayCount] = useState<number>(500);

  // Carbon and energy saving calculations
  // Switching from plastic or raw aluminium to 100% recycled aluminium:
  // Roughly saves 0.09 kg CO2 per tray, and 0.14 kWh energy per tray.
  const co2Savings = (trayCount * 0.09).toFixed(1);
  const energySavings = (trayCount * 0.14).toFixed(1);
  const waterSavings = (trayCount * 0.8).toFixed(0); // 0.8 Liters of water saved per tray

  const pillars = [
    {
      icon: <Recycle className="w-6 h-6 text-emerald-400" />,
      title: "Infinite Recyclability",
      subtitle: "Never degraded",
      description: "Unlike paperboard or typical plastics, which undergo 'downcycling' into low-grade goods, Hulpak aluminium can be melted and re-molded into premium containers endlessly with zero structural degradation."
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: "95% Energy Savings",
      subtitle: "Carbon Reduction",
      description: "Melting down recycled aluminium requires only 5% of the total energy needed to refine virgin metal from bauxite ores. This makes closed-loop aluminium packaging a major driver of global industrial decarbonization."
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: "South African Sourced",
      subtitle: "Localization Catalyst",
      description: "Our materials are sourced and extruded locally in South Africa, keeping logistics pathways short, creating skilled jobs within local supply networks, and minimizing sea freight pollution."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Zero Chemical Leaching",
      subtitle: "Total Food Hygiene",
      description: "Aluminium is a highly sterile barrier. It prevents any gaseous, flavor, or chemical leakage into food, completely eliminating the risk of microplastic consumption or toxic chemical migration under high-heat commercial ovens."
    }
  ];

  return (
    <div className="bg-[#020703] min-h-screen text-white font-sans py-24 px-6 relative overflow-hidden">
      {/* Decorative lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Title Section */}
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-4"
          >
            <Leaf className="w-3.5 h-3.5" />
            100% Circular Circularity
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Sustainably Cast. <br />Endlessly Recyclable.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            By opting for Hulpak, you are adopting a fully circular packaging architecture. Read why premium aluminium is the undisputed eco-champion of global meal prep, hospitality, and distribution.
          </motion.p>
        </div>

        {/* Impact Calculator with Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "24px",
          }}
          className="p-8 md:p-12 mb-20 shadow-2xl overflow-hidden relative"
        >
          {/* Subtle decor logo in back */}
          <Recycle className="absolute -right-16 -bottom-16 w-64 h-64 text-emerald-500/[0.03] pointer-events-none rotate-12" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Input Side */}
            <div className="lg:col-span-5">
              <span className="text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase block mb-2">
                Simulate Your Footprint
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                Recycling Impact Calculator
              </h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Estimate the monthly resource preservation and carbon savings of your business by switching from raw single-use plastic containers to Hulpak 100% recycled aluminium.
              </p>

              {/* Slider Input */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300 font-medium">Monthly Containers Used</span>
                  <span className="text-emerald-400 font-mono font-bold text-lg bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
                    {trayCount.toLocaleString()} trays
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="10000"
                  step="50"
                  value={trayCount}
                  onChange={(e) => setTrayCount(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#4C9E39]"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono uppercase">
                  <span>50 trays</span>
                  <span>5,000 trays</span>
                  <span>10,000+ trays</span>
                </div>
              </div>
            </div>

            {/* Output Side (Bento Grid Style) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-6">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mb-1">CO2 Avoided</p>
                  <p className="text-3xl font-display font-bold text-white mb-1">{co2Savings} <span className="text-xs font-mono text-gray-400">kg</span></p>
                  <p className="text-[10px] text-gray-500 leading-normal">Carbon equivalent of planting multiple mature trees.</p>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-6">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mb-1">Energy Saved</p>
                  <p className="text-3xl font-display font-bold text-white mb-1">{energySavings} <span className="text-xs font-mono text-gray-400">kWh</span></p>
                  <p className="text-[10px] text-gray-500 leading-normal">Enough electricity to power commercial fridges for weeks.</p>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-6">
                  <Globe className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mb-1">Water Conserved</p>
                  <p className="text-3xl font-display font-bold text-white mb-1">{waterSavings} <span className="text-xs font-mono text-gray-400">Liters</span></p>
                  <p className="text-[10px] text-gray-500 leading-normal">Water resource saved during manufacturing refining.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pillars Grid */}
        <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-10">
          Our Four Core Circular Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pillars.map((pillar, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "20px",
              }}
              className="p-6 md:p-8 hover:border-[#4C9E39]/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mt-0.5">
                    {pillar.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(135deg, rgba(76, 158, 57, 0.15) 0%, rgba(2, 7, 3, 0.8) 100%)",
            border: "1px solid rgba(76, 158, 57, 0.3)",
            borderRadius: "24px",
          }}
          className="p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Switch Your Business to Circular Aluminium
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed">
              We provide expert technical advice, custom heat-sealing tool setups, and branded printing runs for some of South Africa's largest food enterprises.
            </p>
            <button className="bg-[#4C9E39] hover:bg-[#5bb347] text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_6px_20px_rgba(76,158,57,0.3)] hover:shadow-[0_6px_25px_rgba(76,158,57,0.5)] cursor-pointer inline-flex items-center gap-2">
              Receive Eco-Certification Info
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
