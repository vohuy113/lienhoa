import React from "react";
import Countdown from "react-countdown";
const CountdownTimer = ({ eventTime, onTimeUpdate }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    const formatNumber = (number) => {
      return number < 10 ? `0${number}` : number;
    };
    return (
      <div className="font-poppins flex gap-4 bg-black py-4">
        <div className="w-[60px] h-[60px] bg-white text-black font-medium text-[34px] leading-[51px] flex items-center justify-center">
          {formatNumber(days)}
        </div>
        <div className="w-[60px] h-[60px] bg-white text-black font-medium text-[34px] leading-[51px] flex items-center justify-center">
          {formatNumber(hours)}
        </div>
        <div className="w-[60px] h-[60px] bg-white text-black font-medium text-[34px] leading-[51px] flex items-center justify-center">
          {formatNumber(minutes)}
        </div>
        <div className="w-[60px] h-[60px] bg-white text-black font-medium text-[34px] leading-[51px] flex items-center justify-center">
          {formatNumber(seconds)}
        </div>
      </div>
    );
  };
  return (
    <div>
      <Countdown date={eventTime} count renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;
