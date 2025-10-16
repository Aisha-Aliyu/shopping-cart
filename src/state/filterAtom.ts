import { atom } from "recoil";

export const searchQueryState = atom({
  key: "searchQueryState",
  default: "",
});

export const categoryFilterState = atom<string>({
  key: "categoryFilterState",
  default: "All",
});

export const priceFilterState = atom<[number, number]>({
  key: "priceFilterState",
  default: [0, 1000],
});