import { Heading, Span } from "components/common";
import { ReactComponent as BaseLogo } from "assets/icons/svg/others/base-logo.svg";
import { ReactComponent as LinkedinIcon } from "assets/icons/svg/others/linkedin.svg";
import { ReactComponent as TitokIcon } from "assets/icons/svg/others/titok.svg";
import { ReactComponent as YoutubeIcon } from "assets/icons/svg/others/youtube.svg";
import { ReactComponent as TwitterIcon } from "assets/icons/svg/others/twitter.svg";
import { ReactComponent as SputnikIcon } from "assets/icons/svg/others/sputnik.svg";
import { ReactComponent as PlugAndPlayIcon } from "assets/icons/svg/others/plugandplay.svg";
import { ReactComponent as HatcherIcon } from "assets/icons/svg/others/hatcher.svg";

import { companyLinks, compareLinks, resourcesLinks } from "./constants";
import {
  footerStyles,
  logoStyles,
  langSelectStyles,
  linksStyles,
  socialStyles,
  supportedBrandsStyles,
  backedTextStyles,
} from "./styles";

export const Footer = () => {
  return (
    <footer className={footerStyles}>
      <a className={logoStyles} href="/">
        <BaseLogo />
        <Heading as={<h3></h3>} level={4}>
          A******
        </Heading>
      </a>
      <select className={langSelectStyles}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <div className={linksStyles}>
        <Heading as={<h3 />} level={4}>
          {companyLinks.heading}
        </Heading>
        {companyLinks.archors.map((archor, index) => (
          <a key={index} href={archor.href} target="_blank" rel="noreferrer">
            <Span className="text-colors-text-secondary">{archor.text}</Span>
          </a>
        ))}
      </div>
      <div className={linksStyles}>
        <Heading as={<h3 />} level={4}>
          {resourcesLinks.heading}
        </Heading>
        {resourcesLinks.archors.map((archor, index) => (
          <a key={index} href={archor.href} target="_blank" rel="noreferrer">
            <Span className="text-colors-text-secondary">{archor.text}</Span>
          </a>
        ))}
      </div>
      <div className={linksStyles}>
        <Heading as={<h3 />} level={4}>
          {compareLinks.heading}
        </Heading>
        {compareLinks.archors.map((archor, index) => (
          <a key={index} href={archor.href} target="_blank" rel="noreferrer">
            <Span className="text-colors-text-secondary">{archor.text}</Span>
          </a>
        ))}
      </div>
      <div className={socialStyles}>
        <Span className="text-colors-text-tertiary  w-full flex md:justify-end xs:justify-center">
          Copyright ©2023 A****** inc.️
        </Span>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/company/afforai/"
          target="_blank"
          rel="noreferrer"
        >
          <Span>
            <LinkedinIcon />
          </Span>
        </a>
        <a
          aria-label="Youtube"
          href="https://www.youtube.com/channel/UCs3MmtO36AOSgX3F9gTANEw"
          target="_blank"
          rel="noreferrer"
        >
          <Span>
            <YoutubeIcon />
          </Span>
        </a>
        <a
          aria-label="Tiktok"
          href="https://www.tiktok.com/@afforai"
          target="_blank"
          rel="noreferrer"
        >
          <Span>
            <TitokIcon />
          </Span>
        </a>
        <a
          aria-label="Twitter"
          href="https://twitter.com/afforai"
          target="_blank"
          rel="noreferrer"
        >
          <Span>
            <TwitterIcon />
          </Span>
        </a>
      </div>
      <div className={supportedBrandsStyles}>
        <Span className={backedTextStyles}>A****** is backed by</Span>
        <SputnikIcon className="w-full" />
        <PlugAndPlayIcon className="w-full" />
        <HatcherIcon className="w-full" />
      </div>
    </footer>
  );
};
