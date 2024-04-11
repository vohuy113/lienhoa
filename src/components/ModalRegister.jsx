import React from "react";
import FormComponent from "./FormComponent";
import { useTranslation } from "react-i18next";
import close_ic from "../assets/Header_img/icons8-close.svg";
const ModalRegister = ({ handleClose }) => {
  const { t } = useTranslation();
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40 bg-none w-screen h-max max-w-[80%] sm:w-[80%] md:max-w-[60%] md:w-[60%] lg:max-w-[50%] lg:w-[50%]">
      <FormComponent
        title={t("modal.title")}
        subTitle={t("modal.subTitle")}
        closeBtn={close_ic}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ModalRegister;
