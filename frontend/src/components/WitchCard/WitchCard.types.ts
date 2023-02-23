export type WitchType = {
  number_of_likes: number;
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
