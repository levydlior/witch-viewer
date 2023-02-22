export type WitchType = {
  name: string;
  tokenID: string;
  image: string;
  id?: number;
};

export interface WitchCardProps {
  witch: WitchType;
  likedWitches: WitchType[];
  onLikeOrUnlike: (witch: WitchType) => void;
  loadingLikedWitches: boolean;
}
