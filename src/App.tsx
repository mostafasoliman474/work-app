import React from 'react'
// import Nav from './components/Nav.tsx'
import Home from './pages/Home.tsx'
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import Products from './pages/Products.tsx';
import Users from './pages/Users.tsx';
import Nav from './components/Nav.tsx';
import SideBar from './components/SideBar.tsx';
import Posts from './pages/Posts.tsx';
import Profile from './pages/Profile.tsx';
import Setting from './pages/Setting.tsx';
import Orders from './pages/Orders.tsx';
import Backups from './pages/Backups.tsx';
import Notes from './pages/Notes.tsx';
import Forms from './pages/Forms.tsx';
import ELements from './pages/ELements.tsx';
import Charts from './pages/Charts.tsx';
import Calender from './pages/Calender.tsx';
import Logs from './pages/Logs.tsx';
import Footer from './components/Footer.tsx';
export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "products",
      element: (
        <Products/>
      ),
    },
    {
      path: "users",
      element: (
        <Users/>
      ),
    },
    {
      path: "posts",
      element: (
        <Posts/>
      ),
    },
    {
      path: "profile",
      element: (
        <Profile/>
      ),
    },
    {
      path: "settings",
      element: (
        <Setting/>
      ),
    },
    {
      path: "orders",
      element: (
        <Orders/>
      ),
    },
    {
      path: "backups",
      element: (
        <Backups/>
      ),
    },
    {
      path: "notes",
      element: (
        <Notes/>
      ),
    },
    {
      path: "forms",
      element: (
        <Forms/>
      ),
    },
    {
      path: "elements",
      element: (
        <ELements/>
      ),
    },
    {
      path: "charts",
      element: (
        <Charts/>
      ),
    },
    {
      path: "calender",
      element: (
        <Calender/>
      ),
    },
    {
      path: "logs",
      element: (
        <Logs/>
      ),
    },
  ]);
  return (
    <div>
      <Nav />
      <div className='flex gap-5 '>
      <SideBar/>
      <RouterProvider router={router}/>
      </div>
      <Footer/>
    </div>
  )
}

