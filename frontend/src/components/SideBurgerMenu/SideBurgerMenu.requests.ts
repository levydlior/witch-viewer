import { MouseEvent } from "react";

export const HandleLogOut = (
  event: MouseEvent<HTMLAnchorElement>,
  onLogOut: () => void
) => {
  event.preventDefault();
  fetch("/logout", {
    method: "DELETE",
  }).then((r) => {
    if (r.ok) {
      onLogOut();
    }
  });
};
