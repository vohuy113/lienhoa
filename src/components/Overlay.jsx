import React from "react";

const Overlay = ({ handleCloseOverlay }) => {
  return (
    <div
      className="bg-black/30 w-full h-full fixed inset-0"
      onClick={handleCloseOverlay}
    ></div>
  );
};

export default Overlay;
