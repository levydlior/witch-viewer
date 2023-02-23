import { SetStateAction } from "react";
import { userType } from "../../GeneralTypes/GeneralTypes";
import { WitchType } from "../WitchCard/WitchCard.types";

export const fetchLoggedUser = (
  setAuth: { (value: SetStateAction<boolean>): void; (arg0: boolean): void },
  setLoggedUser: {
    (value: SetStateAction<userType | undefined>): void;
  }
) => {
  fetch("/users/show").then((r) => {
    if (r.ok) {
      r.json().then((user: userType) => {
        setAuth(true);
        setLoggedUser(user);
      });
    } else {
      setAuth(true);
    }
  });
};

export const fetchLikedWitches = (
  setLikedWitches: {
    (value: SetStateAction<WitchType[]>): void;
    (arg0: any): void;
  },
  setLoadingLikedWitches: {
    (value: SetStateAction<boolean>): void;
  }
) => {
  fetch("/likes").then((r) => {
    if (r.ok) {
      r.json().then((witchesArray) => {
        setLikedWitches(witchesArray);
        setLoadingLikedWitches(false);
      });
    }
  });
};
