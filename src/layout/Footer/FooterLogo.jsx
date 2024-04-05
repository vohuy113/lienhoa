import React from "react";
import logo_ic from "../../assets/Footer_img/Footer_logo.svg";
import facebook_ic from "../../assets/Footer_img/facebook.svg";
import youtube_ic from "../../assets/Footer_img/youtube.svg";
import tiktok_ic from "../../assets/Footer_img/tiktok.svg";
const FooterLogo = () => {
  return (
    <div className="flex flex-col gap-8">
      <img className="w-[92px] h-auto text-white" src={logo_ic} />
      <h2 className="text-white">More than just a game. It's a lifestyle</h2>
      <div className="flex gap-6">
        <img className="w-6 h-6" src={facebook_ic} />
        <img className="w-6 h-6" src={youtube_ic} />
        <img className="w-6 h-6" src={tiktok_ic} />
      </div>
    </div>
  );
};

export default FooterLogo;
