import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const WITCH = gql`
  query {
    tokens(first: 5) {
      sun
      name
      image
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

  if (loading) return "loading";

  console.log(witches);
  return (
    <div className="App">
      {witches.map((witch) => {
        return (
          <div>
            <h3>{witch.name}</h3>
            <img
              style={{ width: "100px", height: "100px" }}
              src={witch.image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MainPage;
