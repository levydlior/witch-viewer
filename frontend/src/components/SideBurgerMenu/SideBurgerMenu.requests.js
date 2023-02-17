export const HandleLogOut = (e, onLogOut, history) => {
  e.preventDefault();
  fetch("/logout", {
    method: "DELETE",
  }).then((r) => {
    if (r.ok) {
      onLogOut();
      history.push("/login");
    }
  });
};
