import React from "react";
import { Link } from "react-router-dom";
import Lesson from "../lesson";

export default function Body({ chapters }) {
  return (
    <div className="w-[75%]">
      {/* {chapters.length > 0 &&
        chapters.map((item) => (
          <Lesson
            key={item.id}
            num_cards={item.num_cards}
            level={item.level}
            title={item.title}
            image={item.image}
            card_evaluation={item.card_evaluation}
          />
        ))} */}

      <table className="w-full">
        <thead>
          <tr className="font-bold sm:text-[18px] md:text-[28px]">
            <td>Chapter</td>
            <td>Level</td>
            <td>Cards</td>
          </tr>
        </thead>
        <tbody>
          {chapters.map((item) => (
            <tr key={item.id} className="sm:text-[16px] md:text-[24px]">
              <td className="pt-[8px]">
                <Link to="/tarabol-app-front-end-web/learn">{item.title}</Link>
              </td>
              <td className="pt-[8px]">{item.level}</td>
              <td className="pt-[8px]">{item.num_cards} Cards</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
