import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { ParticlesBg } from "./ParticlesBg";

function Layout() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <ParticlesBg />

      <Outlet />
    </div>
  );
}

export default Layout;
