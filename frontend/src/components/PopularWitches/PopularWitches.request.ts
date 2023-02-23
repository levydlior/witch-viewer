import { WitchType } from "../WitchCard/WitchCard.types";

export const FetchPopularWitches = (setPopularWitches: (value: React.SetStateAction<WitchType[]>) => void) => {
    fetch("/witches").then((r) => {
        if (r.ok) {
          r.json().then((witches) => setPopularWitches(witches));
        }
      });
}

