import React, { useState } from "react";
import flag_vi from "../../assets/Header_img/icon_vi.png";
import flag_en from "../../assets/Header_img/icon_en.png";
import arrow_ic from "../../assets/Header_img/arrow-down.svg";
const FlagLang = () => {
  const handleChooseLang = (lang) => {
    setLanguage(lang);
    setIsShowLang(false);
  };
  const [language, setLanguage] = useState("en");
  const [isShowLang, setIsShowLang] = useState(false);
  console.log(isShowLang);
  return (
    <div className="relative">
      <div
        className="flex border cursor-pointer w-max h-max items-center border-[#F4F4F4] gap-3 p-2 rounded-[30px]"
        onClick={() => setIsShowLang((pre) => !pre)}
      >
        {language == "en" ? (
          <img className="w-6 h-6" src={flag_en} />
        ) : (
          <img className="w-6 h-6" src={flag_vi} />
        )}
        <img className="w-3 h-3" src={arrow_ic} />
      </div>
      {isShowLang && (
        <div className="flex flex-col gap-3 p-3 mt-2 bg-slate-300 rounded-xl absolute w-max">
          <div
            className="flex gap-2 w-max cursor-pointer"
            onClick={() => handleChooseLang("en")}
          >
            <img className="w-6 h-6" src={flag_en} />
            <h1 className="text-sm">English</h1>
          </div>
          <div
            className="flex gap-2 w-max cursor-pointer"
            onClick={() => handleChooseLang("vi")}
          >
            <img className="w-6 h-6" src={flag_vi} />
            <h1 className="text-sm">Việt Nam</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlagLang;
