import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import './index.css'
import Navbar from './Navbar.jsx'
import HomePage from './HomePage.jsx'
import AboutPage from './About.jsx'
import SandpitPage from './Sandpit.jsx'
import ProjectPage from './Project.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollTop.jsx'



function Layout() {
  return(
    <div>
      <ScrollToTop />
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
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />
}

export default App;