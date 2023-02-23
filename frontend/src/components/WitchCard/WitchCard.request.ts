import { WitchType } from "./WitchCard.types";
import React from "react";

export const handleUnlike = (
  e: React.MouseEvent,
  onLikeOrUnlike: (witch: WitchType) => void,
  witchId: number | undefined
) => {
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
};

export const handleLikeClick = (
  e: React.MouseEvent,
  witch: WitchType,
  onLikeOrUnlike: (witch: WitchType) => void
) => {
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
};
