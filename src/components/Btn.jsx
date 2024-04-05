import React from "react";
const Btn = ({
  content,
  textColor,
  bgColor,
  onclick,
  style,
  icBefore,
  icAfter,
}) => {
  return (
    <button className={`${bgColor} ${textColor} ${style}`} onClick={onclick}>
      <span>{icBefore}</span>
      {content}
      <span>{icAfter}</span>
    </button>
  );
};

export default Btn;
