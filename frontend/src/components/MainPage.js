import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import WitchCard from "./WitchCard";

const WITCH = gql`
  query {
    tokens(first: 5) {
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

  if (loading)
    return (
      <>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db0b76b4-0d59-4a93-9385-4b798b55e81c/ddvmr2p-4953f092-d0bd-49a3-95c0-af632d2acfc0.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiMGI3NmI0LTBkNTktNGE5My05Mzg1LTRiNzk4YjU1ZTgxY1wvZGR2bXIycC00OTUzZjA5Mi1kMGJkLTQ5YTMtOTVjMC1hZjYzMmQyYWNmYzAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6dCKx2Z7afnk1dbKnuuFXfPAiKIgKEZ1OCXDbdYIjcM"
          alt="flying broom"
        />
        <h2>Gathering the witches!</h2>
      </>
    );

  return <div className="App">{witchList}</div>;
}

export default MainPage;
