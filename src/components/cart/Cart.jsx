import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cartItem/CartItem";
import { clearCart } from "../../store/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ClearCartPopup from "./ClearCartPopup";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
    setShowConfirm(false); // close modal after action
    navigate("/");
  };

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-medium text-gray-700 mb-4 md:mb-0">
          Total: <span className="text-indigo-600">${total.toFixed(2)}</span>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => setShowConfirm(true)}
            className="px-5 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
          >
            Clear Cart
          </button>

          <Link
            to="/checkout"
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <ClearCartPopup
          handleClearCart={handleClearCart}
          setShowConfirm={setShowConfirm}
        />
      )}
    </div>
  );
};

export default Cart;
