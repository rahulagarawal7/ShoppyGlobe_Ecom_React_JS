import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      {/* Illustration */}
      <img
        src="https://cdn-icons-png.freepik.com/512/11010/11010851.png"
        alt="Empty Cart"
        className="w-40 h-40 mb-6 opacity-80"
      />

      {/* Message */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
        Your cart is empty!
      </h2>
      <p className="text-gray-500 mb-6 max-w-md">
        Looks like you haven’t added anything to your cart yet. Start exploring
        our collection and find something you love.
      </p>

      {/* CTA Button */}
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg text-base font-medium hover:bg-indigo-700 transition"
      >
        🛍️ Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
