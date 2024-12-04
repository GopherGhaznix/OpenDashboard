import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import DashboardPage from './pages/Dashboard.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PagesPage from './pages/Pages.jsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <></>,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "pages",
        element: <PagesPage />,
      },
    ],
  }])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
