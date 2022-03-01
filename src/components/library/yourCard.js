import React from "react";
import { Link } from "react-router-dom";
import Card from "../card";
import Avatar from "../image/image.png";
import ImgDescription from "../image/study-background.png";
export default function YourCardSection() {
  const yourCards = [
    {
      title: "Card Title",
      authorAvatar: Avatar,
      authorName: "Manh Dung",
      description: "Card Description",
      descriptionImg: ImgDescription,
    },
    {
      title: "Card Title",
      authorAvatar: Avatar,
      authorName: "Manh Dung",
      description: "Card Description",
      descriptionImg: ImgDescription,
    },
    {
      title: "Card Title",
      authorAvatar: Avatar,
      authorName: "Manh Dung",
      description: "Card Description",
      descriptionImg: ImgDescription,
    },
    {
      title: "Card Title",
      authorAvatar: Avatar,
      authorName: "Manh Dung",
      description: "Card Description",
      descriptionImg: ImgDescription,
    },
    {
      title: "Card Title",
      authorAvatar: Avatar,
      authorName: "Manh Dung",
      description: "Card Description",
      descriptionImg: ImgDescription,
    },
    {
      title: "Card Title",
      authorAvatar: Avatar,
      authorName: "Manh Dung",
      description: "Card Description",
      descriptionImg: ImgDescription,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-[2rem]">
      <p className="text-[28px] font-bold mb-[1rem]"> Your Card</p>
      <div className="grid grid-cols-3 ">
        {yourCards.map((item, index) => (
          <Link to="/" key={index}>
            <Card
              title={item.title}
              authorAvatar={item.authorAvatar}
              authorName={item.authorName}
              description={item.description}
              descriptionImg={item.descriptionImg}
              typeButton="Edit"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
