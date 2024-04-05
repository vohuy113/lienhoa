import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Search from "./Search";
import FlagLang from "./FlagLang";

const Header = () => {
  return (
    <div className="shadow-lg w-full flex justify-between items-center py-[19px] px-20">
      <Logo />
      <Navbar />
      <div className="flex gap-6 items-center">
        <Search />
        <FlagLang />
        <Contact />
      </div>
    </div>
  );
};

export default Header;
