import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 items-start">
      <h1 className="text-base font-bold text-white">{t("footer.page")}</h1>
      <ul className="flex flex-col gap-6 items-start text-white text-sm">
        <li>
          <Link>{t("footer.page_item1")}</Link>
        </li>
        <li>
          <Link>{t("footer.page_item2")}</Link>
        </li>
        <li>
          <Link>{t("footer.page_item3")}</Link>
        </li>
        <li>
          <Link>{t("footer.page_item4")}</Link>
        </li>
        <li>
          <Link>{t("footer.page_item5")}</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterPage;
