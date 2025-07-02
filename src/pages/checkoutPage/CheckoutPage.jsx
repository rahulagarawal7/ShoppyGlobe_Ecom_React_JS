import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Checkout
      </h2>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <img
            src="https://static.thenounproject.com/png/101952-200.png"
            alt="Order Summary Icon"
            className="w-10 h-10"
          />
          Order Summary
        </h3>
        <ul className="divide-y divide-gray-200 mb-4">
          {cartItems.map((item) => (
            <li key={item.id} className="py-3 flex justify-between text-sm">
              <span className="text-gray-700">
                {item.title} × {item.quantity}
              </span>
              <span className="text-gray-800 font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span className="text-indigo-600">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Section Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9SvQRhe-5zo5uCR0gY7L1tq-qoGmlFeY5KoNmlL2Bi81vw8hWcbhbFRWlfXKhnFlIs4&usqp=CAU"
            alt="Payment Icon"
            className="w-10 h-10"
          />
          Payment
        </h3>

        {/* You can integrate Razorpay / Stripe etc here */}
        <div className="text-gray-500 text-sm mb-6">
          Payment integration coming soon.
        </div>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
