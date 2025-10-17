import { useRecoilState } from "recoil";
import { cartState, type CartItem } from "../state/cartAtom";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setCart(prev => {
      const found = prev.find(i => i.id === product.id);
      if (found) {
        toast.success(`Added another ${product.title} to cart!`);
        return prev.map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      toast.success(`${product.title} added to cart!`);
      return [...prev, { ...product, quantity: 1 }];
    });

    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.8 },
      ticks: 100,
      scalar: 0.8,
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const item = prev.find(i => i.id === id);
      if (item) toast.error(`${item.title} removed from cart`);
      return prev.filter(i => i.id !== id);
    });
  };

  const changeQuantity = (id: number, qty: number) => {
    setCart(prev =>
      prev.map(i =>
        i.id === id ? { ...i, quantity: Math.max(1, qty) } : i
      )
    );
    const item = cart.find(i => i.id === id);
    if (item) toast(`${item.title} quantity updated`);
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Cart cleared!");
  };

  return { cart, addToCart, removeFromCart, changeQuantity, clearCart };
};