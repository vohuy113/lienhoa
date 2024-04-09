import React from "react";
import call_ic from "../../assets/Header_img/Calling.svg";
import Btn from "../../components/Btn";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <Btn
      icBefore={<img src={call_ic} />}
      content={t("header.contact")}
      bgColor={"bg-primary"}
      textColor={"text-white"}
      style={"flex gap-[9px] px-6 py-2"}
    />
  );
};

export default Contact;
