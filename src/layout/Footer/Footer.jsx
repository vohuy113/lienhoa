import React from "react";
import FooterLogo from "./FooterLogo";
import FooterPage from "./FooterPage";
import FooterInfo from "./FooterInfo";
import FooterHeadquarter from "./FooterHeadquarter";

const Footer = () => {
  return (
    <div className="bg-black px-20 pt-20">
      <div className="flex justify-between mb-[60px]">
        <FooterLogo />
        <FooterPage />
        <FooterInfo />
        <FooterHeadquarter />
      </div>
      <div className="border-t text-white py-[30px]">
        Copyright © 2023 3legant. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
