import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ToggleSwitch = ({ onToggle }) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleChange = () => {
    setIsToggled(!isToggled);
    onToggle();
  };
  const { t } = useTranslation();

  return (
    <div className="bg-[#eee] w-max p-2 rounded-[32px]">
      <button
        onClick={handleChange}
        className={`px-6 py-3 rounded-[32px] ${
          isToggled ? "bg-white" : "bg-[#eee]"
        }`}
      >
        {t("section-image.image")}
      </button>
      <button
        onClick={handleChange}
        className={`px-6 py-3 rounded-[32px] ${
          isToggled ? "bg-[#eee]" : "bg-white"
        }`}
      >
        {t("section-image.video")}
      </button>
    </div>
  );
};

export default ToggleSwitch;
