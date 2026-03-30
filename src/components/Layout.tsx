import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { ParticlesBg } from "./ParticlesBg";

function Layout() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <ParticlesBg />
      </div>

      <Outlet />
    </>
  );
}

export default Layout;
