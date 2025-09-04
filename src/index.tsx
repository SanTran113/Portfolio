import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'

import Navbar from './components/Navbar.tsx'
import HomePage from './pages/HomePage.tsx'
import About from './pages/About.tsx'
import Works from './pages/Works.tsx'
import Contact from './pages/Contact.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/aboutme',
    element: <About />,
  },
  {
    path: '/works',
    element: <Works />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>,
)
