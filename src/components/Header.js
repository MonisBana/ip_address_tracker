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
    <div className="bg-pattern bg-no-repeat bg-cover h-screen/3 pt-2 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white mb-4 mt-6 font-semibold">
          IP Address Tracker
        </h1>
        <div className="flex flex-row w-10/12 lg:w-5/12 items-center justify-center ">
          <input
            placeholder="Search for any IP address or domain"
            className={`rounded-l-lg p-4 text-md lg:text-xl w-full font-bold focus:outline-none ${
              props.valid ? "" : `border-2 border-red-500 text-red-500`
            } `}
            value={props.inputIP}
            onChange={(e) => props.IpHandler(e)}
          />
          <button
            className="rounded-r-lg very-dark-gray lg:p-5 h-16 lg:pl-3  cursor-pointer w-2/12 lg:w-1/12 min-w-1"
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
