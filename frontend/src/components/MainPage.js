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
  const [witches, setWitches] = useState([]);

  const { loading, data, fetchMore } = useQuery(WITCH, {
    variables: { first: 36 },
  });
  useEffect(() => {
    if (!loading && !!data) {
      setWitches(data.tokens);
    }
  }, [data, loading]);

  if (loading) return <CircularProgress />;

  const witchList = data.tokens.map((witch, item) => {
    return (
      <React.Fragment key={witch.tokenID}>
        {item === witches.length - 1 && (
          <Waypoint
            onEnter={() =>
              fetchMore({
                variables: {
                  first: 36,
                  skip: witches.length,
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
      {loading ? <h2>Gathering the witches!</h2> : <>{witchList}</>}
    </div>
  );
}

export default MainPage;
