import React from "react";
import SceneMap from "../components/SceneMap";

import Sidebar from "../components/Sidebar";

const TicketScreen = () => {
  return (
    <div className="full-width">
      <div className="scene-container">
        <SceneMap />
      </div>
      <div className="sidebar-container">
        <Sidebar />
      </div>
    </div>
  );
};

export default TicketScreen;
