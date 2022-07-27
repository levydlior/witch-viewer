import React from "react";

function WitchCard({ witch, likedWitches, onLikeOrUnlike }) {
  let witchId = null;

  const renderLikeOrNot = () => {
    for (let like = 0; like < likedWitches.length; like++) {
      if (likedWitches[like].name === witch.name) {
        witchId = likedWitches[like].id;
        return true;
      }
    }
    return false;
  };

  function handleLikeClick() {
    const witchObject = {
      type_of_witch: witch.type,
      name: witch.name,
      image: witch.image,
      description: witch.description,
      tokenID: witch.tokenID,
      externalURL: witch.externalURL,
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
      <h3>{witch.name}</h3>
      <img style={{ width: "100px", height: "100px" }} src={witch.image} />
      {renderLikeOrNot() ? (
        <h3 onClick={handleUnlike}>Unlike!</h3>
      ) : (
        <h3 onClick={handleLikeClick}>like!</h3>
      )}
    </div>
  );
}

export default WitchCard;
