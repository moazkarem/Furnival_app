import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import store from "./Redux/store";
import Cart from "./pages/cart/Cart";
import Login from "./pages/Log in/Login";
import DetailUser from "./pages/Detail user/DetailUser";
import Addtheaddress from "./pages/cart/Addtheaddress";
import Whishlist from "./pages/Wishlist/Whishlist";
import Detailblogs from "./pages/Blog/Detailblogs";
import Profile from "./pages/Profile/Profile";
import Adress from "./pages/Adress/Adress";
import AdminProducts from "./pages/Admin/AdminProducts";
import AddProduct from "./pages/Admin/control product/AddProduct";
import ViewDetails from "../src/pages/Admin/control product/View/ViewDetails";
import EditProducts from "../src/pages/Admin/control product/EditAdminProducts/EditProducts";
import AllAdminCateg from "./pages/Admin/Admin category/AllAdminCateg";
import Addcategory from "./pages/Admin/Admin category/Addcategory";
import ViewCategory from "./pages/Admin/Admin category/ViewCategory";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/detail/:id",
    element: <DetailUser />,
  },
  {
    path: "/detailsblogs/:id",
    element: <Detailblogs />,
  },
  {
    path: "/addadress",
    element: <Addtheaddress />,
  },
  {
    path: "/whishlist",
    element: <Whishlist />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  
  {
    path: "/address",
    element: <Adress />,
  },
  {
    path: "/productsadmin",
    element: <AdminProducts />,


  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/details/:id",
    element: <ViewDetails />,
  },
  {
    path: "/:id/editproducts",
    element: <EditProducts />,
  },
  {
    path: "/alladmincategory",
    element: <AllAdminCateg />,
  },
  {
    path: "/alladmincategory",
    element: <AllAdminCateg />,
  },
  {
    path: "/addcategory",
    element: <Addcategory />,
  },
  {
    path: "/detailscategory/:id",
    element: <ViewCategory />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
