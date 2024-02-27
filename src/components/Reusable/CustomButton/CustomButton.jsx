import React from "react";

export const CustomButton = (props) => {
  return (
    <div>
      <button className="text-customWhite font-bold  px-4 py-2  rounded-lg bg-customRed hover:bg-[#8B0000] transform hover:scale-105 transition duration-300 phone:px-1 phone:py-2 phone:text-xs">
        {props.btnText}
      </button>
    </div>
  );
};
