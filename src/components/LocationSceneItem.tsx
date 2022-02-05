import React, { useContext } from "react";
import Draggable, { DraggableEventHandler } from "react-draggable";
import { GlobalContext } from "../context/GlobalContext";
import { Location } from "../models/Location";

interface ILocationSceneProps {
  location: Location;
}

const LocationSceneItem = ({ location }: ILocationSceneProps) => {
  const { updateLocation } = useContext(GlobalContext);

  const handleDrag: DraggableEventHandler = (e, position) => {
    const { x, y } = position;
    updateLocation({ ...location, posX: x, posY: y });
  };

  return (
    <Draggable
      bounds="parent"
      position={{ x: location.posX, y: location.posY }}
      onDrag={handleDrag}
      scale={1}
    >
      <div className="matrix-idle" style={{ cursor: "move" }}>
        <p className="bold text-center user-select-none">{location.name}</p>
        <p className="bold text-center user-select-none">
          {`Num asientos: ${location.rows * location.columns}`}
        </p>
      </div>
    </Draggable>
  );
};

export const SceneItem = ({ location }: ILocationSceneProps) => {
  const { updateScene } = useContext(GlobalContext);

  const handleDrag: DraggableEventHandler = (e, position) => {
    const { x, y } = position;
    updateScene({ ...location, posX: x, posY: y });
  };

  return (
    <Draggable
      bounds="parent"
      position={{ x: location.posX, y: location.posY }}
      onDrag={handleDrag}
      scale={1}
    >
      <div className="scene-item">
        <p className="bold text-center user-select-none">{location.name}</p>
      </div>
    </Draggable>
  );
};

export default LocationSceneItem;
