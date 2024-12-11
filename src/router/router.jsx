import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
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
        },
        {
           path:"/signin",
           element:<SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;