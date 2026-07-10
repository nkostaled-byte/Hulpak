import { useState, useEffect } from "react";
import { Leaf, Menu, X, ArrowRight, MessageSquareCode } from "lucide-react";
import logoWhite from "../assets/images/hulpak-logo-long-white.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        style={{
          background: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
          isScrolled ? "py-4 shadow-lg" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center cursor-pointer group select-none"
          >
            <img 
              src={logoWhite} 
              alt="Hulpak Logo" 
              className="h-10 w-auto object-contain hover:opacity-90 transition-opacity"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <button
              onClick={() => scrollToSection("products")}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Featured Products
            </button>
            <button
              onClick={() => scrollToSection("recipes")}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Featured Recipes
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Call To Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:sales@hulpak.co.za"
              className="text-xs font-mono text-gray-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <MessageSquareCode className="w-4 h-4 text-emerald-400" />
              sales@hulpak.co.za
            </a>
            <button
              onClick={() => scrollToSection("products")}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1 cursor-pointer shadow-[0_4px_12px_rgba(76,158,57,0.2)]"
            >
              Get Quotation
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#020703]/98 z-30 flex flex-col justify-center px-8 animate-fade-in md:hidden">
          <div className="flex flex-col gap-8 text-2xl font-display font-semibold text-white">
            <button
              onClick={() => scrollToSection("products")}
              className="text-left hover:text-emerald-400 transition-colors"
            >
              Featured Products
            </button>
            <button
              onClick={() => scrollToSection("recipes")}
              className="text-left hover:text-emerald-400 transition-colors"
            >
              Featured Recipes
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-left hover:text-emerald-400 transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-left hover:text-emerald-400 transition-colors"
            >
              Contact Us
            </button>

            <div className="h-[1px] bg-white/10 my-4" />

            <div className="flex flex-col gap-4 text-sm font-mono text-gray-400">
              <span className="block text-xs uppercase tracking-widest text-emerald-400">
                Contact Sales South Africa
              </span>
              <a href="mailto:sales@hulpak.co.za" className="text-white text-lg">
                sales@hulpak.co.za
              </a>
              <button
                onClick={() => scrollToSection("products")}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-4"
              >
                Get Custom Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
