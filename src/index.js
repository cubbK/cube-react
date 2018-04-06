import React from "react";
import { render } from "react-dom";
import Cube from "./components/Cube";

const App = () => (
  <div>
    <Cube color="blue" />
  </div>
);

render(<App />, document.getElementById("root"));
