import React from "react";
import SquareComp from "../../Reusable/SquareComp/SquareComp";

const HubDropDowns = (props) => {
  return (
    <div className="w-[100vw] items-center justify-center flex flex-row gap-5 py-4">
      {props.content.map((item, index) => (
        <SquareComp key={index} content={item} />
      ))}
    </div>
  );
};

export default HubDropDowns;
