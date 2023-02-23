import { gql } from "@apollo/client";

export const WITCHQUERY = gql`
  query Token($first: Int!, $skip: Int) {
    tokens(first: $first, skip: $skip) {
      name
      image
      tokenID
    }
  }
`;

interface TokensData {
  tokens: {
    name: string;
    image: string;
    tokenID: number;
  }[];
}

export const fetchMoreWitches = (
  fetchMore: (arg0: {
    variables: { first: number; skip: number };
    updateQuery: (
      previousRustles: TokensData,
      fetchMoreResults: any
    ) => TokensData;
  }) => void,
  data: { tokens: string }
) => {
  fetchMore({
    variables: {
      first: 36,
      skip: data.tokens.length,
    },
    updateQuery: (previousRustles, fetchMoreResults) => {
      if (!fetchMoreResults) {
        return previousRustles;
      }
      return {
        tokens: [
          ...previousRustles.tokens,
          ...fetchMoreResults.fetchMoreResult.tokens,
        ],
      };
    },
  });
};
