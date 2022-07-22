import React from "react";

function Errors({ errors }) {
  const errorlist = errors.map((er) => <p>{er}</p>);

  return <div>{errorlist}</div>;
}

export default Errors;
