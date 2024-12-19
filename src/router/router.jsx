import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails";
import PriveteRouter from "./PriveteRouter";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
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
          path:"/jobs/:id",
          element:<PriveteRouter><JobDetails></JobDetails></PriveteRouter>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:"/jobApply/:id",
          element:<PriveteRouter><JobApply></JobApply></PriveteRouter>
        },
        {
          path:"/myApplyJob",
          element:<PriveteRouter><MyApplications></MyApplications></PriveteRouter>
        },
        {
          path:"addJob",
          element:<PriveteRouter><AddJob></AddJob></PriveteRouter>
        },
        {
          path:"myPostedJobs",
          element:<PriveteRouter><MyPostedJobs></MyPostedJobs></PriveteRouter>
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