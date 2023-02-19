import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { useQuery, gql } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import Heart from "../Heart/Heart";
import {
  style,
  PopUpDetailsImage,
  LinksToSource,
} from "./WitchDetailsPopUp.styles.js";

export const WitchDetailsPopUp = ({
  witchToken,
  opening,
  onClosing,
  renderLikeOrNot,
  handleUnlike,
  handleLikeClick,
}) => {
  const WITCHDETAILQUERY = gql`
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

  const handleClose = (e) => {
    e.stopPropagation();
    onClosing(e);
  };

  const { loading, data } = useQuery(WITCHDETAILQUERY);

  let witch = [];

  if (!loading && data) {
    witch = data.tokens[0];
  }

  return (
    <div>
      <Modal
        open={opening}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="targetDetail">
          {!witch ? (
            <CircularProgress />
          ) : (
            <>
              <Heart
                renderLikeOrNot={renderLikeOrNot}
                handleUnlike={handleUnlike}
                handleLikeClick={handleLikeClick}
              />
              <h2>{witch.name}</h2>
              <PopUpDetailsImage src={witch.image} alt="Witch Image" />
              <p>{witch.description}</p>
              <LinksToSource>
                <a
                  href={`https://opensea.io/assets/ethereum/0x5180db8f5c931aae63c74266b211f580155ecac8/${witch.tokenID}`}
                  target="_blank"
                >
                  I want to buy it!
                </a>
              </LinksToSource>
              <a href={witch.externalURL} target="_blank">
                Link to source
              </a>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};
