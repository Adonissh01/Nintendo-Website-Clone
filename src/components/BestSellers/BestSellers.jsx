import React from "react";
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
import MultiPageCarousel from "../Reusable/MultipageCarousel/MultiPageCarousel";

export const BestSellers = (props) => {
  const { name } = props;
  const CarouselData = [
    {
      id: "1",
      title: "Nintendo Direct: Partner Showcase 2.21.2024",
      date: "4/28/17",
      image: DirectPartnerImg,

      type: "News and events",
      oldPrice: 24.99,
      sale: 0.75,
      get newPrice() {
        return this.oldPrice - this.oldPrice * this.sale;
      },
      endsIn: "Sales end in 11 days",
    },
    {
      id: "2",
      title: "Endless Ocean Luminous",
      date: "4/25/19",
      image: EndlessOceanImg,

      type: "Nintendo Switch",
      oldPrice: 59.99,
      sale: 0,
      get newPrice() {
        return this.oldPrice - this.oldPrice * this.sale;
      },
    },
    {
      id: "3",
      title: "Check out the latest games added to Nintendo Switch Online!",
      date: "8/28/17",
      image: LatestGamesImg,

      type: "Nintendo Switch",
      oldPrice: 39.99,
      sale: 0,
      get newPrice() {
        return this.oldPrice - this.oldPrice * this.sale;
      },
    },
    {
      id: "4",
      title: "Another Code: Recollection",
      date: "4/28/23",
      image: AnotherCodeImg,

      type: "Nintendo Switch",
      oldPrice: 59.99,
      sale: 0,
      get newPrice() {
        return this.oldPrice - this.oldPrice * this.sale;
      },
    },
    {
      id: "5",
      title: "Check out the latest Game Trial!",
      date: "5/10/17",
      image: GameTrialImg,

      type: "Nintendo Switch",
      oldPrice: 5.0,
      sale: 0.4,
      get newPrice() {
        return this.oldPrice - this.oldPrice * this.sale;
      },
      endsIn: "Sales end in 5 days",
    },
    {
      id: "6",
      title: "The Hidden Treasure of Area Zero DLC Part 2: The Indigo Disk",
      date: "5/5/17",
      image: AreaZeroImg,

      type: "Nintendo Switch",
      oldPrice: 2.99,
      sale: 0,
      get newPrice() {
        return this.oldPrice - this.oldPrice * this.sale;
      },
    },
    {
      id: "7",
      title: "Hardware offers available",
      date: "4/28/17",
      image: HardwareOffersImg,

      type: "Hardware",
      oldPrice: 39.99,
      sale: 0,
      get newPrice() {
        return this.oldPrice - this.oldPrice * this.sale;
      },
    },
    {
      id: "8",
      title: "Cowabunga Begins - Use TMNT Powers in Fortnite BR!",
      date: "4/28/17",
      image: FortniteImg,

      type: "News and events",
      oldPrice: 29.99,
      sale: 0,
      get newPrice() {
        return this.oldPrice - this.oldPrice * this.sale;
      },
    },
    {
      id: "9",
      title: "Prince of Persia: The Lost Crown",
      date: "4/28/17",
      image: POPImg,

      type: "Nintendo Switch",
    },
    {
      id: "10",
      title: "MLB The Show 24",
      date: "4/28/17",
      image: MLBImg,

      type: "Nintendo Switch",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center h-[40rem]">
      <div className="self-start">
        <h1
          className="font-bold text-darkGray text-3xl m-10 ml-40
        phone:text-lg phone:ml-10"
        >
          {name}
        </h1>
      </div>
      <MultiPageCarousel data={CarouselData} />
    </div>
  );
};
