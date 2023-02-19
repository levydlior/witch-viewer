
export const FetchPopularWitches = (setPopularWitches) => {
    fetch("/witches").then((r) => {
        if (r.ok) {
          r.json().then((witches) => setPopularWitches(witches));
        }
      });
}

