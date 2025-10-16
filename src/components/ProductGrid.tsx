"use client";

import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { searchQueryState, categoryFilterState, priceFilterState } from "../state/filterAtom";

export default function ProductGrid() {
  const query = useRecoilValue(searchQueryState);
  const category = useRecoilValue(categoryFilterState);
  const priceRange = useRecoilValue(priceFilterState);

  // Filter products by search, category, and price
  const filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) &&
      (category === "All" || p.category === category) &&
      p.price >= priceRange[0] &&
      p.price <= priceRange[1]
  );

  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className="p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filtered.length === 0 ? (
        <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
          No products found
        </div>
      ) : (
        filtered.map((p) => (
          <motion.div
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.12)" }}
          >
            <ProductCard product={p} />
          </motion.div>
        ))
      )}
    </motion.main>
  );
}