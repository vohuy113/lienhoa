import React from "react";
import goal2_img from "../../assets/SectioneGoal2/egoal-bg.png";
import goal2_img1 from "../../assets/SectioneGoal2/egoal1.png";
import goal2_img2 from "../../assets/SectioneGoal2/egoal2.png";
import goal2_img3 from "../../assets/SectioneGoal2/egoal3.png";
const SectioneGoal2 = () => {
  return (
    <div className="py-8 lg:py-[50px]">
      <div className="w-full h-full min-h-screen background-section-goal text-white ">
        <div className="py-8 lg:py-[50px] px-4 lg:px-8 xl:px-[80px]">
          <h1 className="text-32px  font-semibold lg:text-[60px] text-center lg:text-left leading-tight uppercase">
            Mục tiêu của chúng tôi
          </h1>
          <p className="text-[16px] text-justify leading-7 mt-4 pb-6 lg:pb-16 border-b border-[#FFF] border-b-1">
            Sân tập Golf tại Huế Golf Club là không gian lý tưởng để golf thủ
            trải nghiệm và nâng cao trình độ. Với trang thiết bị hiện đại và
            không gian rộng rãi, sân tập không chỉ là nơi để rèn luyện kỹ thuật
            từ cú đánh cho đến cú putt, mà còn là điểm đến lý tưởng để thư giãn
            và giao lưu với cộng đồng golf. Bạn sẽ tìm thấy không chỉ sự tiện
            nghi mà còn là một môi trường đầy đủ sự hỗ trợ và động viên, giúp
            bạn phát triển và tự tin hơn trong mỗi cú đánh trên sân golf.
          </p>
        </div>
        <div className="pt-6 lg:pt-16 pb-[56px] block lg:flex lg:flex-row">
          <div className=" basis-2/5">
            <p className="px-4 lg:px-[80px] text-[16px] mb-6 text-justify">
              Huế Golf Club cung cấp một loạt các tiện ích đẳng cấp, bao gồm sân
              tập hiện đại, dịch vụ hướng dẫn chuyên nghiệp và một môi trường
              thân thiện để rèn luyện kỹ thuật và thư giãn.
            </p>
            <div className="pl-4 lg:pl-[80px] flex flex-col gap-2">
              <h2 className="text-[24px] font-semibold text-left">Bảng giá</h2>
              <div class="flex flex-row gap-2">
                <div class="text-[16px] py-4 px-8 basis-1/4 border-[1px] border-[#FFF]">
                  100 bóng
                </div>
                <div class="text-[16px] py-4 px-8 basis-1/4 border-[1px] border-[#FFF] flex items-center justify-center">
                  <span>140.000</span>
                  <span className="underline">đ</span>
                </div>
                <div class="text-[16px] py-4 px-8 basis-1/2 border-[1px] border-[#FFF] flex items-center justify-center">
                  <span>Bóng ngày:</span>
                  <span className="ml-2"> 06:00 - 18:00</span>
                </div>
              </div>
              <div class="flex flex-row gap-2">
                <div class="text-[16px] py-4 px-8 basis-1/4 border-[1px] border-[#FFF]">
                  100 bóng
                </div>
                <div class="text-[16px] py-4 px-8 basis-1/4 border-[1px] border-[#FFF] flex items-center justify-center">
                  <span>140.000</span>
                  <span className="underline">đ</span>
                </div>
                <div class="text-[16px] py-4 px-8 basis-1/2 border-[1px] border-[#FFF] flex items-center justify-center">
                  <span>Bóng ngày:</span>
                  <span className="ml-2"> 06:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="block basis-3/5 lg:flex lg:flex-row-reverse gap-[60px] ml-0 lg:ml-32 ">
            <img
              className="w-full min-w-[184px] object-cover h-auto min-h-[259px]"
              src={goal2_img3}
            />
            <img
              className="w-full min-w-[184px] object-cover h-auto min-h-[259px]"
              src={goal2_img2}
            />
            <img
              className="w-full min-w-[184px] object-cover h-auto min-h-[259px]"
              src={goal2_img1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectioneGoal2;
