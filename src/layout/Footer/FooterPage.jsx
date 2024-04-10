import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FooterPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 items-start">
      <h1 className="text-base font-bold text-white">Page</h1>
      <ul className="flex flex-col gap-6 items-start text-white text-sm">
        <li>
          <Link>{t("footer.page")}</Link>
        </li>
        <li>
          <Link>{t("footer.introduce")}</Link>
        </li>
        <li>
          <Link>{t("footer.ground")}</Link>
        </li>
        <li>
          <Link>{t("footer.news")}</Link>
        </li>
        <li>
          <Link>{t("footer.event")}</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterPage;
