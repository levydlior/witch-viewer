import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Heart({ renderLikeOrNot, handleUnlike, handleLikeClick }) {
  return (
    <>
      {renderLikeOrNot() ? (
        <FavoriteIcon
          className="heart"
          onClick={(e) => handleUnlike(e)}
          data-testid="liked-heart"
        />
      ) : (
        <FavoriteBorderIcon
          className="heart"
          onClick={(e) => handleLikeClick(e)}
        />
      )}
    </>
  );
}

export default Heart;
