import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch></Switch>
    </Router>
  );
}

export default App;
