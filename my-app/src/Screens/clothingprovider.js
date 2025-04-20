import React, { createContext, useState, useContext } from "react";
import * as Clothes from './Clothes';

const ClothingContext = createContext();


export const ClothingProvider = ({ children }) => {
  const [clothingItems, setClothingItems] = useState([
    { id: 1, name: "White Floral Babydoll Top", img: Clothes.femtop1, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 2, name: "Denim Halter Top", img: Clothes.femtop2, color: ["blue"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 3, name: "Floral Tank Top", img: Clothes.femtop3, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 4, name: "Denim Shorts", img: Clothes.fembottom1, color: ["blue"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "bottom"},
    { id: 5, name: "White Ruffled Skirt", img: Clothes.fembottom2, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "bottom"},
    { id: 6, name: "Floral Maxi Skirt", img: Clothes.fembottom3, color: ["black"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["formal/elegant"], category: "bottom"},
    { id: 7, name: "White Converse", img: Clothes.femshoe1, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["streetwear"],  category: "shoe"},
    { id: 8, name: "Brown Platform Boots", img: Clothes.femshoe2, color: ["brown"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 9, name: "White Heels", img: Clothes.femshoe3, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "shoe"},

    { id: 10, name: "Beige Short-Sleeve Shirt", img: Clothes.unitop1, color: ["beige"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 11, name: "Black Tank Top", img: Clothes.unitop2, color: ["black"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 12, name: "Blue Short-Sleeve Button Up", img: Clothes.unitop3, color: ["blue"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 13, name: "Black Dress Pants", img: Clothes.unibottom1, color: ["black"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["business/professional"], category: "bottom"},
    { id: 15, name: "Brown Shorts", img: Clothes.unibottom2, color: ["brown"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 14, name: "Green Army Pants", img: Clothes.unibottom3, color: ["green"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["streetwear"], category: "bottom"},
    { id: 16, name: "White Crocs", img: Clothes.unishoe1, color: ["white"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "shoe"},
    { id: 17, name: "White Sneakers", img: Clothes.unishoe2, color: ["white"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 18, name: "Tan Sneakers", img: Clothes.unishoe3, color: ["brown"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["streetwear"], category: "shoe"},

    { id: 21, name: "Floral White Shirt", img: Clothes.masctop1, color: ["multi"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 19, name: "White Short-Sleeve Shirt", img: Clothes.masctop2, color: ["white"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 20, name: "Grey Ribbed Polo", img: Clothes.masctop3, color: ["grey"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["business/professional"], category: "top"},
    { id: 22, name: "Brown Shorts", img: Clothes.mascbottom1, color: ["brown"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 23, name: "Beige Baggy Pants", img: Clothes.mascbottom2, color: ["beige"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 24, name: "Black Ruffled Shorts", img: Clothes.mascbottom3, color: ["black"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 25, name: "White Sneakers", img: Clothes.mascshoe1, color: ["white"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 26, name: "Navy Blue Canvas", img: Clothes.mascshoe2, color: ["blue"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 27, name: "Brown Sneakers", img: Clothes.mascshoe3, color: ["brown"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["going-out/cute"], category: "shoe"},

    { id: 28, name: "Mermaid Top", img: Clothes.femtop4, color: ["multi"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 29, name: "Dark Blue Button Up", img: Clothes.masctop4, color: ["blue"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["business/professional"], category: "top"},
    { id: 30, name: "Basic Top", img: Clothes.unitop4, color: ["grey"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 31, name: "White Pants", img: Clothes.fembottom4, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 32, name: "White Slacks", img: Clothes.mascbottom4, color: ["white"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["streetwear"], category: "bottom"},
    { id: 33, name: "White Drawstring Pants", img: Clothes.unibottom4, color: ["white"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 34, name: "White Converse Heels", img: Clothes.femshoe4, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 35, name: "Red Leather Sneakers", img: Clothes.mascshoe4, color: ["red"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 36, name: "Black Leather Boots", img: Clothes.unishoe4, color: ["black"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["going-out/cute"], category: "shoe"},

    { id: 37, name: "Ruffled Pink Tank Top", img: Clothes.femtop5, color: ["pink"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 38, name: "Green Linen Shirt", img: Clothes.masctop5, color: ["green"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["business/professional"], category: "top"},
    { id: 39, name: "Essentials Hoodie", img: Clothes.unitop5, color: ["beige"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 40, name: "Blue Flare Jeans", img: Clothes.fembottom5, color: ["blue"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "bottom"},
    { id: 41, name: "Blue Ripped Jeans", img: Clothes.mascbottom5, color: ["blue"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["streetwear"], category: "bottom"},
    { id: 42, name: "Gray Sweatpants", img: Clothes.unibottom5, color: ["grey"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 43, name: "White Strappy Sandals", img: Clothes.femshoe5, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 44, name: "White Sandals", img: Clothes.mascshoe5, color: ["white"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["casual/comfy"], category: "shoe"},
    { id: 45, name: "Brown Slides", img: Clothes.unishoe5, color: ["brown"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "shoe"},

    { id: 46, name: "Black Tank Top", img: Clothes.femtop6, color: ["black"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 47, name: "Blue Star Jeans", img: Clothes.fembottom6, color: ["blue"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["streetwear"], category: "bottom"},
    { id: 48, name: "Black Sandals", img: Clothes.femshoe6, color: ["black"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["casual/comfy"], category: "shoe"},
    { id: 49, name: "Black Hawaiian Leaf Shirt", img: Clothes.masctop6, color: ["black"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 50, name: "Grey Jorts", img: Clothes.mascbottom6, color: ["grey"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["streetwear"], category: "bottom"},
    { id: 51, name: "Black Sandals", img: Clothes.mascshoe6, color: ["black"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["casual/comfy"], category: "shoe"},
    { id: 52, name: "Black Graphic T-Shirt", img: Clothes.unitop6, color: ["black"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["streetwear"], category: "top"},
    { id: 53, name: "Black Jorts", img: Clothes.unibottom6, color: ["black"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["streetwear"], category: "bottom"},
    { id: 54, name: "Green Converse", img: Clothes.unishoe6, color: ["green"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["going-out/cute"], category: "shoe"},

    { id: 1, name: "White Floral Babydoll Top", img: Clothes.femtop1, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 2, name: "Denim Halter Top", img: Clothes.femtop2, color: ["blue"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 3, name: "Floral Tank Top", img: Clothes.femtop3, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 4, name: "Denim Shorts", img: Clothes.fembottom1, color: ["blue"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "bottom"},
    { id: 5, name: "White Ruffled Skirt", img: Clothes.fembottom2, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "bottom"},
    { id: 6, name: "Floral Maxi Skirt", img: Clothes.fembottom3, color: ["black"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["formal/elegant"], category: "bottom"},
    { id: 7, name: "White Converse", img: Clothes.femshoe1, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["streetwear"],  category: "shoe"},
    { id: 8, name: "Brown Platform Boots", img: Clothes.femshoe2, color: ["brown"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 9, name: "White Heels", img: Clothes.femshoe3, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "shoe"},

    { id: 10, name: "Beige Short-Sleeve Shirt", img: Clothes.unitop1, color: ["beige"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 11, name: "Black Tank Top", img: Clothes.unitop2, color: ["black"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 12, name: "Blue Short-Sleeve Button Up", img: Clothes.unitop3, color: ["blue"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 13, name: "Black Dress Pants", img: Clothes.unibottom1, color: ["black"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["business/professional"], category: "bottom"},
    { id: 15, name: "Brown Shorts", img: Clothes.unibottom2, color: ["brown"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 14, name: "Green Army Pants", img: Clothes.unibottom3, color: ["green"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["streetwear"], category: "bottom"},
    { id: 16, name: "White Crocs", img: Clothes.unishoe1, color: ["white"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "shoe"},
    { id: 17, name: "White Sneakers", img: Clothes.unishoe2, color: ["white"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 18, name: "Tan Sneakers", img: Clothes.unishoe3, color: ["brown"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["streetwear"], category: "shoe"},

    { id: 21, name: "Floral White Shirt", img: Clothes.masctop1, color: ["multi"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 19, name: "White Short-Sleeve Shirt", img: Clothes.masctop2, color: ["white"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 20, name: "Grey Ribbed Polo", img: Clothes.masctop3, color: ["grey"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["business/professional"], category: "top"},
    { id: 22, name: "Brown Shorts", img: Clothes.mascbottom1, color: ["brown"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 23, name: "Beige Baggy Pants", img: Clothes.mascbottom2, color: ["beige"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 24, name: "Black Ruffled Shorts", img: Clothes.mascbottom3, color: ["black"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 25, name: "White Sneakers", img: Clothes.mascshoe1, color: ["white"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 26, name: "Navy Blue Canvas", img: Clothes.mascshoe2, color: ["blue"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 27, name: "Brown Sneakers", img: Clothes.mascshoe3, color: ["brown"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["going-out/cute"], category: "shoe"},

    { id: 28, name: "Mermaid Top", img: Clothes.femtop4, color: ["multi"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 29, name: "Dark Blue Button Up", img: Clothes.masctop4, color: ["blue"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["business/professional"], category: "top"},
    { id: 30, name: "Basic Top", img: Clothes.unitop4, color: ["grey"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 31, name: "White Pants", img: Clothes.fembottom4, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 32, name: "White Slacks", img: Clothes.mascbottom4, color: ["white"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["streetwear"], category: "bottom"},
    { id: 33, name: "White Drawstring Pants", img: Clothes.unibottom4, color: ["white"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 34, name: "White Converse Heels", img: Clothes.femshoe4, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 35, name: "Red Leather Sneakers", img: Clothes.mascshoe4, color: ["red"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 36, name: "Black Leather Boots", img: Clothes.unishoe4, color: ["black"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["going-out/cute"], category: "shoe"},

    { id: 37, name: "Ruffled Pink Tank Top", img: Clothes.femtop5, color: ["pink"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 38, name: "Green Linen Shirt", img: Clothes.masctop5, color: ["green"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["business/professional"], category: "top"},
    { id: 39, name: "Essentials Hoodie", img: Clothes.unitop5, color: ["beige"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 40, name: "Blue Flare Jeans", img: Clothes.fembottom5, color: ["blue"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "bottom"},
    { id: 41, name: "Blue Ripped Jeans", img: Clothes.mascbottom5, color: ["blue"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["streetwear"], category: "bottom"},
    { id: 42, name: "Gray Sweatpants", img: Clothes.unibottom5, color: ["grey"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 43, name: "White Strappy Sandals", img: Clothes.femshoe5, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 44, name: "White Sandals", img: Clothes.mascshoe5, color: ["white"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["casual/comfy"], category: "shoe"},
    { id: 45, name: "Brown Slides", img: Clothes.unishoe5, color: ["brown"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["casual/comfy"], category: "shoe"},

    { id: 46, name: "Black Tank Top", img: Clothes.femtop6, color: ["black"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 47, name: "Blue Star Jeans", img: Clothes.fembottom6, color: ["blue"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["streetwear"], category: "bottom"},
    { id: 48, name: "Black Sandals", img: Clothes.femshoe6, color: ["black"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["casual/comfy"], category: "shoe"},
    { id: 49, name: "Black Hawaiian Leaf Shirt", img: Clothes.masctop6, color: ["black"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 50, name: "Grey Jorts", img: Clothes.mascbottom6, color: ["grey"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["streetwear"], category: "bottom"},
    { id: 51, name: "Black Sandals", img: Clothes.mascshoe6, color: ["black"], occasion: ["music-festival"], gender: ["masculine"], aesthetic: ["casual/comfy"], category: "shoe"},
    { id: 52, name: "Black Graphic T-Shirt", img: Clothes.unitop6, color: ["black"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["streetwear"], category: "top"},
    { id: 53, name: "Black Jorts", img: Clothes.unibottom6, color: ["black"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["streetwear"], category: "bottom"},
    { id: 54, name: "Green Converse", img: Clothes.unishoe6, color: ["green"], occasion: ["music-festival"], gender: ["unisex"], aesthetic: ["going-out/cute"], category: "shoe"},

    // NEW ITEMS 55-80
    { id: 55, name: "Black Suit Jacket", img: Clothes.item55, color: ["black"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["business/professional", "formal/elegant"], category: "top"},
    { id: 56, name: "White Suit Jacket", img: Clothes.item56, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["business/professional", "formal/elegant"], category: "top"},
    { id: 57, name: "Pink Blouse", img: Clothes.item57, color: ["pink"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["business/professional", "formal/elegant"], category: "top"},
    { id: 58, name: "Yellow/Beige Blouse", img: Clothes.item58, color: ["yellow", "beige"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["formal/elegant"], category: "top"},
    { id: 59, name: "Orange/Beige Dress Shirt", img: Clothes.item59, color: ["orange", "beige"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["business/professional"], category: "top"},
    { id: 60, name: "White Dress Pants", img: Clothes.item60, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["business/professional", "formal/elegant"], category: "bottom"},
    { id: 61, name: "Black Dress Pants", img: Clothes.item61, color: ["black"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["business/professional", "formal/elegant"],  category: "bottom"},
    { id: 62, name: "Beige/Brown Dress Pants", img: Clothes.item62, color: ["brown", "beige"], occasion: ["music-festival"], gender: ["feminine", "unisex"], aesthetic: ["business/professional", "formal/elegant"], category: "bottom"},
    { id: 63, name: "White/Cream Dress Pants", img: Clothes.item63, color: ["white", "beige"], occasion: ["music-festival"], gender: ["feminine", "unisex"], aesthetic: ["business/professional", "formal/elegant"], category: "bottom"},


    { id: 64, name: "Black Maxi Skirt", img: Clothes.item64, color: ["black"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["business/professional", "formal/elegant"], category: "bottom"},
    { id: 65, name: "Black Heels", img: Clothes.item65, color: ["black"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["business/professional", "formal/elegant"], category: "shoe"},
    { id: 66, name: "Dark Blue Dress Shoes", img: Clothes.item66, color: ["blue"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["formal/elegant", "business/professional"], category: "shoe"},
    { id: 67, name: "Dark-blue Heels", img: Clothes.item67, color: ["blue"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["business/professional", "formal/elegant"], category: "shoe"},
    { id: 68, name: "Navy Blue Flats", img: Clothes.item68, color: ["blue"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["business/professional", "formal/elegant", "going-out/cute"], category: "shoe"},
    { id: 69, name: "White Dress Shoes", img: Clothes.item69, color: ["white"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["formal/elegant", "business/professional"], category: "shoe"},
    { id: 70, name: "Navy Blue Suit Jacket", img: Clothes.item70, color: ["blue"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["business/professional", "formal/elegant"], category: "top"},
    { id: 71, name: "Grey Suit Jacket", img: Clothes.item71, color: ["grey"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["business/professional", "formal/elegant"], category: "top"},
    { id: 72, name: "Brown Suit Jacket", img: Clothes.item72, color: ["brown"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["business/professional", "formal/elegant"], category: "top"},


    { id: 73, name: "Beige/Brown Dress Shirt", img: Clothes.item73, color: ["brown", "beige"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["business/professional"], category: "top"},
    { id: 74, name: "Red Dress Shirt", img: Clothes.item74, color: ["red"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["business/professional"], category: "top"},
    { id: 75, name: "Black Dress Pants", img: Clothes.item75, color: ["black"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["business/professional", "formal/elegant"], category: "bottom"},
    { id: 76, name: "Grey Dress Pants", img: Clothes.item76, color: ["grey"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["business/professional", "formal/elegant"], category: "bottom"},
    { id: 77, name: "Beige Dress Pants", img: Clothes.item77, color: ["beige"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["business/professional", "formal/elegant"], category: "bottom"},
    { id: 78, name: "Navy Dress Pants", img: Clothes.item78, color: ["blue"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["business/professional", "formal/elegant"], category: "bottom"},
    { id: 79, name: "Dark Blue Dress Pants", img: Clothes.item79, color: ["blue"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["business/professional", "formal/elegant"], category: "bottom"},
    { id: 80, name: "Black Dress Shoes", img: Clothes.item80, color: ["black"], occasion: ["music-festival"], gender: ["masculine", "unisex"], aesthetic: ["business/professional", "formal/elegant"], category: "shoe"},

    // NEW ITEMS 81-106
    { id: 81, name: "White Halter Top", img: Clothes.item81, color: ["white"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 82, name: "Black Twist Front Cami", img: Clothes.item82, color: ["black"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "top"},
    { id: 83, name: "Brown Asymmetrical Top", img: Clothes.item83, color: ["brown"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "top"},
    { id: 84, name: "Grey Crewneck Sweater", img: Clothes.item84, color: ["grey"], occasion: ["music-festival"], gender: ["feminine", "unisex", "masculine"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 85, name: "Pearl Embroidered Top", img: Clothes.item85, color: ["beige"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "top"},
    { id: 86, name: "Faded Blue Flare Jeans", img: Clothes.item86, color: ["blue"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "bottom"},
    { id: 87, name: "Purple Wrap Skirt", img: Clothes.item87, color: ["purple"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "bottom"},
    { id: 88, name: "Green Baggy Jeans", img: Clothes.item88, color: ["green"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "bottom"},
    { id: 89, name: "Patchwork Denim Skirt", img: Clothes.item89, color: ["blue", "multi"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "bottom"},
    { id: 90, name: "Magenta Wide-Leg Pants", img: Clothes.item90, color: ["pink", "purple"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "bottom"},
    { id: 91, name: "Yellow Flats", img: Clothes.item91, color: ["yellow"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 92, name: "Burgundy Pumps", img: Clothes.item92, color: ["red", "brown"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["going-out/cute"], category: "shoe"},
    { id: 93, name: "Orange Sneakers", img: Clothes.item93, color: ["orange"], occasion: ["music-festival"], gender: ["feminine", "unisex", "masculine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "shoe"},
    { id: 94, name: "Brown Collared Top", img: Clothes.item94, color: ["brown"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "top"},
    { id: 95, name: "Boxy Short-Sleeved Shirt", img: Clothes.item95, color: ["grey"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "top"},
    { id: 96, name: "White Linen Shirt", img: Clothes.item96, color: ["white"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "top"},
    { id: 97, name: "Black Button-Down Tee", img: Clothes.item97, color: ["black"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "top"},
    { id: 98, name: "Basic Beige T-Shirt", img: Clothes.item98, color: ["beige"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["casual/comfy"], category: "top"},
    { id: 99, name: "Straight-legged Jeans", img: Clothes.item99, color: ["blue"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "bottom"},
    { id: 100, name: "Green Chinos", img: Clothes.item100, color: ["green"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "bottom"},
    { id: 101, name: "Gradient Casual Shorts", img: Clothes.item101, color: ["purple", "multi"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["casual/comfy"], category: "bottom"},
    { id: 102, name: "Slim-Fit Jeans", img: Clothes.item102, color: ["pink", "red"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "bottom"},
    { id: 103, name: "Chino Shorts", img: Clothes.item103, color: ["blue"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "bottom"},
    { id: 104, name: "Canvas Platform Sneakers", img: Clothes.item104, color: ["red"], occasion: ["music-festival"], gender: ["feminine", "unisex", "masculine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "shoe"},
    { id: 105, name: "Leather Sneakers", img: Clothes.item105, color: ["orange", "brown", "beige", "white"], occasion: ["music-festival"], gender: ["feminine", "unisex", "masculine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "shoe"},
    { id: 106, name: "Lace-up Sneakers", img: Clothes.item106, color: ["yellow"], occasion: ["music-festival"], gender: ["feminine", "unisex", "masculine"], aesthetic: ["going-out/cute", "casual/comfy"], category: "shoe"},

    // NEW ITEMS 107-132
    { id: 107, name: "Moody Girls Top", img: Clothes.item107, color: ["green", "blue"], occasion: ["music-festival"], gender: ["unisex", "feminine"], aesthetic: [" streetwear", "casual/comfy"], category: "top"},
    { id: 108, name: "California Top", img: Clothes.item108, color: ["purple"], occasion: ["music-festival"], gender: ["unisex", "feminine"], aesthetic: [" streetwear", "casual/comfy"], category: "top"},
    { id: 109, name: "Green Flowy Top", img: Clothes.item109, color: ["green"], occasion: ["music-festival"], gender: ["feminine"], aesthetic: ["streetwear", "going-out/cute"], category: "top"},
    { id: 110, name: "Green Butterfly Street Top", img: Clothes.item110, color: ["green"], occasion: ["music-festival"], gender: ["unisex", "feminine"], aesthetic: ["streetwear", "casual/comfy"], category: "top"},
    { id: 111, name: "Brown Heels", img: Clothes.item111, color: ["brown"], occasion: ["music-festival"], gender: ["unisex", "feminine"], aesthetic: ["going-out/cute", "business/professional"], category: "shoe"},
    { id: 112, name: "Golden Heels", img: Clothes.item112, color: ["brown", "yellow", "beige"], occasion: ["music-festival"], gender: ["unisex", "feminine"], aesthetic: ["going-out/cute", "business/professional"], category: "shoe"},
    { id: 113, name: "Golden Strap Heels", img: Clothes.item113, color: ["brown", "yellow", "beige"], occasion: ["music-festival"], gender: ["unisex", "feminine"], aesthetic: ["going-out/cute", "business/professional"], category: "shoe"},
    { id: 114, name: "White Strap Heels", img: Clothes.item114, color: ["white", "beige"], occasion: ["music-festival"], gender: ["unisex", "feminine"], aesthetic: ["going-out/cute", "business/professional"], category: "shoe"},
    { id: 115, name: "Orange Pants", img: Clothes.item115, color: ["orange"], occasion: ["music-festival"], gender: ["unisex", "feminine"], aesthetic: ["going-out/cute", "business/professional"], category: "bottom"},
    { id: 116, name: "Red Pants", img: Clothes.item116, color: ["red"], occasion: ["music-festival"], gender: ["unisex", "feminine"], aesthetic: ["going-out/cute", "business/professional"], category: "pants"},
    { id: 117, name: "Pink Pants", img: Clothes.item117, color: ["pink"], occasion: ["music-festival"], gender: ["unisex", "feminine"], aesthetic: ["going-out/cute", "business/professional"], category: "pants"},
    { id: 118, name: "Yellow Skirt", img: Clothes.item118, color: ["yellow"], occasion: ["music-festival"], gender: ["unisex", "feminine"], aesthetic: ["going-out/cute", "business/professional"], category: "pants"},
    { id: 119, name: "Red Skirt", img: Clothes.item119, color: ["red"], occasion: ["music-festival"], gender: ["unisex", "feminine"], aesthetic: ["going-out/cute", "business/professional"], category: "pants"},
  
  
    { id: 120, name: "Purple Baggy Top", img: Clothes.item120, color: ["purple"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["streetwear", "casual/comfy"], category: "top"},
    { id: 121, name: "Green Baggy Top", img: Clothes.item121, color: ["green"], occasion: ["music-festival"], gender: ["unisex", "feminine", "masculine"], aesthetic: ["streetwear", "casual/comfy"], category: "top"},
    { id: 122, name: "Green Streetwear Top", img: Clothes.item122, color: ["green"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["streetwear", "casual/comfy"], category: "top"},
    { id: 123, name: "Greek God Shirt", img: Clothes.item123, color: ["white", "blue"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["streetwear", "casual/comfy"], category: "top"},
    { id: 124, name: "Blue Tropical Shirt", img: Clothes.item124, color: ["white", "blue"], occasion: ["music-festival"], gender: ["unisex", "masculine"], aesthetic: ["streetwear", "casual/comfy"], category: "top"},

  ]);

  // Storing user prefereces:
  const [preferences, setPreferences] = useState({
    gender: [],
    color: [],
    aesthetic: [],
    occasion: ""
  });

  const [likedItems, setLikedItems] = useState([]);
  const [savedOutfits, setSavedOutfits] = useState([]);
  const [skippedItems, setSkippedItems] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);


  // const saveOutfit = (outfit) => {
  //   setSavedOutfits((prevOutfits) => [...prevOutfits, outfit]);
  // };

  const getBrandAndTitle = (name) => {
    const words = name.split(" ");
    const brand = words[0];
    const title = words.slice(1).join(" ");
    return { brand, title };
  };
  
  const saveOutfit = (outfit) => {
    const top = {
      img: outfit.top.img,
      name: outfit.top.name,
      ...getBrandAndTitle(outfit.top.name)
    };
  
    const bottom = {
      img: outfit.bottom.img,
      name: outfit.bottom.name,
      ...getBrandAndTitle(outfit.bottom.name)
    };
  
    const shoe = {
      img: outfit.shoe.img,
      name: outfit.shoe.name,
      ...getBrandAndTitle(outfit.shoe.name)
    };
  
    const outfitWithMeta = { top, bottom, shoe };
    setSavedOutfits((prev) => [...prev, outfitWithMeta]);
  };
  

  const likeClothing = (id) => {
    const item = clothingItems.find((item) => item.id === id);
    if (item && !likedItems.some((liked) => liked.id === id)) {
      setLikedItems([...likedItems, item]);
    }
  };

  const skipClothing = (id) => {
    if (!skippedItems.includes(id)) {
      setSkippedItems((prev) => [...prev, id]);
    }
  };

  const removeLikedItem = (id) => {
    setLikedItems((prev) => prev.filter((item) => item.id !== id));
    setDeletedItems((prev) => [...prev, id]);
  };

  return (
    <ClothingContext.Provider value={{ clothingItems, likedItems, skippedItems, 
      likeClothing, skipClothing, savedOutfits, saveOutfit, removeLikedItem, deletedItems,
      preferences, setPreferences}}>
      {children}
    </ClothingContext.Provider>
  );
};

export const useClothing = () => useContext(ClothingContext);