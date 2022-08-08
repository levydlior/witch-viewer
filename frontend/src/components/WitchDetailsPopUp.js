import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import Heart from "./Heart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function WitchDetailsPopUp({
  witchToken,
  opening,
  onClosing,
  renderLikeOrNot,
  handleUnlike,
  handleLikeClick,
}) {
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

  const handleClose = (e) => {
    e.stopPropagation();
    onClosing(e);
  };

  const [skip, setSkip] = React.useState(false);
  const [witch, setWitch] = useState(null);
  const { loading, data } = useQuery(WITCHDETAIL, { skip });

  useEffect(() => {
    if (!loading && !!data) {
      setSkip(true);
      setWitch(data.tokens[0]);
    }
  }, [data, loading]);

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
              <img id="details-image" src={witch.image} alt="Witch Image" />
              <p>{witch.description}</p>
              <div id="owner">
              <a href={`https://opensea.io/assets/ethereum/0x5180db8f5c931aae63c74266b211f580155ecac8/${witch.tokenID}`} target="_blank" >I want to buy it!</a>
              {/* <p> Owner: {witch.owner.id} </p> */}
              </div>
              <a href={witch.externalURL} target="_blank">
                Link to source
              </a>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
