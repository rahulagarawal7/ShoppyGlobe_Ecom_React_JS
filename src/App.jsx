import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./store/store";
import router from "../src/navigation/routes/router";
import { Loader } from "lucide-react";

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
};

export default App;
