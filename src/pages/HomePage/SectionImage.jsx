import React from "react";
import ToggleSwitch from "../../components/ToggleSwitch";
import img1 from "../../assets/SectionVideoImage/Rectangle1.png";
import img2 from "../../assets/SectionVideoImage/Rectangle2.png";
import img3 from "../../assets/SectionVideoImage/Rectangle3.png";
import img4 from "../../assets/SectionVideoImage/Rectangle4.png";
import img5 from "../../assets/SectionVideoImage/Rectangle5.png";
import img6 from "../../assets/SectionVideoImage/Rectangle6.png";

const SectionImage = () => {
  return (
    <div className=" flex flex-col items-center gap-4 w-full ">
      <h1 className="uppercase">Hình ảnh & Video</h1>
      <ToggleSwitch label=" " />
      <div className="w-full">
        <div className="flex w-full">
          <img src={img1} alt="image 1" />
          <div className="flex flex-col">
            <img src={img2} alt="image 2" className="w-full" />
            <img src={img3} alt="image 3" className="w-full" />
          </div>
        </div>
        <div className="flex w-full">
          <img src={img4} alt="Image4" />
          <img src={img5} alt="Image5" />
          <img src={img6} alt="Image6" />
        </div>
      </div>
    </div>
  );
};

export default SectionImage;
