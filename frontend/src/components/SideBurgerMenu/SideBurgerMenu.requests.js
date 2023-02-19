export const HandleLogOut = (e, onLogOut) => {
  e.preventDefault();
  fetch("/logout", {
    method: "DELETE",
  }).then((r) => {
    if (r.ok) {
      onLogOut();
    }
  });
};
