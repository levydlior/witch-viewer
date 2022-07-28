import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import WitchCard from "./WitchCard";

const WITCH = gql`
  query {
    tokens(first: 10) {
      type
      name
      image
      description
      tokenID
      externalURL
    }
  }
`;

function MainPage({ likedWitches, onLikeOrUnlike, loadingLikedWitches }) {
  const [witches, setWitches] = useState([]);
  const [skip, setSkip] = React.useState(false);

  const { loading, data } = useQuery(WITCH, { skip });

  useEffect(() => {
    // check whether data exists
    if (!loading && !!data) {
      setSkip(true);
      setWitches(data.tokens);
    }
  }, [data, loading]);

  const witchList = witches.map((witch) => {
    return (
      <WitchCard
        witch={witch}
        key={witch.name}
        likedWitches={likedWitches}
        onLikeOrUnlike={onLikeOrUnlike}
        loadingLikedWitches={loadingLikedWitches}
      />
    );
  });

  return (
    <div className="main-page-witches">
      {loading ? <h2>Gathering the witches!</h2> : <>{witchList}</>}
    </div>
  );
}

export default MainPage;
