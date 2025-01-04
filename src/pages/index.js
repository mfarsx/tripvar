import * as React from "react";
import { useState } from "react";
import ChatModal from "../components/ChatModal";

const IMAGES = {
  hero: "/images/travel-hero.svg",
  aiIcon: "/icons/ai-assistant.svg",
  localIcon: "/icons/local-insights.svg",
  planIcon: "/icons/plan.svg",
};

const IndexPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsChatOpen(true);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <img src={IMAGES.hero} alt="Travel" className="w-64 mb-8" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Future of Travel Planning with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Create personalized travel plans with our AI-powered assistant.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="w-full max-w-xl">
            <div className="flex gap-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where do you want to go?"
                className="input-primary flex-1"
              />
              <button type="submit" className="btn-primary">
                Plan
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Chat Modal */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        destination={searchQuery}
      />

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <img
              src={IMAGES.aiIcon}
              alt="AI Planning"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              AI-Powered Planning
            </h3>
            <p className="text-gray-600">
              Get personalized travel recommendations based on your preferences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <img
              src={IMAGES.localIcon}
              alt="Local Insights"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Local Insights
            </h3>
            <p className="text-gray-600">
              Discover hidden gems and authentic experiences recommended by our
              AI assistant.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <img
              src={IMAGES.planIcon}
              alt="Smart Planning"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Smart Itineraries
            </h3>
            <p className="text-gray-600">
              Get optimized travel plans that make the most of your time and
              budget.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>TripVar - AI Seyahat Planlayıcı</title>;
