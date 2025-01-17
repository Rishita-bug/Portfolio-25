import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import './index.css'
import Nav from './Nav.jsx'
import WorkPage from './Work.jsx'
import AboutPage from './About.jsx'
import SandpitPage from './Sandpit.jsx'
import Project1Page from './Project1.jsx'
import Project2Page from './Project2.jsx'
import Project3Page from './Project3.jsx'
import Project4Page from './Project4.jsx'
import Project5Page from './Project5.jsx'
import Project6Page from './Project6.jsx'


function Layout() {
  return(
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout for consistent Nav
    children: [
      { path: '/', element: <WorkPage /> },
      { path: '/sandpit', element: <SandpitPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/project-1', element: <Project1Page /> },
      { path: '/project-2', element: <Project2Page /> },
      { path: '/project-3', element: <Project3Page /> },
      { path: '/project-4', element: <Project4Page /> },
      { path: '/project-5', element: <Project5Page /> },
      { path: '/project-6', element: <Project6Page /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />
}

export default App;