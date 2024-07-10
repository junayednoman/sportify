import App from "@/App";
import AboutPage from "@/pages/About";
import AllProducts from "@/pages/AllProducts";
import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ManageProducts from "@/pages/ManageProducts";
import Signup from "@/pages/Signup";
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
        element: <AllProducts />,
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
        path: "cart",
        element: <Cart />,
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
