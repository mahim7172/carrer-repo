import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Applidjob from './Components/Appliedjob/Applidjob';
import Jobs from './Components/Jobs/Jobs';
import Error from './Components/Error/Error';
import Jobdetails from './Components/Jobdetails/Jobdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/applied",
        element:<Applidjob></Applidjob>,
        loader:() => fetch('jobs.json')
      },
      {
        path:"/jobs",
        element:<Jobs></Jobs>
      },
      {
        path:"/job/:id",
        element:<Jobdetails></Jobdetails>,
        loader: () => fetch('/jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
