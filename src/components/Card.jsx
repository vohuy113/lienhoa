import React from "react";
import parse from "html-react-parser";

import calendar_ic from "../assets/calendar-2.svg";
const Card = ({ type, title, subTitle, time, img }) => {
  const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const truncateText = (text, maxLines) => {
    if (typeof text !== "string") {
      console.error("Invalid input: text must be a string");
      return text;
    }
    if (text.includes("\n")) {
      const lines = text.split("\n");
      if (lines.length > maxLines) {
        return lines.slice(0, maxLines).join("\n") + "...";
      }
    }
    return text;
  };
  return (
    <div>
      <img src={img} alt="News Image" class="w-full h-40 object-cover" />
      <h3 class="text-lg lg:text-xl text-left lg:leading-[31px] font-semibold detail-news h-[62px] mb-1 mt-2 line-clamp-2">
        {parse(truncateText(title, 2))}
      </h3>
      <div class="text-black text-sm font-normal text-left h-[40px] overflow-hidden detail-news cardUI line-clamp-3">
        {parse(truncateText(subTitle, 2))}
      </div>
      <div class="flex gap-2 py-3 w-full items-center">
        <img src={calendar_ic} />
        <h3 class="text-sm font-normal text-left text-[#B5B5B5] ">
          {formatDate(time)}
        </h3>
      </div>
    </div>
  );
};

export default Card;
