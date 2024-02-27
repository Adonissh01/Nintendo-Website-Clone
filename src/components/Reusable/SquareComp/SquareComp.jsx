import React from "react";

const SquareComp = (props) => {
  console.log(props.content.icon);
  return (
    <div className="w-[8rem] h-[8rem] text-center hover:text-customRed ">
      <div className="flex border border-gray-400 rounded-lg items-center justify-center object-cover py-2 px-5 hover:bg-customRed">
        <img src={props.content.icon} alt="" className="w-[3rem] h-[3rem]  " />
      </div>
      <div>
        <p>{props.content.title}</p>
      </div>
    </div>
  );
};

export default SquareComp;
