import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { cartState, cartTotalState } from "../state/cartAtom";
import CartItem from "./CartItem";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotalState);

  // close drawer on ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-900 z-50 shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-800">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <button
                aria-label="Close cart"
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 mt-20">
                  🛒 Your cart is empty
                </div>
              ) : (
                cart.map((item) => <CartItem key={item.id} item={item} />)
              )}
            </div>

            {/* Footer */}
            <div className="border-t dark:border-gray-800 p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                <span className="font-semibold text-lg">${total.toFixed(2)}</span>
              </div>
              <button
                className="w-full py-3 rounded-md bg-gradient-to-r from-brand-500 to-indigo-500 text-white font-semibold hover:opacity-90 transition"
              >
                Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}