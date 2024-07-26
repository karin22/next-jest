import React from "react";

type Props = {};

const demo = (props: Props) => {
  return (
    <>
      <h1>Demo</h1>
      <button data-testid="buttonSubmit" type="submit" disabled>
        submit
      </button>
      <fieldset disabled>
        <input type="text" data-testid="input" />
      </fieldset>
      <a href="...">link</a>
    </>
  );
};

export default demo;
