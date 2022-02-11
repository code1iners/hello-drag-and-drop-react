import { IContentsType } from "../types/atoms.type";
import { atom } from "recoil";

// Item state.
export const atomItems = atom<IContentsType>({
  key: "atomItems",
  default: {
    defaultItems1: ["a", "d"],
    defaultItems2: ["b", "c"],
    defaultItems3: ["e"],
  },
});
