import React from "react";

type Props = {};

const demo2 = (props: Props) => {
  return (
    <div>
      <input type="text" value="text" data-testid="input-text" />
      <br />
      <input type="number" value="5" data-testid="input-number" />
      <br />

      <input type="text" data-testid="input-empty" />
      <br />

      <select multiple data-testid="select-number">
        <option value="first">First Value</option>
        <option value="second" selected>
          Second Value
        </option>
        <option value="third" selected>
          Third Value
        </option>
        <option value="fourth" selected>
          Third Value
        </option>
      </select>
    </div>
  );
};

export default demo2;
