import App from "../../App";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Orders from "../../components/Orders/Orders";
import Shop from "../../components/Shop/Shop";
import SIgnup from "../../components/Signup/SIgnup";
import { addLoaders } from "../../loaders/addLoaders";

export const router = [
    {
      path: "/",
      element:<App/> ,
      children:[
        {
          path: "/",
          element:<Home/> ,
        },
        {
          path: "/shop",
          loader:  ()=> fetch('fakeData/products.json'),
          element:<Shop/> ,
        },
        {
          path: "/orders",
          loader:addLoaders,
          element:<Orders/> ,
        },
        {
          path: "/manage",
          element:<h2>this is mannage page</h2> ,
        },
        {
          path: "/login",
          element:<Login/> ,
        },
        {
          path: "/register",
          element:<SIgnup/> ,
        },
      ]
    },
   
  ]