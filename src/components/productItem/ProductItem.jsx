import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItem(product.id));
  };

  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="w-[270px] h-[490px] m-5 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <Link
        to={`/product/${product.id}`}
        className="block h-[180px] relative overflow-hidden"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-400"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {Math.round(product.discountPercentage)}% OFF
          </div>
        )}
      </Link>

      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            {product.category}
          </span>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors mt-1 line-clamp-1">
              {product.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2 mb-3">
          <div className="flex mr-2">{renderStars()}</div>
          <span className="text-xs text-gray-500">({product.rating})</span>
        </div>
        <div className="mt-auto">
          {product.discountPercentage > 0 ? (
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">
                ${discountedPrice}
              </span>
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.price}
              </span>
            </div>
          ) : (
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
          )}
        </div>

        <div className="mt-2">
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              product.stock > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          {!isInCart ? (
            <button
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                product.stock > 0
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Add to Cart
            </button>
          ) : (
            <>
              <button
                onClick={handleRemoveFromCart}
                className="w-full py-2 px-4 rounded-lg font-medium bg-red-500 hover:bg-red-600 text-white transition"
              >
                Remove from Cart
              </button>
              <Link
                to="/cart"
                className="w-full block text-center py-2 px-4 rounded-lg font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition"
              >
                Go to Cart
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
