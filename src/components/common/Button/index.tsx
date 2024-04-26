import React from "react";
import { twMerge } from "tailwind-merge";

import { BUTTON_VARIANT_TYPES } from "types";
import { Span } from "components/common/Typography";

import {
  buttonStyles,
  containedSpanStyles,
  containedButtonStyles,
  outlinedButtonStyles,
  outlinedSpanStyles,
} from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isFullWidth?: boolean;
  as?: React.ReactElement;
  variant?: BUTTON_VARIANT_TYPES.CONTAINED | BUTTON_VARIANT_TYPES.OUTLINED;
  className?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  as = null,
  isFullWidth = false,
  variant = BUTTON_VARIANT_TYPES.CONTAINED,
  className = "",
  ...rest
}) => {
  return (
    <>
      {as ? (
        React.cloneElement(as, {
          className: twMerge(
            ` ${isFullWidth ? "w-full" : "w-auto"}`,
            buttonStyles,
            `${variant === BUTTON_VARIANT_TYPES.CONTAINED && containedButtonStyles}`,
            `${variant === BUTTON_VARIANT_TYPES.OUTLINED && outlinedButtonStyles}`,
            className,
          ),
          children: (
            <Span
              className={twMerge(
                `${variant === BUTTON_VARIANT_TYPES.CONTAINED && containedSpanStyles}`,
                `${variant === BUTTON_VARIANT_TYPES.OUTLINED && outlinedSpanStyles}`,
              )}
            >
              {children}
            </Span>
          ),
          ...rest,
        })
      ) : (
        <button
          className={twMerge(
            ` ${isFullWidth ? "w-full" : "w-auto"}`,
            buttonStyles,
            `${variant === BUTTON_VARIANT_TYPES.CONTAINED && containedButtonStyles}`,
            `${variant === BUTTON_VARIANT_TYPES.OUTLINED && outlinedButtonStyles}`,
            className,
          )}
          {...rest}
        >
          <Span
            className={twMerge(
              `${variant === BUTTON_VARIANT_TYPES.CONTAINED && containedSpanStyles}`,
              `${variant === BUTTON_VARIANT_TYPES.OUTLINED && outlinedSpanStyles}`,
            )}
          >
            {children}
          </Span>
        </button>
      )}
    </>
  );
};
