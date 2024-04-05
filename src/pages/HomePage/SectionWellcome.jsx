import React from "react";
import bg_wellcome from "../../assets/Homepage/SectionWellcome/bg-wellcome.png";
import Btn from "../../components/Btn";
import call_ic from "../../assets/Homepage/SectionWellcome/Calling.svg";
import namA_ic from "../../assets/Homepage/SectionWellcome/namABank.png";
import laguna_ic from "../../assets/Homepage/SectionWellcome/laguna.png";
import taylor_ic from "../../assets/Homepage/SectionWellcome/taylormade.png";
import titleist_ic from "../../assets/Homepage/SectionWellcome/titleist.png";
import { Weather } from "../../components/Weather";

const SectionWellcome = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-between background-section">
      <div className="flex-grow w-full h-full flex flex-col items-start justify-between lg:gap-[120px] py-10 px-20">
        <div className="text-white">
          <Weather />
        </div>
        <div className="text-white w-max text-start">
          <h1 className="lg:text-[64px] lg:font-normal lg:w-[741px] yeseva-font">
            Chào mừng bạn đến với Huế Golf Club
          </h1>
          <h2 className="lg:text-lg lg:mb-10 lg:mt-2">
            Nâng tầm trình đô, Nắm bắt đam mê
          </h2>
          <Btn
            content={"Liên hệ chúng tôi"}
            icBefore={<img src={call_ic} />}
            style={"bg-primary text-black flex gap-2 py-4 px-8"}
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
