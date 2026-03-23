import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const type = pathname.startsWith("/game")
    ? "game"
    : pathname.startsWith("/web")
      ? "web"
      : "";

  return (
    <>
      <nav className="p-4 col-span-3 row-start-2 flex justify-between items-center gap-4 mt-3 mb-1 mr-5 ml-5">
        <Link
          to={type ? `/${type}` : "/"}
          className="text-white text-2xl font-bold"
        >
          ST
        </Link>
        <ul className="flex space-x-5 md:space-x-10 lg:space-x-15">
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
            <Link
              to={`/${type ?? "web"}/contact`}
              className="text-white hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <hr className="col-span-3 row-start-3 border-gray-300" />
    </>
  );
}

export default Navbar;
