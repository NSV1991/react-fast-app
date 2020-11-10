import React from "react";

export const Example = ({ time, onChange }) => {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <label htmlFor="example">Demo Data</label>
      <br />
      <input
        id="example"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <p>
        {value ? `${value} change is slow by ${time} time.` : "Enter a value"}
      </p>
    </div>
  );
};
