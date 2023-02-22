import React from "react";

export interface HeartProps {
  renderLikeOrNot: boolean;
  handleUnlike: (e: React.MouseEvent) => void;
  handleLikeClick: (e: React.MouseEvent) => void;
}
