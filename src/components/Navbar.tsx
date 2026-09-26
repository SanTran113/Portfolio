import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NavItems = [
  { page: "works", label: "Projects" },
  { page: "aboutme", label: "About" },
  { page: "contact", label: "Contact" },
];

function Navbar() {
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const MotionLink = motion(Link);
  const { pathname } = useLocation();
  const type = pathname.startsWith("/game")
    ? "game"
    : pathname.startsWith("/web")
      ? "web"
      : "";

  return (
    <>
      <nav className="p-4 col-span-3 row-start-2 flex justify-between items-center gap-4 mt-3 mb-1 mr-5 ml-5 -z-5">
        <Link
          data-cursor-hover
          to={type ? `/${type}` : "/"}
          className="text-white text-2xl font-bold"
        >
          ST
        </Link>
        <ul className="flex space-x-5 md:space-x-10 lg:space-x-15">
          {NavItems.map(({ page, label }) => {
            const to = `/${type ?? "web"}/${page}`;
            const isActive = pathname === to;
            const isDimmed = isHovering!== null && isHovering !== page;
            return (
              <li>
                <MotionLink
                  data-cursor-hover
                  className={`${isActive ? "underline underline-offset-6 " : ""}`}
                  to={to}
                  initial={{ color: isActive ? "#FFFFFF" : "#97959F" }}
                  animate={{ color: isDimmed ? "#97959F" : "#FFFFFF" }}
                  onMouseEnter={() => setIsHovering(page)}
                  onMouseLeave={() => setIsHovering(null)}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </MotionLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <hr className="col-span-3 row-start-3 border-gray-300" />
    </>
  );
}

export default Navbar;
