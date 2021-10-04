import "./App.css";
import { createContext, useState, useEffect } from "react";
import { Index } from "./components/Index/Index";

export const Context = createContext();

export function App() {
  const [allClasses, setAllClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  // loading the data
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllClasses(data);
        setLoading(false);
      });
  }, []);

  return (
    <Context.Provider value={{ allClasses, loading }}>
      <Index />
    </Context.Provider>
  );
}
