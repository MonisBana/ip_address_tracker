import React from "react";

const Info = ({ title, value }) => {
  return (
    <div className="flex flex-col mx-3 w-1/4 py-5 pl-10">
      <p className="text-md font-semibold text-gray-500 uppercase tracking-widest">
        {title}
      </p>
      <p className="text-2xl font-semibold tracking-widest mt-2">{value}</p>
    </div>
  );
};
const Infos = ({ ip, location, timezone, isp }) => {
  return (
    <div className="absolute top-30 z-10 flex items-center justify-center w-full h-48  -mt-20 ">
      <div className="flex items-center  w-10/12 divide-x bg-white rounded-lg shadow-xl h-full">
        <Info title="Ip Address" value={ip} />
        <Info title="Location" value={location} />
        <Info title="Timezone" value={timezone} />
        <Info title="ISP" value={isp} />
      </div>
    </div>
  );
};

export default Infos;
