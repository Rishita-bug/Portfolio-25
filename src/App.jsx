import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import './index.css'
import Navbar from './Navbar.jsx'
import HomePage from './HomePage.jsx'
import AboutPage from './About.jsx'
import SandpitPage from './Sandpit.jsx'
import ProjectPage from './Project.jsx'
import Footer from './Footer.jsx'

import $ from "jquery";
window.$ = $; // Ensure jQuery is available globally



function Layout() {
  return(
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout for consistent Nav
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/sandpit', element: <SandpitPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/work/:id', element: <ProjectPage /> },
      // { path: '/work/Project Title 2', element: <Project2Page /> },
      // { path: '/work/Project Title 3', element: <Project3Page /> },
      // { path: '/work/Project Title 4', element: <Project4Page /> },
      // { path: '/work/Project Title 5', element: <Project5Page /> },
      // { path: '/work/Project Title 6', element: <Project6Page /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />
}

export default App;