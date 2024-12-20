import { createBrowserRouter } from "react-router";
import AddProduct from "../Pages/AddProduct";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Root from "../Pages/Root";
import Signup from "../Pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/product",
        element: <Products />,
      },
    ],
  },
]);

export default router;
