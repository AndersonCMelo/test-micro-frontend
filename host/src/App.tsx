import React from "react";
import ReactDOM from "react-dom";

// @ts-ignore
import { App as ReactApp } from "react_app/ReactComponents";
// @ts-ignore
import { Button as ReactButton } from "react_app/ReactButton";

import AngularModule from "./modules/AngularModule";

import "./index.css";

const App = () => (
  <div className="container">
    <h1>Host</h1>
    <p>Framework: react</p>

    <div className="components">
      <div className="componentBox">
        <h2>Componentes do React</h2>
        {/* <ReactApp /> */}
        <ReactButton />
      </div>

      <div className="componentBox">
        <h2>Componentes do Angular</h2>
        <p>Aqui estou importando os 2 botões isolados, cada um é um componente diferente</p>

        <AngularModule />
      </div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
