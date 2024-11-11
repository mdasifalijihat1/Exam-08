import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../components/productDetails/ProductDetails";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import PurchaseDetails from "../pages/PurchaseDetails";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'product/:product_id',
            element:<ProductDetails></ProductDetails>,
            loader:() => fetch('/products.json'),
        },

        {
            path: '/statistics',
            element:<Statistics></Statistics>,
        },
        {
            path: '/dashboard',
            element:<Dashboard></Dashboard>,
            loader:() => fetch('/products.json'),
            
        },
        {
            path:'/dashboard',
            element:<Cart></Cart>,
            loader:() => fetch('/products.json'),
        },
        {
            path:'/dashboard',
            element:<Wishlist></Wishlist>,
            loader:() => fetch('/products.json'),
        },
        {
          path: 'purchasedtails',
          element:<PurchaseDetails></PurchaseDetails>,
          loader:() => fetch('/products.json'),
        },
      ]
      
    },
  ]);
  export default router; 