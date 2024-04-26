import React from "react";
import { twMerge } from "tailwind-merge";

import { Heading, Button, Span, Paragraph } from "components/common";
import reviewsImage from "assets/images/reviews.png";
import rocketImage from "assets/images/rocket.png";
import awardsImage from "assets/images/awards.png";
import foundersImage from "assets/images/founders.png";
import talkImage from "assets/images/talk.png";
import tabletReviewsImage from "assets/images/tablet-reviews.png";
import tabletRocketImage from "assets/images/tablet-rocket.png";
import tabletFoundersImage from "assets/images/tablet-founders.png";
import tabletTalkImage from "assets/images/tablet-talk.png";
import mobileReviewsImage from "assets/images/mobile-reviews.png";
import mobileRocketImage from "assets/images/mobile-rocket.png";
import mobileFoundersImage from "assets/images/mobile-founders.png";
import mobileTalkImage from "assets/images/mobile-talk.png";

import {
  achievementsStyles,
  quoteStyles,
  startStyles,
  rocketLogoStyles,
  awardsStyles,
  foundersStyles,
  reviewsStyles,
  talkImageStyles,
  captialRasiedStyles,
  subTitleStyles,
  commonContainerStyles,
  commonImageStyles,
  commonThumbNailStyles,
  commonImageThumbnailStyles,
} from "./styles";

export const Achievements: React.FunctionComponent = () => {
  return (
    <section className={achievementsStyles}>
      <div className={twMerge(commonContainerStyles, startStyles)}>
        <Heading level={1} as={<h2 />}>
          2023
        </Heading>
        <Paragraph className={subTitleStyles}>A****** launched</Paragraph>
      </div>
      <div className={rocketLogoStyles}>
        <picture>
          <source media="(max-width:756px)" srcSet={mobileRocketImage} />
          <source media="(max-width:1280px)" srcSet={tabletRocketImage} />
          <img className={commonImageStyles} src={rocketImage} alt="rocket" />
        </picture>
      </div>
      <div className={twMerge(commonContainerStyles, awardsStyles)}>
        <picture>
          <img className="pt-4 xl:h-[194px]" src={awardsImage} alt="awards" />
        </picture>
      </div>
      <div className={twMerge(commonThumbNailStyles, foundersStyles)}>
        <picture>
          <source media="(max-width:756px)" srcSet={mobileFoundersImage} />
          <source media="(max-width:1280px)" srcSet={tabletFoundersImage} />
          <img
            className={commonImageThumbnailStyles}
            src={foundersImage}
            alt="founders"
          />
        </picture>
      </div>
      <div className={twMerge(commonContainerStyles, quoteStyles)}>
        <Heading level={1} as={<h2 />} className="text-center">
          Accelerate the world’s research one reference at a time.
        </Heading>
      </div>
      <div className={twMerge(reviewsStyles)}>
        <picture>
          <source media="(max-width:756px)" srcSet={mobileReviewsImage} />
          <source media="(max-width:1280px)" srcSet={tabletReviewsImage} />
          <img className={commonImageStyles} src={reviewsImage} alt="reviews" />
        </picture>
      </div>
      <div className={twMerge(commonThumbNailStyles, talkImageStyles)}>
        <picture>
          <source media="(max-width:756px)" srcSet={mobileTalkImage} />
          <source media="(max-width:1280px)" srcSet={tabletTalkImage} />
          <img
            className={commonImageThumbnailStyles}
            src={talkImage}
            alt="talk"
          />
        </picture>
      </div>
      <div className={twMerge(commonContainerStyles, captialRasiedStyles)}>
        <Heading level={1} as={<h2 />}>
          $700,000+
        </Heading>
        <Paragraph className={subTitleStyles}>Raised in captial</Paragraph>
      </div>
    </section>
  );
};
