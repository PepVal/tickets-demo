import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Location } from "../models/Location";

interface ILocationProps {
  location: Location;
}

const LocationItem = ({ location }: ILocationProps) => {
  const { updatedSelectedLocation, selectedLocation } =
    useContext(GlobalContext);

  const handleMatrix = () => {
    updatedSelectedLocation(location);
  };

  const selected = selectedLocation && selectedLocation.id === location.id;

  return (
    <div
      className="card"
      style={{ width: "18rem", margin: "0px 8px 0px 0px" }}
      onClick={handleMatrix}
    >
      <div
        className="card-header"
        style={{ backgroundColor: selected ? "#ccc" : "#fafafa" }}
      >
        <p className="bold">{location.name}</p>
      </div>
      <div className="card-body">
        <h5 className="card-title">{`Precio por asiento: $${location.price}`}</h5>
        <p className="card-text">
          Solo se pueden comprar 6 asientos por usuario.
        </p>
      </div>
    </div>
  );
};

export default LocationItem;
