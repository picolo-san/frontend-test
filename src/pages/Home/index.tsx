import React from "react";

import { Achievements } from "./components/Achievements";
import { Milestone } from "./components/Milestone";
import { Cards } from "./components/Cards";
import { milestones, latestMilestone } from "./constants";

export const Home: React.FunctionComponent = () => {
  return (
    <>
      <Achievements />
      {milestones.map((milestone) => (
        <Milestone
          title={milestone.title}
          desc={milestone.desc}
          key={milestone.desc}
        >
          <img alt={milestone.title} src={milestone.imgHref} />
        </Milestone>
      ))}
      <Milestone title={latestMilestone.title} desc={latestMilestone.desc}>
        <Cards />
      </Milestone>
    </>
  );
};
