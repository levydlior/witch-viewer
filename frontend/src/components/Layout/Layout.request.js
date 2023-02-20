export const fetchLoggedUser = (setAuth, setLoggedUser) => {
  fetch("/users/show").then((r) => {
    if (r.ok) {
      r.json().then((user) => {
        setAuth(true);
        setLoggedUser(user);
      });
    } else {
      setAuth(true);
    }
  });
};

export const fetchLikedWitches = (setLikedWitches, setLoadingLikedWitches) => {
  fetch("/likes").then((r) => {
    if (r.ok) {
      r.json().then((witchesArray) => {
        setLikedWitches(witchesArray);
        setLoadingLikedWitches(false);
      });
    }
  });
};
