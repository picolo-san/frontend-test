import React from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ReactElement;
  level?: number;
  className?: string;
}

const commonHeadingStyles = `
  mx-0 
  my-0 
  block
  text-colors-text
  tracking-tighter
  font-semibold
  leading-normal
`;
const NUMBER_OF_HEADINGS = 6;

export const Heading: React.FunctionComponent<HeadingProps> = ({
  as = null,
  level = 1,
  className = "",
  children,
  ...rest
}) => {
  const specificStyles = [
    `xl:text-[53px] md:text-[34px]`,
    `xl:text-[53px] md:text-[34px]`,
    `text-[43px]`,
    `text-[24px]`,
    `text-lg font-medium`,
    `text-base font-medium`,
    `text-sm font-medium`,
  ];
  const headings = [
    <h1
      className={twMerge(commonHeadingStyles, specificStyles[level], className)}
      {...rest}
    >
      {children}
    </h1>,
    <h1
      className={twMerge(commonHeadingStyles, specificStyles[level], className)}
      {...rest}
    >
      {children}
    </h1>,
    <h2
      className={twMerge(commonHeadingStyles, specificStyles[level], className)}
      {...rest}
    >
      {children}
    </h2>,
    <h3
      className={twMerge(commonHeadingStyles, specificStyles[level], className)}
      {...rest}
    >
      {children}
    </h3>,
    <h4
      className={twMerge(commonHeadingStyles, specificStyles[level], className)}
      {...rest}
    >
      {children}
    </h4>,
    <h5
      className={twMerge(commonHeadingStyles, specificStyles[level], className)}
      {...rest}
    >
      {children}
    </h5>,
    <h6
      className={twMerge(commonHeadingStyles, specificStyles[level], className)}
      {...rest}
    >
      {children}
    </h6>,
  ];

  return (
    <>
      {as &&
        React.cloneElement(as, {
          className: twMerge(
            commonHeadingStyles,
            specificStyles[level],
            className,
          ),
          children: children,
          ...rest,
        })}
      {level <= NUMBER_OF_HEADINGS && !as && headings[level]}
    </>
  );
};
