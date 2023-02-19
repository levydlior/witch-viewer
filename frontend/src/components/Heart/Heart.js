import React from "react";

import { EmptyHeart, LikedHeart } from "./Heart.styles";

const Heart = ({ renderLikeOrNot, handleUnlike, handleLikeClick }) => {
  return (
    <>
      {renderLikeOrNot() ? (
        <LikedHeart
          onClick={(e) => handleUnlike(e)}
          data-testid="liked-heart"
        />
      ) : (
        <EmptyHeart className="heart" onClick={(e) => handleLikeClick(e)} />
      )}
    </>
  );
};

export default Heart;
