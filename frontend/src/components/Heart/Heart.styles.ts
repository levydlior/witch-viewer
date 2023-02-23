import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const LikedHeart = styled(FavoriteIcon)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const EmptyHeart = styled(FavoriteBorderIcon)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
