import { createContext } from "react";
import { Location } from "../models/Location";

interface IGlobalContextValues {
  locations: Location[];
  addLocation: (location: Location) => void;
}

export const GlobalContext = createContext<IGlobalContextValues>({
  locations: [],
  addLocation: () => {},
});
