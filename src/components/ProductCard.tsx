import type { Product } from "../data/products";
import { motion } from "framer-motion";
import { useCart } from "../hooks/useCart";
import { useRecoilState } from "recoil";
import { favoritesState } from "../state/favoritesAtom";
import { Heart } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [favorites, setFavorites] = useRecoilState(favoritesState);

  const productId =
    typeof product.id === "string" ? parseInt(product.id) : product.id;

  const isFav = favorites.includes(productId);

  const toggleFav = () => {
    setFavorites((prev) =>
      isFav ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.03,
        y: -4,
        boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
      }}
      className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
      role="article"
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={product.image ?? "/placeholder.png"}
          alt={product.title}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      </div>

      <button
        onClick={toggleFav}
        className="absolute top-3 right-3 p-2 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md hover:scale-110 transition-all"
        aria-label="Add to wishlist"
      >
        <Heart
          size={20}
          className={`${
            isFav ? "fill-red-500 stroke-red-500" : "stroke-gray-400"
          } transition-colors duration-300`}
        />
      </button>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">${product.price.toFixed(2)}</p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            onClick={() =>
              addToCart({
                id: productId,
                title: product.title,
                price: product.price,
                image: product.image ?? "/placeholder.jpg",
              })
            }
            className="flex-1 py-2 rounded-md bg-gradient-to-r from-brand-500 to-indigo-500 text-white font-medium hover:opacity-90 active:scale-95 transition-all shadow-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}