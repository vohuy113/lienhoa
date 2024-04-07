import React, { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { data } from "autoprefixer";
const CardEvent = ({ title, desc, timeEvent }) => {
  const eventTime = new Date("2024-04-10T10:30:00");
  const truncateText = (text, maxLines) => {
    const lines = text.split("\n");
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join("\n") + "...";
    }
    return text;
  };
  console.log(truncateText(title, 2));
  return (
    <div className="pb-[111px] bg-black flex-1 pt-14 pl-16 h-full flex flex-col justify-between items-start">
      <h1 className="text-green-600 text-base">Su kien</h1>
      <h1 className="text-[32px] text-start text-white font-semibold leading-[50px] line-clamp-2">
        {truncateText(title, 2)}
      </h1>
      <h2 className="text-xl text-start text-white line-clamp-3">
        {truncateText(desc, 3)}
      </h2>
      <div className="flex gap-2">
        <h2 className="text-white">Thoi gian dien ra:</h2>
        <h2 className="text-red-600">Sắp diễn ra</h2>
      </div>
      <div>
        <CountdownTimer eventTime={timeEvent || eventTime} />
      </div>
    </div>
  );
};

export default CardEvent;
