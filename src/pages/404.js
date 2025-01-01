import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not Found - TripVar</title>;
