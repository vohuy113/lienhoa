import React from "react";

const Title = ({ content }) => {
  return (
    <h1 className="text-center lg:text-left mt-6 font-semibold uppercase text-[28px] lg:text-[40px] leading-tight">
      {content}
    </h1>
  );
};

export default Title;
