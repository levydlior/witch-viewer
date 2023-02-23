import React, { useEffect, useState } from "react";
import WitchCard from "../WitchCard/WitchCard";
import {
  MainPageWitchesDiv,
  WitchListContainer,
  MainPageTitleDiv,
} from "../MainPage/MainPage.styles";
import { FetchPopularWitches } from "./PopularWitches.request";
import { PopularWitchesProps } from "./PopularWitches.types";
import { WitchType } from "../WitchCard/WitchCard.types";

const PopularWitches = (
  props: PopularWitchesProps
) => {
  const { likedWitches,
    onLikeOrUnlike,
    loadingLikedWitches } = props

  const [popularWitchesList, setPopularWitchesList] = useState<WitchType[]>([]);

  useEffect(() => {
    FetchPopularWitches(setPopularWitchesList);
  }, [likedWitches]);

  const renderPopularWitchesListList = popularWitchesList.map((witch: WitchType) => {
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
      <WitchListContainer>{renderPopularWitchesListList}</WitchListContainer>
    </MainPageWitchesDiv>
  );
};

export default PopularWitches;
