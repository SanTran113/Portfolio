function Navbar() {
  return (
    <nav className="p-4 col-span-3 row-start-2 flex justify-between items-center gap-4 mt-5 mr-5 ml-5">
      <a href="/" className="text-white text-2xl font-bold">
        ST
      </a>
      <ul className="flex space-x-4">
        <li>
          <a href="/works" className="text-white hover:text-gray-300">
            Works
          </a>
        </li>
        <li>
          <a href="/aboutme" className="text-white hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
      <div></div>
    </nav>
  );
}

export default Navbar;
