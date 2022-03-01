import React from "react";
import User from "../header/User";
import PropTypes from "prop-types";
function Card(props) {
  return (
    <div className="w-[307px] h-[145px] relative shadow-md shadow-[#00000040] rounded-[12px] mx-[2.5rem] px-[1rem] mt-[1rem] hover:scale-[1.05] ">
      {props.typeButton && (
        <button className="absolute bg-[#C4C4C4] w-[52px] h-[24px] right-[2rem] top-[1.25rem]">
          {props.typeButton}
        </button>
      )}
      <div>
        <p className="text-2xl font-bold">{props.title}</p>
        <p className="text-[14px] font-[400]">{props.description}</p>
      </div>
      <div className="flex justify-between mt-[10px] mb-[4px]">
        <User src={props.authorAvatar} userName={props.authorName} />
        <div>
          <img
            className="w-[108px] h-[60px]"
            src={props.descriptionImg}
            alt="Description"
          />
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  descriptionImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  authorAvatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  description: PropTypes.string.isRequired,
  authorName: PropTypes.string,
  typeButton: PropTypes.string,
};

export default Card;
