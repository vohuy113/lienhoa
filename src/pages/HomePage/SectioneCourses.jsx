import React, { useState } from "react";
import course_img from "../../assets/SectionCourses/course-img.png";
import course_svg from "../../assets/SectionCourses/star_half_24px.svg";
import course_svg1 from "../../assets/SectionCourses/star_purple500_24px.svg";
import course_svg2 from "../../assets/SectionCourses/ticket 1.svg";
import course_svg3 from "../../assets/SectionCourses/location 2.svg";
import course_svg4 from "../../assets/SectionCourses/calendar 1.svg";
import Btn from "../../components/Btn";
import user_img from "../../assets/SectionCourses/avatar.png";
import CourseItem from "../../components/CourseItem";
import { useTranslation } from "react-i18next";
import ModalRegister from "../../components/ModalRegister";
import Overlay from "../../components/Overlay";

const SectioneCourses = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const handleCloseOverlay = () => {
    setShowModal(false);
  };
  return (
    <div
      id="courses"
      className="w-full h-full  min-h-screen py-8 lg:py-[50px] lg:px-8 xl:px-20  gap-[10px] px-4"
    >
      <h1 className="text-center mt-6 font-semibold uppercase text-[32px] lg:text-[40px] leading-tight">
        {t("courses.title")}
      </h1>
      <p className="text-[16px] mt-2 mb-10 text-center">{t("courses.des")}</p>
      <div className="block xl:flex md:flex-row gap-10">
        <div className="basis-2/5 relative  inset-0 bg-gradient-to-b from-transparent to-black text-white">
          <img className="w-full h-full " src={course_img} />
          <div className="absolute bottom-[24px]  right-[16px] left-[16px] flex flex-col gap-4">
            <h1 className="text-[28px]   lg:text-[42px] text-left font-semibold text-white mb-2">
              {t("courses.title_2")}
            </h1>
            <p className="text-[12px] text-left">{t("courses.des_2")}</p>
            <div className="flex items-center justify-between">
              <div className="flex">
                <img src={course_svg1} />
                <img src={course_svg1} />
                <img src={course_svg1} />
                <img src={course_svg1} />
                <img src={course_svg} />
                <span className="block text-[14px] ml-4 leading-6">(1.2K)</span>
              </div>
              <div className="flex flex-col">
                <span className=" text-end text-[14px] text-[#FF3E3E] line-through font-semibold">
                  {t("courses.price_1")}
                </span>
                <span className="text-white font-bold text-[16px]">
                  {t("courses.price_2")}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="user flex items-center">
                <img className="w-[50px] h-[50px] mr-3" src={user_img} />
                <div className="flex flex-col">
                  <span className="text-[16px] text-left font-bold">
                    Kitani Sarasvati
                  </span>
                  <span className="text-left text-[12px] mt-2">
                    {t("courses.user")}
                  </span>
                </div>
              </div>
              <Btn
                onclick={() => setShowModal(true)}
                bgColor={"bg-[#00B125]"}
                content={`${t("courses.logup-btn")}`}
                textColor={"text-white"}
                style={"py-2 px-4 sm:py-4 sm:px-6 text-[16px]  leading-tight 	"}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 xl:mt-0 basis-3/5 flex flex-col gap-6 xl:gap-12">
          <CourseItem
            svg={course_svg2}
            t1={`${t("courses.feature_1.1")}`}
            des={`${t("courses.feature_1.2")}`}
          />
          <CourseItem
            svg={course_svg3}
            t1={`${t("courses.feature_2.1")}`}
            des={`${t("courses.feature_2.2")}`}
          />
          <CourseItem
            svg={course_svg4}
            t1={`${t("courses.feature_3.1")}`}
            des={`${t("courses.feature_3.2")}`}
          />
          <CourseItem
            svg={course_svg2}
            t1={`${t("courses.feature_4.1")}`}
            des={`${t("courses.feature_4.2")}`}
          />
        </div>
      </div>
      {showModal && <ModalRegister handleClose={handleCloseOverlay} />}
      {showModal && <Overlay handleCloseOverlay={handleCloseOverlay} />}
    </div>
  );
};

export default SectioneCourses;
