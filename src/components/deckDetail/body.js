import React from "react";
import Lesson from "../lesson";

export default function Body({ chapters }) {
  return (
    <div className="grid md:grid-cols-2 md:gap-x-[64px] xl:grid-cols-3 lg:gap-x-[32px] xl:gap-x-[96px]">
      {chapters.length > 0 &&
        chapters.map((item) => (
          <Lesson
            key={item.id}
            num_cards={item.num_cards}
            level={item.level}
            title={item.title}
            image={item.image}
            card_evaluation={item.card_evaluation}
          />
        ))}
    </div>
  );
}
