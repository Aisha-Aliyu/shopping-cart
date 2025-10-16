export type Product = {
  id: string;
  title: string;
  price: number;
  description?: string;
  image?: string;
};

export const products: Product[] = [
  { id: "p1", title: "Eclipse Runner Sneakers", price: 129, image: "https://picsum.photos/seed/p1/600/400" },
  { id: "p2", title: "Aurora Sunglasses", price: 89, image: "https://picsum.photos/seed/p2/600/400" },
  { id: "p3", title: "Noir Leather Bag", price: 199, image: "https://picsum.photos/seed/p3/600/400" },
  { id: "p4", title: "Skyline Watch", price: 249, image: "https://picsum.photos/seed/p4/600/400" },
  { id: "p5", title: "Zen Hoodie", price: 69, image: "https://picsum.photos/seed/p5/600/400" },
  { id: "p6", title: "Lumen Earbuds", price: 149, image: "https://picsum.photos/seed/p6/600/400" },
];