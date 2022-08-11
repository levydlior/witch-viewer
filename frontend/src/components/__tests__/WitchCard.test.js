import {
  render,
  screen,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import WitchCard from "../WitchCard";
import { gql } from "@apollo/client";



const witchToken = 1
const WITCHDETAIL = gql`
  {
    tokens(where: { tokenID: "${witchToken}" }) {
      name
      image
      tokenID
      description
      externalURL
      owner {
        id
      }
    }
  }
`;


const mocks = [
  {
    request: {
      query: WITCHDETAIL,
      variables: {
        tokenID: 1
      }
    },
    result: {
      data: {
        witch: {tokenID: "1", name: "nyx", image: "test"}
      }
    }
  }
]

const witch =[ {
  name: 'nyx',
  tokenID: '1',
  image: 'test'
}]

const likedWitches = [{},{}]

test("renders without error", async() => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
          <WitchCard witch={witch} likedWitches={likedWitches} />
    </MockedProvider>
  )
  expect(await screen.findByText('Loading...').toBeInTheDocument)
})


