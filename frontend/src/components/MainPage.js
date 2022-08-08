import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import WitchCard from "./WitchCard";
import { Waypoint } from "react-waypoint";
import CircularProgress from "@mui/material/CircularProgress";

const WITCH = gql`
  query Token($first: Int!, $skip: Int) {
    tokens(first: $first, skip: $skip) {
      name
      image
      tokenID
    }
  }
`;

function MainPage({ likedWitches, onLikeOrUnlike, loadingLikedWitches }) {
  const { loading, data, fetchMore } = useQuery(WITCH, {
    variables: { first: 36 },
  });

  if (loading)
    return (
      <div className="main-page-witches">
        <div id="main-page-title">
          <h2>Gathering the witches!</h2> <CircularProgress sx={{marginTop: "0.5rem"}}/>
        </div>
      </div>
    );

  const witchList = data.tokens.map((witch, item) => {
    return (
      <React.Fragment key={witch.tokenID}>
        {item === data.tokens.length - 1 && (
          <Waypoint
            onEnter={() =>
              fetchMore({
                variables: {
                  first: 36,
                  skip: data.tokens.length,
                },
                updateQuery: (pv, fetchMoreResults) => {
                  if (!fetchMoreResults) {
                    return pv;
                  }
                  return {
                    tokens: [
                      ...pv.tokens,
                      ...fetchMoreResults.fetchMoreResult.tokens,
                    ],
                  };
                },
              })
            }
          />
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
    <div className="main-page-witches">
      <div id="main-page-title">
        <h2>The Witches</h2>
      </div>
      <div id="witch-list-container">
        {loading ? <h2>Gathering the witches!</h2> : <>{witchList}</>}
      </div>
    </div>
  );
}

export default MainPage;
