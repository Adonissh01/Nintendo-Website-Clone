import React from "react";
import MultiPageCarousel from "../Reusable/MultipageCarousel/MultiPageCarousel";
//images
import DirectPartnerImg from "../../Assets/Carousal1Images/directPartner.jpg";
import EndlessOceanImg from "../../Assets/Carousal1Images/endlessOceanImg.jpg";
import LatestGamesImg from "../../Assets/Carousal1Images/latestGamesImg.jpg";
import AnotherCodeImg from "../../Assets/Carousal1Images/AnotherCodeImg.avif";
import GameTrialImg from "../../Assets/Carousal1Images/latestTrialImg.jpg";
import AreaZeroImg from "../../Assets/Carousal1Images/areaZeroImg.avif";
import HardwareOffersImg from "../../Assets/Carousal1Images/hardwareOffersImg.avif";
import FortniteImg from "../../Assets/Carousal1Images/fortnitrImg.jpg";
import POPImg from "../../Assets/Carousal1Images/princeOfPersiaImg.jpg";
import MLBImg from "../../Assets/Carousal1Images/mlbImg.avif";
const Featured = () => {
  const CarouselData = [
    {
      id: "1",
      title: "Nintendo Direct: Partner Showcase 2.21.2024",
      image: DirectPartnerImg,
      ButtonText: "Watch now",
      type: "News and events",
    },
    {
      id: "2",
      title: "Endless Ocean Luminous",
      image: EndlessOceanImg,
      ButtonText: "Pre-order now",
      type: "Nintendo Switch",
    },
    {
      id: "3",
      title: "Check out the latest games added to Nintendo Switch Online!",
      image: LatestGamesImg,
      ButtonText: "learn more",
      type: "Nintendo Switch",
    },
    {
      id: "4",
      title: "Another Code: Recollection",
      image: AnotherCodeImg,
      ButtonText: "Available now",
      type: "Nintendo Switch",
    },
    {
      id: "5",
      title: "Check out the latest Game Trial!",
      image: GameTrialImg,
      ButtonText: "learn more",
      type: "Nintendo Switch",
    },
    {
      id: "6",
      title: "The Hidden Treasure of Area Zero DLC Part 2: The Indigo Disk",
      image: AreaZeroImg,
      ButtonText: "Available now",
      type: "Nintendo Switch",
    },
    {
      id: "7",
      title: "Hardware offers available",
      image: HardwareOffersImg,
      ButtonText: "Shop now",
      type: "Hardware",
    },
    {
      id: "8",
      title: "Cowabunga Begins - Use TMNT Powers in Fortnite BR!",
      image: FortniteImg,
      ButtonText: "Learn more",
      type: "News and events",
    },
    {
      id: "9",
      title: "Prince of Persia: The Lost Crown",
      image: POPImg,
      ButtonText: "Available now",
      type: "Nintendo Switch",
    },
    {
      id: "10",
      title: "MLB The Show 24",
      image: MLBImg,
      ButtonText: "Pre-order now",
      type: "Nintendo Switch",
    },
  ];
  return (
    <div
      className=" flex flex-col h-[40rem]   w-[100vw]
    phone:h-[35rem]"
    >
      <h1
        className="font-bold text-darkGray text-3xl m-10 ml-40
      phone:text-lg phone:ml-0 phone:m-5 phone:self-center"
      >
        Featured
      </h1>

      <div className="text-darkGray flex flex-col  items-center  justify-center">
        <MultiPageCarousel data={CarouselData} />
      </div>
    </div>
  );
};

export default Featured;
