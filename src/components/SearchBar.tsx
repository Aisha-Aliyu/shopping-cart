import { useRecoilState } from "recoil";
import { searchQueryState } from "../state/filterAtom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useRecoilState(searchQueryState);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-lg mx-auto mt-6 relative"
    >
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-900 dark:text-white transition"
      />
    </motion.div>
  );
}