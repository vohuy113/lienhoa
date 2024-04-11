import React from "react";
import Countdown from "react-countdown";
const CountdownTimer = ({ eventTime }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div>Sự kiện đã diễn ra!</div>;
    } else {
      return (
        <div className="font-poppins flex gap-4 bg-black py-4">
          <div className="w-[60px] h-[60px] bg-white text-black font-medium text-[34px] leading-[51px] flex items-center justify-center">
            {days}
          </div>
          <div className="w-[60px] h-[60px] bg-white text-black font-medium text-[34px] leading-[51px] flex items-center justify-center">
            {hours}
          </div>
          <div className="w-[60px] h-[60px] bg-white text-black font-medium text-[34px] leading-[51px] flex items-center justify-center">
            {minutes}
          </div>
          <div className="w-[60px] h-[60px] bg-white text-black font-medium text-[34px] leading-[51px] flex items-center justify-center">
            {seconds}
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <Countdown date={eventTime} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;
