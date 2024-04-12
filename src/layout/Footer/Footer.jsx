import React from "react";
import FooterLogo from "./FooterLogo";
import FooterPage from "./FooterPage";
import FooterInfo from "./FooterInfo";
import FooterHeadquarter from "./FooterHeadquarter";

const Footer = () => {
  return (
    <div className="bg-black lg:px-20 px-2 lg:pt-20 w-full">
      <div className="justify-between mb-[60px] hidden lg:flex">
        <FooterLogo />
        <FooterPage />
        <FooterInfo />
        <FooterHeadquarter />
      </div>
      <div className="border-t text-white py-[30px]">
        Copyright © 2023 Hue Gol Club. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
