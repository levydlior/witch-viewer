import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";

const WITCHDETAIL = gql`
  {
    tokens(where: { tokenID: "1" }) {
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

export default function WitchDetailsPopUp() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [skip, setSkip] = React.useState(false);

  const [witch, setWitch] = useState(null);

  const { loading, data } = useQuery(WITCHDETAIL, { skip });

  useEffect(() => {
    if (!loading && !!data) {
      setSkip(true);
      setWitch(data.tokens[0]);
    }
  }, [data, loading]);

  console.log(witch);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!witch ? (
            <CircularProgress />
          ) : (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h2>{witch.name}</h2>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <img id="details-image" src={witch.image} alt="Witch Image" />
                <p>{witch.description}</p>
                <p>Owner: {witch.owner.id} </p>
                <a href={witch.externalURL} target="_blank">
                  Link to source
                </a>
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
