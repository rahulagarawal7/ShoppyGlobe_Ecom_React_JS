import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-5 border border-gray-200 rounded-lg shadow-md bg-white">
      {/* Product Image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-30 h-28 object-contain rounded-md shadow-sm "
      />

      {/* Product Details */}
      <div className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
          {/* Title & Price */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Price:{" "}
              <span className="text-indigo-600 font-medium">
                ${item.price.toFixed(2)}
              </span>
            </p>
          </div>

          {/* Quantity Control */}
          <div className="mt-4 sm:mt-0 flex items-center gap-3">
            <label htmlFor={`qty-${item.id}`} className="text-sm text-gray-600">
              Quantity:
            </label>
            <input
              id={`qty-${item.id}`}
              type="number"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
              className="w-16 px-2 py-1 text-sm border border-gray-300 rounded text-center focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Remove Button */}
        <div className="mt-4 text-right">
          <button
            onClick={handleRemove}
            className="text-sm text-red-500 hover:text-red-600 hover:underline transition"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
