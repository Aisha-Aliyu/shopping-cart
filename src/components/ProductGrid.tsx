import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <main className="p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </main>
  );
}