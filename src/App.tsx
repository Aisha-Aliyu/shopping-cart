import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import ProductFilter from "./components/ProductFilter";
import Wishlist from "./pages/Wishlist";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <Toaster position="top-right" reverseOrder={false} />

        {/* Header */}
        <Header />

        {/* Main Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProductFilter />
                <ProductGrid />
              </>
            }
          />

          {/* Wishlist Page */}
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>

        <footer className="p-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyShop — Shopping Cart UI
        </footer>
      </div>
    </Router>
  );
}