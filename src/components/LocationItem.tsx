import React from "react";
import { Location } from "../models/Location";

interface ILocationProps {
  location: Location;
}

const LocationItem = ({ location }: ILocationProps) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-header">{location.name}</div>
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
