import * as React from "react";

const IndexPage = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Welcome to My Gatsby Site
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A modern web development platform built with React, GraphQL, and
                webpack.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300">
                Get Started
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
                alt="Gatsby Logo"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Fast Performance
            </h3>
            <p className="text-gray-600">
              Built with performance in mind, delivering blazing-fast page
              loads.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              SEO Friendly
            </h3>
            <p className="text-gray-600">
              Optimized for search engines right out of the box.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Modern Stack
            </h3>
            <p className="text-gray-600">
              Built with React, GraphQL, and modern web technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>
            © {new Date().getFullYear()} My Gatsby Site. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
