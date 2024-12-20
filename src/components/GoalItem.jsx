import React from "react";

const GoalItem = ({ icon, content }) => {
  return (
    <div className="flex items-center justify-start">
      <img src={icon} />
      <p className="text-[16px] ml-4 text-justify">{content}</p>
    </div>
  );
};

export default GoalItem;
