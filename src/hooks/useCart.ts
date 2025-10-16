import { useRecoilState } from "recoil";
import { cartState, type CartItem } from "../state/cartAtom";

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setCart(prev => {
      const found = prev.find(i => i.id === product.id);
      if (found) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const changeQuantity = (id: string, qty: number) => {
    setCart(prev => prev.map(i => (i.id === id ? { ...i, quantity: Math.max(1, qty) } : i)));
  };

  const clearCart = () => setCart([]);

  return { cart, addToCart, removeFromCart, changeQuantity, clearCart };
};