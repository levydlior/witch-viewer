import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { WitchDetailsPopUp } from "../WitchDetailsPopUp/WitchDetailsPopUp";
import Heart from "../Heart/Heart";
import { WitchCardDiv } from "./WitchCard.styles";
import { handleUnlike, handleLikeClick } from "./WitchCard.request";
import { WitchCardProps } from "./WitchCard.types";


const WitchCard = (props: WitchCardProps) => {
  const { witch,
    likedWitches,
    onLikeOrUnlike,
    loadingLikedWitches } = props
  const [open, setOpen] = useState(false);

  let witchId: undefined | number = undefined;
  
  const renderLikeOrNot = () => {
    for (let like = 0; like < likedWitches.length; like++) {
      if (likedWitches[like].tokenID === witch.tokenID) {
        witchId = likedWitches[like].id;
        return true;
      }
    }
    return false;
  };

  const handleDivClick = () => {
    setOpen(true);
  };
  const handleOutDivClick = () => {
    setOpen(false);
  };
  return (
    <WitchCardDiv onClick={handleDivClick} data-testid="witchCard">
      {loadingLikedWitches ? (
        <CircularProgress />
      ) : (
        <>
          <div className="image-div-card">
            <img className="witch-img" src={witch.image} alt={witch.name} />
          </div>
          <div>
            <div className="witch-title">
              <h3>{witch.name}</h3>
              <Heart
                renderLikeOrNot={renderLikeOrNot()}
                handleUnlike={(e: React.MouseEvent) => handleUnlike(e, onLikeOrUnlike, witchId)}
                handleLikeClick={(e: React.MouseEvent) =>
                  handleLikeClick(e, witch, onLikeOrUnlike)
                }
              />
            </div>
          </div>
          <WitchDetailsPopUp
            witchToken={witch.tokenID}
            opening={open}
            onClosing={handleOutDivClick}
            renderLikeOrNot={renderLikeOrNot()}
            handleUnlike={(e: React.MouseEvent) => handleUnlike(e, onLikeOrUnlike, witchId)}
            handleLikeClick={(e: React.MouseEvent) => handleLikeClick(e, witch, onLikeOrUnlike)}
          />
        </>
      )}
    </WitchCardDiv>
  );
};

export default WitchCard;
