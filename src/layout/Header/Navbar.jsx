import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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
          <a>{t("header.home")}</a>
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            activeMenu === "mission" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("mission")}
        >
          <a>{t("header.introduce")}</a>
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            activeMenu === "training" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("training")}
        >
          <a>{t("header.training")}</a>
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            activeMenu === "ground" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("ground")}
        >
          <a>{t("header.ground")}</a>
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            activeMenu === "event" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("event")}
        >
          <a>{t("header.event")}</a>
        </li>
        <li
          className={`hover:text-primary cursor-pointer ${
            activeMenu === "news" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("news")}
        >
          <a>{t("header.news")}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
