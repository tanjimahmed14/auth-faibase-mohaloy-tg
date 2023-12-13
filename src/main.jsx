import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./componints/Home";
import Login from "./componints/Login";
import Register from "./componints/Register";
import AuthProvider from "./providerss/AuthProvider";
import Orders from "./componints/Orders";
import PrivateOrders from "./componints/PrivateOrders";
import Profile from "./componints/Profile";
import Dashbord from "./componints/Dashbord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h1 className="text-center mt-80 text-3xl">Opps!!!</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/orders',
        element: <PrivateOrders><Orders></Orders></PrivateOrders>
      },
      {
        path: '/profile',
        element: <PrivateOrders><Profile></Profile></PrivateOrders>
      },
      {
        path: '/dashbord',
        element: <PrivateOrders><Dashbord></Dashbord></PrivateOrders>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
