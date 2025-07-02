const ClearCartPopup = ({ setShowConfirm, handleClearCart }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, .8)" }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Are you sure you want to clear the cart?
        </h3>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setShowConfirm(false)}
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleClearCart}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearCartPopup;
