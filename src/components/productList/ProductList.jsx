import { useState } from "react";
import ProductItem from "../productItem/ProductItem";
import useProducts from "../../hooks/useProducts";
import Loader from "../Loader";
import SearchBar from "../searchBar/SearchBar";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: products,
    loading,
    error,
  } = useProducts("https://dummyjson.com/products");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error)
    return <div className="text-center text-red-500 mt-8">Error: {error}</div>;

  return (
    <div className="px-4 py-8">
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {searchTerm && <ShowAllButton onClick={() => setSearchTerm("")} />}

      {filteredProducts.length === 0 ? (
        <NoResults />
      ) : (
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

const NoResults = () => {
  return (
    <div className="text-center text-gray-500 py-12 text-lg">
      No products found. Try another search.
    </div>
  );
};

const ShowAllButton = ({ onClick }) => {
  return (
    <div className="text-center mt-6">
      <button
        onClick={onClick}
        className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
      >
        Show All Products
      </button>
    </div>
  );
};

export default ProductList;
