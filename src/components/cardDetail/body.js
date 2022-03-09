import React from "react";
import Lesson from "../lesson";
import ImgDescription from "../image/study-background.png";

export default function Body() {
  const cardLesson = [
    {
      title: "Deck Title",
      authorName: "Author Name",
      descriptionImg: ImgDescription,
    },
    {
      title: "Deck Title",
      authorName: "Author Name",
      descriptionImg: ImgDescription,
    },
    {
      title: "Deck Title",
      authorName: "Author Name",
      descriptionImg: ImgDescription,
    },
    {
      title: "Deck Title",
      authorName: "Author Name",
      descriptionImg: ImgDescription,
    },
    {
      title: "Deck Title",
      authorName: "Author Name",
      descriptionImg: ImgDescription,
    },
    {
      title: "Deck Title",
      authorName: "Author Name",
      descriptionImg: ImgDescription,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 md:gap-x-[64px] xl:grid-cols-3 lg:gap-x-[32px] xl:gap-x-[96px]">
      {cardLesson.map((item, index) => (
        <Lesson
          key={index}
          title={item.title}
          descriptionImg={item.descriptionImg}
        />
      ))}
    </div>
  );
}
