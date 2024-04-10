import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: Root.loader,
    errorElement: <div>Something went wrong</div>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
