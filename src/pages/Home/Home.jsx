import React from "react";
import NintendoIcon from "../../components/NintendoIcon/NintendoIcon";
import Searchbar from "../../components/SearchBar/Searchbar";
import Navbar from "../../components/NavBar/Navbar";
import NintendoHub from "../../components/NintendoHub/NintendoHub";
import { Carousel } from "../../components/Carousel/Carousel";
import Featured from "../../components/Featured/Featured";
import { Explore } from "../../components/Explore/Explore";
import { News } from "../../components/News/News";
import { Character } from "../../components/Characters/Character";
import { BestSellers } from "../../components/BestSellers/BestSellers";
import { Footer } from "../../components/Footer/Footer";
import ScreenSize from "../../ScreenSize/ScreenSize";
import ResponsiveTab from "../../components/ResponsiveTab/ResponsiveTab";
const Home = () => {
  const { screenWidth } = ScreenSize();
  console.log(screenWidth);
  return (
    <div>
      {screenWidth <= 1280 ? (
        <div className=" mx-10 w-[80vw] bg-customGray fixed bottom-0 rounded-2xl h-20 z-[900] ">
          <ResponsiveTab />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-row justify-between w-[100vw] border-b-[0.1rem]   ">
        <div className="flex flex-row ">
          <NintendoIcon />
          {screenWidth > 1280 ? <Searchbar /> : ""}
        </div>
        <div>{screenWidth > 1280 ? <Navbar /> : ""}</div>
      </div>
      <div>{screenWidth > 1280 ? <NintendoHub /> : ""}</div>
      <div className=" border-b-[0.1rem]">
        <Carousel />
      </div>
      <div className=" border-b-[0.1rem]">
        <Featured />
      </div>
      <div className=" border-b-[0.1rem]">
        <Explore values="Online Store" />
      </div>
      <div className=" border-b-[0.1rem]">
        <Explore values="Gaming Systems" />
      </div>
      <div className=" border-b-[0.1rem]">
        <News />
      </div>
      <div className=" border-b-[0.1rem]">
        <Character />
      </div>
      <div>
        <BestSellers name="Digital best seller" />
      </div>
      <div>
        <BestSellers name="Digital new releases" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
