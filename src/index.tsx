import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import Layout from "./components/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import Contact from "./pages/Contact.tsx";

import WebHome from "./pages/Web/WebHome.tsx";

import GameHome from "./pages/Game/GameHome.tsx";

import About from "./pages/About.tsx";
import Works from "./pages/Works.tsx";
import Ongawa from "./pages/WorkProject/Ongawa.tsx";
import BMarionette from "./pages/WorkProject/BMarionette.tsx";
import SorcererDesk from "./pages/WorkProject/SorcererDesk.tsx";
import Rizzlet from "./pages/WorkProject/Rizzlet.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/:type?", element: <HomePage /> },
      { path: "/:type/aboutme", element: <About /> },
      { path: "/:type/contact", element: <Contact /> },
      { path: "/web", element: <WebHome /> },
      { path: "/game", element: <GameHome /> },
      { path: "/:type/works", element: <Works /> },
      { path: "/ongawa", element: <Ongawa /> },
      { path: "/butterfly-marionette", element: <BMarionette /> },
      { path: "/sorcerer-desk", element: <SorcererDesk /> },
      { path: "/rizzlet", element: <Rizzlet /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
