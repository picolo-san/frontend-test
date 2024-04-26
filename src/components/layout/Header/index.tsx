import React from "react";

import { BUTTON_VARIANT_TYPES } from "types";
import { Button, Span, Heading } from "components/common";
import { ReactComponent as BaseLogo } from "assets/icons/svg/others/base-logo.svg";
import { ReactComponent as StackIcon } from "assets/icons/svg/others/stack.svg";

const headerStyles = `
  flex 
  justify-between 
  w-screen
 
  fixed 
  top-0 
  left-0 
  h-[76px] 
  z-50 
  items-center 
  border-b 
  border-b-colors-border
  backdrop-blur-[14px]
  bg-[rgba(252,252,253,.5)]
  px-[15px] 
  sm:px-10 
  xl:px-[120px]
`;

const logoStyles = `
  flex 
  justify-between 
  w-auto 
  items-center 
  gap-x-2
`;

const navStyles = `
  hidden 
  xl:flex 
  items-center 
  gap-x-6
`;

const ctaStyles = `
  hidden 
  xl:flex 
  gap-x-2
`;

const tabletCta = `
  xl:hidden
  flex
  p-2
`;

export const Header = () => {
  return (
    <header className={headerStyles}>
      <a className={logoStyles} href="/">
        <BaseLogo />
        <Heading as={<h1></h1>} level={4}>
          A******
        </Heading>
      </a>
      <div className={navStyles}>
        <a href="/">
          <Span>Affiliate</Span>
        </a>
        <a href="/">
          <Span>Pricing</Span>
        </a>
        <a href="/">
          <Span>Community</Span>
        </a>
        <a href="/">
          <Span>Help Center</Span>
        </a>
        <a href="/">
          <Span>Blog</Span>
        </a>
      </div>
      <div className={ctaStyles}>
        <Button as={<a></a>} variant={BUTTON_VARIANT_TYPES.OUTLINED}>
          Log in
        </Button>
        <Button
          as={<a href="/signup"></a>}
          variant={BUTTON_VARIANT_TYPES.CONTAINED}
        >
          Try for free
        </Button>
      </div>
      <Button className={tabletCta} variant={BUTTON_VARIANT_TYPES.OUTLINED}>
        <StackIcon />
      </Button>
    </header>
  );
};
