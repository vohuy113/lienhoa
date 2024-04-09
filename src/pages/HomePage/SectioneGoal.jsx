import React from "react";
import courses_img from "../../assets/SectioneGoal/ss-course-img1.png";
import courses_img2 from "../../assets/SectioneGoal/ss-course-img2.png";
import courses_svg from "../../assets/SectioneGoal/sourse-icon.svg";
import Title from "../../components/Title";
import GoalItem from "../../components/GoalItem";
import { useTranslation } from "react-i18next";
const SectioneGoal = () => {
  const { t } = useTranslation();
  return (
    <div
      id="goal"
      className="w-full h-full min-h-screen py-8 lg:py-[50px] grid grid-cols-1 gap-0 lg:gap-10 lg:grid-cols-2 bg-[#F3F3F3] px-4 lg:px-8 xl:px-[80px] "
    >
      <div className="relative">
        <img className="py-[50px] w-[75%] h-auto" src={courses_img}></img>
        <img
          className="absolute top-[50%] left-[30%]  translate-y-[-50%] h-[60%] md:h-[70%] lg:h-[60%] xl:h-[70%]"
          src={courses_img2}
        ></img>
      </div>
      <div className="flex flex-col px-4 lg:px-0 md:gap-8 gap-6 xl:gap-[50px]  py-[50px]">
        <Title content={`${t("goal.title")}`} />
        <GoalItem icon={courses_svg} content={`${t("goal.feature_1")}`} />
        <GoalItem icon={courses_svg} content={`${t("goal.feature_2")}`} />
        <GoalItem icon={courses_svg} content={`${t("goal.feature_3")}`} />
        <GoalItem icon={courses_svg} content={`${t("goal.feature_4")}`} />
        <GoalItem icon={courses_svg} content={`${t("goal.feature_5")}`} />
      </div>
    </div>
  );
};

export default SectioneGoal;
