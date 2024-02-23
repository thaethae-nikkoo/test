import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

export default function index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
