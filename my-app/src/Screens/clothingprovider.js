import React, { createContext, useState, useContext } from "react";
import * as Clothes from './Clothes';

const ClothingContext = createContext();


export const ClothingProvider = ({ children }) => {
  const [clothingItems, setClothingItems] = useState([
    { id: 1, name: "White Floral Babydoll Top", img: Clothes.femtop1, color: "white", occasion: "music-festival", gender: "feminine", aesthetic: "cottagecore", category: "top"},
    { id: 2, name: "Denim Halter Top", img: Clothes.femtop2, color: "blue", occasion: "music-festival", gender: "feminine", aesthetic: "western", category: "top"},
    { id: 3, name: "Floral Tank Top", img: Clothes.femtop3, color: "white", occasion: "music-festival", gender: "feminine", aesthetic: "cottagecore", category: "top"},
    { id: 4, name: "Denim Shorts", img: Clothes.fembottom1, color: "blue", occasion: "music-festival", gender: "feminine", aesthetic: "western", category: "bottom"},
    { id: 5, name: "White Ruffled Skirt", img: Clothes.fembottom2, color: "white", occasion: "music-festival", gender: "feminine", aesthetic: "coquette", category: "bottom"},
    { id: 6, name: "Floral Maxi Skirt", img: Clothes.fembottom3, color: "black", occasion: "music-festival", gender: "feminine", aesthetic: "preppy", category: "bottom"},
    { id: 7, name: "White Converse", img: Clothes.femshoe1, color: "white", occasion: "music-festival", gender: "feminine", aesthetic: "streetwear",  category: "shoe"},
    { id: 8, name: "Brown Platform Boots", img: Clothes.femshoe1, color: "brown", occasion: "music-festival", gender: "feminine", aesthetic: "western", category: "shoe"},
    { id: 9, name: "White Heels", img: Clothes.femshoe3, color: "white", occasion: "music-festival", gender: "feminine", aesthetic: "preppy", category: "shoe"},

    { id: 10, name: "Beige Short-Sleeve Shirt", img: Clothes.unitop1, color: "beige", occasion: "music-festival", gender: "unisex", aesthetic: "casual", category: "top"},
    { id: 11, name: "Black Tank Top", img: Clothes.unitop2, color: "black", occasion: "music-festival", gender: "unisex", aesthetic: "casual",  category: "top"},
    { id: 12, name: "Blue Short-Sleeve Button Up", img: Clothes.unitop3, color: "blue", occasion: "music-festival", gender: "unisex", aesthetic: "western", category: "top"},
    { id: 13, name: "Black Dress Pants", img: Clothes.unibottom1, color: "black", occasion: "music-festival", gender: "unisex", aesthetic: "preppy", category: "bottom"},
    { id: 15, name: "Brown Shorts", img: Clothes.unibottom2, color: "brown", occasion: "music-festival", gender: "unisex", aesthetic: "casual", category: "bottom"},
    { id: 14, name: "Green Army Pants", img: Clothes.unibottom3, color: "green", occasion: "music-festival", gender: "unisex", aesthetic: "streetwear", category: "bottom"},
    { id: 16, name: "White Crocs", img: Clothes.unishoe1, color: "white", occasion: "music-festival", gender: "unisex", aesthetic: "casual", category: "shoe"},
    { id: 17, name: "White Sneakers", img: Clothes.unishoe2, color: "black", occasion: "music-festival", gender: "unisex", aesthetic: "preppy", category: "shoe"},
    { id: 18, name: "Tan Sneakers", img: Clothes.unishoe3, color: "brown", occasion: "music-festival", gender: "unisex", aesthetic: "streetwear", category: "shoe"},
    
    { id: 21, name: "Floral White Shirt", img: Clothes.masctop1, color: "multi", occasion: "music-festival", gender: "masculine", aesthetic: "fun", category: "top"},
    { id: 19, name: "White Short-Sleeve Shirt", img: Clothes.masctop2, color: "white", occasion: "music-festival", gender: "masculine", aesthetic: "casual", category: "top"},
    { id: 20, name: "Grey Ribbed Polo", img: Clothes.masctop3, color: "grey", occasion: "music-festival", gender: "masculine", aesthetic: "clean", category: "top"},
    { id: 22, name: "Brown Shorts", img: Clothes.mascbottom1, color: "brown", occasion: "music-festival", gender: "masculine", aesthetic: "casual", category: "bottom"},
    { id: 23, name: "Beige Baggy Pants", img: Clothes.mascbottom2, color: "beige", occasion: "music-festival", gender: "masculine", aesthetic: "clean", category: "bottom"},
    { id: 24, name: "Black Ruffled Shorts", img: Clothes.mascbottom3, color: "black", occasion: "music-festival", gender: "masculine", aesthetic: "casual", category: "bottom"},
    { id: 25, name: "White Sneakers", img: Clothes.mascshoe1, color: "white", occasion: "music-festival", gender: "masculine", aesthetic: "preppy", category: "shoe"},
    { id: 26, name: "Navy Blue Canvas", img: Clothes.mascshoe2, color: "blue", occasion: "music-festival", gender: "masculine", aesthetic: "casual", category: "shoe"},
    { id: 27, name: "Brown Sneakers", img: Clothes.mascshoe3, color: "brown", occasion: "music-festival", gender: "masculine", aesthetic: "clean", category: "shoe"},
    

  ]);

  const [likedItems, setLikedItems] = useState([]);
  const [savedOutfits, setSavedOutfits] = useState([]);
  const [skippedItems, setSkippedItems] = useState([]);

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

  return (
    <ClothingContext.Provider value={{ clothingItems, likedItems, skippedItems, likeClothing, skipClothing, savedOutfits, saveOutfit }}>
      {children}
    </ClothingContext.Provider>
  );
};

export const useClothing = () => useContext(ClothingContext);