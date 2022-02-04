import React, { FC, useState } from "react";
import { Location } from "../models/Location";
import { GlobalContext } from "./GlobalContext";

export interface IGlobalProviderProps {
  //   defaultLocations: Location[];
}

export const GlobalProvider: FC<IGlobalProviderProps> = ({ children }) => {
  const [locations, setLocations] = useState<Location[]>([]);

  const [selectedLocation, setSelectedLcn] = useState<Location | null>(null);

  const updatedSelectedLocation = (location: Location | null) => {
    setSelectedLcn(location);
  };

  const pushLocation = (location: Location) => {
    setLocations([...locations, location]);
  };

  const updateLocation = (location: Location) => {
    const index = locations.findIndex((lcn) => lcn.id === location.id);
    if (index !== -1) {
      const newLocations = [...locations];
      newLocations[index] = location;
      setLocations(newLocations);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        locations,
        addLocation: pushLocation,
        selectedLocation,
        updatedSelectedLocation,
        updateLocation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
