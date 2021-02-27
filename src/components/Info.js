import React from "react";

const Info = ({ title, value }) => {
  return (
    <div className="flex flex-col  w-full  items-center lg:items-start lg:w-1/4 lg:py-5 lg:pl-10">
      <p className="text-xs lg:text-md mb-1 font-semibold text-gray-500 uppercase tracking-widest">
        {title}
      </p>
      <p className="text-lg lg:text-2xl  mb-1 font-semibold tracking-widest lg:mt-1">
        {value}
      </p>
    </div>
  );
};
const Infos = ({ ip, location, timezone, isp }) => {
  return (
    <div className="absolute top-0 z-10 flex items-center justify-center w-full h-60 lg:h-48 -mt-12 lg:-mt-24 ">
      <div className="flex flex-col lg:flex-row items-center  p-2 w-10/12 lg:w-3/4 lg:divide-x bg-white rounded-lg shadow-xl h-full">
        <Info title="Ip Address" value={ip} />
        <Info title="Location" value={location} />
        <Info title="Timezone" value={timezone} />
        <Info title="ISP" value={isp} />
      </div>
    </div>
  );
};

export default Infos;
