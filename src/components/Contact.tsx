import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Building2, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "HP-320 Gourmet",
    message: "",
    requestSamples: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: "HP-320 Gourmet",
        message: "",
        requestSamples: false
      });
    }, 1500);
  };

  return (
    <div className="bg-[#020703] min-h-screen text-white font-sans py-24 px-6 relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-950/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-4"
          >
            <Building2 className="w-3.5 h-3.5" />
            Direct Manufacturer Enquiries
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Partner with Hulpak
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Connect with our industrial packaging engineers. Request physical sample packs, receive custom design evaluations, or obtain high-volume wholesale pricing schedules.
          </motion.p>
        </div>

        {/* Split Screen Grid (Form Left, Info Right) with Glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Form Side - Left (Glass Card) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "24px",
            }}
            className="lg:col-span-7 p-8 md:p-10 shadow-2xl relative flex flex-col justify-between"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="border-b border-white/5 pb-4">
                    <h2 className="text-xl font-display font-bold text-white">
                      Logistical Enquiry Form
                    </h2>
                    <p className="text-gray-400 text-xs mt-1">
                      Fill out the fields below, and our South African account team will contact you within 4 hours.
                    </p>
                  </div>

                  {/* Two column fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sipho Nkosi"
                        className="w-full bg-white/5 focus:bg-white/10 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-emerald-500/50 outline-none transition-all text-sm font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                        Corporate Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sipho@cateringco.co.za"
                        className="w-full bg-white/5 focus:bg-white/10 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-emerald-500/50 outline-none transition-all text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +27 82 123 4567"
                        className="w-full bg-white/5 focus:bg-white/10 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-emerald-500/50 outline-none transition-all text-sm font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Cape Town Catering Co."
                        className="w-full bg-white/5 focus:bg-white/10 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-emerald-500/50 outline-none transition-all text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                      Product Range of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-[#0c180f] text-white px-4 py-3 rounded-xl border border-white/10 focus:border-emerald-500/50 outline-none transition-all text-sm font-sans"
                    >
                      <option value="HP-320 Gourmet">HP-320 Rectangular Gourmet Tray (750ml)</option>
                      <option value="HP-220 Round">HP-220 Round Baking Dish (620ml)</option>
                      <option value="HP-450 Bread">HP-450 Bread/Loaf Pan (1100ml)</option>
                      <option value="HP-500 Roast">HP-500 Heavy-Duty Roaster (3500ml)</option>
                      <option value="HP-1000 Dual">HP-1000 Dual Cavity Tray (950ml)</option>
                      <option value="Other">Other Custom Dimensions</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                      Enquiry Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please details your quantities, sizes, and sealing requirements..."
                      className="w-full bg-white/5 focus:bg-white/10 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-emerald-500/50 outline-none transition-all text-sm font-sans resize-none"
                    />
                  </div>

                  {/* Sample pack checkbox */}
                  <div className="flex items-start gap-3 bg-[#4C9E39]/5 border border-[#4C9E39]/20 p-3.5 rounded-xl">
                    <input
                      type="checkbox"
                      id="requestSamples"
                      checked={formData.requestSamples}
                      onChange={(e) => setFormData({ ...formData, requestSamples: e.target.checked })}
                      className="mt-1 w-4.5 h-4.5 rounded border-white/10 text-[#4C9E39] focus:ring-emerald-500 focus:ring-offset-black bg-white/5 cursor-pointer"
                    />
                    <label htmlFor="requestSamples" className="text-xs text-gray-300 leading-normal cursor-pointer select-none">
                      <span className="font-bold text-white block">Request Free Physical Sample Pack</span>
                      We will courier a complimentary sample selection of our premium unbranded silver and gold containers to your business address within South Africa.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4C9E39] hover:bg-[#5bb347] disabled:bg-emerald-800 disabled:cursor-not-allowed text-white font-extrabold text-xs md:text-sm tracking-wider uppercase py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_6px_20px_rgba(76,158,57,0.2)] hover:shadow-[0_6px_25px_rgba(76,158,57,0.35)] hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        Send Logistical Enquiry
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 flex flex-col items-center justify-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <div className="space-y-2 max-w-sm">
                    <h2 className="text-2xl font-display font-bold text-white">Enquiry Received!</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Thank you for contacting Hulpak (Pty) Ltd. One of our senior commercial packaging engineers will compile your pricing schedule and reach out to you within 4 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl hover:bg-white/10 transition cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info Side - Right (Glass Card) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "24px",
            }}
            className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between shadow-2xl relative"
          >
            {/* Top Info section */}
            <div className="space-y-8">
              <div className="border-b border-white/5 pb-4">
                <span className="text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase block mb-1">
                  HQ & LOGISTICAL HUB
                </span>
                <h2 className="text-2xl font-display font-bold text-white">
                  Corporate Offices
                </h2>
              </div>

              {/* Information Rows */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">Factory & Office Address</h3>
                    <p className="text-sm text-gray-200 mt-1 leading-relaxed font-sans">
                      Unit 14, Gazelle Industrial Park,<br />
                      54 Corporate Crescent, Midrand,<br />
                      Johannesburg, 1685, South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">Logistics Hotline</h3>
                    <p className="text-sm text-gray-200 mt-1 font-mono">
                      +27 (0) 11 465 0920
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">Direct Email</h3>
                    <p className="text-sm text-emerald-400 mt-1 font-mono hover:underline cursor-pointer">
                      enquiries@hulpak.co.za
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">Operating Hours</h3>
                    <p className="text-sm text-gray-200 mt-1 leading-relaxed font-sans">
                      Monday — Friday: 08:00 to 17:00 (GMT+2)<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Vector Grid Map Placeholder */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="w-full aspect-[16/9] rounded-2xl bg-gradient-to-tr from-[#021c0b] to-[#040905] border border-white/5 relative overflow-hidden flex flex-col justify-between p-4 group">
                {/* Visual grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:14px_14px]" />
                
                {/* Visual abstract map outline dots */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                    South Africa Distribution Map
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Styled cities locations list */}
                <div className="relative z-10 flex justify-between text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                  <span>JHB Hub</span>
                  <span>CPT Depot</span>
                  <span>DBN Port</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
}
