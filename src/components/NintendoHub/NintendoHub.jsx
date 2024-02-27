import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HubStoreDropDown from "../Sub/HubStoreDropDown/HubStoreDropDown";
import HubDropDowns from "../Sub/HubDropDowns/HubDropDowns";
import joystichIcon from "@/../../src/Assets/Icons/nintendoswitch.png";
import announcementsIcon from "../../Assets/Icons/new-release.jpg";
import calenderIcon from "../../Assets/Icons/calendar.png";
import controllerArrowsIcon from "../../Assets/Icons/controller-arrows.webp";
import nintendoLinupIcon from "../../Assets/Icons/nintendoSwitchLineup.jpg";
import compareArrowsIcon from "../../Assets/Icons/ComparingSystems.webp";
import onlineServicesIcon from "../../Assets/Icons/OnlineServices.jpg";
import accessoriesIcon from "../../Assets/Icons/Controller.avif";
import shopSystems from "../../Assets/Icons/shopSystems.avif";
import forKids from "../../Assets/Icons/forKids.png";
import forParents from "../../Assets/Icons/forParents.png";
const NintendoHub = () => {
  const [hoveredItems, setHoveredItems] = useState({});
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const Hub = [
    { id: "1", title: "My Nintendo Store", icon: "cloud", canToggle: true },
    { id: "2", title: "Games", icon: "joystick-button", canToggle: true },
    {
      id: "3",
      title: "Nintendo Switch",
      icon: "joystick-alt",
      canToggle: true,
    },
    { id: "4", title: "News & Events", icon: "chalkboard", canToggle: false },
    { id: "5", title: "Play Nintendo", icon: "play", canToggle: true },
  ];
  const DropDownsContent = [
    [
      {
        id: "1",
        title: "Nintendo Switch games",
        icon: joystichIcon,
      },
      { id: "2", title: "New releases", icon: announcementsIcon },
      { id: "3", title: "Coming soon", icon: calenderIcon },
      { id: "4", title: "Shop games", icon: controllerArrowsIcon },
    ],
    [
      { id: "1", title: "Nintendo Switch games", icon: nintendoLinupIcon },
      { id: "2", title: "New releases", icon: compareArrowsIcon },
      { id: "3", title: "Coming soon", icon: onlineServicesIcon },
      { id: "4", title: "Shop games", icon: accessoriesIcon },
      { id: "4", title: "Shop games", icon: shopSystems },
    ],
    [
      { id: "1", title: "For kids", icon: forKids },
      { id: "2", title: "For parents", icon: forParents },
    ],
  ];
  const DropDownAnimation = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };

  const handleMouseEnter = (itemId) => {
    setHoveredItems((prevHoveredItems) => ({
      ...prevHoveredItems,
      [itemId]: true,
    }));
  };

  const handleMouseLeave = (itemId) => {
    setHoveredItems((prevHoveredItems) => ({
      ...prevHoveredItems,
      [itemId]: false,
    }));
  };

  const toggleDropdown = (itemId) => {
    setOpenDropdownId((prevId) => (prevId === itemId ? null : itemId));
  };

  const renderDropdownContent = (itemId) => {
    switch (itemId) {
      case "1":
        return (
          <AnimatePresence>
            <motion.div
              variants={DropDownAnimation}
              className="origin-top"
              animate="animate"
              initial="initial"
              exit="exit"
            >
              <HubStoreDropDown />
            </motion.div>
          </AnimatePresence>
        );
      case "2":
        return (
          <AnimatePresence>
            <motion.div
              variants={DropDownAnimation}
              className="origin-top"
              animate="animate"
              initial="initial"
              exit="exit"
            >
              <HubDropDowns content={DropDownsContent[0]} />
            </motion.div>
          </AnimatePresence>
        );
      case "3":
        return (
          <AnimatePresence>
            <motion.div
              variants={DropDownAnimation}
              className="origin-top"
              animate="animate"
              initial="initial"
              exit="exit"
            >
              <HubDropDowns content={DropDownsContent[1]} />
            </motion.div>
          </AnimatePresence>
        );
      case "5":
        return (
          <AnimatePresence>
            <motion.div
              variants={DropDownAnimation}
              className="origin-top"
              animate="animate"
              initial="initial"
              exit="exit"
            >
              <HubDropDowns content={DropDownsContent[2]} />
            </motion.div>
          </AnimatePresence>
        );
      default:
        return null;
    }
  };

  return (
    <div className="  flex flex-row items-center justify-center w-[100vw]">
      {Hub.map((item) => {
        const isDropdownOpen = openDropdownId === item.id;
        return (
          <div key={item.id} className="relative cursor-pointer">
            <a
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              onClick={() => toggleDropdown(item.id)}
              href={item.link}
              className="flex flex-row items-center gap-1 px-4 py-2 text-darkGray text-sm hover:text-customRed"
            >
              <box-icon
                name={item.icon}
                type="solid"
                color={hoveredItems[item.id] ? "#e60012" : "#434242"}
              ></box-icon>
              <span className="font-bold">{item.title}</span>
              {item.canToggle && (
                <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
                  <box-icon name="chevron-down" color="darkGray"></box-icon>
                </motion.div>
              )}
            </a>
            {isDropdownOpen && (
              <div
                className={
                  item.canToggle
                    ? "fixed  left-0  py-2 px-4 bg-white border border-gray-200 rounded shadow z-10"
                    : ""
                }
              >
                {renderDropdownContent(item.id)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NintendoHub;
