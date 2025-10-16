export type Product = {
  category: string;
  id: string;
  title: string;
  price: number;
  description?: string;
  image?: string;
};

export const products: Product[] = [
  { id: "1", title: "Eclipse Runner Sneakers", price: 129, image: "/src/assets/shoe.jpg" },
  { id: "2", title: "Aurora Sunglasses", price: 89, image: "/src/assets/glass.jpg" },
  { id: "3", title: "Noir Leather Bag", price: 199, image: "/src/assets/bag.jpg" },
  { id: "4", title: "Skyline Watch", price: 249, image: "/src/assets/watch.jpg" },
  { id: "5", title: "Zen Hoodie", price: 69, image: "/src/assets/hoodie.jpg" },
  { id: "6", title: "Lumen Earbuds", price: 149, image: "/src/assets/buds.jpg" },
];