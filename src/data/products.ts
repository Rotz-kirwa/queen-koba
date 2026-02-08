import type { Product } from "@/context/CartContext";

export const products: Product[] = [
  {
    id: "cleanser",
    name: "Complexion-Clarifying Foaming Cleanser",
    price: 1500,
    rating: 4.8,
    reviews: 87,
    description: "Gently purifies and preps melanin-rich skin with Qasil and botanical extracts.",
  },
  {
    id: "toner",
    name: "Complexion-Clarifying Toner",
    price: 1800,
    rating: 4.7,
    reviews: 64,
    description: "Balances pH and refines pores with Niacinamide and Centella Asiatica.",
  },
  {
    id: "serum",
    name: "Complexion-Clarifying Serum",
    price: 2500,
    rating: 4.9,
    reviews: 112,
    description: "Potent Tranexamic Acid and Kojic Dipalmitate target dark spots and uneven tone.",
  },
  {
    id: "cream",
    name: "Complexion-Clarifying Cream",
    price: 2200,
    rating: 4.8,
    reviews: 95,
    description: "Deep hydration with Ceramides and Moringa Oil to restore your skin barrier.",
  },
  {
    id: "mask",
    name: "Complexion-Clarifying Wet Mask",
    price: 1200,
    rating: 4.6,
    reviews: 43,
    description: "Intensive weekly treatment with Hyaluronic Acid and Snail Secretion Filtrate.",
  },
  {
    id: "bundle",
    name: "Full Royal Routine",
    price: 8000,
    originalPrice: 9200,
    rating: 5.0,
    reviews: 200,
    description: "The complete Queen Koba system. All 5 products at 15% OFF. Your throne awaits.",
    isBundle: true,
  },
];
