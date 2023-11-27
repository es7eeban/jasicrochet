//import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./views/Root.jsx";
import { Contact } from "./views/Contact";
import Products from "./views/Products";
import Detail from "./views/Detail";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import ProtectedRoute from "./views/ProtectedRoute.jsx";
import ProductsAdmin from "./views/ProductsAdmin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/productos",
        element: <Products />,
      },
      {
        path: "/productos/:id",
        element: <Detail />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/admin",
        element: <ProductsAdmin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
