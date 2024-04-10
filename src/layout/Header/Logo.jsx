import React from "react";
import logo from "../../assets/Header_img/Logo_header.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="flex justify-center items-center cursor-pointer">
      <Link to={"/"}>
        <img className="w-[92px] h-auto" src={logo} />
      </Link>
    </div>
  );
};

export default Logo;
