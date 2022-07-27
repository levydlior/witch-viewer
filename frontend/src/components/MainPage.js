import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import WitchCard from "./WitchCard";

const WITCH = gql`
  query {
    tokens(first: 20) {
      type
      name
      image
      description
      tokenID
      externalURL
    }
  }
`;
function MainPage() {
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
    return <WitchCard witch={witch} key={witch.toeknID} />;
  });

  console.log(witches);

  if (loading) return <></>;

  return (
    <div className="main-page-witches">
      {loading ? <h2>Gathering the witches!</h2> : <>{ witchList }</>}
    </div>
  );
}

export default MainPage;
