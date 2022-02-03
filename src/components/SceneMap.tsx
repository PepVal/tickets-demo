import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CreateLocationForm from "./CreateLocationForm";
import LocationItem from "./LocationItem";
import Matrix from "./Matrix";

const SceneMap = () => {
  const { locations } = useContext(GlobalContext);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex mt-2">
          <h1>Crear mapa del escenario</h1>
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
        </div>
        {showForm && (
          <CreateLocationForm
            onClose={() => {
              setShowForm(false);
            }}
          />
        )}
        {locations.length > 0 && <h6 className="mt-2">locations</h6>}
        <div className="d-flex">
          {locations &&
            locations.map((location, index) => {
              return <LocationItem key={index} location={location} />;
            })}
        </div>
      </div>
      <Matrix />
    </>
  );
};

export default SceneMap;
