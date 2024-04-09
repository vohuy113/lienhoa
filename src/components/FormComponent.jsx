import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="border border-black p-[50px] mb-6 max-w-2xl w-full h-max mx-auto">
      <h1 className="uppercase lg:text-[40px] lg:leading-[62px] font-semibold ">
        Liên hệ
      </h1>
      <h2 className="">
        Đăng ký nhận thông tin về ưu đãi, sản phẩm mới và khuyến mãi
      </h2>
      <form className="w-full h-full" onSubmit={handleSubmit}>
        <div className="w-full py-3  border-b border-black">
          {/* <label htmlFor="name">Name:</label> */}
          <input
            className="w-full"
            type="text"
            id="name"
            name="name"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="w-full py-3 border-b border-black">
          {/* <label htmlFor="email">Email:</label> */}
          <input
            className="w-full "
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="w-full py-3 border-b border-black">
          {/* <label htmlFor="email">Email:</label> */}
          <input
            className="w-full"
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.email}
            onChange={handleChange}
            placeholder="Số điện thoại"
          />
        </div>
        <div className="w-full py-3  border-b border-black">
          {/* <label htmlFor="message">Message:</label> */}
          <input
            className="w-full"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Nội dung cần trao"
          />
        </div>
        <button
          className="lg:py-3 lg:px-[60px] text-white bg-primary mt-6"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
