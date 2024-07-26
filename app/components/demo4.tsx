"use client";
import React, { useState } from "react";

type Props = {};

const demo4 = (props: Props) => {
  const [item, setItem] = useState<number[]>([]);
  return (
    <>
      <button
        type="button"
        data-testid="button"
        onClick={() => {
          setItem([1, 2]);
        }}
      >
        Submit
      </button>

      <button
        type="button"
        data-testid="buttonReset"
        onClick={() => {
          setItem([]);
        }}
      >
        Reset
      </button>

      <ul>
        {item.map((x) => (
          <li key={x} data-testid="li">
            {x}
          </li>
        ))}
      </ul>
    </>
  );
};

export default demo4;
