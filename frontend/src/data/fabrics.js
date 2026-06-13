// Shared fabric data — used by both Fabrics.jsx and FabricDetail.jsx
import modalthai from "../assests/Modal thailandi.jpeg";
import Lulwa1 from "../assests/Lulwaveil1.jpeg";
import Lulwa2 from "../assests/Lulwaveil2.jpeg";
import Lulwa3 from "../assests/Lulwaveil3.jpeg";
import stretch1 from "../assests/stretchlinenthailandi1.jpeg";
import stretch2 from "../assests/stretchlinenthailandi2.jpeg";
import stretch3 from "../assests/stretchlinenthailandi3.jpeg";
import stretch4 from "../assests/stretchlinenthailandi4.jpeg";
import kashmir1 from "../assests/kashmir1.jpeg";
import kashmir2 from "../assests/kashmir2.jpeg";
import kashmir3 from "../assests/kashmir3.jpeg";
import kashmir4 from "../assests/kashmir4.jpeg";
import brightsummer1 from "../assests/bright summer1.jpeg";
import crepe1 from "../assests/crepe1.jpeg";
import crepe2 from "../assests/crepe2.jpeg";
import crepe3 from "../assests/crepe3.jpeg";
import satoncrepe1 from "../assests/satoncrepe1.jpeg";
import satoncrepe2 from "../assests/satoncrepe2.jpeg";
import satoncrepe3 from "../assests/satoncrepe3.jpeg";
import crinckled1 from "../assests/crinckledcotton1.jpeg";
import crinckled2 from "../assests/crinckledcotton2.jpeg";
import crinckled3 from "../assests/crinckledcotton3.jpeg";
import crinckled4 from "../assests/crinckledcotton4.jpeg";
import cottonjersey1 from "../assests/cottonjersey1.jpeg";
import cottonjersey2 from "../assests/cottonjersey2.jpeg";


