import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
  FaChevronLeft,
} from "react-icons/fa";
import Loader from "../Loader";
import ProductNotFound from "./ProductNotFound";
import NotFound from "../notFound/NotFound";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Check if item is in cart
  const isInCart = cartItems.some((item) => item?.id === product?.id);

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity }));
  };

  // Navigate to cart
  const goToCart = () => navigate("/cart");

  // Remove from cart
  const handleRemoveFromCart = () => {
    dispatch(removeItem(product.id));
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // show loader Until page loaded
  if (loading) return <Loader type={"Product"} />;

  // Show Error page
  if (error) return <NotFound />;

  // render if product is not found
  if (!product) return <ProductNotFound />;

  // Calculate discounted price
  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link to="/" className="flex items-center text-blue-600 mb-6">
          <FaChevronLeft className="mr-1" />
          Back to Products
        </Link>

        {/* Main Product Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image Gallery */}
            <div className="md:w-1/2 p-6">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.images?.[currentImageIndex] || product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
                {product.discountPercentage > 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {Math.round(product.discountPercentage)}% OFF
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-2 overflow-x-auto py-2">
                {product.images?.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                      currentImageIndex === index
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="mb-6">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                  {product.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center mt-2">
                  <div className="flex mr-2">
                    {renderRatingStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews?.length || 0} reviews)
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Price */}
              <div className="mb-6">
                {product.discountPercentage > 0 ? (
                  <div>
                    <span className="text-3xl font-bold text-gray-900">
                      ${discountedPrice}
                    </span>
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      ${product.price}
                    </span>
                    <span className="ml-2 text-sm text-red-600">
                      Save {product.discountPercentage}%
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Availability
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      product.stock > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">SKU</h3>
                  <p className="text-sm text-gray-900">{product.sku}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Weight</h3>
                  <p className="text-sm text-gray-900">
                    {product.weight * 10} grams
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Dimensions
                  </h3>
                  <p className="text-sm text-gray-900">
                    {product.dimensions?.width} × {product.dimensions?.height} ×{" "}
                    {product.dimensions?.depth} in
                  </p>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="quantity"
                    className="mr-3 text-lg font-medium text-gray-700"
                  >
                    Quantity:
                  </label>
                  <div className="flex border px-2 rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* <button
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                  className={`w-full flex items-center justify-center py-3 px-4 rounded-md font-medium ${
                    product.stock > 0
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <FaShoppingCart className="mr-2" />
                  {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </button> */}
                {product.stock > 0 ? (
                  isInCart ? (
                    <div className="flex gap-4">
                      <button
                        onClick={handleRemoveFromCart}
                        className="flex-1 py-3 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                      >
                        Remove from Cart
                      </button>
                      <button
                        onClick={goToCart}
                        className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                      >
                        Go to Cart
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={handleAddToCart}
                      className="w-full flex items-center justify-center py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                  )
                ) : (
                  <button
                    disabled
                    className="w-full py-3 px-4 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed"
                  >
                    Out of Stock
                  </button>
                )}
              </div>

              {/* Additional Info */}
              <div className="border-t pt-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Additional Information
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Warranty</p>
                    <p className="text-gray-900">
                      {product.warrantyInformation}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Shipping</p>
                    <p className="text-gray-900">
                      {product.shippingInformation}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Return Policy</p>
                    <p className="text-gray-900">{product.returnPolicy}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Minimum Order</p>
                    <p className="text-gray-900">
                      {product.minimumOrderQuantity} units
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Customer Reviews
            </h2>

            {product.reviews?.length > 0 ? (
              <div className="space-y-6">
                {product.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border-b pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {renderRatingStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-600">
                        {review.rating}/5
                      </span>
                    </div>
                    <h3 className="font-medium text-gray-900">
                      {review.reviewerName}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {formatDate(review.date)}
                    </p>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
