import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ShoppyGlobe
            </div>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold">
              Online
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center"
            >
              <FaShoppingCart className="mr-1" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Avatar */}
            <div className="ml-4">
              <img
                src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                alt="User profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
              />
            </div>
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ShoppyGlobe
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center"
            >
              <FaShoppingCart className="text-xl mx-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-2 shadow-lg rounded-lg mt-2">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 px-4 rounded hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 px-4 rounded hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About-Us
              </Link>
              <div className="flex items-center space-x-3 py-2 px-4">
                <FaUser className="text-gray-500" />
                <span className="text-gray-700 font-medium">My Account</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
