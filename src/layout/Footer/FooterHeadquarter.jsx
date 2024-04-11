import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FooterHeadquarter = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 items-start">
      <h1 className="text-base font-bold text-white">
        {t("footer.headquarter")}
      </h1>
      <ul className="flex flex-col gap-6 items-start text-white text-sm">
        <li>
          <Link>{t("footer.address1")}</Link>
        </li>
        <li>
          <Link>{t("footer.address2")}</Link>
        </li>
        <li>
          <Link>0234 3821 888</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterHeadquarter;
