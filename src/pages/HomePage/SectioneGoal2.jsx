import React from "react";
import goal_img1 from "../../assets/SectionGoal2/ss-goal2.png";
import goal_img2 from "../../assets/SectionGoal2/ss-goal2-1.png";

const SectioneGoal2 = () => {
  return (
    <div className=" py-8 lg:py-[50px] lg:px-20 md:px-8 gap-[10px] px-4 grid lg:grid-cols-3 grid-cols-1">
      <div className="">
        <img className="h-full" src={goal_img1} />
      </div>
      <div className="bg-black  text-white flex flex-col gap-6 pb-6 pt-6 px-4 lg:px-6">
        <h1 className="text-[24px] lg:text-[30px] uppercase font-semibold leading-tight ">
          ĐÔI NÉT VỀ GOLF HUẾ CLUB
        </h1>
        <p className="text-[16px] text-justify">
          Golf Huế Club không chỉ là nơi để thể hiện kỹ năng golf mà còn là một
          môi trường thú vị để các golfer chia sẻ kiến thức và kinh nghiệm. Từ
          các buổi tập huấn định kỳ đến các hội thảo và workshop, các thành viên
          của câu lạc bộ có cơ hội học hỏi từ nhau và phát triển kỹ năng của
          mình.
        </p>
        <p className="text-[16px] text-justify">
          Điểm đến lý tưởng: Golf Huế Club là điểm đến cho bất kỳ ai đam mê golf
          và mong muốn trải nghiệm sự kết hợp giữa thể thao và thiên nhiên Với
          không gian xanh mát, dịch vụ chuyên nghiệp và cộng đồng golf đa dạng,
          câu lạc bộ này đang trở thành điểm đến hàng đầu cho các golfer tại Huế
        </p>
        <p className="text-[16px] text-justify">
          Cộng đồng golf đa dạng: Golf Huế Club hân hạnh chào đón các golfer từ
          mọi lứa tuổi và trình độ. Từ những người mới bắt đầu đến những golfer
          chuyên nghiệp, mọi người đều có cơ hội kết nối và chia sẻ niềm đam mê
          với nhau tại địa điểm này.
        </p>
      </div>
      <div className="">
        <img className="h-full" src={goal_img2} />
      </div>
    </div>
  );
};

export default SectioneGoal2;
