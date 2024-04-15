import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Search from "./Search";
import FlagLang from "./FlagLang";
import Menu from "./Menu";
import DrawerMobile from "./DrawerMobile";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleMenuToggle = () => {
    setShowMenu((prevState) => !prevState);
    if (!showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };
  const handleCloseDrawer = () => {
    setShowMenu(false);
    document.body.style.overflow = "";
  };
  return (
    <div
      className={`z-20 fixed ${
        headerVisible
          ? "transition-transform duration-300 ease-in transform translate-y-0"
          : "ttransition-transform duration-300 ease-out transform -translate-y-full"
      } bg-white shadow-lg w-full flex justify-between items-center py-[19px] lg:px-20 px-4`}
    >
      <Logo />
      <Navbar />
      <div className="flex gap-6 items-center">
        <Search />
        {!isMobile && <FlagLang />}
        {!isMobile && <Contact />}
      </div>
      {isMobile && <Menu onMenuToggle={handleMenuToggle} show={showMenu} />}
      {isMobile && (
        <DrawerMobile
          showMenu={showMenu}
          handleCloseDrawer={handleCloseDrawer}
        />
      )}
    </div>
  );
};

export default Header;
