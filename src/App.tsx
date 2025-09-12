import React, { useEffect, useRef } from "react";
import {
  Sprout,
  Cloud,
  Network,
  ArrowRight,
  Leaf,
  Users,
  Globe,
} from "lucide-react";

function App() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;
    const starsContainer = starsRef.current;
    starsContainer.innerHTML = "";

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className =
        "absolute bg-white rounded-full opacity-70 animate-pulse";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.width = Math.random() * 3 + 1 + "px";
      star.style.height = star.style.width;
      star.style.animationDelay = Math.random() * 3 + "s";
      star.style.animationDuration = Math.random() * 2 + 2 + "s";
      starsContainer.appendChild(star);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-green-900/20 to-emerald-900/30" />
      <div ref={starsRef} className="fixed inset-0 pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <Leaf className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              AgriAI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-green-400 relative group"
            >
              Features
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-green-400 relative group"
            >
              About
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-green-400 relative group"
            >
              Contact
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-radial from-green-900/10 via-transparent to-transparent opacity-50" />
        <div className="text-center space-y-8 max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Predict Crop Yields
            </span>
            <br />
            <span className="text-white">with AI Precision</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leverage AI and data-driven insights to forecast crop yields using
            soil health, weather patterns, and agricultural data.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent">
            Advanced AI Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Soil */}
            <div className="group bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8 hover:scale-105 transition-all cursor-pointer">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sprout className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-green-300 mb-4">
                Soil Insights
              </h3>
              <p className="text-gray-300">
                Analysis of soil pH, nutrients, and moisture with predictive
                analytics for optimal crop conditions.
              </p>
            </div>

            {/* Weather */}
            <a
              href="https://weather-station-taupe.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/30 rounded-2xl p-8 hover:scale-105 transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Cloud className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-teal-300 mb-4">
                  Weather Forecasting
                </h3>
                <p className="text-gray-300">
                  Real-time and long-term climate predictions using
                  meteorological data and ML algorithms.
                </p>
              </div>
            </a>

            {/* AI */}
            <a
              href="https://agriai-predictor1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-500/30 rounded-2xl p-8 hover:scale-105 transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Network className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-300 mb-4">
                  AI Predictions
                </h3>
                <p className="text-gray-300">
                  Machine learning models for yield forecasts using historical
                  data, current conditions, and predictive analytics.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            About AgriAI
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            AgriAI empowers farmers with AI-driven insights for sustainable
            agriculture and improved yields.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div>
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-green-300">10,000+</h3>
              <p className="text-gray-400">Active Farmers</p>
            </div>
            <div>
              <Globe className="w-8 h-8 text-teal-400 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-teal-300">50+</h3>
              <p className="text-gray-400">Countries Served</p>
            </div>
            <div>
              <Sprout className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-emerald-300">95%</h3>
              <p className="text-gray-400">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-green-500/20 bg-black/40 py-12 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <Leaf className="w-6 h-6 text-green-400 inline-block" />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            AgriAI
          </span>
          <p className="text-gray-400 mt-4">© 2025 AgriAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
