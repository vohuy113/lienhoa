import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="w-max h-max hidden xl:block">
      <ul className="list-none flex text-sm items-center justify-between h-full gap-10">
        <li className="hover:text-primary cursor-pointer">
          <a>{t("header.home")}</a>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <a>{t("header.introduce")}</a>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <a>{t("header.training")}</a>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <a>{t("header.ground")}</a>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <a>{t("header.event")}</a>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <a>{t("header.news")}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
