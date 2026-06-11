export type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  description: string;
};

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Classic Tee",
    price: 29.99,
    currency: "$",
    image: "/file.svg",
    description: "Soft cotton t-shirt for everyday wear.",
  },
  {
    id: "p2",
    name: "Running Shoes",
    price: 89.0,
    currency: "$",
    image: "/next.svg",
    description: "Lightweight shoes built for speed and comfort.",
  },
  {
    id: "p3",
    name: "Leather Wallet",
    price: 49.5,
    currency: "$",
    image: "/globe.svg",
    description: "Minimal leather wallet with card and cash slots.",
  },
  {
    id: "p4",
    name: "Denim Jacket",
    price: 79.99,
    currency: "$",
    image: "/window.svg",
    description: "Classic blue denim jacket, perfect for layering.",
  },
];

