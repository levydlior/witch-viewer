import React from "react";
import WitchCard from "../WitchCard/WitchCard";
import {
  MainPageWitchesDiv,
  WitchListContainer,
  MainPageTitleDiv,
} from "../MainPage/MainPage.styles";
import { PopularWitchesProps } from "../PopularWitches/PopularWitches.types";
import { WitchType } from "../WitchCard/WitchCard.types";

const MyLikedWitches = (props: PopularWitchesProps) => {

  const { likedWitches,
    onLikeOrUnlike,
    loadingLikedWitches } = props

  const renderLikedWitchesList = likedWitches.map((witch: WitchType) => {
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
          <> {renderLikedWitchesList} </>
        )}
      </WitchListContainer>
    </MainPageWitchesDiv>
  );
};

export default MyLikedWitches;
