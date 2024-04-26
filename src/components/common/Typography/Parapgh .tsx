import React from "react";
import { twMerge } from "tailwind-merge";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export const Paragraph: React.FunctionComponent<ParagraphProps> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <p
      className={twMerge(
        "text-lg leading-normal mx-0 my-0 tracking-tighter text-colors-text font-medium",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
};
