import { useState } from "react";
import { useRecoilValue } from "recoil";
import { cartCountState } from "../state/cartAtom";
import { favoritesState } from "../state/favoritesAtom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import CartDrawer from "./CartDrawer";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Header() {
  const count = useRecoilValue(cartCountState);
  const favorites = useRecoilValue(favoritesState);
  const { theme, toggle } = useTheme();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="backdrop-blur-md bg-white/60 dark:bg-gray-900/60 sticky top-0 z-30 border-b dark:border-gray-800 flex items-center justify-between py-6 px-6 md:px-12">
        {/* Left: Logo & Subtitle */}
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">MyShop</div>
          
        </div>

        {/* Right: Navigation + Theme + Cart */}
        <div className="flex items-center gap-4">
          

          {/* Wishlist Link */}
          <Link
            to="/wishlist"
            className="relative flex items-center gap-1 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Heart className="text-red-500" />
            Wishlist
            {favorites.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1 shadow-md"
              >
                {favorites.length}
              </motion.span>
            )}
          </Link>

          {/* Theme Toggle */}
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="p-2 rounded-md focus-ring"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* Cart Drawer */}
          <motion.button
            onClick={() => setIsCartOpen(true)}
            className="relative p-3 rounded-lg bg-gradient-to-r from-brand-500 to-indigo-500 text-white shadow-md"
            whileTap={{ scale: 0.95 }}
          >
            Cart
            {count > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-white text-sm text-gray-900 rounded-full px-2 py-1 shadow-md"
              >
                {count}
              </motion.span>
            )}
          </motion.button>
        </div>
      </header>

      {/* Cart Drawer Component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}