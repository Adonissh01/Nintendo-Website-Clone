import React from "react";
import Nintendo from "../../Assets/Icons/Nintendo1.png";
import ScreenSize from "../../ScreenSize/ScreenSize";
export const Footer = () => {
  const { screenWidth } = ScreenSize();
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-row w-[100vw] items-center justify-between px-[10rem]  bg-customRed
        phone:px-[2rem]
      "
      >
        <img src={Nintendo} alt="" className="w-[15rem] phone:w-[5rem] " />
        <div className="flex flex-row gap-10">
          <box-icon
            name="facebook-circle"
            type="logo"
            color="#ffffff"
            size={screenWidth < 500 ? "20px" : "50"}
          ></box-icon>
          <box-icon
            size={screenWidth < 500 ? "20px" : "50"}
            type="logo"
            name="instagram"
            color="#ffffff"
          ></box-icon>
          <box-icon
            size={screenWidth < 500 ? "20px" : "50"}
            name="twitter"
            type="logo"
            color="#ffffff"
          ></box-icon>
          <box-icon
            size={screenWidth < 500 ? "20px" : "50"}
            name="youtube"
            type="logo"
            color="#ffffff"
          ></box-icon>
        </div>
      </div>
      <div className="w-full overflow-hidden rounded-lg shadow-lg phone:h-[20rem] ">
        <table className="  w-full m-10">
          <thead>
            <tr className="  text-gray-600 uppercase text-sm leading-normal">
              <th
                className="py-3 font-bold text-xl px-6 text-left  border-gray-200 border-r
              phone:py-0 phone:text-sm"
              >
                About
              </th>
              <th
                className="py-3 font-bold text-xl px-6 text-left border-gray-200 border-r
              phone:py-0 phone:text-sm"
              >
                Shop
              </th>
              <th
                className="py-3 font-bold text-xl px-6 text-left border-gray-200 border-r
              phone:py-0 phone:text-sm"
              >
                My Nintendo Store orders
              </th>
              <th
                className="py-3 font-bold text-xl px-6 text-left border-gray-200 border-r
              phone:py-0 phone:text-sm"
              >
                Support
              </th>
              <th
                className="py-3 font-bold text-xl px-6 text-left border-gray-200 border-r
              phone:py-0 phone:text-sm"
              >
                Parents
              </th>
              <th
                className="py-3 font-bold text-xl px-6 text-left border-gray-200 border-r
              phone:py-0 phone:text-sm"
              >
                Community
              </th>
              <th
                className="py-3 font-bold text-xl px-6 text-left  border-gray-200
              phone:py-0 phone:text-sm"
              >
                Privacy
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            <tr className="">
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Career
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Games
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Order Details
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                {" "}
                Nintendo Switch
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Info for parents
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Community guidlines
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Privacy Policy
              </td>
            </tr>
            <tr className="">
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Career
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Games
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Order Details
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                {" "}
                Nintendo Switch
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Info for parents
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Community guidlines
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Privacy Policy
              </td>
            </tr>
            <tr className="">
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Career
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Games
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Order Details
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                {" "}
                Nintendo Switch
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Info for parents
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap border-r text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Community guidlines
              </td>
              <td
                className="py-3 font-bold text-lg px-6 text-left whitespace-nowrap text-customRed hover:underline
              phone:py-0 phone:text-sm"
              >
                Privacy Policy
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
