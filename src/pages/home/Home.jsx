import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader";
const ProductList = lazy(() =>
  import("../../components/productList/ProductList")
);

const Home = () => {
  return (
    <div className="home">
      <Suspense fallback={<Loader />}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default Home;
