import React, { useEffect, useState } from "react";
import WitchCard from "./WitchCard";

function PopularWitches({ likedWitches, onLikeOrUnlike, loadingLikedWitches }) {
  const [popularWitches, setPopularWitches] = useState([]);

  useEffect(() => {
    fetch("/witches").then((r) => {
      if (r.ok) {
        r.json().then((witches) => setPopularWitches(witches));
      }
    });
  }, [likedWitches]);

  const popularWitchesList = popularWitches.map((witch) => {
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


  console.log(popularWitches)

  return (
    <div id="my-fav-witches">
      <div id="main-page-title">
        <h2>Most Popular Witches</h2>
      </div>
      <div id="witch-list-container">{popularWitchesList}</div>
    </div>
  );
}

export default PopularWitches;
