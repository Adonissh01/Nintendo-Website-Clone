import React from "react";

const HubStoreDropDown = () => {
  return (
    <div className="">
      <div className="  flex flex-row justify-center w-[100vw] bg-customRed text-customWhite py-5 ">
        <div className="flex flex-row items-center text-md ">
          <box-icon type="logo" color="white" name="soundcloud"></box-icon>
          <p className="font-medium">My Nintendo Store</p>
        </div>
        {/* <div className="fixed right-5">
          <box-icon name="x-circle" type="solid" color="white"></box-icon>
        </div> */}
      </div>

      <div className="flex justify-center items-center ">
        <table className="table-auto border-none">
          <thead>
            <tr>
              <th className="px-4 py-2 hover:text-customRed">Games</th>
              <th className="px-4 py-2 hover:text-customRed">Hardware</th>
              <th className="px-4 py-2 hover:text-customRed">Merchandise</th>
              <th className="px-4 py-2 hover:text-customRed">
                Store Exclusives
              </th>
              <th className="px-4 py-2 hover:text-customRed">Characters</th>
              <th className="px-4 py-2 hover:text-customRed">Sales & Deals</th>
            </tr>
          </thead>
          <tbody className="text-darkGray text-center text-sm">
            <tr>
              <td className="px-4 py-2 hover:text-customRed">
                Nintendo Switch games
              </td>
              <td className="px-4 py-2 hover:text-customRed">
                Nintendo Switch systems
              </td>
              <td className="px-4 py-2 hover:text-customRed">
                Apparel & accessories
              </td>
              <td className="px-4 py-2 hover:text-customRed">
                Exclusive products
              </td>
              <td className="px-4 py-2 hover:text-customRed">Pikmin</td>
              <td className="px-4 py-2 hover:text-customRed"></td>
            </tr>
            <tr>
              <td className="px-4 py-2 hover:text-customRed">New releases</td>
              <td className="px-4 py-2 hover:text-customRed">
                Joy-Con & controllers
              </td>
              <td className="px-4 py-2 hover:text-customRed">Home & office</td>
              <td className="px-4 py-2 hover:text-customRed">
                My Nintendo rewards
              </td>
              <td className="px-4 py-2 hover:text-customRed">Splatoon</td>
              <td className="px-4 py-2 hover:text-customRed"></td>
            </tr>
            <tr>
              <td className="px-4 py-2 hover:text-customRed">Sales & deals</td>
              <td className="px-4 py-2 hover:text-customRed">Cases & more</td>
              <td className="px-4 py-2 hover:text-customRed">Plush</td>
              <td className="px-4 py-2 hover:text-customRed">
                Nintendo Switch Online offers
              </td>
              <td className="px-4 py-2 hover:text-customRed">Super Mario</td>
              <td className="px-4 py-2"></td>
            </tr>
            <tr>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2 hover:text-customRed">
                The Legend of Zelda
              </td>
              <td className="px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <button className="bg-transparent hover:bg-customRed text-customRed text-700 font-semibold hover:text-white py-2 px-4 border border-customRed border-500 hover:border-transparent rounded">
          Shop all
        </button>
      </div>
    </div>
  );
};

export default HubStoreDropDown;
