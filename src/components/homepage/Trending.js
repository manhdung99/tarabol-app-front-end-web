import React from "react";
import { Link } from "react-router-dom";
import Card from "../card";
import Avatar from "../image/image.png";
import ImgDescription from "../image/study-background.png";
export default function Trending() {
  const introduceItems = [
    {
      title: "Card Title",
      authorAvatar: Avatar,
      authorName: "DungNM25",
      description: "Card Description",
      descriptionImg: ImgDescription,
    },
    {
      title: "Card Title",
      authorAvatar: Avatar,
      authorName: "DungNM25",
      description: "Card Description",
      descriptionImg: ImgDescription,
    },
    {
      title: "Card Title",
      authorAvatar: Avatar,
      authorName: "DungNM25",
      description: "Card Description",
      descriptionImg: ImgDescription,
    },
  ];
  return (
    <div className="flex flex-col bg-[#fff] pt-[3rem] ">
      <p className="font-[600] text-xl">Trending</p>
      <div className="flex flex-wrap justify-center md:gap-x-[144px]  lg:gap-x-[38px] xl:gap-x-[138px] ">
        {introduceItems.map((item, index) => (
          <Link className="md:mb-8" to="/" key={index}>
            <Card
              width="307px"
              title={item.title}
              authorAvatar={item.authorAvatar}
              authorName={item.authorName}
              description={item.description}
              descriptionImg={item.descriptionImg}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
