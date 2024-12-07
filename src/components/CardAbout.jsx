import React from "react";

const CardAbout = ({ first, second }) => {
  return (
    <div className=" py-4 border-solid border  border-[#000] flex flex-col items-center justify-center">
      <span className="text-[32px] font-semibold">{first}</span>
      <div>Hello</div>
      <p className="text-[14px]">{second}</p>
    </div>
  );
};

export default CardAbout;
