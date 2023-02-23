import { WitchType } from "../WitchCard/WitchCard.types";

export interface PopularWitchesProps {
  likedWitches: WitchType[];
  onLikeOrUnlike: (witch: WitchType) => void;
  loadingLikedWitches: boolean;
}
