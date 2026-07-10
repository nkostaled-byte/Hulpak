import { useState, FormEvent } from "react";
import { Leaf, Mail, ShieldCheck, Heart, ArrowUp, Send, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#010301] text-gray-400 py-16 border-t border-white/10 relative overflow-hidden">
      {/* Decorative background green light */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Segment: Logo and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Pitch */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2.5 items-start">
              <img 
                src="/src/assets/images/hulpak-logo-long-white.png" 
                alt="Hulpak Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <img 
                src="/src/assets/images/Hulpak-logo-solgan-white.png" 
                alt="Hulpak Slogan Logo" 
                className="h-4.5 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mt-2">
              Hulpak (Pty) Ltd is South Africa's premier manufacturer and distributor of high-rigidity, sealable, infinitely recyclable aluminium packaging for hospitality, grocery, and meal delivery sectors.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg w-fit mt-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              100% Proudly South African Enterprise
            </div>
          </div>

          {/* Column Quick Navigation Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                Products
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#products" className="hover:text-emerald-400 transition-colors">
                    Rectangular Trays
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-emerald-400 transition-colors">
                    Round Baking Pans
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-emerald-400 transition-colors">
                    Industrial Gastronorms
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-emerald-400 transition-colors">
                    Sealable Lids
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                Sustainability
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#why-choose-us" className="hover:text-emerald-400 transition-colors">
                    Circular Loop
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-emerald-400 transition-colors">
                    Carbon Reduction
                  </a>
                </li>
                <li>
                  <a href="#recipes" className="hover:text-emerald-400 transition-colors">
                    Oven Performance
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@hulpak.co.za" className="hover:text-emerald-400 transition-colors">
                    Bulk Inquiries
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Receive updates regarding new product container sizing releases, sustainable packaging guidelines, and pricing discounts.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-xl text-sm font-medium animate-fade-in">
                <Check className="w-5 h-5" />
                Thank you! You have been subscribed successfully.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
                  <input
                    type="email"
                    required
                    placeholder="Enter business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-emerald-500 focus:outline-none rounded-xl py-2.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 transition-all font-sans"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white p-2.5 rounded-xl transition-all flex items-center justify-center shrink-0 cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-4.5 h-4.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Segment: Copyright & Tech Attribution */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 mt-4 text-xs">
          <div className="flex flex-col gap-1.5">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Hulpak (Pty) Ltd. All Rights Reserved. Co. Reg. No. 2023/894052/07.
            </p>
            <p className="text-gray-600">
              Disclaimer: Product images and technical blueprints shown are conceptual illustrations representing professional aluminium standards.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-gray-500">
              Made with <Heart className="w-3.5 h-3.5 text-red-500/80 fill-red-500/20" /> in South Africa
            </span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all flex items-center justify-center cursor-pointer shadow-md group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
