export interface WitchDetailsProps {
  witchToken: string;
  opening: boolean;
  onClosing: () => void;
  renderLikeOrNot: boolean;
  handleUnlike: (e: React.MouseEvent) => void;
  handleLikeClick: (e: React.MouseEvent) => void;
}
