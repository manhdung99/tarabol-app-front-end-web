import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Body({ chapters, setChapterDetail, deckDetail }) {
  const handleSetDetailChapter = (id) => {
    const chapterInitData = deckDetail.chapter.find(
      (item) => item.id === Number.parseInt(id)
    );
    if (chapterInitData) {
      setChapterDetail(chapterInitData);
    }
  };

  return (
    <div className="w-full">
      <table className="w-full relative">
        <thead>
          <tr className="font-bold sm:text-[18px] md:text-[28px]">
            <td>Chapter</td>
            <td className="text-center">Level</td>
            <td className="text-center">Cards</td>
            <td>Progress</td>
          </tr>
        </thead>
        <tbody>
          {chapters.length > 0 ? (
            chapters.map((item) => (
              <tr key={item.id} className="sm:text-[16px] md:text-[24px]">
                <td
                  onClick={() => handleSetDetailChapter(item.id)}
                  className="pt-[8px]"
                >
                  <Link to="/tarabol-app-front-end-web/learn">
                    {item.title}
                  </Link>
                </td>
                <td className="pt-[8px] text-center">{item.level}</td>
                <td className="pt-[8px] text-center">{item.num_cards} Cards</td>
                <td className="pt-[8px] text-center">
                  {item.progress * 100} %
                </td>
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

const mapStateToProps = (state) => {
  return {
    userDecks: state.deckReducer.userDecks,
    deckDetail: state.deckReducer.deckDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setChapterDetail: (value) =>
      dispatch({ type: "SET_DETAIL_CHAPTER", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
