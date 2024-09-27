import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/pages/error-page";
import HomePage from "@/pages/HomePage";
import MainLayout from "@/layout/MainLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/about",
          element: <div>About</div>,
        },
      ]
    },
  ]);

  

  export default router;