import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Body({ chapters }) {
  return (
    <div className="">
      <table className="w-full">
        <thead>
          <tr className="font-bold sm:text-[18px] md:text-[28px]">
            <td>Chapter</td>
            <td className="text-center pr-[60px]">Level</td>
            <td className="text-center">Cards</td>
          </tr>
        </thead>
        <tbody>
          {chapters.map((item) => (
            <tr key={item.id} className="sm:text-[16px] md:text-[24px]">
              <td className="pt-[8px]">
                <Link to="/tarabol-app-front-end-web/learn">{item.title}</Link>
              </td>
              <td className="pt-[8px] text-center pr-[60px]">{item.level}</td>
              <td className="pt-[8px] text-center">{item.num_cards} Cards</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setChapterDetail: (value) =>
      dispatch({ type: "SET_DETAIL_CHAPTER", payload: value }),
  };
};

export default connect(null, mapDispatchToProps)(Body);
