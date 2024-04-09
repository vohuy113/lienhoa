import React from "react";
import search_ic from "../../assets/Header_img/search.svg";
const Search = () => {
  return (
    <div className="w-6 h-6 hidden lg:block">
      <img className="w-full h-full" src={search_ic} />
    </div>
  );
};

export default Search;
