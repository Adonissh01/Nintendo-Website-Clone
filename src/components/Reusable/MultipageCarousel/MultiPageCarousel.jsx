import React, { useRef } from "react";
import Slider from "react-slick";
import { CarouselItems } from "../CarouselItems/CarouselItems";

function MultiPageCarousel(props) {
  let sliderRef = useRef(null);
  const carouselData = props.data;

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  function NextArrow(props) {
    const { className, style } = props;
    return (
      <div
        style={{
          ...style,
          zIndex: "999",
          marginRight: "10px",
          height: "400px",
        }}
        className={className}
      >
        <button
          onClick={next}
          className="h-[22rem] bg-darkGray opacity-50 hover:bg-darkGray hover:opacity-75 transition-colors duration-300
          "
        >
          <box-icon
            type="solid"
            color="gray"
            name="caret-right-circle"
            size="40px"
          ></box-icon>
        </button>
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style } = props;
    return (
      <div
        style={{
          ...style,
          zIndex: "999",
          height: "400px",
        }}
        className={className}
      >
        <button
          className="h-[22rem] bg-darkGray opacity-50 hover:bg-darkGray hover:opacity-75 transition-colors duration-300"
          onClick={previous}
        >
          <box-icon
            color="gray"
            size="40px"
            type="solid"
            name="caret-left-circle"
          ></box-icon>
        </button>
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[90vw] phone:w-[75vw]   ">
      <Slider {...settings} ref={sliderRef}>
        {carouselData.map((slide) => (
          <div key={slide.id}>
            <div className="ml-4 mr-4">
              <CarouselItems data={slide} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultiPageCarousel;
