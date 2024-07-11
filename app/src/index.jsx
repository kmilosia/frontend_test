import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home.jsx';
import StorageManagement from './routes/StorageManagement.jsx';
import Layout from './routes/Layout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout />
    ),
    children: [
      {
        path: "",
        element: (
          <Home />
        )
      },
      {
        path: "storage-management",
        element: (
          <StorageManagement />
        )
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
