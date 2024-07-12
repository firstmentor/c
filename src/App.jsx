import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {RouterProvider, createBrowserRouter} from "react-router-dom";

// import './App.css'
import AddTender from './components/admin/AddTender';
import DisplayTender from './components/admin/DisplayTender';
import ViewTender from './components/admin/ViewTender';
import UpdateTender from './components/admin/UpdateTender';
import InsertData from './components/admin/InsertData';
import Part1 from './components/tailwind/Part1';
import Header from './components/layouts/Header';

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<DisplayTender/>,
    },
    {
      path:"/add",
      element: <AddTender/>,
    },
    {
      path:"/view/:id",
      element: <ViewTender/>,
    },
    {
      path:"/edit/:id",
      element: <UpdateTender/>,
    },

    {
      path:"/insertdata",
      element: <InsertData/>,
    },
  ])
  

  return (
    <>
      {/* <Header/> */}
       <RouterProvider router={route}></RouterProvider>
       {/* <Part1/> */}
       
   
    </>
  )
}

export default App



