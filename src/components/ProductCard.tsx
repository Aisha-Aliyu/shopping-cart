import type { Product } from "../data/products";
import { motion } from "framer-motion";
import { useCart } from "../hooks/useCart";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02, y: -4 }}
      className="card p-4"
      role="article"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      </div>

      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.title}</h3>
        <p className="text-sm text-gray-500 mt-1">${product.price.toFixed(2)}</p>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, image: product.image })}
          className="flex-1 py-2 rounded-md bg-brand-500 hover:bg-brand-600 text-white font-medium transition-all"
        >
          Add to cart
        </button>
        <button className="p-2 rounded-md border border-gray-200 dark:border-gray-700 focus-ring">
          ♥
        </button>
      </div>
    </motion.div>
  );
}