import React from "react";
import course_img from "../../assets/SectionCourses/course-img.png";
import course_svg from "../../assets/SectionCourses/star_half_24px.svg";
import course_svg1 from "../../assets/SectionCourses/star_purple500_24px.svg";
import course_svg2 from "../../assets/SectionCourses/ticket 1.svg";
import course_svg3 from "../../assets/SectionCourses/location 2.svg";
import course_svg4 from "../../assets/SectionCourses/calendar 1.svg";
import Btn from "../../components/Btn";
import user_img from "../../assets/SectionCourses/avatar.png";
import CourseItem from "../../components/CourseItem";
const SectioneCourses = () => {
  return (
    <div
      id="training"
      className="w-full h-full  min-h-screen py-8 lg:py-[50px] lg:px-20 md:px-8 gap-[10px] px-4"
    >
      <h1 className="text-center mt-6 font-semibold uppercase text-[28px] lg:text-[40px] leading-tight">
        Khoá học & chương trình đào tạo
      </h1>
      <p className="text-[16px] mt-2 mb-10 text-center">
        Chúng tôi cung cấp các khóa học đa dạng từ cơ bản đến nâng cao, phù hợp
        với mọi trình độ.
      </p>
      <div className="block xl:flex md:flex-row gap-10">
        <div className="basis-2/5 relative  inset-0 bg-gradient-to-b from-transparent to-black text-white">
          <img className="w-full h-full " src={course_img} />
          <div className="absolute bottom-[24px]  right-[16px] left-[16px] flex flex-col gap-4">
            <h1 className="text-[24px] md:text-[28px]  lg:text-[42px] text-left font-semibold text-white mb-2">
              Khoá học cơ bản cho người mới{" "}
            </h1>
            <p className="text-[12px] text-left">
              Khóa học "Cơ Bản Cho Người Mới" tại Huế Golf Club là hành trình
              bắt đầu hoàn hảo cho những người mới bắt đầu chơi golf.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex">
                <img src={course_svg1} />
                <img src={course_svg1} />
                <img src={course_svg1} />
                <img src={course_svg1} />
                <img src={course_svg} />
                <span className="block text-[14px] ml-4 leading-6">(1.2K)</span>
              </div>
              <div className="flex flex-col">
                <span className=" text-end text-[14px] text-[#FF3E3E] line-through font-semibold">
                  3.990.000 VNĐ/30 ngày
                </span>
                <span className="text-white font-bold text-[16px]">
                  2.900.000 VNĐ/30 ngày
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="user flex items-center">
                <img className="w-[50px] h-[50px] mr-3" src={user_img} />
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold">
                    Kitani Sarasvati
                  </span>
                  <span className="text-left text-[12px] mt-2">
                    Chuyên gia về Golf
                  </span>
                </div>
              </div>
              <Btn
                bgColor={"bg-[#00B125]"}
                content={"Đăng ký ngay!"}
                textColor={"text-white"}
                style={"px-6 py-[13px] text-[18px]  leading-tight 	"}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 xl:mt-0 basis-3/5 flex flex-col gap-6 xl:gap-12">
          <CourseItem
            svg={course_svg2}
            t1={"Khoá học chính thức 10 buổi"}
            des={
              "Sự đầu tư hoàn hảo cho sự tiến bộ và sự tự tin trong golf của bạn"
            }
          />
          <CourseItem
            svg={course_svg3}
            t1={"Hệ thống trackman phân tích Swing bằng hình ảnh"}
            des={
              "Hệ thống Trackman: Phân tích swing bằng hình ảnh chính xác và tiên tiến."
            }
          />
          <CourseItem
            svg={course_svg4}
            t1={"Huấn luyện viên cấp độ 1"}
            des={
              "Chuyên môn và tận tâm, sẵn lòng hỗ trợ bạn chinh phục những bước đầu tiên trong sự nghiệp golf của bạn."
            }
          />
          <CourseItem
            svg={course_svg2}
            t1={"Bóng tập không giới hạn"}
            des={
              "Khám phá tiềm năng vô tận với việc rèn luyện mà không lo về số lượng."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SectioneCourses;
