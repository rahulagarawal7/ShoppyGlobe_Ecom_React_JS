import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader";
const ProductDetail = lazy(() =>
  import("../../components/productDetail/ProductDetail")
);

const ProductDetailPage = () => {
  return (
    <div className="product-detail-page">
      <Suspense fallback={<Loader type={"Product"} />}>
        <ProductDetail />
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;
