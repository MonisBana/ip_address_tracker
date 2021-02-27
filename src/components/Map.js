import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import img from "../assets/images/icon-location.svg";

const Maps = ({ lat, lon }) => {
  const [map, setMap] = useState();
  const position = [Number(lat), Number(lon)];
  useEffect(() => {
    if (map && lat) {
      map.flyTo([lat, lon], 13, { animate: true, duration: 1.5 });
    }
  }, [lat, lon]);
  return (
    <MapContainer
      center={position}
      zoom={13}
      whenCreated={(map) => setMap(map)}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{ height: "66vh", width: "100%", zIndex: "-1" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={L.icon({
          iconUrl: img,
        })}
      ></Marker>
    </MapContainer>
  );
};

export default Maps;
