import type { CartItem as CartItemType } from "../state/cartAtom";
import { useCart } from "../hooks/useCart";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";

type Props = { item: CartItemType };

export default function CartItem({ item }: Props) {
  const { changeQuantity, removeFromCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-3"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-cover rounded-md flex-shrink-0"
      />

      <div className="flex-1">
        <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>

        {/* Quantity controls */}
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={() => changeQuantity(item.id, item.quantity - 1)}
            className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Minus size={16} />
          </button>
          <span className="px-2 text-gray-800 dark:text-gray-200">{item.quantity}</span>
          <button
            onClick={() => changeQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <button
        aria-label="Remove"
        onClick={() => removeFromCart(item.id)}
        className="p-2 hover:bg-red-100 text-red-500 rounded-md"
      >
        <Trash2 size={18} />
      </button>
    </motion.div>
  );
}