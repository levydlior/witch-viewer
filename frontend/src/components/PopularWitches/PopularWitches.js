import React, { useEffect, useState } from "react";
import WitchCard from "../WitchCard/WitchCard";
import {
  MainPageWitchesDiv,
  WitchListContainer,
  MainPageTitleDiv,
} from "../MainPage/MainPage.styles";
import { FetchPopularWitches } from "./PopularWitches.requests";

const PopularWitches = ({
  likedWitches,
  onLikeOrUnlike,
  loadingLikedWitches,
}) => {
  const [popularWitches, setPopularWitches] = useState([]);

  useEffect(() => {
    FetchPopularWitches(setPopularWitches);
  }, [likedWitches]);

  const popularWitchesList = popularWitches.map((witch) => {
    if (witch.number_of_likes >= 5) {
      return (
        <WitchCard
          witch={witch}
          likedWitches={likedWitches}
          onLikeOrUnlike={onLikeOrUnlike}
          loadingLikedWitches={loadingLikedWitches}
          key={witch.tokenID}
        />
      );
    }
  });

  return (
    <MainPageWitchesDiv>
      <MainPageTitleDiv>
        <h2>Most Popular Witches</h2>
      </MainPageTitleDiv>
      <WitchListContainer>{popularWitchesList}</WitchListContainer>
    </MainPageWitchesDiv>
  );
};

export default PopularWitches;
