import { WitchType } from "../WitchCard/WitchCard.types";

export interface MainPageProps {
    likedWitches: WitchType[];
    onLikeOrUnlike: (witch: WitchType) => void;
    loadingLikedWitches: boolean
}

export interface TokensData {
    tokens: {
      name: string;
      image: string;
      tokenID: number;
    }[];
  }
  