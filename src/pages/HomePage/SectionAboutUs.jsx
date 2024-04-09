import React from "react";
import goal_img1 from "../../assets/SectionAboutUs/ss-goal2.png";
import goal_img2 from "../../assets/SectionAboutUs/ss-goal2-1.png";
import { useTranslation } from "react-i18next";

const SectionAboutUs = () => {
  const { t } = useTranslation();
  return (
    <div
      id="about-us"
      className="w-full h-full  min-h-screen py-8 lg:py-[50px] lg:px-8 xl:px-20  gap-[10px] px-4 grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1"
    >
      <div className="">
        <img className="w-full h-full" src={goal_img1} />
      </div>
      <div className="bg-black  text-white flex flex-col gap-6 pb-6 pt-6 px-4 lg:px-6">
        <h1 className="text-[24px] lg:text-[30px] uppercase font-semibold leading-tight ">
          {t("about-us.title")}
        </h1>
        <p className="text-[16px] text-justify">{t("about-us.des_1")}</p>
        <p className="text-[16px] text-justify">{t("about-us.des_2")}</p>
        <p className="text-[16px] text-justify">{t("about-us.des_3")}</p>
      </div>
      <div className="col-span-1 md:col-auto">
        <img className="w-full h-full" src={goal_img2} />
      </div>
    </div>
  );
};

export default SectionAboutUs;
