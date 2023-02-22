import React from "react";
import { HeartProps } from "./Heart.types";
import { EmptyHeart, LikedHeart } from "./Heart.styles";

const Heart = (props: HeartProps) => {
  const { renderLikeOrNot, handleUnlike, handleLikeClick } = props
  return (
    <>
      {renderLikeOrNot ? (
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
