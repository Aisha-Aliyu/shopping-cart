import { atom, selector } from "recoil";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image?: string;
  quantity: number;
};

export const cartState = atom<CartItem[]>({
  key: "cartState",
  default: [],
});

export const cartCountState = selector({
  key: "cartCountState",
  get: ({ get }) => get(cartState).reduce((acc, it) => acc + it.quantity, 0),
});

export const cartTotalState = selector({
  key: "cartTotalState",
  get: ({ get }) => get(cartState).reduce((acc, it) => acc + it.price * it.quantity, 0),
});