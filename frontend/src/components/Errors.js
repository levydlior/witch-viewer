import React from "react";

const Errors = ({ errors }) => {
  const errorList = errors.map((er) => <p>{er}</p>);

  return <div>{errorList}</div>;
}

export default Errors;
