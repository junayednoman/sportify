import App from "@/App";
import AboutPage from "@/pages/About";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ManageProducts from "@/pages/ManageProducts";
import OrderSuccess from "@/pages/OrderSuccess";
import Products from "@/pages/Products";
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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/order-success",
        element: <OrderSuccess />,
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
]);
