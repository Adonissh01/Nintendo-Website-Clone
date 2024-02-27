import React, { useState } from "react";
import usaFlag from "../../Assets/Images/usa-flag.avif";

const Navbar = () => {
  // Define state to track hover state for each item
  const [hoveredItems, setHoveredItems] = useState({});

  // Define an array of objects containing text and link information for each item
  const navItems = [
    { id: 1, text: "Support", link: "/", icon: "help-circle" },
    { id: 2, text: "Wish List", link: "/", icon: "heart" },
    { id: 3, text: "Cart", link: "/", icon: "cart" },
    { id: 4, text: "Log in / Sign up", link: "/", icon: "user" }, // Corrected the id of the last item
  ];

  // Function to handle hover enter event for an item
  const handleMouseEnter = (itemId) => {
    setHoveredItems((prevHoveredItems) => ({
      ...prevHoveredItems,
      [itemId]: true,
    }));
  };

  // Function to handle hover leave event for an item
  const handleMouseLeave = (itemId) => {
    setHoveredItems((prevHoveredItems) => ({
      ...prevHoveredItems,
      [itemId]: false,
    }));
  };

  return (
    <div className="flex flex-row items-center gap-4 mr-4 my-1">
      {/* Map over the array of navItems and generate JSX for each item */}
      <div className="flex">
        {navItems.map((item) => (
          <a
            key={item.id}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
            href={item.link}
            className="flex flex-row items-center gap-1 px-4 py-2 text-darkGray text-sm hover:text-customRed"
          >
            <box-icon
              name={item.icon}
              type="solid"
              color={hoveredItems[item.id] ? "#e60012" : "#434242"}
            ></box-icon>
            <p className="font-bold">{item.text}</p>
          </a>
        ))}
      </div>
      <img src={usaFlag} alt="USA Flag" className="w-7 h-5" />
    </div>
  );
};

export default Navbar;
