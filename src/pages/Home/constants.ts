import milestone1Image from "assets/images/milestone-1.png";
import milestone2Image from "assets/images/milestone-2.png";
import milestone3Image from "assets/images/milestone-3.png";
import milestone4Image from "assets/images/milestone-4.png";
import milestone5Image from "assets/images/milestone-5.png";
import milestone6Image from "assets/images/milestone-6.png";

export interface Milestone {
  title: string;
  desc: string;
  imgHref: string;
}

export const milestones: Milestone[] = [
  {
    title: "January 2023",
    desc: "Our story starts at Lawrence University in Wisconsin, US, where Alec & Hung studied together in Economics & Data + Computer Science. Whilst studying, we got quickly frustrated with how over-complicated & stretched out researching papers were, knowing there would be a better way, the idea of A****** was born.",
    imgHref: milestone1Image,
  },
  {
    title: "March 2023",
    desc: "A****** launched it's first MVP to the the students of Lawrence University. We had a great response with 500 users immediately signing up (~50% of our college!) This made us realize that there was serious potential for A******. After graduating, we continued to grow A****** out of out apartment to see how far it could go.",
    imgHref: milestone2Image,
  },
  {
    title: "July 2023",
    desc: "A****** launched on Product Hunt, doubling the number of active users. Shortly after, Sputnik ATX reached out with an interest to invest in A******. Soon after, we boarded a flight from Wisconsin to Austin, Texas to further present A****** to Sputnik ATX.  A make or break moment for the future of the company.",
    imgHref: milestone3Image,
  },
  {
    title: "August 2023",
    desc: "Sputnik invested $100,000. We moved our HQ from Wisconsin to Austin and worked with Sputnik to try out new strategies to grow A******.",
    imgHref: milestone4Image,
  },
  {
    title: "October 2023",
    desc: "We partnered up with the AppSumo team to launch on their platform. Spent 2 months preparing marketing assets, copywriting, doing user testing and refining the product, before launching on October 16, 2023.",
    imgHref: milestone5Image,
  },
  {
    title: "December 2023",
    desc: "We passed $500,000 in revenue, became one of AppSumo's hottest products of 2023 & earned multiple badges for various reasons. A crazy year to say the least!",
    imgHref: milestone6Image,
  },
];

export const latestMilestone: Milestone = {
  title: "Present",
  desc: "We’ve grown our team & continue to invest time, money & effort into A******, with excitement for what the future holds!",
  imgHref: "",
};
