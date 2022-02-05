import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "../routes/AppRoutes";
import { GlobalProvider } from "../context/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <AppRoutes />
      </Router>
    </GlobalProvider>
  );
}

export default App;
