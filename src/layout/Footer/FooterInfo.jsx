import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 items-start">
      <h1 className="text-base font-bold text-white">{t("footer.info")}</h1>
      <ul className="flex flex-col gap-6 items-start text-white text-sm">
        <li>
          <Link>{t("footer.info_item1")}</Link>
        </li>
        <li>
          <Link>{t("footer.info_item2")}</Link>
        </li>
        <li>
          <Link>{t("footer.info_item3")}</Link>
        </li>
        <li>
          <Link>{t("footer.info_item4")}</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterInfo;
