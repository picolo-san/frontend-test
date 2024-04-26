import shirtImage from "assets/images/shirt.png";
import blankImage from "assets/images/blank.png";
import sputnikImage from "assets/images/sputnik-people.png";
import meetingImage from "assets/images/meeting.png";
import collegeImage from "assets/images/college.png";
import designerImage from "assets/images/designer.png";
import mealImage from "assets/images/meal.png";

interface Card {
  imgHref: string;
  title: string;
}

export const cards: Card[] = [
  {
    imgHref: shirtImage,
    title: "A****** T-shirt to wear for conferences & pitches!",
  },
  {
    imgHref: blankImage,
    title: "Enjoying a meal with the Sputnik ATX class of 2023!",
  },
  {
    imgHref: sputnikImage,
    title: "With the Sputnik ATX team",
  },
  {
    imgHref: meetingImage,
    title: "Demo Day  at Sputnik ATX! Presenting to A****** investors",
  },
  {
    imgHref: collegeImage,
    title: "Sharing Entrepreneurial insights back at Lawrence Uni.",
  },
  {
    imgHref: designerImage,
    title: "Our new UX Designer - Peter Da Silva",
  },
  {
    imgHref: mealImage,
    title: "Preparing meals so we can maximise time in the office!",
  },
];
