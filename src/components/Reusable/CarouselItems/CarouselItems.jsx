import React from "react";
import { motion } from "framer-motion";

export const CarouselItems = (props) => {
  // Destructure data from props
  const { data } = props;
  const HoverEffects = {
    whileHover: {
      y: -20,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      whileHover="whileHover"
      variants={HoverEffects}
      className=" h-[25rem] z-[100] flex flex-col border border-customGray border-2 rounded-t-2 gap-3
      phone:h-[24rem]"
    >
      {/* Render image */}
      <div>
        <img
          className="object-cover h-[10rem] border-2 rounded-t-xl w-[100%]"
          src={data.image}
          alt="Item IMG"
        />
      </div>
      <div className="h-[8rem] phone:h-[4rem]">
        {/* Render title */}
        <p
          className="text-darkGray font-bold text-lg line-clamp-2 ml-2
        phone:text-sm"
        >
          {data.title}
        </p>
      </div>
      {data.date ? (
        <div className="h-30">
          {/* Render title */}

          <p className="text-darkGray  text-xs  ml-2">{data.date}</p>
        </div>
      ) : (
        ""
      )}
      {data.newPrice ? (
        <div className="h-20">
          {/* Render title */}
          <div className="flex flex-row items-center">
            <p className="text-darkGray    ml-2 font-bold text-lg ">
              {data.newPrice.toFixed(2)}$
            </p>
            {data.oldPrice !== data.newPrice ? (
              <>
                <p className="text-darkGray    ml-2 line-through text-md">
                  {data.oldPrice}$
                </p>
                <p className="text-darkGray  text-xs  ml-2 bg-customRed text-white p-1 rounded">
                  -{data.sale * 100}%
                </p>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      {/* Render button */}
      {data.ButtonText && (
        <button
          className={
            // Conditionally set button class based on button text
            data.ButtonText === "Available now" ||
            data.ButtonText === "Shop now"
              ? "bg-customBlue text-customWhite font-md text-xs p-1 w-[6rem] rounded-2xl ml-2"
              : "bg-customRed text-customWhite font-md text-xs p-1 w-[6rem] rounded-2xl ml-2"
          }
        >
          {data.ButtonText}
        </button>
      )}

      {/* Render type */}
      <div className="flex flex-row items-center gap-1">
        {data.type === "Nintendo Switch" || data.type === "Hardware" ? (
          <div
            className={
              data.type === "Nintendo Switch"
                ? "border-2 border-red-500 w-0 h-4 ml-2"
                : "border-2 border-gray-500 w-0 h-4 ml-2"
            }
          ></div>
        ) : (
          ""
        )}
        <p>{data.type}</p>
      </div>
    </motion.div>
  );
};
