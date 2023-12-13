import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Project from "../pages/Project/Project";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/projects",
            element: <Project/>
        },
        {
            path: "/contact",
            element: <Contact/>
        }
      ]
    },
  ]);
  export default router;