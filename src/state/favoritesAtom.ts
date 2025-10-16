import { atom } from "recoil";

const FAVORITES_KEY = "favorites";

export const favoritesState = atom<number[]>({
  key: "favoritesState",
  default: [],
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedValue = localStorage.getItem(FAVORITES_KEY);
      if (savedValue) {
        try {
          setSelf(JSON.parse(savedValue));
        } catch (e) {
          console.error("Failed to parse favorites from localStorage", e);
        }
      }

      onSet((newValue) => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newValue));
      });
    },
  ],
});