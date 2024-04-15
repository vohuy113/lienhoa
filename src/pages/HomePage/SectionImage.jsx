import React, { useState } from "react";
import ToggleSwitch from "../../components/ToggleSwitch";
import img1 from "../../assets/SectionVideoImage/TMS_0226.jpg";
import img2 from "../../assets/SectionVideoImage/2.jpg";
import img3 from "../../assets/SectionVideoImage/TMS_0194.jpg";
import img4 from "../../assets/SectionVideoImage/Rectangle4.png";
import img5 from "../../assets/SectionVideoImage/TMS_0073.jpg";
import img6 from "../../assets/SectionVideoImage/Rectangle7.jpg";
import { useTranslation } from "react-i18next";

const SectionImage = () => {
  const { t } = useTranslation();
  const [isImage, setIsImage] = useState(false);
  const handleRenderData = () => {
    setIsImage((pre) => !pre);
  };
  return (
    <div
      id="section-image"
      className=" flex flex-col items-center gap-4 w-full p-4 xl:p-20"
    >
      <h1 className="text-center mt-6 font-semibold uppercase text-[28px] lg:text-[40px] leading-tight">
        {t("section-image.title")}
      </h1>
      <ToggleSwitch onToggle={handleRenderData} />
      {isImage ? (
        <div className="lg:mt-6 mt-3  flex flex-col lg:gap-6 md:gap-4 gap-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 justify-center  overflow-hidden">
            <div className="col-span-2 bg-slate-500">
              {
                <img
                  src={img2}
                  alt="image 1"
                  className="w-full h-full object-cover"
                />
              }
            </div>
            <div className="h-full justify-between col-span-1 flex md:flex-col w-full  lg:gap-6 md:gap-4 gap-3">
              <div className="w-full h-full overflow-hidden  ">
                <img
                  src={img4}
                  alt="image 2"
                  className="w-full h-full object-cover lg:mt-0 md:mt-4 mt-3"
                />
              </div>
              <div className="w-full h-full overflow-hidden mt-3 lg:mt-0 ">
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
                src={img1}
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
                src={img6}
                alt="Image6"
              />
            </div>
          </div>
        </div>
      ) : (
        // {/* sssss */}
        <div className="lg:mt-6 mt-3 w-full h-[256px] md:h-[424px] lg:h-[484px] xl:h-[594px] 2xl:h-[624px]">
          <div className="flex items-center bg-slate-500 w-full h-full lg:mb-6 md:mb-4 mb-3">
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
        </div>
      )}
    </div>
  );
};

export default SectionImage;
