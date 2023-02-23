import React from "react";
import { useQuery } from "@apollo/client";
import WitchCard from "../WitchCard/WitchCard";
import { Waypoint } from "react-waypoint";
import { WITCHQUERY, fetchMoreWitches } from "./MainPage.request";
import {
  MainPageTitleDiv,
  MainPageWitchesDiv,
  WitchListContainer,
  LoadingProgress,
} from "./MainPage.styles";
import { MainPageProps } from "./MainPage.types";
import { WitchType } from "../WitchCard/WitchCard.types";

const MainPage = (props: MainPageProps) => {
  const { loading, data, fetchMore } = useQuery(WITCHQUERY, {
    variables: { first: 36 },
  });

  if (loading)
    return (
      <div className="main-page-witches">
        <div id="main-page-title">
          <h2>Gathering the witches!</h2>
          <LoadingProgress />
        </div>
      </div>
    );

  const { likedWitches, onLikeOrUnlike, loadingLikedWitches } = props

  const renderWitchList = data.tokens.map((witch: WitchType, item: number) => {
    return (
      <React.Fragment key={witch.tokenID}>
        {item === data.tokens.length - 1 && (
          <Waypoint onEnter={() => fetchMoreWitches(fetchMore, data)} />
        )}
        <WitchCard
          witch={witch}
          likedWitches={likedWitches}
          onLikeOrUnlike={onLikeOrUnlike}
          loadingLikedWitches={loadingLikedWitches}
        />
      </React.Fragment>
    );
  });

  return (
    <MainPageWitchesDiv>
      <MainPageTitleDiv>
        <h2>The Witches</h2>
      </MainPageTitleDiv>
      <WitchListContainer>{renderWitchList}</WitchListContainer>
    </MainPageWitchesDiv>
  );
};

export default MainPage;
