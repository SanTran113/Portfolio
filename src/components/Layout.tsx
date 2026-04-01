import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { ParticlesBg } from "./ParticlesBg";

function Layout() {
  const { pathname } = useLocation();
  const hideNav = pathname === "/";

  return (
    <>
      <div className="overflow-hidden">
        {!hideNav && <Navbar />}
        <ParticlesBg />
      </div>

      <Outlet />
    </>
  );
}

export default Layout;
