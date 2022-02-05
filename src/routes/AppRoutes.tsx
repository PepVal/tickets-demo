import React from "react";
import { Routes, Route } from "react-router-dom";

import SceneMapScreen from "../views/SceneMapScreen";
import TicketScreen from "../views/TicketScreen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TicketScreen />} />
      <Route path="/scene-map" element={<SceneMapScreen />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default AppRoutes;
