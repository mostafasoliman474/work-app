import React from "react";

import Home from "./pages/Home.tsx";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  // Navigate
} from "react-router-dom";
import Products from "./pages/Products.tsx";
import Users from "./pages/Users.tsx";
import Nav from "./components/Nav.tsx";
import SideBar from "./components/SideBar.tsx";
import Posts from "./pages/Posts.tsx";
import Profile from "./pages/Profile.tsx";
import Setting from "./pages/Setting.tsx";
import Orders from "./pages/Orders.tsx";
import Backups from "./pages/Backups.tsx";
import Notes from "./pages/Notes.tsx";
import Forms from "./pages/Forms.tsx";
import ELements from "./pages/ELements.tsx";
import Charts from "./pages/Charts.tsx";
import Calender from "./pages/Calender.tsx";
import Logs from "./pages/Logs.tsx";
import Footer from "./components/Footer.tsx";
import AddUser from "./pages/AddUser.tsx";
import AddProduct from "./pages/AddProduct.tsx";
import Login from "./pages/Login.tsx";
// import { useSelector } from "react-redux";

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

const Layout = () => {
  return (
    <div>
      <Nav />    
      <div className="flex gap-5 ">
        <SideBar />
        <Outlet />      
      </div> 
      <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "backups",
        element: <Backups />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "elements",
        element: <ELements />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
      {
        path: "calender",
        element: <Calender />,
      },
      {
        path: "logs",
        element: <Logs />,
      },
      {
        path: "adduser",
        element: <AddUser />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "adduser",
        element: <AddUser />,
      },
    ]
  },{
    path:'/login',
    element:<Login/>
  }]);


