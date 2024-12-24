import { createBrowserRouter } from "react-router";
import ProtectedAdminRoute from "../Components/ProtectedAdminRoute";
import AddProduct from "../Pages/AddProduct";
import AllProducts from "../Pages/AllProducts";
import Error from "../Pages/Error";
import Products from "../Pages/Home";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import Root from "../Pages/Root";
import Signup from "../Pages/Signup";
import EditProduct from "../Components/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Products />,
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
        path: "/add-product",
        element: (
          <ProtectedAdminRoute>
            <AddProduct />
          </ProtectedAdminRoute>
        ),
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/all-products",
        element: (
          <ProtectedAdminRoute>
            <AllProducts />
          </ProtectedAdminRoute>
        ),
      },
      {
        path: `/edit-product/:id`,
        element: (
          <ProtectedAdminRoute>
          <EditProduct />
          </ProtectedAdminRoute>
        ),
      },
    ],
  },
]);

export default router;
