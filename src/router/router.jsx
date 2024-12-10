import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayouts></MainLayouts>,
      errorElement: <p>page not found</p>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;