import React from "react";

const ImgEvent = ({ img }) => {
  return (
    <div className="w-1/2 hidden lg:block h-full">
      <img className="w-full h-full" src={img} />
    </div>
  );
};

export default ImgEvent;
