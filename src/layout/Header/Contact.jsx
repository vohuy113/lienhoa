import React from "react";
import call_ic from "../../assets/Header_img/Calling.svg";
import Btn from "../../components/Btn";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Contact = () => {
  const { t } = useTranslation();
  const handleMenuClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <Link to={"/home#contact"}>
      <Btn
        icBefore={<img src={call_ic} />}
        content={t("header.contact")}
        bgColor={"bg-primary"}
        textColor={"text-white"}
        style={"flex gap-[9px] px-6 py-2"}
        onclick={() => handleMenuClick("contact")}
      />
    </Link>
  );
};

export default Contact;
