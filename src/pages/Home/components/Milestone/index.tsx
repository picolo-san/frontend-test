import React from "react";

import { Heading, Paragraph } from "components/common";

import { milestoneStyles, paragraphStyles, timeTitleStyles } from "./styles";

interface MilestoneProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  desc: string;
}

export const Milestone: React.FunctionComponent<MilestoneProps> = ({
  title = "",
  desc = "",
  children,
  ...rest
}) => {
  return (
    <section className={milestoneStyles} {...rest}>
      <Heading level={4} className={timeTitleStyles}>
        {title}
      </Heading>
      <Paragraph className={paragraphStyles}>{desc}</Paragraph>
      {children}
    </section>
  );
};
