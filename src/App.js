import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Infos from "./components/Info";
import Maps from "./components/Map";

function App() {
  const [inputIP, setInputIP] = useState("");
  const [ip, setIP] = useState(null);
  const [location, setLocation] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [isp, setISP] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  async function fetchData() {
    const result = await fetch(
      inputIP
        ? `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${inputIP}`
        : `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const res = await result.json();
    setIP(res.ip);
    setLocation(res.location.city);
    setTimezone("UTC " + res.location.timezone);
    setISP(res.isp);
    setLat(res.location.lat);
    setLon(res.location.lng);
  }
  useEffect(() => {
    fetchData();
  }, []);
  function IpHandler(e) {
    setInputIP(e.target.value);
  }
  function getInfo() {
    fetchData();
  }
  return (
    <div>
      <Header
        className="h-1/3"
        inputIP={inputIP}
        IpHandler={IpHandler}
        getInfo={getInfo}
      />
      <Infos ip={ip} location={location} timezone={timezone} isp={isp} />
      {lat !== null && lon !== null ? <Maps lat={lat} lon={lon} /> : null}
    </div>
  );
}

export default App;
