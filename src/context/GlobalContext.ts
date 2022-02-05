import { createContext } from "react";
import { Location } from "../models/Location";

interface IGlobalContextValues {
  locations: Location[];
  addLocation: (location: Location) => void;
  updateLocation: (location: Location) => void;
  selectedLocation: Location | null;
  updatedSelectedLocation: (location: Location | null) => void;
  scene: Location;
  updateScene: (scene: Location) => void;
}

export const GlobalContext = createContext<IGlobalContextValues>({
  locations: [],
  addLocation: () => {},
  updateLocation: () => {},
  selectedLocation: null,
  updatedSelectedLocation: () => {},
  scene: new Location(),
  updateScene: () => {},
});
