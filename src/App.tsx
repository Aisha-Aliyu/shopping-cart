import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <ProductGrid />
      <footer className="p-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Aisha — Shopping Cart UI</footer>
    </div>
  );
}