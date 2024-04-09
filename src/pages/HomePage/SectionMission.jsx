import React from "react";
import about_img from "../../assets/SectionMission/ss-about-img.png";
import Btn from "../../components/Btn";
import CardAbout from "../../components/CardAbout";
import Title from "../../components/Title";
import { useTranslation } from "react-i18next";
function SectionMission() {
  const { t } = useTranslation();
  return (
    <div
      className="w-full h-full  min-h-screen  grid grid-cols-1 lg:grid-cols-2 pt-10  lg:pt-[100px] pb-[50px]"
      id="mission"
    >
      <div className="flex flex-col  flex-1   gap-6 h-full">
        <div className="text-center lg:text-left lg:pr-10 pl-4 pr-4 md:pl-8 xl:pl-20">
          <Btn
            bgColor={"bg-black"}
            content={`${t("mission.about")}`}
            textColor={"text-white"}
            style={"px-6 lg:py-2 py-4 text-[18px] uppercase leading-tight 	"}
          />
          <Title content={`${t("mission.title")}`} />
        </div>
        <p className="text-justify leading-7 text-[16px] lg:pr-[50px] pl-4 pr-4 md:pl-8 xl:pl-20">
          {t("mission.des_1")}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-4 xl:pl-20 gap-3  xl:gap-6 px-4 md:px-8 xl:px-0">
          <CardAbout first={"100+"} second={`${t("mission.feature_1")}`} />
          <CardAbout first={"10+"} second={`${t("mission.feature_2")}`} />
          <CardAbout first={"20+"} second={`${t("mission.feature_3")}`} />
          <CardAbout first={"30+"} second={`${t("mission.feature_4")}`} />
        </div>
      </div>
      <div className="mt-6 lg:mt-0 flex lg:items-start items-center justify-center pl-[50px]">
        <img className="w-full h-auto" src={about_img}></img>
      </div>
    </div>
  );
}

export default SectionMission;
