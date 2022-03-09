import React from "react";
import { Link } from "react-router-dom";
import Card from "../card";
import Avatar from "../image/image.png";
import Trending from "./Trending";
import ImgDescription from "../image/study-background.png";
export default function LearnAbout() {
  const introduceItems = [
    {
      title: "Deck Title",
      authorAvatar: Avatar,
      authorName: "Author Name",
      descriptionImg: ImgDescription,
    },
    {
      title: "Deck Title",
      authorAvatar: Avatar,
      authorName: "Author Name",
      descriptionImg: ImgDescription,
    },
    {
      title: "Deck Title",
      authorAvatar: Avatar,
      authorName: "Author Name",
      description: "Card Description",
      descriptionImg: ImgDescription,
    },
  ];
  return (
    <div className="bg-[#fff] pt-[3rem] ">
      <p className="font-[600] text-xl">What's New</p>
      <div className="flex flex-wrap justify-center md:gap-x-[144px] lg:gap-x-[38px] xl:gap-x-[138px]">
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
      <Trending />
      <button className="border-[1px] border-black px-[1rem] py-[4px] rounded-[4px] ml-[50%] translate-x-[-50%] mt-[2rem]">
        Join with us
      </button>
    </div>
  );
}
