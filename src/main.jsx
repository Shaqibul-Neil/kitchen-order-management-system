import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";

import Home from "./components/Home.jsx";
import Root from "./components/Root/Root.jsx";
import Orders from "./components/Orders.jsx";
import Tables from "./components/Tables.jsx";
import Foods from "./components/Foods.jsx";

//creating router
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await fetch("/orders.json");
          return res.json();
        },
      },
      { path: "orders", Component: Orders },
      { path: "foods", Component: Foods },
      { path: "tables", Component: Tables },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
