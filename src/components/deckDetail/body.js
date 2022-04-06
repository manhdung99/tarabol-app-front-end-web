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
          practice_question: "Practice 1",
          practice_answer: " ",
        },
        {
          id: 2,
          question: "Question 2",
          answer: "Answer 2",
          status: false,
          level: "",
          practice_question: "Practice 2",
          practice_answer: " ",
        },
        {
          id: 3,
          question: "Question 3",
          answer: "Answer 3",
          status: false,
          level: "",
          practice_question: "Practice 3",
          practice_answer: " ",
        },
        {
          id: 4,
          question: "Question 4",
          answer: "Answer 4",
          status: false,
          level: "",
          practice_question: "Practice 4",
          practice_answer: " ",
        },
        {
          id: 5,
          question: "Question 5",
          answer: "Answer 5",
          status: false,
          level: "",
          practice_question: "Practice 5",
          practice_answer: " ",
        },
        {
          id: 6,
          question: "Question 6",
          answer: "Answer 6",
          status: false,
          level: "",
          practice_question: "Practice 6",
          practice_answer: " ",
        },
        {
          id: 7,
          question: "Question 7",
          answer: "Answer 7",
          status: false,
          level: "",
          practice_question: "Practice 7",
          practice_answer: " ",
        },
        {
          id: 8,
          question: "Question 8",
          answer: "Answer 8",
          status: false,
          level: "",
          practice_question: "Practice 8",
          practice_answer: " ",
        },
        {
          id: 9,
          question: "Question 9",
          answer: "Answer 9",
          status: false,
          level: "",
          practice_question: "Practice 9",
          practice_answer: " ",
        },
        {
          id: 10,
          question: "Question 10",
          answer: "Answer 10",
          status: false,
          level: "",
          practice_question: "Practice 10",
          practice_answer: " ",
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
      <table className="w-full relative">
        <thead>
          <tr className="font-bold sm:text-[18px] md:text-[28px]">
            <td>Chapter</td>
            <td className="text-center">Level</td>
            <td className="text-center">Cards</td>
          </tr>
        </thead>
        <tbody>
          {chapters.length > 0 ? (
            chapters.map((item) => (
              <tr key={item.id} className="sm:text-[16px] md:text-[24px]">
                <td
                  onClick={(e) => handleSetDetailChapter()}
                  className="pt-[8px]"
                >
                  <Link to="/tarabol-app-front-end-web/learn">
                    {item.title}
                  </Link>
                </td>
                <td className="pt-[8px] text-center">{item.level}</td>
                <td className="pt-[8px] text-center">{item.num_cards} Cards</td>
              </tr>
            ))
          ) : (
            <tr className="flex justify-center w-full absolute top-[48px] ">
              <td className="text-[20px] font-bold text-[red]">
                Not have Chapter
              </td>
            </tr>
          )}
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
