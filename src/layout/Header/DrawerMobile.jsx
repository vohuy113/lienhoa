import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import close_btn from "../../assets/Header_img/icons8-close.svg";
import FlagLang from "./FlagLang";
import Contact from "./Contact";
import { useTransition, animated } from "react-spring";
const DrawerMobile = ({ showMenu, handleCloseDrawer }) => {
  const { t } = useTranslation();
  const transitions = useTransition(showMenu, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
  });

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
                <li className="p-4 border-b w-full text-start">
                  {t("header.home")}
                </li>
                <li className="p-4 border-b w-full text-start">
                  {t("header.introduce")}
                </li>
                <li className="p-4 border-b w-full text-start">
                  {t("header.training")}
                </li>
                <li className="p-4 border-b w-full text-start">
                  {t("header.ground")}
                </li>
                <li className="p-4 border-b w-full text-start">
                  {t("header.event")}
                </li>
                <li className="p-4 border-b w-full text-start">
                  {t("header.news")}
                </li>
                <li className="p-4 border-b w-full text-start">
                  {t("header.contact")}
                </li>
                <li className="p-4 border-b w-full text-start">
                  <FlagLang />
                </li>
                <li className="p-4 border-b w-full text-start">
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
