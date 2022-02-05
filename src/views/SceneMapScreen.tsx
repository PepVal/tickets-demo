import { Link } from "react-router-dom";
import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";
import LocationSceneItem, { SceneItem } from "../components/LocationSceneItem";

const SceneMapScreen = () => {
  const { locations, scene } = useContext(GlobalContext);

  return (
    <div className="container-fluid">
      <div className="d-flex mt-2">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "8px",
          }}
        >
          <Link className="btn btn-secondary" to="/">
            Atrás
          </Link>
        </div>
        <h1>Mapa del lugar</h1>
      </div>
      <div style={{ width: "100%", height: "90vh", position: "relative" }}>
        <SceneItem location={scene} />
        {locations &&
          locations.map((location, index) => {
            return <LocationSceneItem key={location.id} location={location} />;
          })}
      </div>
    </div>
  );
};

export default SceneMapScreen;
