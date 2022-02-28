import React from "react";
import PropTypes from "prop-types";
function User(props) {
  return (
    <div className="flex items-center mr-[1rem] cursor-pointer ">
      <img
        className="w-[36px] h-[36px] rounded-[50%]"
        src={props.src}
        alt="Avatar"
      />
      <p className="ml-[0.5rem]">{props.userName}</p>
    </div>
  );
}

User.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  userName: PropTypes.string.isRequired,
};

export default User;
