import React from "react";

const Navbar = () => {
  return (
    <nav className="w-max h-max">
      <ul className="list-none flex text-sm items-center justify-between h-full gap-10">
        <li className="hover:text-primary cursor-pointer">
          <a>Home</a>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <a>Introduce</a>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <a>Traning</a>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <a>Ground</a>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <a>Events</a>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <a>News</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