export const fabrics = [
  {
    id: "Lulwa Veil",
    name: "Lulwa Veil",
    image: modalthai,
    tag: "Bestseller",
    desc: "The Kuwaiti lulwa Hijab is crafted from a soft, lightweight fabric that offers exceptional comfort and elegance throughout the day.",
    longDesc:
      "Its breathable texture and beautiful drape make it easy to style while ensuring a refined and sophisticated look. Designed for both everyday wear and special occasions, it provides excellent coverage, a graceful flow, and a timeless appeal. Available in a variety of versatile colors to complement every wardrobe. .",
    traits: ["Ligthweight", "Breathable", "Length:200cm", "Width:75cm"],
    price: 10,
    bg: "linear-gradient(135deg, #e8ddd4 0%, #d4c4b4 100%)",
    letter: "N",
    colors: [
      { name: "Milky", hex: "#F5EFE6" },       // warm creamy milk color
      { name: "Olive Green", hex: "#708238" }, // classic olive green
      { name: "Pearl Grey", hex: "#E7E7E7" },  // soft pearl gray
      { name: "Soft Mocha", hex: "#A1866F" },  // muted mocha brown
      { name: "Rose Grey", hex: "#C4A6A1" },   // dusty rose-gray
    ],
     images: [
    Lulwa1,
    Lulwa2,
    Lulwa3,
  ],
  },
  {
    id: "stretch linen thailandi",
    name: "Stretch linen thailandi",
    image: modalthai,
    tag: "Lightweight",
    desc: "Crafted from premium stretch Thai linen fabric, this hijab combines a natural linen look with added flexibility for extra comfort and easy styling.",
    longDesc:
      "Stretch Thai Linen Hijab is breathable, lightweight texture keeps you cool while the slight stretch ensures a secure and effortless drape throughout the day. Elegant yet practical, it offers a refined, structured look that works perfectly for both casual and chic outfits. A modern essential for everyday elegance..",
    traits: ["Sheer", "Lightweight", "Flowing", "Elegant"],
    price: 15,
    bg: "linear-gradient(135deg, #f0e8e0 0%, #ddd0c4 100%)",
    letter: "C",
    colors: [
      { name: "Teal", hex: "#008080" },       // classic teal
      { name: "Mocha", hex: "#96705B" },      // rich mocha brown
      { name: "Black", hex: "#1A1A1A" },      // near-black
      { name: "Light Blue", hex: "#ADD8E6" }, // classic light blue
    ],
    images: [
    stretch1,
    stretch2,
    stretch3,
    stretch4,
  ],
  },
  {
    id: "kashmir",
    name: "Kashmir",
    image: modalthai,
    tag: "Lightweight",
    desc: "rafted from lightweight Kashmir fabric with a slightly sheer finish, this Kuwaiti-style hijab offers an elegant and airy feel.",
    longDesc:
      "Kashmir`s soft texture and fluid drape make it easy to style while giving a graceful, refined look. Perfect for layering or styling with an undercap, it combines comfort with effortless sophistication for both everyday and special occasions. ",
    traits: ["Sheer", "Lightweight", "Flowing", "Elegant"],
    price: 6,
    bg: "linear-gradient(135deg, #f0e8e0 0%, #ddd0c4 100%)",
    letter: "C",
    colors: [
        { name: "White", hex: "#FFFFFF" },      // pure white
        { name: "Dark Beige", hex: "#A68A64" }, // dark beige
        { name: "Black", hex: "#1A1A1A" },      // near-black
        { name: "Rose", hex: "#D8A7A7" },       // dusty rose
        { name: "Mauve", hex: "#BFA0B1" },      // muted mauve
        { name: "Bordo", hex: "#6D2E3A" },      // burgundy/bordeaux
        { name: "Brown", hex: "#7A5C46" },      // medium brown
      ],
      images: [
    kashmir1,
    kashmir2,
    kashmir3,
    kashmir4,
  ],
  },
  {
    id: "bright summer",
    name: "Bright Summer",
    image: modalthai,
    tag: "Everyday Comfort",
    desc: "Stretchy, breathable, and no-slip — jersey is your perfect companion for active days and everyday modest styling.",
    longDesc:
      "Jersey is built for real life. This stretchy, breathable cotton-blend fabric moves with you — perfect for busy days, travel, sports, or simply lounging in comfort. Its natural grip means it stays put without pins, while the soft texture feels gentle against the skin all day long. Jersey hijabs are easy to style, machine washable, and a staple for anyone who values comfort without sacrificing modesty or style.",
    traits: ["Stretchy", "Breathable", "No-Slip", "Casual"],
    price: 15,
    bg: "linear-gradient(135deg, #e2d5cb 0%, #c8b9ac 100%)",
    letter: "J",
    colors: [
        { name: "Navy", hex: "#1B365D" },  // classic navy blue
        { name: "Mocha", hex: "#96705B" }, // mocha brown
        { name: "Pink", hex: "#F4A6B8" },  // soft pink
    ],
    images: [
    brightsummer1
  ],
  },
  {
    id: "crepe",
    name: "Crepe",
    image: modalthai,
    tag: "Luxurious",
    desc: "A silky-smooth fabric with a gentle sheen that captures light beautifully — ideal for special occasions and formal events.",
    longDesc:
      "Satin is reserved for moments that call for something special. With its silky-smooth surface and gentle, luminous sheen, this fabric catches the light in the most flattering way — perfect for weddings, celebrations, and formal evenings. The fluid drape creates elegant folds that elevate any outfit, while the luxurious feel against the skin makes every wear feel like an occasion. A timeless choice for women who want their hijab to make a statement.",
    traits: ["Silky", "Lustrous", "Formal", "Luxurious"],
    price: 12,
    bg: "linear-gradient(135deg, #ecddd3 0%, #d4c2b5 100%)",
    letter: "S",
    colors: [
      { name: "Light Taupe", hex: "#D8C3B5" }, // soft taupe beige
      { name: "Mauve", hex: "#BFA2C7" },       // muted mauve purple
      { name: "Light Beige", hex: "#F3E8D6" }, // warm light beige
      { name: "White", hex: "#FFFFFF" },       // pure white
    ],
    images: [
    crepe1,
    crepe2,
    crepe3
  ],
  },
  {
    id: "saton crepe",
    name: "Saton Crepe",
    image: modalthai,
    tag: "Soft & Airy",
    desc: "Crafted from premium satin crepe fabric, this hijab offers a smooth, elegant finish with a soft silky touch and a graceful drape.",
    longDesc:
      "Saton crepe combines a subtle sheen with a lightly textured surface, giving a luxurious yet refined look. Lightweight and easy to style, it stays in place beautifully while adding a polished, sophisticated touch to any outfit. Perfect for both special occasions and elevated everyday wear.",
    traits: ["Soft", "Breathable", "Natural Drape", "Versatile"],
    price: 12,
    bg: "linear-gradient(135deg, #e6dbd1 0%, #cfc0b2 100%)",
    letter: "V",
    colors: [
  { name: "Dusty Mauve", hex: "#C8A8B8" }, // muted mauve with dusty undertones
  { name: "Mocha", hex: "#9B7B65" },       // soft mocha brown
  { name: "Light Beige", hex: "#F2E8D8" }, // warm light beige
    ],
    images: [
    satoncrepe1,
    satoncrepe2,
    satoncrepe3
  ],
  },
  {
    id: "crinckled cotton",
    name: "Crinckled Cotton",
    image: modalthai,
    tag: "Textured",
    desc: "Made from soft, breathable crinkled cotton fabric, this hijab combines comfort with effortless elegance.",
    longDesc:
      "Its naturally textured finish adds a stylish touch while eliminating the need for constant ironing, making it perfect for everyday wear. Lightweight and easy to style, it drapes beautifully and provides comfortable coverage throughout the day. A versatile essential that pairs seamlessly with both casual and sophisticated looks.",
    traits: ["Comfort", "Modest Coverage", "Length:200cm", "Width:75cm"],
    price: 10,
    bg: "linear-gradient(135deg, #e0d3c9 0%, #cabbad 100%)",
    colors: [
      { name: "Dark Beige", hex: "#A68A64" }, // warm dark beige
      { name: "Dark Grey", hex: "#5F6368" },  // true dark grey
      { name: "White", hex: "#FFFFFF" },      // pure white
      { name: "Taupe", hex: "#8B7D6B" },      // classic taupe
    ],
    images: [
    crinckled1,
    crinckled2,
    crinckled3,
    crinckled4,
  ],
  },
  {
    id: "cotton jersey",
    name: "Cotton Jersey",
    image: modalthai,
    tag: "Textured",
    desc: "A subtly textured weave that adds dimension and depth to your look while maintaining a refined, polished appearance.",
    longDesc:
      "Crepe stands out through texture. Its subtly crinkled weave adds depth and dimension to your look while remaining matte and non-slip — a refined alternative for those who love a bit of character in their fabric. Crepe holds its shape exceptionally well, resists shifting throughout the day, and offers full coverage with a polished, sophisticated finish suitable for both daily wear and elevated occasions.",
    traits: ["Textured", "Non-Slip", "Modest Coverage", "Chic"],
    price: 7,
    bg: "linear-gradient(135deg, #e0d3c9 0%, #cabbad 100%)",
    colors: [
       { name: "Rose Beige", hex: "#D4B5A5" }, // warm rosy beige
        { name: "Greige", hex: "#A89F91" },     // gray-beige blend
        { name: "OffWhite", hex: "#F8F6F2" },   // soft off-white
        { name: "Black", hex: "#2F2F2F" },      // soft black
        { name: "Brown", hex: "#7A5C46" },      // medium brown
        { name: "Blue", hex: "#6E8AA6" },       // muted blue
        { name: "Jeans", hex: "#4F6D8A" },      // denim blue
        { name: "Mocha", hex: "#8C6F5A" },      // mocha brown
    ],
    images: [
    cottonjersey1,
    cottonjersey2
  ],
  },
];

export const whyPoints = [
  { icon: "🇰🇼", title: "Kuwaiti Origin", text: "Sourced from trusted Kuwaiti suppliers known for superior fabric quality." },
  { icon: "🎨", title: "Timeless Shades", text: "Curated color palettes that complement every skin tone beautifully." },
  { icon: "✂️", title: "Precise Cut", text: "Each hijab is cut and finished with meticulous attention to detail." },
  { icon: "♾️", title: "Long-Lasting", text: "Fabrics that maintain their color, shape, and texture wash after wash." },
];
