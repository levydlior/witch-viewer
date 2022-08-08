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
console.log(popularWitches)
  const popularWitchesList = popularWitches.map((witch) => {
    if (witch.number_of_likes >= 5){

    return (
      <WitchCard
        witch={witch}
        likedWitches={likedWitches}
        onLikeOrUnlike={onLikeOrUnlike}
        loadingLikedWitches={loadingLikedWitches}
        key={witch.tokenID}
        numberOfLikes={witch.number_of_likes}
      />
    )      
  };
  });

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
