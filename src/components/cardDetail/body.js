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
    <div className="grid grid-cols-3 gap-x-[96px]">
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
