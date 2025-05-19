import { Product } from "../types";

const products: Product[] = [
  {
    id: 1,
    name: "Shadow Pendant",
    price: 149.99,
    description: "Sterling silver pendant with black onyx inlay",
    category: "necklaces",
    image: "https://i.imgur.com/D7LFoS2.jpeg",
  },
  {
    id: 2,
    name: "Abyss Ring",
    price: 129.99,
    description: "Black tungsten carbide ring with red accent",
    category: "rings",
    image: "https://i.imgur.com/iejwQti.jpeg",
  },
  {
    id: 3,
    name: "Raven's Claw Bracelet",
    price: 189.99,
    description: "Leather and stainless steel bracelet with claw clasp",
    category: "bracelets",
    image: "https://i.imgur.com/owukTmn.jpeg",
  },
  {
    id: 4,
    name: "Eternal Darkness Watch",
    price: 299.99,
    description: "Matte black chronograph with red second hand",
    category: "watches",
    image: "https://i.imgur.com/gnrdPy3.png",
  },
  {
    id: 5,
    name: "Soul Collector Necklace",
    price: 159.99,
    description: "Obsidian pendant on stainless steel chain",
    category: "necklaces",
    image: "https://i.imgur.com/w4oUaqT.jpeg",
  },
  {
    id: 6,
    name: "Obsidian Signet Ring",
    price: 139.99,
    description: "Black silver ring with engraved skull motif",
    category: "rings",
    image: "https://i.imgur.com/tCGw4CC.jpeg",
  },
];

export default products;
