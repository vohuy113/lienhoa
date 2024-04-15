import React, { useState } from "react";
import user_ic from "../assets/SectionContact/user.svg";
import email_ic from "../assets/SectionContact/sms.svg";
import call_ic from "../assets/SectionContact/call-calling.svg";
import message_ic from "../assets/SectionContact/message.svg";
import { saveDataFromForm } from "../services/handleForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
const FormComponent = ({ title, subTitle, closeBtn, handleClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveDataFromForm(formData);
    toast.success("🦄 resgister success", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setFormData({ name: "", phone_number: "", email: "", message: "" });
  };

  return (
    <div className="border bg-white border-black p-5 md:p-[50px] max-w-2xl w-full h-max mx-auto relative">
      {closeBtn && (
        <img
          src={closeBtn}
          className="absolute w-6 h-6 top-3 right-3"
          onClick={handleClose}
        />
      )}
      <h1 className="uppercase lg:text-[40px] lg:leading-[62px] font-semibold ">
        {title}
      </h1>
      <h2 className="">{subTitle}</h2>
      <form
        className="w-full h-full flex flex-col gap-6 mt-10"
        onSubmit={handleSubmit}
      >
        <div className="w-full py-3 flex gap-[10px] items-center border-b border-black">
          <span>
            <img src={user_ic} alt="User" />
          </span>
          <input
            className="w-full focus-visible:outline-none"
            type="text"
            id="name"
            name="name"
            placeholder={`${t("contact.name")}`}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="w-full py-3 flex gap-[10px] items-center border-b border-black">
          <span>
            <img src={email_ic} alt="Email" />
          </span>
          <input
            className="w-full focus-visible:outline-none "
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={`${t("contact.email")}`}
          />
        </div>
        <div className="w-full py-3 flex gap-[10px] items-center border-b border-black">
          <span>
            <img src={call_ic} alt="Phone number" />
          </span>
          <input
            className="w-full focus-visible:outline-none"
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder={`${t("contact.phone")}`}
          />
        </div>
        <div className="w-full py-3 flex gap-[10px] items-center border-b border-black">
          <span>
            <img src={message_ic} alt="Message" />
          </span>
          <input
            className="w-full focus-visible:outline-none"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={`${t("contact.content")}`}
          />
        </div>
        <button
          className="lg:py-3 lg:px-[60px] py-2 px-12 text-white bg-primary"
          type="submit"
        >
          {t("contact.submit")}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
