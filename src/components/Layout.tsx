import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
