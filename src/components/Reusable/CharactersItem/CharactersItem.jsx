import React from "react";
import { motion } from "framer-motion";

export const CharactersItem = (props) => {
  const { value } = props;
  const HoverItem = {
    whileHover: {
      scale: 1.2,
    },
  };

  return (
    <div className="relative border-none">
      <motion.div
        key={value.id}
        className="relative overflow-hidden rounded-3xl"
        style={{ maxHeight: "70%" }}
      >
        <motion.img
          variants={HoverItem}
          whileHover="whileHover"
          src={value.image}
          alt={value.title}
          className="w-full h-auto"
          style={{
            scale: 1,
            backgroundImage: `url(${value.bg})`,
            zIndex: -1,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <p
        className="absolute left-10 font-medium text-2xl text-darkGray w-full py-2
      phone:text-sm phone:left-7"
      >
        {value.title}
      </p>
    </div>
  );
};
