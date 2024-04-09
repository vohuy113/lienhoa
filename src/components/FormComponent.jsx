import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FormComponent = () => {
  const { t } = useTranslation();
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
    <div
      id="contact"
      className="border border-black p-[50px] mb-6 max-w-2xl w-full h-max mx-auto"
    >
      <h1 className="uppercase lg:text-[40px] lg:leading-[62px] font-semibold ">
        {t("contact.contact")}
      </h1>
      <h2 className="">{t("contact.register")}</h2>
      <form className="w-full h-full" onSubmit={handleSubmit}>
        <div className="w-full py-3  border-b border-black">
          {/* <label htmlFor="name">Name:</label> */}
          <input
            className="w-full"
            type="text"
            id="name"
            name="name"
            placeholder={`${t("contact.name")}`}
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
            placeholder={`${t("contact.email")}`}
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
            placeholder={`${t("contact.phone")}`}
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
            placeholder={`${t("contact.content")}`}
          />
        </div>
        <button
          className="py-2 px-8 lg:py-3 lg:px-[60px] text-white bg-primary mt-6"
          type="submit"
        >
          {t("contact.submit")}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
