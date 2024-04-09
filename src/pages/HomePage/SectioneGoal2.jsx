import React from "react";
import goal2_img from "../../assets/SectioneGoal2/egoal-bg.png";
import goal2_img1 from "../../assets/SectioneGoal2/egoal1.png";
import goal2_img2 from "../../assets/SectioneGoal2/egoal2.png";
import goal2_img3 from "../../assets/SectioneGoal2/egoal3.png";
import { useTranslation } from "react-i18next";

const SectioneGoal2 = () => {
  const { t } = useTranslation();
  return (
    <div id="goal2" className="py-8 lg:py-[50px]">
      <div className="w-full h-full min-h-screen background-section-goal text-white ">
        <div className="py-8 lg:py-[50px] px-4 lg:px-8 xl:px-[80px]">
          <h1 className="text-[32px] font-semibold lg:text-[60px] text-center lg:text-left leading-tight uppercase">
            {t("goal2.title")}
          </h1>
          <p className="text-[16px] text-justify leading-7 mt-4 pb-6 lg:pb-16 border-b border-[#FFF] border-b-1">
            {t("goal2.des_1")}
          </p>
        </div>
        <div className="pt-6 lg:pt-16 pb-[56px] block lg:flex lg:flex-row">
          <div className=" basis-2/5">
            <p className="px-4 lg:px-8 xl:px-[80px] text-[16px] mb-6 text-justify">
              {t("goal2.des_2")}
            </p>
            <div className="pl-4 lg:pl-8 xl:pl-[80px] pr-4 lg:pr-0 flex flex-col gap-2">
              <h2 className="text-[24px] font-semibold text-left">
                {t("goal2.title_2")}
              </h2>
              <div class="block sm:flex flex-row gap-2">
                <div class="text-[16px] font-semibold sm:font-normal mt-2 sm:mt-0 py-4 px-8 basis-1/4 border-[1px] border-[#FFF]">
                  {t("goal2.table_1")}
                </div>
                <div class="text-[16px] font-semibold sm:font-normal mt-2 sm:mt-0 py-4 px-8 basis-1/4 border-[1px] border-[#FFF] flex items-center justify-center">
                  <span>140.000</span>
                  <span className="underline">đ</span>
                </div>
                <div class="text-[16px] font-semibold sm:font-normal mt-2 sm:mt-0 p-2 basis-1/2 border-[1px] border-[#FFF] flex items-center justify-center">
                  <span> {t("goal2.table_2")}</span>
                  <span className="ml-2"> 06:00 - 18:00</span>
                </div>
              </div>
              <div class="block sm:flex flex-row gap-2">
                <div class="text-[16px] font-semibold sm:font-normal mt-2 sm:mt-0 py-4 px-8 basis-1/4 border-[1px] border-[#FFF]">
                  {t("goal2.table_1")}
                </div>
                <div class="text-[16px] font-semibold sm:font-normal mt-2 sm:mt-0 py-4 px-8 basis-1/4 border-[1px] border-[#FFF] flex items-center justify-center">
                  <span>140.000</span>
                  <span className="underline">đ</span>
                </div>
                <div class="text-[16px] font-semibold sm:font-normal mt-2 sm:mt-0 p-2 basis-1/2 border-[1px] border-[#FFF] flex items-center justify-center">
                  <span> {t("goal2.table_2")}</span>
                  <span className="ml-2"> 06:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 xl:gap-[60px] pt-8 lg:pt-0 pl-4 pr-4 lg:pr-0 lg:pl-10 xl:pl-32  ">
            <img
              className="mt-4 lg:mt-0 w-full h-full object-cover"
              src={goal2_img3}
            />
            <img
              className="mt-4 lg:mt-0 w-full h-full object-cover"
              src={goal2_img2}
            />
            <img
              className="mt-4 lg:mt-0 w-full h-full object-cover"
              src={goal2_img1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectioneGoal2;
