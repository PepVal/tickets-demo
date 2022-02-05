import React from "react";
import CustomLocations from "../components/CustomLocations";

import Sidebar from "../components/Sidebar";

const TicketScreen = () => {
  return (
    <div className="full-width">
      <div className="scene-container">
        <CustomLocations />
      </div>
      <div className="sidebar-container">
        <Sidebar />
      </div>
    </div>
  );
};

export default TicketScreen;
