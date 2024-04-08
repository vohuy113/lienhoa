import React, { useState } from "react";
const ToggleSwitch = ({ label }) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleChange = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="bg-[#eee] w-max p-2 rounded-[32px]">
      <button
        onClick={handleChange}
        className={`px-6 py-3 rounded-[32px] ${
          isToggled ? "bg-white" : "bg-[#eee]"
        }`}
      >
        Hình ảnh
      </button>
      <button
        onClick={handleChange}
        className={`px-6 py-3 rounded-[32px] ${
          isToggled ? "bg-[#eee]" : "bg-white"
        }`}
      >
        Video
      </button>
    </div>
  );
};

export default ToggleSwitch;
