import React from "react";
import logo from "../../assets/Header_img/Logo_header.png";
const Logo = () => {
  return (
    <div className="flex justify-center items-center cursor-pointer">
      <img className="w-[92px] h-auto" src={logo} />
    </div>
  );
};

export default Logo;
