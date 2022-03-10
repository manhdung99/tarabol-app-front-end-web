import React from "react";
// import User from "../header/User";
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
// import Image from "../image/image.png";
function Card(props) {
  const ref = useRef();
  const yellowStars = new Array(4).fill(null).map((_, i) => i);
  const grayStars = new Array(1).fill(null).map((_, i) => i);
  useEffect(() => {
    ref.current.style.background = "url(" + props.descriptionImg + ")";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      ref={ref}
      className=" w-[307px] relative shadow-md shadow-[#00000040] rounded-[12px] pt-[25%] mt-[1rem] hover:scale-[1.05]"
    >
      <div className="bg-[#fff] px-[8px] border-[1px] border-black rounded-b-[8px] border-t-0">
        <div className="flex items-center justify-between pb-[36px]">
          <div>
            <div>
              <p className="font-bold text-[15px]">{props.title}</p>
            </div>
            <div className="flex gap-[16px] font-semibold">
              <p className="text-[7px]">Beginner</p>
              <p className="text-[7px]">120 Chapters</p>
              <p className="text-[7px]">1000+ Cards </p>
            </div>
          </div>
          <div>
            {props.price && (
              <p className="text-right font-bold mb-1">{props.price}</p>
            )}
            <div className="flex">
              {yellowStars.map((item) => (
                <svg
                  key={item}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.7088 3.11306C6.25596 1.70435 6.52954 1 7 1C7.47046 1 7.74404 1.70436 8.29121 3.11307L8.31668 3.17866C8.62581 3.97451 8.78037 4.37244 9.09537 4.61431C9.41038 4.85617 9.82388 4.89441 10.6509 4.9709L10.8004 4.98473C12.1539 5.10992 12.8307 5.17251 12.9755 5.61716C13.1203 6.06182 12.6177 6.53403 11.6125 7.47845L11.2771 7.79365C10.7682 8.27174 10.5138 8.51078 10.3952 8.82408C10.3731 8.88252 10.3547 8.9424 10.3402 9.00332C10.2622 9.32993 10.3367 9.67671 10.4857 10.3703L10.5321 10.5861C10.806 11.8608 10.9429 12.4981 10.7038 12.773C10.6145 12.8757 10.4984 12.9496 10.3694 12.986C10.0242 13.0833 9.5342 12.6709 8.55412 11.8461C7.91057 11.3046 7.58879 11.0338 7.21936 10.9729C7.07404 10.9489 6.92596 10.9489 6.78064 10.9729C6.41121 11.0338 6.08943 11.3046 5.44588 11.8461C4.4658 12.6709 3.97576 13.0833 3.6306 12.986C3.50163 12.9496 3.38552 12.8757 3.29619 12.773C3.05712 12.4981 3.19405 11.8608 3.46789 10.5861L3.51427 10.3703C3.66327 9.67671 3.73777 9.32993 3.65983 9.00332C3.64529 8.9424 3.6269 8.88252 3.60478 8.82408C3.4862 8.51078 3.23178 8.27174 2.72294 7.79365L2.38746 7.47845C1.38228 6.53403 0.87969 6.06182 1.0245 5.61716C1.16931 5.17251 1.84607 5.10992 3.19959 4.98473L3.3491 4.9709C4.17612 4.89441 4.58962 4.85617 4.90463 4.61431C5.21963 4.37244 5.37419 3.97451 5.68332 3.17866L5.7088 3.11306Z"
                    fill="#FFD600"
                    stroke="white"
                    strokeWidth="1.4"
                  />
                </svg>
              ))}
              {grayStars.map((item) => (
                <svg
                  key={item}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.7088 3.11306C6.25596 1.70435 6.52954 1 7 1C7.47046 1 7.74404 1.70436 8.29121 3.11307L8.31668 3.17866C8.62581 3.97451 8.78037 4.37244 9.09537 4.61431C9.41038 4.85617 9.82388 4.89441 10.6509 4.9709L10.8004 4.98473C12.1539 5.10992 12.8307 5.17251 12.9755 5.61716C13.1203 6.06182 12.6177 6.53403 11.6125 7.47845L11.2771 7.79365C10.7682 8.27174 10.5138 8.51078 10.3952 8.82408C10.3731 8.88252 10.3547 8.9424 10.3402 9.00332C10.2622 9.32993 10.3367 9.67671 10.4857 10.3703L10.5321 10.5861C10.806 11.8608 10.9429 12.4981 10.7038 12.773C10.6145 12.8757 10.4984 12.9496 10.3694 12.986C10.0242 13.0833 9.5342 12.6709 8.55412 11.8461C7.91057 11.3046 7.58879 11.0338 7.21936 10.9729C7.07404 10.9489 6.92596 10.9489 6.78064 10.9729C6.41121 11.0338 6.08943 11.3046 5.44588 11.8461C4.4658 12.6709 3.97576 13.0833 3.6306 12.986C3.50163 12.9496 3.38552 12.8757 3.29619 12.773C3.05712 12.4981 3.19405 11.8608 3.46789 10.5861L3.51427 10.3703C3.66327 9.67671 3.73777 9.32993 3.65983 9.00332C3.64529 8.9424 3.6269 8.88252 3.60478 8.82408C3.4862 8.51078 3.23178 8.27174 2.72294 7.79365L2.38746 7.47845C1.38228 6.53403 0.87969 6.06182 1.0245 5.61716C1.16931 5.17251 1.84607 5.10992 3.19959 4.98473L3.3491 4.9709C4.17612 4.89441 4.58962 4.85617 4.90463 4.61431C5.21963 4.37244 5.37419 3.97451 5.68332 3.17866L5.7088 3.11306Z"
                    fill="#BBBBBB"
                    stroke="white"
                    strokeWidth="1.4"
                  />
                </svg>
              ))}
            </div>
            <div>
              <p className="text-[8px] text-center font-semibold">4.6 (10+)</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pb-[12px]">
          <div className="text-[10px]">
            <p className="font-semibold">{props.authorName}</p>
          </div>
          <div>
            <button className="text-[10px] font-semibold border-black border-[1px] px-[35px] py-[8px] rounded-[2px]">
              Learn Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  descriptionImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  // authorAvatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  //   .isRequired,
  // description: PropTypes.string.isRequired,
  authorName: PropTypes.string,
  // typeButton: PropTypes.string,
  price: PropTypes.string,
};

export default Card;