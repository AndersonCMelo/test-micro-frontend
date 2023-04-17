import React from "react";
import ReactDOM from "react-dom";

import { Button } from "./components/Button";

import "./index.css";

const App = () => (
  <div className="container">
    <h1>React components</h1>

    <Button />
  </div>
);

if (process.env.NODE_ENV === "development") {
  const rootNode = document.getElementById("app");

  if (rootNode) {
    ReactDOM.render(<App />, rootNode);
  }
}

export { App }
