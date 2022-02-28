import React from "react";
import { Link } from "react-router-dom";
import Card from "../card";
import Avatar from "../image/image.png";
import ImgDescription from "../image/study-background.png";
export default function LearnAbout() {
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
    <div className="flex flex-col w-full h-[400px] bg-[#fff] items-center gap-[3rem] ">
      <div className="border-[1px] border-black shadow-sm shadow-black mt-[3rem] ">
        <p className="font-[600] text-xl px-[3rem]">
          Text introduce how to learn
        </p>
      </div>
      <div className="flex ">
        {introduceItems.map((item, index) => (
          <Link to="/" key={index}>
            <Card
              title={item.title}
              authorAvatar={item.authorAvatar}
              authorName={item.authorName}
              description={item.description}
              descriptionImg={item.descriptionImg}
            />
          </Link>
        ))}
      </div>
      <button className="border-[1px] border-black px-[1rem] py-[4px] rounded-[4px]">
        Join with us
      </button>
    </div>
  );
}
