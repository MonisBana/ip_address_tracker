import React from "react";
import icon_arrow from "../assets/images/icon-arrow.svg";

const Header = (props) => {
  return (
    <div className="bg-pattern bg-no-repeat bg-cover h-screen/3 pt-2 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white mb-4 mt-6 font-semibold">
          IP Address Tracker
        </h1>
        <div className="flex flex-row w-5/12 items-center justify-center ">
          <input
            placeholder="Search for any IP address or domain"
            className="rounded-l-lg px-4 py-4 text-xl w-full  font-bold focus:outline-none"
            value={props.inputIP}
            onChange={(e) => props.IpHandler(e)}
          />
          <button
            className="rounded-r-lg very-dark-gray p-5  cursor-pointer w-1/12 min-w-1"
            onClick={props.getInfo}
          >
            <img
              src={icon_arrow}
              alt="submit btn"
              className="inline-block object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
