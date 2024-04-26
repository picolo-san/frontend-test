import React from "react";
import { twMerge } from "tailwind-merge";

import { Paragraph, Span, Heading } from "components/common/Typography";
import { ReactComponent as BookIcon } from "assets/icons/svg/others/book-open.svg";

import {
  commonCardStyles,
  cardStyles,
  imageStyles,
  defaultCardStyles,
} from "./styles";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  img?: string;
}

export const Card: React.FunctionComponent<CardProps> = ({
  title = null,
  img = null,
  className = "",
  children,
  ...rest
}) => {
  const defaultTitle = "More memories to be made...";
  const defaultSubTitle = "2024 -> Onwards";
  return (
    <>
      {title && img ? (
        <div
          className={twMerge(commonCardStyles, cardStyles, className)}
          {...rest}
        >
          <img src={img} alt={title} className={imageStyles} />
          <Heading level={6} as={<h4 />}>
            {title}
          </Heading>
        </div>
      ) : (
        <div
          className={twMerge(commonCardStyles, defaultCardStyles, className)}
        >
          <BookIcon />
          <div className="flex flex-col justify-center">
            <Span className="text-[22px] text-center text-colors-text-secondary">
              {defaultSubTitle}
            </Span>
            <Paragraph className="w-[200px] text-center text-[27px] text-colors-text">
              {defaultTitle}
            </Paragraph>
          </div>
        </div>
      )}
    </>
  );
};
