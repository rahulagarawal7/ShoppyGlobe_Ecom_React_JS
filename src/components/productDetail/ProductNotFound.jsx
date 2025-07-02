import React from "react";
import { Link } from "react-router-dom";
import { FaSearchMinus } from "react-icons/fa";

const ProductNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <FaSearchMinus className="text-6xl text-red-500 mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Product Not Found
      </h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        The product you’re looking for doesn’t exist or may have been removed.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ProductNotFound;
