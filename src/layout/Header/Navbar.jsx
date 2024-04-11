import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = useState("");
  const handleMenuClick = (sectionId) => {
    setActiveMenu(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className="w-max h-max hidden xl:block">
      <ul className="list-none flex text-sm items-center justify-between h-full gap-10">
        <li
          className={`hover:text-primary cursor-pointer ${
            activeMenu === "home" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("home")}
        >
          <Link to={"/"}>{t("header.home")}</Link>
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            activeMenu === "mission" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("mission")}
        >
          <Link to={"/home#mission"}>{t("header.introduce")}</Link>
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            activeMenu === "courses" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("courses")}
        >
          <Link to={"/home#courses"}>{t("header.training")}</Link>
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            activeMenu === "goal2" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("goal2")}
        >
          <Link to={"/home#goal2"}>{t("header.ground")}</Link>
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            activeMenu === "event" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("event")}
        >
          <Link to={"/events"}>{t("header.event")}</Link>
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            activeMenu === "news" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("news")}
        >
          <Link to={"/news"}>{t("header.news")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
