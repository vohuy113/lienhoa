import React from "react";
import SectionMission from "./SectionMission";
import SectionAboutUs from "./SectionAboutUs";
import SectionCourses from "./SectioneCourses";
import SectioneGoal from "./SectioneGoal";
import SectioneGoal2 from "./SectioneGoal2";
import SectionEvent from "./SectionEvent";
import SectionImage from "./SectionImage";
import SectionContact from "./SectionContact";
import SectionWellcome from "./SectionWellcome";
const Homepage = () => {
  return (
    <div className="w-full">
      <SectionWellcome />
      <SectionMission />
      <SectioneGoal />
      <SectionAboutUs />
      <SectionCourses />
      <SectioneGoal2 />
      <SectionEvent />
      <SectionImage />
      <SectionContact />
    </div>
  );
};

export default Homepage;
