import React from "react";
import search_ic from "../assets/search.svg";
const Search = () => {
  return (
    <div className="flex justify-between w-full max-h-[49px] max-w-[424px] ">
      <div className="bg-[#F4F4F4] w-full px-4 py-[14px] flex items-center justify-center">
        <input
          type="text"
          placeholder="Tim kiem"
          className="focus-visible:outline-none bg-[#F4F4F4] w-full"
        />
      </div>
      <img src={search_ic} alt="" className="bg-primary p-3" />
    </div>
  );
};

export default Search;
