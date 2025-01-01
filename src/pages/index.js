import * as React from "react";
import { useState } from "react";

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
    setIsChatOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section with Search */}
      <div className="bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Plan Your Perfect Trip
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Let our AI travel assistant help you create a personalized trip
                itinerary for any destination.
              </p>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="w-full max-w-md mb-8">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter a destination..."
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
                  >
                    Plan Trip
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={IMAGES.hero}
                alt="Travel Planning"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl h-[600px] flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Trip Planning Assistant</h2>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {/* Chat messages will go here */}
              <div className="space-y-4">
                <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                  <p>
                    Hello! I'd love to help you plan your trip to {searchQuery}.
                    What kind of experience are you looking for?
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t">
              <form className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={IMAGES.aiIcon}
              alt="AI Planning"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              AI-Powered Planning
            </h3>
            <p className="text-gray-600">
              Get personalized travel recommendations based on your preferences
              and interests.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
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
              AI.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} TripVar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>TripVar - AI Travel Planning</title>;
