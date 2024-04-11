import React from "react";
import ToggleSwitch from "../../components/ToggleSwitch";
import img1 from "../../assets/SectionVideoImage/TMS_0226.jpg";
import img2 from "../../assets/SectionVideoImage/2.jpg";
import img3 from "../../assets/SectionVideoImage/TMS_0194.jpg";
import img4 from "../../assets/SectionVideoImage/Rectangle4.png";
import img5 from "../../assets/SectionVideoImage/TMS_0073.jpg";
import img6 from "../../assets/SectionVideoImage/Rectangle6.png";
import { useTranslation } from "react-i18next";

const SectionImage = () => {
  const { t } = useTranslation();
  return (
    <div
      id="section-image"
      className=" flex flex-col items-center gap-4 w-full p-4 xl:p-20"
    >
      <h1 className="text-center mt-6 font-semibold uppercase text-[28px] lg:text-[40px] leading-tight">
        {t("section-image.title")}
      </h1>
      <ToggleSwitch label=" " />
      <div className="lg:mt-6 mt-3 w-full h-full flex flex-col lg:gap-6 md:gap-4 gap-3">
        <div className="h-1/2 flex flex-col md:flex-row w-full lg:gap-6 md:gap-4 gap-3 justify-between object-cover overflow-hidden">
          <div className="flex-1 bg-slate-500">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5tlQ_2fvlTo?si=n-ClPAa-EqTKbqvU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="h-full justify-between flex md:flex-col w-full md:w-[calc(100%/3-16px)] lg:gap-6 md:gap-4 gap-3">
            <div className="w-1/2 md:w-full h-1/2 overflow-hidden ">
              <img
                src={img4}
                alt="image 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 md:w-full h-1/2 overflow-hidden ">
              <img
                src={img5}
                alt="image 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full lg:gap-6 md:gap-4 gap-3 h-1/2">
          <div className="w-1/3">
            <img
              className="w-full object-cover h-full"
              src={img2}
              alt="Image4"
            />
          </div>
          <div className="w-1/3">
            <img
              className="w-full object-cover h-full"
              src={img3}
              alt="Image5"
            />
          </div>
          <div className="w-1/3">
            <img
              className="w-full object-cover h-full"
              src={img1}
              alt="Image6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionImage;
