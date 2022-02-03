import React, { FC, useState } from "react";
import { Location } from "../models/Location";
import { GlobalContext } from "./GlobalContext";

export interface IGlobalProviderProps {
  //   defaultLocations: Location[];
}

export const GlobalProvider: FC<IGlobalProviderProps> = ({ children }) => {
  const [locations, setLocation] = useState<Location[]>([]);

  const pushLocation = (location: Location) => {
    setLocation([...locations, location]);
  };

  return (
    <GlobalContext.Provider value={{ locations, addLocation: pushLocation }}>
      {children}
    </GlobalContext.Provider>
  );
};
