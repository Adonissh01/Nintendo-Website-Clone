import React from "react";
import { CustomButton } from "../CustomButton/CustomButton";

export const Component = (props) => {
  const { item } = props;
  return (
    <div
      className="flex flex-col  py-10 h-[40rem]
    phone:h-[20rem] phone:py-5"
    >
      <div className=" flex flex-col self-center gap-5">
        <p
          className="text-start font-bold text-darkGray text-3xl
        phone:text-center phone:text-lg"
        >
          {item.title}
        </p>
        <img src={item.image} className=" rounded-xl phone:m-5" alt="" />
        <div
          className="flex flex-row  gap-3 justify-center 
        phone:items-center phone:flex-col"
        >
          <p
            className="text-start font-bold text-darkGray text-2xl
          phone:text-center phone:text-sm"
          >
            {item.text}
          </p>
          <CustomButton btnText={item.btnText} />
        </div>
      </div>
    </div>
  );
};
