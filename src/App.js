import "./App.css";
import { createContext, useState, useEffect } from "react";
import { Index } from "./components/Index/Index";

export const Context = createContext();

export function App() {
  const [classes, setClasses] = useState([]);

  // loading the data
  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <Context.Provider value={classes}>
      <Index />;
    </Context.Provider>
  );
}
