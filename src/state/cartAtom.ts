import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

const { persistAtom } = recoilPersist({
  key: "shopping-cart", // key in localStorage
  storage: localStorage,
});

export const cartState = atom<CartItem[]>({
  key: "cartState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const cartCountState = selector({
  key: "cartCountState",
  get: ({ get }) => get(cartState).reduce((acc, i) => acc + i.quantity, 0),
});

export const cartTotalState = selector({
  key: "cartTotalState",
  get: ({ get }) => get(cartState).reduce((acc, i) => acc + i.price * i.quantity, 0),
});