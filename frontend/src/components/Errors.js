import React from "react";

function Errors( {errors} ) {
  const errorList = errors.map((error) => {
    return <p>{error.error}</p>;
  });
  return <div>{errorList}</div>;
}

export default Errors;
