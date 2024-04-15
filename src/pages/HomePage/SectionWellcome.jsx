import React from "react";
import bg_wellcome from "../../assets/Homepage/SectionWellcome/bg-wellcome.png";
import Btn from "../../components/Btn";
import call_ic from "../../assets/Homepage/SectionWellcome/Calling.svg";
import namA_ic from "../../assets/Homepage/SectionWellcome/namABank.png";
import laguna_ic from "../../assets/Homepage/SectionWellcome/laguna.png";
import taylor_ic from "../../assets/Homepage/SectionWellcome/taylormade.png";
import titleist_ic from "../../assets/Homepage/SectionWellcome/titleist.png";
import { Weather } from "../../components/Weather";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import img_bg from "../../assets/Homepage/SectionWellcome/bg-wellcome.png";
const SectionWellcome = () => {
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
    <div className="w-full relative flex flex-col justify-between lg:h-auto h-screen">
      <img
        src={img_bg}
        className="absolute inset-0 w-full -z-20 h-full object-cover object-right"
      />
      <div className="absolute -z-10 inset-0 lg:bg-gradient-to-r lg:from-black lg:to-transparent bg-black opacity-[0.25] lg:opacity-0  mix-blend-multiply"></div>
      <div className="flex-grow mt-[84px] w-full h-full  flex flex-col items-center md:items-start justify-between lg:gap-[120px] gap-16 md:gap-10 lg:py-10 py-6 xl:px-20 md:px-8 px-4">
        <div className="text-white">
          <Weather />
        </div>
        <div className="text-white lg:mb-0 w-full text-start relative z-10">
          <h1 className="lg:text-[64px] text-3xl leading-none lg:font-normal lg:w-[741px] yeseva-font">
            {t("wellcome.welcome_message")}
          </h1>
          <h2 className="lg:text-lg lg:mb-10 mb-8 lg:mt-2">
            {t("wellcome.slogan")}
          </h2>
          <Btn
            onclick={() => handleMenuClick("contact")}
            content={`${t("wellcome.contact")}`}
            icBefore={<img src={call_ic} />}
            style={
              "bg-primary cursor-pointer text-black flex gap-2 lg:py-4 lg:px-8 py-2 px-4"
            }
          />
        </div>
        <div className="flex justify-between items-center w-full gap-5">
          <div className="w-1/4 max-w-[214px]">
            <img className="w-full h-full" src={namA_ic} alt="Nam A Bank" />
          </div>
          <div className="w-1/4 max-w-[214px]">
            <img className="w-full h-full" src={laguna_ic} alt="Laguna golf" />
          </div>
          <div className="w-1/4 max-w-[214px]">
            <img className="w-full h-full" src={taylor_ic} alt="Taylor Made" />
          </div>
          <div className="w-1/4 max-w-[214px]">
            <img className="w-full h-full" src={titleist_ic} alt="Titleist" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWellcome;
