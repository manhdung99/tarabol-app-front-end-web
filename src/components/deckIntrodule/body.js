import React from "react";
import { connect } from "react-redux";
import { setChapterDetail } from "../../store/action/deckAction";
function Body({ chapters }) {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="font-bold sm:text-[18px] md:text-[24px] lg:text-[28px]">
            <td className="">Chapter</td>
            <td className="text-center pr-[60px]">Level</td>
            <td className="text-center">Cards</td>
          </tr>
        </thead>
        <tbody>
          {chapters.length > 0 ? (
            chapters.map((item) => (
              <tr
                key={item.id}
                className="sm:text-[16px] md:text-[18px] lg:text-[24px]"
              >
                <td className="pt-[8px] sm:text-[12px] md:text-[16px]">
                  {item.title}
                </td>
                <td className="pt-[8px] sm:text-[12px] md:text-[16px] text-center pr-[60px]">
                  {item.level}
                </td>
                <td className="pt-[8px] sm:text-[12px] md:text-[16px] text-center">
                  {item.num_cards} Cards
                </td>
              </tr>
            ))
          ) : (
            <div className="mt-[200px]"></div>
          )}
        </tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = {
  setChapterDetail,
};

export default connect(null, mapDispatchToProps)(Body);
