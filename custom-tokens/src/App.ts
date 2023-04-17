import "./index.css";

import { colors } from './colors'

/* document.getElementById("app").innerHTML = `
<div class="container">
  <div>Name: custom-tokens</div>
  <div>Framework: vanilla</div>
  <div>Language: TypeScript</div>
  <div>CSS: Empty CSS</div>
</div>
`; */

const App = `
  <div class="container">
    <div>Name: custom-tokens</div>
    <p style="background: ${colors.primary}; color: ${colors.white};">${colors.primary}</p>
    <p style="background: ${colors.secundary}; color: ${colors.white};">${colors.secundary}</p>
  </div>
`;

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById("app");

  if (el) {
    el.innerHTML = App
  }
}

// export * from './colors'