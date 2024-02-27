import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SearchDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("All categories");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (event, item) => {
    event.preventDefault(); // Prevent the default link action
    setSelectedItem(item.text);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Define array of dropdown items
  const dropdownItems = [
    { id: 1, text: "All categories", link: "/" },
    { id: 2, text: "Games", link: "/" },
    { id: 3, text: "Hardware", link: "/" },
    { id: 4, text: "Merchandise", link: "/" },
    { id: 5, text: "News & Events", link: "/" },
    { id: 6, text: "Support", link: "/" },
  ];

  return (
    <div className="bg-white">
      <div className="relative inline-block" ref={dropdownRef}>
        <div className="justify-center flex items-center">
          <button
            onClick={toggleDropdown}
            className="text-darkGray font-semibold px-4 py-2 rounded cursor-pointer"
          >
            {selectedItem}
          </button>
          <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
            <box-icon
              onClick={toggleDropdown}
              name="chevron-down"
              color="darkGray"
            ></box-icon>
          </motion.div>
        </div>
        <div
          className={` z-10 absolute left-0 flex flex-col w-full bg-customWhite border border-gray-300 rounded-lg ${
            isDropdownOpen ? "block" : "hidden"
          }`}
        >
          {/* Map over the dropdownItems array */}
          {dropdownItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="pl-1 text-darkGray text-sm font-medium hover:text-red"
              onClick={(event) => handleItemClick(event, item)}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
