import {  gql } from "@apollo/client";

export const WITCHQUERY = gql`
  query Token($first: Int!, $skip: Int) {
    tokens(first: $first, skip: $skip) {
      name
      image
      tokenID
    }
  }
`;

export const fetchMoreWitches = (fetchMore, data) => {
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