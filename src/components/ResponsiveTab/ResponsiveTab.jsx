import React, { useState } from "react";
import { motion } from "framer-motion";
import { MenuItems } from "../Reusable/MenuItems/MenuItems";

const ResponsiveTab = () => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  return (
    <div className="flex flex-row py-5 px-5 justify-between">
      <button onClick={toggleMenu}>
        <box-icon name="menu" color="#636363"></box-icon>
      </button>
      <button>
        <box-icon name="heart" type="solid" color="#636363"></box-icon>
      </button>
      <button>
        <box-icon name="search" color="#636363"></box-icon>
      </button>
      <button>
        <box-icon name="cart" type="solid" color="#636363"></box-icon>
      </button>
      <button>
        <box-icon name="user-circle" type="solid" color="#636363"></box-icon>
      </button>
      {opened && (
        <motion.div
          key="dropdown-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: -510, x: -20 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed   z-50 overflow-y-auto"
        >
          <div className="flex justify-center items-center h-full">
            <div className=" flex-col bg-customGray  p-8 w-[80vw] rounded-lg">
              <div className=" flex border-b-[0.1rem] border-white ">
                <h1 className="text-darkGray font-bold text-lg">Menu</h1>
              </div>
              <MenuItems />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
export default ResponsiveTab;
