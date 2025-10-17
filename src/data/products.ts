export type Product = {
  category: string;
  id: string;
  title: string;
  price: number;
  description?: string;
  image?: string;
};

export const products: Product[] = [
  // ELECTRONICS
  {
    id: "1",
    title: "Lumen Wireless Earbuds",
    price: 149,
    image: "/assets/buds.jpg",
    category: "Electronics",
    description: "High-fidelity sound with noise cancellation and long battery life.",
  },
  {
    id: "2",
    title: "AeroSmart Drone",
    price: 499,
    image: "/assets/drone.jpg",
    category: "Electronics",
    description: "4K camera drone with GPS and auto-stabilization for aerial shots.",
  },
  {
    id: "3",
    title: "Pulse Pro Headphones",
    price: 199,
    image: "/assets/headphones.jpg",
    category: "Electronics",
    description: "Over-ear premium headphones with immersive sound.",
  },
  {
    id: "4",
    title: "Nova Smartwatch",
    price: 259,
    image: "/assets/smartwatch.jpg",
    category: "Electronics",
    description: "Track fitness, calls, and notifications on the go.",
  },
  {
    id: "5",
    title: "Echo Portable Speaker",
    price: 89,
    image: "/assets/speaker.jpg",
    category: "Electronics",
    description: "Compact Bluetooth speaker with rich bass and waterproof design.",
  },

  // BAGS
  {
    id: "6",
    title: "Noir Leather Bag",
    price: 199,
    image: "/assets/bag.jpg",
    category: "Bags",
    description: "Elegant handcrafted leather bag with adjustable straps.",
  },
  {
    id: "7",
    title: "Urban Backpack",
    price: 129,
    image: "/assets/backpack.jpg",
    category: "Bags",
    description: "Water-resistant and spacious, perfect for daily use.",
  },
  {
    id: "8",
    title: "Canvas Tote Bag",
    price: 59,
    image: "/assets/tote.jpg",
    category: "Bags",
    description: "Lightweight and eco-friendly tote for casual outings.",
  },
  {
    id: "9",
    title: "Traveler Duffel Bag",
    price: 179,
    image: "/assets/duffel.jpg",
    category: "Bags",
    description: "Durable duffel for trips with multiple compartments.",
  },
  {
    id: "10",
    title: "Mini Crossbody Bag",
    price: 79,
    image: "/assets/crossbody.jpg",
    category: "Bags",
    description: "Chic crossbody with metallic accents and compact design.",
  },

  // CLOTHING
  {
    id: "11",
    title: "Zen Hoodie",
    price: 69,
    image: "/assets/hoodie.jpg",
    category: "Clothing",
    description: "Ultra-soft hoodie designed for everyday comfort.",
  },
  {
    id: "12",
    title: "Essential T-Shirt",
    price: 39,
    image: "/assets/tshirt.jpg",
    category: "Clothing",
    description: "Classic cotton tee with a relaxed fit.",
  },
  {
    id: "13",
    title: "Aero Joggers",
    price: 89,
    image: "/assets/joggers.jpg",
    category: "Clothing",
    description: "Lightweight joggers with stretch and breathability.",
  },
  {
    id: "14",
    title: "Luxe Denim Jacket",
    price: 129,
    image: "/assets/denim.jpg",
    category: "Clothing",
    description: "Timeless denim jacket with a modern cut.",
  },
  {
    id: "15",
    title: "Summer Dress",
    price: 99,
    image: "/assets/dress.jpg",
    category: "Clothing",
    description: "Light floral dress perfect for warm weather.",
  },

  // GLASSES
  {
    id: "16",
    title: "Aurora Sunglasses",
    price: 89,
    image: "/assets/glass.jpg",
    category: "Glasses",
    description: "Sleek polarized sunglasses with UV protection.",
  },
  {
    id: "17",
    title: "Retro Square Frames",
    price: 79,
    image: "/assets/retro.jpg",
    category: "Glasses",
    description: "Vintage-inspired eyewear with a bold look.",
  },
  {
    id: "18",
    title: "Classic Aviators",
    price: 99,
    image: "/assets/aviators.jpg",
    category: "Glasses",
    description: "Timeless aviators with premium lenses.",
  },
  {
    id: "19",
    title: "Blue Light Blockers",
    price: 59,
    image: "/assets/bluelight.jpg",
    category: "Glasses",
    description: "Reduce eye strain with stylish blue light glasses.",
  },
  {
    id: "20",
    title: "Sport Wrap Sunglasses",
    price: 119,
    image: "/assets/sport-glass.jpg",
    category: "Glasses",
    description: "Perfect for outdoor activities with wraparound protection.",
  },

  // SHOES
  {
    id: "21",
    title: "Eclipse Runner Sneakers",
    price: 129,
    image: "/assets/shoe.jpg",
    category: "Shoes",
    description: "Breathable, lightweight sneakers for all-day comfort.",
  },
  {
    id: "22",
    title: "Trail Blazer Boots",
    price: 189,
    image: "/assets/boots.jpg",
    category: "Shoes",
    description: "Rugged boots made for both city and adventure.",
  },
  {
    id: "23",
    title: "Slip-On Loafers",
    price: 109,
    image: "/assets/loafers.jpg",
    category: "Shoes",
    description: "Effortless style meets premium craftsmanship.",
  },
  {
    id: "24",
    title: "Sporty Running Shoes",
    price: 149,
    image: "/assets/running.jpg",
    category: "Shoes",
    description: "Designed for speed and maximum grip.",
  },
  {
    id: "25",
    title: "Classic High-Tops",
    price: 99,
    image: "/assets/hightops.jpg",
    category: "Shoes",
    description: "Retro style sneakers with modern comfort.",
  },

  // WATCHES
  {
    id: "26",
    title: "Skyline Watch",
    price: 249,
    image: "/assets/watch.jpg",
    category: "Watches",
    description: "Premium analog watch with stainless steel design.",
  },
  {
    id: "27",
    title: "ChronoSport Watch",
    price: 299,
    image: "/assets/chrono.jpg",
    category: "Watches",
    description: "Chronograph functionality with leather straps.",
  },
  {
    id: "28",
    title: "Minimalist Timepiece",
    price: 189,
    image: "/assets/minimal-watch.jpg",
    category: "Watches",
    description: "Clean, elegant design for any occasion.",
  },
  {
    id: "29",
    title: "Smart Fitness Watch",
    price: 229,
    image: "/assets/fitwatch.jpg",
    category: "Watches",
    description: "Track health metrics with a modern smart interface.",
  },
];