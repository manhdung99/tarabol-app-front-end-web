import React from "react";
import ImgDescription from "../image/study-background.png";
import { Link } from "react-router-dom";
import UserCard from "../usercard";

export default function UserBody() {
  const marketItems = [
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
    <>
      <span className="flex items-center absolute right-0 cursor-pointer ">
        <p className="font-bold text-[18px]  ">Sort by</p>
        <svg
          className="mt-[1px] ml-[4px]"
          width="12"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 7L7.70711 7.70711L7 8.41421L6.29289 7.70711L7 7ZM13.7071 1.70711L7.70711 7.70711L6.29289 6.29289L12.2929 0.292893L13.7071 1.70711ZM6.29289 7.70711L0.292893 1.70711L1.70711 0.292894L7.70711 6.29289L6.29289 7.70711Z"
            fill="#000"
          />
        </svg>
      </span>
      <div className="flex justify-between mt-16  flex-wrap">
        {marketItems.map((item, index) => (
          <Link
            className=""
            to="/tarabol-app-front-end-web/detailcard"
            key={index}
          >
            <UserCard
              title={item.title}
              authorAvatar={item.authorAvatar}
              authorName={item.authorName}
              description={item.description}
              descriptionImg={item.descriptionImg}
              price="Free"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
