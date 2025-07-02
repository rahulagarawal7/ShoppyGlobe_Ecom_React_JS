import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";
import Layout from "../layout/Layout";
import AboutUs from "../../pages/aboutUs/AboutUs";
import Loader from "../../components/Loader";

const Home = lazy(() => import("../../pages/home/Home"));
const ProductDetailPage = lazy(() =>
  import("../../pages/productDetailPage/ProductDetailPage")
);
const CartPage = lazy(() => import("../../pages/cartPage/CartPage"));
const CheckoutPage = lazy(() =>
  import("../../pages/checkoutPage/CheckoutPage")
);
const NotFound = lazy(() => import("../../components/notFound/NotFound"));

const withLoader = (Component) => (
  <React.Suspense fallback={<Loader />}>
    <Component />
  </React.Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: withLoader(Home) },
      { path: "product/:id", element: withLoader(ProductDetailPage) },
      { path: "cart", element: withLoader(CartPage) },
      { path: "checkout", element: withLoader(CheckoutPage) },
      { path: "about", element: <AboutUs /> },
      { path: "*", element: withLoader(NotFound) },
    ],
  },
]);

export default router;
