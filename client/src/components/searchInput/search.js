import React from "react";

function Input(props) {
  return (
    <input
      value={props.result}
      onChange={props.handleInput}
      className="input is-primary"
      type="text"
      placeholder="Primary input"
    />
  );
}

export default Input;
