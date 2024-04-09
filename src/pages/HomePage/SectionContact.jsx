import React from "react";
import FormComponent from "../../components/FormComponent";
import footer1 from "../../assets/SectionContact/footer1.png";
import footer2 from "../../assets/SectionContact/footer2.png";
import footer3 from "../../assets/SectionContact/footer3.png";
import footer4 from "../../assets/SectionContact/footer4.png";
import footer5 from "../../assets/SectionContact/footer5.png";
import footer6 from "../../assets/SectionContact/footer6.png";

const SectionContact = () => {
  return (
    <>
      <div className="px-5 py-8">
        <FormComponent
          title={"Liên Hệ"}
          subTitle={"Đăng ký để nhận ưu đãi, sản phẩm khuyến mãi"}
        />
      </div>
      <div className="flex w-full">
        <div className="w-1/6">
          <img className="w-full" src={footer1} alt="footer1" />
        </div>
        <div className="w-1/6">
          <img className="w-full" src={footer2} alt="footer1" />
        </div>
        <div className="w-1/6">
          <img className="w-full" src={footer3} alt="footer1" />
        </div>
        <div className="w-1/6">
          <img className="w-full" src={footer4} alt="footer1" />
        </div>
        <div className="w-1/6">
          <img className="w-full" src={footer5} alt="footer1" />
        </div>
        <div className="w-1/6">
          <img className="w-full" src={footer6} alt="footer1" />
        </div>
      </div>
    </>
  );
};

export default SectionContact;
