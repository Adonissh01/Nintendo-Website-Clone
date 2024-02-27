import React from "react";
import "boxicons";
import DropDown from "../Sub/SearchDropDown/SearchDropDown";

const Searchbar = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center  justify-between px-1  mt-3 ml-5 w-[27rem] h-[1.5rem]">
        <div className="flex items-center justify-center gap-[0.5rem]">
          <box-icon name="search-alt-2" color="#434242"></box-icon>
          <input
            type="search"
            placeholder="Search"
            className="outline-none focus:bg-transparent "
          />
        </div>
        <DropDown />
      </div >
      <hr className="mt-2 ml-5 mr-5 border-darkGray w-[27rem] hover:text-red" />
    </div>
  );
};

export default Searchbar;
