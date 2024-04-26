import React from "react";
import Slider from "react-slick";

import { Card } from "components/common";

import { cards } from "./constants";
import { twMerge } from "tailwind-merge";

export const cardsInXLStyles = `
  hidden
  xl:grid 
  xl:grid-cols-3
  xl:grid-rows-3
  xl:gap-6
`;

export const cardStyles = ` 
  w-full
  xl:hidden
  h-auto
  relative
  md:w-[744px]
  xs:w-[343px]
  2xs:w-full
`;

export const Cards = () => {
  const leftToRightSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    variableWidth: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const rightToLeftSettings = { ...leftToRightSettings, rtl: true };
  return (
    <>
      <div className={cardsInXLStyles}>
        {cards.map((card) => (
          <Card title={card.title} img={card.imgHref} key={card.title} />
        ))}
        <Card />
      </div>
      <div className={cardStyles}>
        <Slider {...leftToRightSettings}>
          {cards.map((card, index) => (
            <div key={index} className="px-3 my-9">
              <Card title={card.title} img={card.imgHref} key={card.title} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={cardStyles}>
        <Slider {...rightToLeftSettings}>
          {cards.map((card, index) => (
            <div key={index} className="px-3 my-9">
              <Card title={card.title} img={card.imgHref} key={card.title} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
