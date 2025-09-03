import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'

import HomePage from './pages/HomePage.tsx'
import AboutMe from './pages/AboutMe.tsx'
import Works from './pages/Works.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/aboutme',
    element: <AboutMe />,
  },
  {
    path: '/works',
    element: <Works />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
