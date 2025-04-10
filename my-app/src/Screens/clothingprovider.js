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

    // NEWLY ADDED CLOTHES
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


  const saveOutfit = (outfit) => {
    setSavedOutfits((prevOutfits) => [...prevOutfits, outfit]);
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