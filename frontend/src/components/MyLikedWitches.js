import React from "react";
import WitchCard from "./WitchCard";

function MyLikedWitches({ likedWitches, onLikeOrUnlike, loadingLikedWitches }) {
  const likedWitchesList = likedWitches.map((witch) => {
    return (
      <WitchCard
        witch={witch}
        likedWitches={likedWitches}
        onLikeOrUnlike={onLikeOrUnlike}
        loadingLikedWitches={loadingLikedWitches}
        key={witch.tokenID}
      />
    );
  });

  return (
    <div className="main-page-witches">
      <div id="main-page-title">
        <h2>My Favorite Witches</h2>
      </div>
      <div id="witch-list-container">
      {likedWitches.length === 0? <h3>You don't have any favorite witches yet</h3> :  <> {likedWitchesList}</>}
      </div>
    </div>
  );
}

export default MyLikedWitches;
