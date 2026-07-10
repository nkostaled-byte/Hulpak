/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import HeroCanvas from "./components/HeroCanvas";
import ProductCarousel from "./components/ProductCarousel";
import RecipesSection from "./components/RecipesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#020703] min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      {/* Global Header */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Section 01 — Hero Animation (Canvas Image Sequence) */}
        <HeroCanvas />

        {/* Section 02 — Featured Products (Carousel) */}
        <ProductCarousel />

        {/* Section 03 — Ingredients & Recipes */}
        <RecipesSection />

        {/* Section 04 — Why Choose Hulpak (Pty) Ltd? */}
        <WhyChooseUs />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
