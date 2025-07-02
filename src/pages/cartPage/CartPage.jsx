import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader";
const Cart = lazy(() => import("../../components/cart/Cart"));

const CartPage = () => {
  return (
    <div className="cart-page">
      <Suspense fallback={<Loader type={"Cart"} />}>
        <Cart />
      </Suspense>
    </div>
  );
};

export default CartPage;
