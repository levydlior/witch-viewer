import React from "react";

function WitchCard({ witch }) {
  return (
    <div className="witch-card">
      <h3>{witch.name}</h3>
      <img style={{ width: "100px", height: "100px" }} src={witch.image} />
    </div>
  );
}

export default WitchCard;
