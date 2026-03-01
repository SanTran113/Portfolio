import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const type = pathname.startsWith("/game")
    ? "game"
    : pathname.startsWith("/web")
      ? "web"
      : "";

  return (
    <nav className="p-4 col-span-3 row-start-2 flex justify-between items-center gap-4 mt-5 mr-5 ml-5">
      <Link
        to={type ? `/${type}` : "/"}
        className="text-white text-2xl font-bold"
      >
        ST
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link
            to={`/${type ?? "web"}/works`}
            className="text-white hover:text-gray-300"
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            to={`/${type ?? "web"}/aboutme`}
            className="text-white hover:text-gray-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link to={`/${type ?? "web"}/contact`} className="text-white hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
      <div></div>
    </nav>
  );
}

export default Navbar;
