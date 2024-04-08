import React from "react";

const CourseItem = ({ svg, t1, des }) => {
  return (
    <div className="block sm:flex items-center p-3 border-[1px] border-solid	 border-[#B5B5B5]">
      <div className="flex justify-center items-center">
        <img className=" p-[26px] bg-[#00B125]" src={svg} />
      </div>
      <div className="ml-3 mt-3 sm:mt-0 flex flex-col">
        <p className="text-[20px] font-semibold  text-center sm:text-justify">
          {t1}
        </p>
        <p className="text-[16px] text-center sm:text-justify">{des}</p>
      </div>
    </div>
  );
};

export default CourseItem;
