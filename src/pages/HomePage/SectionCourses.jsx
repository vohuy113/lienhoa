import React from "react";
import courses_img from "../../assets/SectionCourses/ss-course-img1.png";
import courses_img2 from "../../assets/SectionCourses/ss-course-img2.png";
import courses_svg from "../../assets/SectionCourses/sourse-icon.svg";

import Title from "../../components/Title";
import CourseItem from "../../components/CourseItem";
const SectionCourses = () => {
  return (
    <div className="py-8 lg:py-[50px] " id="courses">
      <div className="grid grid-cols-1 gap-0 lg:gap-10 lg:grid-cols-2 bg-[#F3F3F3] px-4 lg:px-8 xl:px-[80px] ">
        <div className="relative">
          <img className="py-[50px] w-[75%]" src={courses_img}></img>
          <img
            className="absolute top-[50%] left-[30%] translate-y-[-50%] h-[60%] md:h-[70%] lg:h-[60%] xl:h-[70%]"
            src={courses_img2}
          ></img>
        </div>
        <div className="flex flex-col px-4 lg:px-0 md:gap-8 gap-6 xl:gap-[50px]  py-[50px]">
          <Title content={"Mục tiêu của chúng tôi"} />
          <CourseItem
            icon={courses_svg}
            content={"Là điểm đến tập golf Thân Thiện & Chuyên Nghiệp"}
          />
          <CourseItem
            icon={courses_svg}
            content={
              "Cung cấp các chương trình đào tạo chuyên nghiệp để nâng cao kỹ năng golf."
            }
          />
          <CourseItem
            icon={courses_svg}
            content={
              "Xây dựng mối quan hệ đối tác bền vững và thúc đẩy sự phát triển cộng đồng golf."
            }
          />
          <CourseItem
            icon={courses_svg}
            content={"Tổ chức các sự kiện golf và hoạt động giao lưu hấp dẫn."}
          />
          <CourseItem
            icon={courses_svg}
            content={"Đóng góp vào các hoạt động xã hội và bảo vệ môi trường."}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionCourses;
