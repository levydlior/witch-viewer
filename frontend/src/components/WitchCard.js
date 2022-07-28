import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircularProgress from '@mui/material/CircularProgress';


function WitchCard({
  witch,
  likedWitches,
  onLikeOrUnlike,
  loadingLikedWitches,
}) {
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

  function handleLikeClick() {
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


  function handleUnlike() {
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

  return (
    <div className="witch-card">
      {loadingLikedWitches ? (
         <CircularProgress />
      ) : (
        <>
          <h3>{witch.name}</h3>
          <img style={{ width: "100px", height: "100px" }} src={witch.image} />
          {renderLikeOrNot() ? (
            <FavoriteIcon onClick={handleUnlike} />
          ) : (
            <FavoriteBorderIcon onClick={handleLikeClick} />
          )}
        </>
      )}
    </div>
  );
}

export default WitchCard;
