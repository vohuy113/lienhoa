import React from "react";
import logo_ic from "../../assets/Footer_img/Footer_logo.svg";
import facebook_ic from "../../assets/Footer_img/facebook.svg";
import youtube_ic from "../../assets/Footer_img/youtube.svg";
import tiktok_ic from "../../assets/Footer_img/tiktok.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  URL_HUE_GOLF_FB,
  URL_HUE_GOLF_YOUTUBE,
  URL_HUE_GOLF_TIKTOK,
} from "../../constants/constants";
const FooterLogo = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8">
      <img className="w-[92px] h-auto text-white" src={logo_ic} />
      <h2 className="text-white">{t("footer.slogan")}</h2>
      <div className="flex gap-6">
        <Link to={URL_HUE_GOLF_FB}>
          <img className="w-6 h-6" src={facebook_ic} />
        </Link>
        <Link to={URL_HUE_GOLF_YOUTUBE}>
          <img className="w-6 h-6" src={youtube_ic} />
        </Link>
        <Link to={URL_HUE_GOLF_TIKTOK}>
          <img className="w-6 h-6" src={tiktok_ic} />
        </Link>
      </div>
    </div>
  );
};

export default FooterLogo;
