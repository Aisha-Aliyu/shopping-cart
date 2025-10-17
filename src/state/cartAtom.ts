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
  key: "shopping-cart",
  storage: localStorage,
});

export const cartState = atom<CartItem[]>({
  key: "cartState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const cartCountState = selector<number>({
  key: "cartCountState",
  get: ({ get }) => get(cartState).reduce((acc, i) => acc + i.quantity, 0),
});

export const cartTotalState = selector<number>({
  key: "cartTotalState",
  get: ({ get }) => get(cartState).reduce((acc, i) => acc + i.price * i.quantity, 0),
});