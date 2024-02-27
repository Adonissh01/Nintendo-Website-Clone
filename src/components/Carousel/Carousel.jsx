import React, { useState, useRef } from "react";
import Slider from "react-slick";
import blackBG from "../../Assets/Icons/black-bg.webp";
import blueBG from "../../Assets/Icons/blue-bg.avif";
import redBG from "../../Assets/Icons/red-bg.jpg";
import beigeBG from "../../Assets/Icons/beige-bg.webp";
import { CustomButton } from "../Reusable/CustomButton/CustomButton";

export const Carousel = () => {
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const slides = [
    {
      id: 1,
      title: "Play a new story campaign with the Splatoon 3: Expansion Pass",
      btnText: "Buy now",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/merchandising/center-stage-stories/2024/02-February/Splatoon-3-Side-Order/Splatoon3-Feb-2024-1-mobile",
      bg: beigeBG,
    },
    {
      id: 2,
      title: "See what's new in the Fresh Season 2024 of Splatoon 3",
      btnText: "Watch it here",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/merchandising/center-stage-stories/2024/02-February/Splatoon-3-Side-Order/Splatoon3-Feb-2024-2-mobile",
      bg: blackBG,
    },
    {
      id: 3,
      title: "The classic rivalry reignites in this puzzling platformer",
      btnText: "Available now",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/merchandising/center-stage-stories/2024/02-February/Mario-vs-Donkey-Kong/2200x2000___Mario_vs_Donkey_Kong_KeyArt_Centerstage_Mobile",
      bg: blueBG,
    },
    {
      id: 4,
      title: "Take the stage as Peach in Princess Peach: Showtime!",
      btnText: "Curtain rises on 3/22",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/merchandising/center-stage-banner/princess-peach-showtime/2200x2000_PPS-mobile",
      bg: redBG,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const play = () => {
    sliderRef.current.slickPlay();
    setIsPlaying(true);
  };

  const pause = () => {
    sliderRef.current.slickPause();
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (!isPlaying) {
      play(); // If currently paused, resume autoplay
    } else {
      pause(); // If currently playing, pause autoplay
    }
  };

  return (
    <div className="w-[100vw] items-center mb-10">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div
              className="flex flex-column w-full h-[28rem] bg-cover bg-center  justify-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <img
                src={slide.image}
                alt="IMG"
                className="mt-[5rem] resize-y object-fill rounded w-[80rem] h-[30rem]"
              />
            </div>
            <div className="flex flex-row justify-center text-center gap-5 mt-[10rem]">
              <p className="font-bold text-darkGray text-2xl phone:text-xs">
                {slide.title}
              </p>
              <CustomButton btnText={slide.btnText} />
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-10 gap-10">
        <button className="hover:scale-110" onClick={previous}>
          <box-icon
            color="	#5A5A5A"
            size="40px"
            type="solid"
            name="caret-left-circle"
          ></box-icon>
        </button>
        <button onClick={togglePlayPause} className="hover:scale-110">
          <box-icon
            color="#5A5A5A"
            size="50px"
            name={isPlaying ? "pause" : "play"}
          ></box-icon>
        </button>
        <button className="hover:scale-110" onClick={next}>
          <box-icon
            type="solid"
            color="	#5A5A5A"
            name="caret-right-circle"
            size="40px"
          ></box-icon>
        </button>
      </div>
    </div>
  );
};
