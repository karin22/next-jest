import React from "react";

type Props = {};

const demo3 = (props: Props) => {
  const items = [1, 2, 3, 4];
  return (
    <>
      {items.map((x) => (
        <div key={x} data-testid="item">
          {x}
        </div>
      ))}
    </>
  );
};

export default demo3;
