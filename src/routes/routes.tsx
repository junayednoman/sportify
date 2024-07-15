import App from "@/App";
import AboutPage from "@/pages/About";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ManageProducts from "@/pages/ManageProducts";
import OrderSuccess from "@/pages/OrderSuccess";
import Products from "@/pages/Products";
import ProductUpdate from "@/pages/ProductUpdate";
import ProtectedRoute from "@/pages/ProtectedRoute";
import Signup from "@/pages/Signup";
import SingleProduct from "@/pages/SingleProduct";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:categoryName",
        element: <Products />,
      },
      {
        path: "/manage-products",
        element: (
          <ProtectedRoute>
            <ManageProducts />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-product/:productId",
        element: (
          <ProtectedRoute>
            <ProductUpdate />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/order-success",
    element: (
      <ProtectedRoute>
        <OrderSuccess />
      </ProtectedRoute>
    ),
  },
]);
