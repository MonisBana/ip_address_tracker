import React from "react";
import icon_arrow from "../assets/images/icon-arrow.svg";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: "#ccc" }} spin />
);

const Header = (props) => {
  return (
    <div className="">
      <div className="bg-pattern bg-no-repeat bg-cover h-64  sm:h-1/3 lg:h-screen/3 relative flex items-center  w-full flex-col">
        <h1 className="text-3xl text-white mb-4 mt-6 font-semibold">
          IP Address Tracker
        </h1>
        <div className="flex flex-row w-10/12 lg:w-5/12 items-center justify-center ">
          <input
            placeholder="Search for any IP address or domain"
            className={`rounded-l-lg p-4 text-xl lg:text-xl w-full font-bold focus:outline-none ${
              props.valid
                ? "focus:shadow-outline"
                : `border-2 border-red-500 text-red-500`
            } `}
            value={props.inputIP}
            onChange={(e) => props.IpHandler(e)}
          />
          <button
            className="rounded-r-lg very-dark-gray lg:p-5 h-16 lg:pl-3 cursor-pointer w-2/12 lg:w-1/12 min-w-1 focus:outline-none"
            onClick={props.getInfo}
          >
            {props.loading ? (
              <Spin indicator={antIcon} />
            ) : (
              <img
                src={icon_arrow}
                alt="submit btn"
                className="inline-block object-cove"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
