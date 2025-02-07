import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          We're sorry, but the page you requested could not be found.
        </p>
        <Link
          href="/"
          className="inline-block bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-200"
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
