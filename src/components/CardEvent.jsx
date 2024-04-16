import React, { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { data } from "autoprefixer";
import { useTranslation } from "react-i18next";
import i18n from "../services/i18n";
import parse from "html-react-parser";

const CardEvent = ({ title, desc, timeEvent }) => {
  const { t } = useTranslation();
  const eventTime = new Date("2024-04-10T10:30:00");
  const targetDateObject = new Date(timeEvent);
  const currentDate = new Date();
  const differenceInTime = targetDateObject.getTime() - currentDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  const [stateEvent, setStateEvent] = useState();
  const [styleState, setStyleState] = useState("text-white");
  const [isShowMore, setIsShowMore] = useState(true);
  useEffect(() => {
    if (differenceInDays < 0) {
      setStateEvent("event.occurred");
      setIsShowMore(false);
    } else if (differenceInDays < 10) {
      setStateEvent("event.upcoming");
      setStyleState("text-red-600");
    } else {
      setStateEvent("event.not_occurred");
      setStyleState("text-green-600");
    }
  }, []);
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    return `${day < 10 ? "0" : ""}${day}-${
      month < 10 ? "0" : ""
    }${month}-${year}`;
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
    <div
      id="event"
      className="pb-[111px] bg-black flex-1 pt-14 xl:pl-16 pl-4 h-full flex flex-col justify-between items-start"
    >
      <h1 className="text-green-600 text-[16px] text-base uppercase">
        {t("event.event")}
      </h1>
      <h1 className="text-[32px] text-start text-white font-semibold leading-[50px] line-clamp-2">
        {parse(truncateText(title, 2))}
      </h1>
      <h2 className="text-xl text-start text-white line-clamp-3">
        {parse(truncateText(desc, 3))}
      </h2>
      {isShowMore && (
        <div className="text-white lg:my-4 my-2">{t("event.see_more")}</div>
      )}
      <div className="flex gap-2">
        <h2 className="text-white">{t("event.time")}</h2>
        <h2 className="text-white">{formatDate(timeEvent)}</h2>
        <h2 className={`${styleState}`}>{t(stateEvent)}</h2>
      </div>
      <div>
        <CountdownTimer eventTime={timeEvent || eventTime} />
      </div>
    </div>
  );
};

export default CardEvent;
