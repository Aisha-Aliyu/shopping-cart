import { useRecoilValue } from "recoil";
import { cartCountState } from "../state/cartAtom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const count = useRecoilValue(cartCountState);
  const { theme, toggle } = useTheme();

  return (
    <header className="flex items-center justify-between py-6 px-6 md:px-12">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">Humairah</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Shop UI · State Deep Dive</div>
      </div>

      <div className="flex items-center gap-4">
        <button
          aria-label="Toggle theme"
          onClick={toggle}
          className="p-2 rounded-md focus-ring"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <motion.button
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
  );
}