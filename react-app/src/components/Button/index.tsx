import React from "react";
// @ts-ignore
import { colors } from 'custom_tokens/Colors';
// @ts-ignore
import { space } from 'custom_tokens/Space';

import "./index.css";

console.log('space', space);

const Button = () => (
  <button
    className="reactButton"
    type="button"
    style={{
      background: colors.primary,
      padding: `${space.xs} ${space.s}`,
    }}
  >
    <span>React Button</span>
  </button>
);

export { Button }