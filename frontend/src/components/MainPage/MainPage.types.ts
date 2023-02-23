import { WitchType } from "../WitchCard/WitchCard.types";

export interface MainPageProps {
    likedWitches: WitchType[];
    onLikeOrUnlike: (witch: WitchType) => void;
    loadingLikedWitches: boolean
}