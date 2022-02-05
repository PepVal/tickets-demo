import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import CreateLocationForm from "./CreateLocationForm";
import LocationItem from "./LocationItem";
import Matrix from "./Matrix";

const CustomLocations = () => {
  const { locations, selectedLocation } = useContext(GlobalContext);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex mt-2">
          <h1>Entradas</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "8px",
            }}
          >
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                setShowForm(true);
              }}
            >
              Crear locación
            </button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "8px",
            }}
          >
            <Link className="btn btn-secondary" to="/scene-map">
              Editar mapa
            </Link>
          </div>
        </div>
        {showForm && (
          <CreateLocationForm
            onClose={() => {
              setShowForm(false);
            }}
          />
        )}
        {locations.length > 0 && <h5 className="mt-2">Locaciones</h5>}
        <div className="d-flex">
          {locations &&
            locations.map((location, index) => {
              return <LocationItem key={index} location={location} />;
            })}
        </div>
      </div>
      <div className="container-fluid mt-2">
        <div
          style={{
            overflowX: "auto",
            maxWidth: "75vw",
            width: "100%",
          }}
        >
          {selectedLocation && <Matrix location={selectedLocation} />}
        </div>
      </div>
    </>
  );
};

export default CustomLocations;
