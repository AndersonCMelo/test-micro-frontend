import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const mount = (el) => {
    /* ReactDOM.render(<React.StrictMode>
        <App />
      </React.StrictMode>, el); */
    // ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
    const rootNode = document.querySelector("#root");
    if (rootNode) {
        mount(rootNode);
    }
}

export { mount };
