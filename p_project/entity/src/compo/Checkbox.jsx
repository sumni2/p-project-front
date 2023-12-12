import React from "react";
import CheckboxContext from "./CheckboxContext";

function Checkbox({ children, value, checked }) {
  const context = React.useContext(CheckboxContext);

  if (!context) {
    return (
      <label>
        <input
          type="checkbox"
          checked={checked}
        />
        {children}
      </label>
    );
  }

  const { isChecked } = context;

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked(value)}
      />
      {children}
    </label>
  );
}

export default Checkbox;