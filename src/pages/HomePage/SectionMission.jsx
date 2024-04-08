import React from "react";
import about_img from "../../assets/SectionMission/ss-about-img.png";
import Btn from "../../components/Btn";
import CardAbout from "../../components/CardAbout";
import Title from "../../components/Title";
function SectionMission() {
  return (
    <div
      className="w-full h-full  min-h-screen  grid grid-cols-1 lg:grid-cols-2 pt-[100px] pb-[50px]"
      id="mission"
    >
      <div className="flex flex-col  flex-1   gap-6 h-full">
        <div className="text-center lg:text-left lg:pr-10 pl-4 pr-4  lg:pl-20">
          <Btn
            bgColor={"bg-black"}
            content={"Về chúng tôi"}
            textColor={"text-white"}
            style={"px-6 lg:py-2 py-4 text-[18px] uppercase leading-tight 	"}
          />
          <Title content={"Sứ mệnh Huế Golf Club"} />
        </div>
        <p className="text-justify leading-7 text-[16px] lg:pr-[50px] pl-4 pr-4  lg:pl-20">
          Tại Huế Golf Club, chúng tôi cam kết tạo ra một môi trường golf chuyên
          nghiệp, hòa mình vào văn hóa địa phương và phát triển bền vững trong
          cộng đồng golf Việt Nam. Chúng tôi không chỉ là nơi để tập luyện và
          thi đấu, mà còn là một điểm đến để thắp sáng niềm đam mê golf, kết nối
          cộng đồng và tạo ra những kỷ niệm không thể nào quên.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-4 lg:pl-20 gap-3  lg:gap-6 px-4 lg:px-0">
          <CardAbout first={"100+"} second={"Học viên"} />
          <CardAbout first={"10+"} second={"Năm hoạt động"} />
          <CardAbout first={"20+"} second={"Đối tác"} />
          <CardAbout first={"30+"} second={"Sự kiện tham gia"} />
        </div>
      </div>
      <div className="mt-6 lg:mt-0 flex lg:items-start items-center justify-center pl-[50px]">
        <img className="w-full h-auto" src={about_img}></img>
      </div>
    </div>
  );
}

export default SectionMission;
