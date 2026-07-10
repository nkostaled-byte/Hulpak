import { useState } from "react";
import { HelpCircle, ChevronDown, Award, Mail, MessageSquare, Info, ShieldCheck, CheckCircle, Scale } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<string, FAQItem[]> = {
  microwave: [
    {
      question: "Are Hulpak aluminium containers safe to use in the microwave?",
      answer: "Yes, 100%! Modern microwaves safely heat food in aluminium trays as long as basic instructions are followed. Place the single tray uncovered in the center of the rotating turntable, ensuring it does not contact the microwave walls or metal surfaces (to avoid electric arcs). The aluminium conducts microwaves evenly, preventing hot spots and sealing in juices."
    },
    {
      question: "Can I use steel cutlery inside the tray while it's heating?",
      answer: "We recommend using wooden, plastic, or ceramic utensils while food is inside the microwave. Avoid leaving forks, metal spoons, or knives inside the container during any heating cycle."
    }
  ],
  sealing: [
    {
      question: "What types of sealing mechanisms do Hulpak containers support?",
      answer: "Hulpak containers feature flat, rigid upper rims engineered specifically to support commercial heat-sealing film (polymer or paper-based laminates). This hermetic seal extends product shelf life and prevents spillages during high-velocity meal delivery. They also support traditional fold-down card lids or clear dome lids."
    },
    {
      question: "Can Hulpak supply the sealing machines as well?",
      answer: "Yes! We partner with South Africa's leading commercial packaging equipment suppliers to offer fully customized manual, semi-automatic, and high-speed fully automated heat-sealing machines designed specifically for our containers."
    }
  ],
  logistics: [
    {
      question: "Where does Hulpak (Pty) Ltd distribute its products?",
      answer: "We are proudly headquarted in South Africa, with dedicated distribution channels spanning all major hubs including Johannesburg, Cape Town, Durban, and Port Elizabeth. We also export into neighboring Southern African Development Community (SADC) regions."
    },
    {
      question: "What is the minimum order quantity (MOQ) for custom printing?",
      answer: "For customized container embossing or custom-branded lid printing, our standard MOQ starts at 50,000 units per line run. Standard unbranded silver or gold catalogue containers have no strict MOQ and can be ordered in carton quantities."
    }
  ],
  sustainability: [
    {
      question: "Are your containers made of virgin or recycled aluminium?",
      answer: "Hulpak is heavily committed to carbon reduction. Over 90% of our alloy is sourced from post-industrial and post-consumer recycled aluminium streams right here in South Africa. We strive to complete the localized closed-loop circle."
    },
    {
      question: "Are aluminium containers better than biodegradable plastic?",
      answer: "Yes. Many 'biodegradable' plastics require highly specialized industrial composting facilities that do not widely exist in South Africa, leading them to landfill where they release methane. Hulpak aluminium is instantly valuable, easily sorted by refuse reclaimers, and melts down with 95% energy savings indefinitely."
    }
  ]
};

export default function AboutFAQs() {
  const [activeTab, setActiveTab] = useState<string>("microwave");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const tabs = [
    { id: "microwave", label: "Microwave Safety" },
    { id: "sealing", label: "Commercial Sealing" },
    { id: "logistics", label: "Logistics & Customization" },
    { id: "sustainability", label: "Circular Sustainability" }
  ];

  return (
    <div className="bg-[#020703] min-h-screen text-white font-sans py-24 px-6 relative overflow-hidden">
      {/* Background radial blurs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-emerald-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            Uncompromising Standards
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Crafting the Future <br />of Food Packaging.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Hulpak (Pty) Ltd is South Africa's premier engineering house for sustainable food logistics. We bridge high-heat thermodynamics, hermetic preservation, and 100% circular metals.
          </motion.p>
        </div>

        {/* Top Split section: Company Story Grid & Technical Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Company Story Card (Glassmorphic) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "24px",
            }}
            className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <span className="text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase block mb-2">
                Hulpak Heritage
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                Engineered for Integrity
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Established to serve South Africa's fast-growing hospitality, meal-kit, and catering sectors, Hulpak (Pty) Ltd manufactures containers that deliver rigid food security without microplastic hazards.
                </p>
                <p>
                  Our containers are extruded from unique, heavy-gauge aluminium alloys. They resist twisting and buckle failures, and they feature perfectly flattened upper rims designed to receive heat-sealable lidding films with high hermeticity.
                </p>
                <p>
                  By sourcing raw material and recycling locally, we sustain an eco-conscious network that protects both consumer health and natural resources across South Africa.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-4">
              <div>
                <p className="text-[10px] text-gray-500 font-mono uppercase">Origin</p>
                <p className="text-sm font-bold text-gray-200">South Africa</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-mono uppercase">Recyclable</p>
                <p className="text-sm font-bold text-emerald-400">100% Infinite</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-mono uppercase">Seals</p>
                <p className="text-sm font-bold text-gray-200">Heat/Film</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Pillars List Layout on Right */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Commercial Conforming</h3>
                <p className="text-xs text-gray-400 leading-relaxed">Fully compliant with international and domestic South African standards for direct contact with food acids, salts, and high moisture.</p>
              </div>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Double-Gauge Rigidity</h3>
                <p className="text-xs text-gray-400 leading-relaxed">Engineered with robust vertical rib walls. Resists food compression during transport, stacking, and shipping logistics.</p>
              </div>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">High Thermal Bounds</h3>
                <p className="text-xs text-gray-400 leading-relaxed">Operate confidently across extreme limits. Safe for flash-freezers at -40°C all the way up to commercial grills at 400°C.</p>
              </div>
            </div>
          </div>

        </div>

        {/* FAQs Accordion Layout Section */}
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
          Frequently Answered Questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FAQ Category Tab Selectors (Left side layout) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setExpandedIndex(0); // auto expand first on tab change
                }}
                className={`w-full px-5 py-4 rounded-xl text-left font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer border flex items-center justify-between ${
                  activeTab === tab.id
                    ? "bg-[#4C9E39] border-[#4C9E39] text-white shadow-[0_6px_20px_rgba(76,154,57,0.25)]"
                    : "bg-white/[0.02] border-white/5 text-gray-300 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {tab.label}
                <ChevronDown className={`w-4 h-4 opacity-75 transition-transform duration-300 ${activeTab === tab.id ? "-rotate-90" : ""}`} />
              </button>
            ))}
          </div>

          {/* Expanded FAQ content box (Right side glass layout) */}
          <div className="lg:col-span-8">
            <div 
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "20px",
              }}
              className="p-6 md:p-8 space-y-4"
            >
              {faqData[activeTab].map((faq, idx) => {
                const isOpen = expandedIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="border-b border-white/5 last:border-none pb-4 last:pb-0"
                  >
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="w-full text-left py-3 flex items-center justify-between gap-4 group cursor-pointer"
                    >
                      <span className="font-display font-bold text-base md:text-lg text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-all shrink-0 ${isOpen ? "rotate-180 bg-[#4C9E39]/10 text-emerald-400" : ""}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-400 text-sm leading-relaxed pt-2 pb-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
