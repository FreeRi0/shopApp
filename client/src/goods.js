import brownSweater from "./assets/brownSweater.jpg"
import blackSweater from "./assets/blackSweater.jpg"
import blackPolo from "./assets/blackPolo.jpg"
import wideJeans from "./assets/jeansWide.jpg"
import cargoJeans from "./assets/cargoJeans.jpg"

export const products = [
  {
    id: "1",
    photo: brownSweater,
    name: "Brown sweater",
    price: 2100,
    available: true,
    category: "sweaters",
    rating: 5.0,
    desc: "Brown Sweater - minimal gifts style template diy unique personalize design",
  },
  {
    id: "2",
    photo: blackSweater,
    name: "Black sweater",
    price: 2500,
    available: true,
    category: "sweaters",
    rating: "4.0",
    desc: "Black Sweater - minimal gifts style template diy unique personalize design",
  },
  {
    id: "3",
    photo: blackPolo,
    name: "Black polo",
    price: 1100,
    available: true,
    category: "shirts",
    rating: 3.2,
    desc: "Black Polo - minimal gifts style template diy unique personalize design",
  },
  {
    id: "4",
    photo: wideJeans,
    name: "Wide jeans",
    price: 3100,
    available: true,
    category: "jeans",
    rating: 4.3,
    desc: "Wide Jeans - minimal gifts style template diy unique personalize design",
  },
  {
    id: "5",
    photo: cargoJeans,
    name: "Cargo jeans",
    price: 2800,
    available: true,
    category: "jeans",
    rating: 5.0,
    desc: "Cargo Jeans - minimal gifts style template diy unique personalize design",
  },
];

export const cartItems = [products[0], products[2], products[3]];
