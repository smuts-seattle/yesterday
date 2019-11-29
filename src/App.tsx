import React from "react";
import "./App.css";
import seedRandom from "seedrandom";
import { Yesterday, Today } from "./yesterday";

function App() {
  const isTodayYesterday =
    seedRandom(new Date().getDate().toString()).int32() % 2;

  return isTodayYesterday === 1 ? <Yesterday /> : <Today />;
}

export default App;
