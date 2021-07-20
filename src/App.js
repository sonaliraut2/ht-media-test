import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter, routes } from "../src/navigation";

function App() {
  if (typeof window === "undefined") return null;
  return (
    <>
      <Router>
        <AppRouter routes={routes} />
      </Router>
    </>
  );
}

export default App;
