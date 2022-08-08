import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import WitchDetailsPopUp from "./WitchDetailsPopUp";
import Heart from "./Heart";

function WitchCard({
  witch,
  likedWitches,
  onLikeOrUnlike,
  loadingLikedWitches,
}) {
  const [open, setOpen] = useState(false);

  let witchId = null;
  const renderLikeOrNot = () => {
    for (let like = 0; like < likedWitches.length; like++) {
      if (likedWitches[like].tokenID === witch.tokenID) {
        witchId = likedWitches[like].id;
        return true;
      }
    }
    return false;
  };

  function handleLikeClick(e) {
    e.stopPropagation();
    const witchObject = {
      name: witch.name,
      image: witch.image,
      tokenID: witch.tokenID,
    };

    fetch("/likes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(witchObject),
    }).then((r) => {
      if (r.ok) {
        r.json().then((likedWitch) => onLikeOrUnlike(likedWitch));
      }
    });
  }

  renderLikeOrNot();

  function handleUnlike(e) {
    e.stopPropagation();
    fetch(`/likes/${witchId}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        r.json().then((witch) => {
          onLikeOrUnlike(witch);
        });
      }
    });
  }

  function handleDivClick() {
    setOpen(true);
  }
  function handleOutDivClick() {
    setOpen(false);
  }
  return (
    <div className="witch-card" onClick={handleDivClick}>
      {loadingLikedWitches ? (
        <CircularProgress />
      ) : (
        <>
          <div className="witch-title">
            <h3>{witch.name}</h3>
          </div>
          <img style={{ width: "100px", height: "100px" }} src={witch.image} />
          <div className="heart-card">
            <Heart
              renderLikeOrNot={renderLikeOrNot}
              handleUnlike={handleUnlike}
              handleLikeClick={handleLikeClick}
            />
          </div>
          <WitchDetailsPopUp
            witchToken={witch.tokenID}
            opening={open}
            onClosing={handleOutDivClick}
            renderLikeOrNot={renderLikeOrNot}
            handleUnlike={handleUnlike}
            handleLikeClick={handleLikeClick}
          />
        </>
      )}
    </div>
  );
}

export default WitchCard;
