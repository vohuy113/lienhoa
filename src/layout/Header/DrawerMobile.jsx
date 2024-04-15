import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import close_btn from "../../assets/Header_img/icons8-close.svg";
import FlagLang from "./FlagLang";
import Contact from "./Contact";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";
const DrawerMobile = ({ showMenu, handleCloseDrawer }) => {
  const { t } = useTranslation();
  const transitions = useTransition(showMenu, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
  });
  const handleMenuClick = (sectionId) => {
    handleCloseDrawer();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className={`bg-white h-screen w-full z-30 absolute top-0 right-0
              `}
            >
              <button
                onClick={handleCloseDrawer}
                className="absolute right-4 top-4 w-7 h-7"
              >
                <img src={close_btn} alt="Close" className="w-full h-full" />
              </button>
              <ul className="mt-16 w-full flex flex-col gap-2 text-base items-start">
                <li
                  className="p-4 border-b w-full text-start"
                  onClick={() => handleMenuClick("home")}
                >
                  <Link to={"/"}>{t("header.home")}</Link>
                </li>
                <li
                  className="p-4 border-b w-full text-start"
                  onClick={() => handleMenuClick("mission")}
                >
                  <Link to={"/home#mission"}>{t("header.introduce")}</Link>
                </li>
                <li
                  className="p-4 border-b w-full text-start"
                  onClick={() => handleMenuClick("courses")}
                >
                  <Link to={"/home#courses"}>{t("header.training")}</Link>
                </li>
                <li
                  className="p-4 border-b w-full text-start"
                  onClick={() => handleMenuClick("goal2")}
                >
                  <Link to={"/home#goal2"}>{t("header.ground")}</Link>
                </li>
                <li
                  className="p-4 border-b w-full text-start"
                  onClick={handleCloseDrawer}
                >
                  <Link to={"/events"}>{t("header.event")}</Link>
                </li>
                <li
                  className="p-4 border-b w-full text-start"
                  onClick={handleCloseDrawer}
                >
                  <Link to={"/news"}>{t("header.news")}</Link>
                </li>
                <li
                  className="p-4 border-b w-full text-start"
                  onClick={handleCloseDrawer}
                >
                  <Link to={"/home#contact"}>{t("header.contact")}</Link>
                </li>
                <li className="p-4 border-b w-full text-start">
                  <FlagLang />
                </li>
                <li
                  className="p-4 border-b w-full text-start"
                  onClick={handleCloseDrawer}
                >
                  <Contact />
                </li>
              </ul>
            </animated.div>
          )
      )}
    </>
  );
};

export default DrawerMobile;
