import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Body({ chapters, setChapterDetail }) {
  const handleSetDetailChapter = () => {
    const chapterItems = {
      id: 1,
      title: "Variable",
      num_cards: 10,
      num_practice_cards: 10,
      level: 1,
      cards: [
        {
          id: 1,
          question: "Question 1",
          answer: "Answer 1",
          status: false,
          level: "",
        },
        {
          id: 2,
          question: "Question 2",
          answer: "Answer 2",
          status: false,
          level: "",
        },
        {
          id: 3,
          question: "Question 3",
          answer: "Answer 3",
          status: false,
          level: "",
        },
        {
          id: 4,
          question: "Question 4",
          answer: "Answer 4",
          status: false,
          level: "",
        },
        {
          id: 5,
          question: "Question 5",
          answer: "Answer 5",
          status: false,
          level: "",
        },
        {
          id: 6,
          question: "Question 6",
          answer: "Answer 6",
          status: false,
          level: "",
        },
        {
          id: 7,
          question: "Question 7",
          answer: "Answer 7",
          status: false,
          level: "",
        },
        {
          id: 8,
          question: "Question 8",
          answer: "Answer 8",
          status: false,
          level: "",
        },
        {
          id: 9,
          question: "Question 9",
          answer: "Answer 9",
          status: false,
          level: "",
        },
        {
          id: 10,
          question: "Question 10",
          answer: "Answer 10",
          status: false,
          level: "",
        },
      ],
      practiceCards: [
        {
          id: 1,
          question: "Practice 1",
          answer: "Answer 1",
          status: false,
        },
        {
          id: 2,
          question: "Practice 2",
          answer: "Answer 2",
          status: false,
        },
        {
          id: 3,
          question: "Practice 3",
          answer: "Answer 3",
          status: false,
        },
        {
          id: 4,
          question: "Practice 4",
          answer: "Answer 4",
          status: false,
        },
        {
          id: 5,
          question: "Practice 5",
          answer: "Answer 5",
          status: false,
        },
        {
          id: 6,
          question: "Practice 6",
          answer: "Answer 6",
          status: false,
        },
        {
          id: 7,
          question: "Practice 7",
          answer: "Answer 7",
          status: false,
        },
        {
          id: 8,
          question: "Practice 8",
          answer: "Answer 8",
          status: false,
        },
        {
          id: 9,
          question: "Practice 9",
          answer: "Answer 9",
          status: false,
        },
        {
          id: 10,
          question: "Practice 10",
          answer: "Answer 10",
          status: false,
        },
      ],
    };
    setChapterDetail(chapterItems);
  };

  return (
    <div className="w-[75%]">
      <table className="w-full">
        <thead>
          <tr className="font-bold sm:text-[18px] md:text-[28px]">
            <td>Chapter</td>
            <td className="text-center">Level</td>
            <td className="text-center">Cards</td>
          </tr>
        </thead>
        <tbody>
          {chapters.map((item) => (
            <tr key={item.id} className="sm:text-[16px] md:text-[24px]">
              <td
                onClick={(e) => handleSetDetailChapter()}
                className="pt-[8px]"
              >
                <Link to="/tarabol-app-front-end-web/learn">{item.title}</Link>
              </td>
              <td className="pt-[8px] text-center">{item.level}</td>
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
