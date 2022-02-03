import React from "react";
import { GlobalProvider } from "../context/GlobalProvider";
import TicketScreen from "../views/TicketScreen";

function App() {
  return (
    <GlobalProvider>
      <TicketScreen />
    </GlobalProvider>
  );
}

export default App;
