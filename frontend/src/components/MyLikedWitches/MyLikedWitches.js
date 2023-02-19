import React from "react";
import WitchCard from "../WitchCard/WitchCard";
import {
  MainPageWitchesDiv,
  WitchListContainer,
  MainPageTitleDiv,
} from "../MainPage/MainPage.styles";

const MyLikedWitches = ({
  likedWitches,
  onLikeOrUnlike,
  loadingLikedWitches,
}) => {
  const likedWitchesList = likedWitches.map((witch) => {
    return (
      <WitchCard
        witch={witch}
        likedWitches={likedWitches}
        onLikeOrUnlike={onLikeOrUnlike}
        loadingLikedWitches={loadingLikedWitches}
        key={witch.tokenID}
        data-testid="witchCard"
      />
    );
  });

  return (
    <MainPageWitchesDiv>
      <MainPageTitleDiv>
        <h2>My Favorite Witches</h2>
      </MainPageTitleDiv>
      <WitchListContainer>
        {likedWitches.length === 0 ? (
          <h3>You don't have any favorite witches yet</h3>
        ) : (
          <> {likedWitchesList} </>
        )}
      </WitchListContainer>
    </MainPageWitchesDiv>
  );
};

export default MyLikedWitches;
