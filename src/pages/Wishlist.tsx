import { useRecoilState } from "recoil";
import { favoritesState } from "../state/favoritesAtom";
import { products } from "../data/products";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

export default function Wishlist() {
  const [favorites, setFavorites] = useRecoilState(favoritesState);

  // Filter favorites (convert product IDs to numbers)
  const favProducts = products.filter((p) => favorites.includes(Number(p.id)));

  if (favProducts.length === 0)
    return (
      <div className="text-center mt-20 text-gray-500 text-lg ">
        No favorites yet 💔
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-6 md:px-12"
    >
      {favProducts.map((p) => (
        <motion.div
          key={p.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
          className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow transition"
        >
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4 flex flex-col gap-2">
            <h3 className="font-semibold text-gray-800 dark:text-white">
              {p.title}
            </h3>
            <p className="text-gray-500">${p.price.toFixed(2)}</p>
            <button
              onClick={() =>
                setFavorites(favorites.filter((id) => id !== Number(p.id)))
              }
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
            >
              <Trash2 size={16} /> Remove
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}