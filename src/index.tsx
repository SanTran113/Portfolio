import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import Navbar from "./components/Navbar.tsx";
import HomePage from "./pages/HomePage.tsx";
import About from "./pages/About.tsx";
import Works from "./pages/Works.tsx";
import Contact from "./pages/Contact.tsx";
import Ongawa from "./pages/WorkProject/Ongawa.tsx";
import BMarionette from "./pages/WorkProject/BMarionette.tsx";
import SorcererDesk from "./pages/WorkProject/SorcererDesk.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/aboutme",
    element: <About />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/ongawa",
    element: <Ongawa />,
  },
  {
    path: "/butterfly-marionette",
    element: <BMarionette />,
  },
  {
    path: "/sorcerer-desk",
    element: <SorcererDesk />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>,
);
