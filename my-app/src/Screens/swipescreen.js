import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useClothing } from "./clothingprovider"; // Correct import
import preficon from "./Icons/preficon.png";
import hearticon from "./Icons/hearticon.png";
import swipehearticon from "./Icons/swipehearticon.png";
import shoeicon from "./Icons/shoeicon.png";
import swipexicon from "./Icons/swipexicon.png";
import shirticon from "./Icons/shirticon.png";
import panticon from "./Icons/panticon.png";
import fitsicon from "./Icons/fitsicon.png";
import mixandmatchicon from "./Icons/mixandmatchicon.png";
import closeticon from "./Icons/closeticon.png";
import usericon from "./Icons/user.png";
import questionicon from "./Icons/question.png";
import nextarrowicon from "./Icons/nextarrowicon.png";
import previousarrowicon from "./Icons/previousarrowicon.png";

import "./swipescreen.css";

const SwipingScreen = () => {
  const { clothingItems, likeClothing, skipClothing, skippedItems, likedItems, deletedItems, preferences } = useClothing();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedType, setSelectedType] = useState("top"); // Default to "top"
  

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedType, likedItems, skippedItems]);

  // Filter items based on user preferences
  const filterByPreferences = (item) => {
    const matchGender =
      preferences.gender.length === 0 ||
      preferences.gender.some((pref) => item.gender.includes(pref));

    const matchColor =
      preferences.color.length === 0 ||
      preferences.color.some((pref) => item.color.includes(pref));

    const matchAesthetic =
      preferences.aesthetic.length === 0 ||
      preferences.aesthetic.some((pref) => item.aesthetic.includes(pref));

    return matchGender && matchColor && matchAesthetic;
  };

  // Filter items based on selected type
  const filteredItems = clothingItems
    .filter((item) => item.category === selectedType)
    .filter(filterByPreferences)
    .filter((item) => 
      !likedItems.some((liked) => liked.id === item.id) &&
      !skippedItems.includes(item.id) && 
      !deletedItems.includes(item.id)
  );


  const handleSwipe = (direction) => {
    if (direction === "right") {
      likeClothing(filteredItems[currentIndex].id);
    } else if (direction === "left") {
      skipClothing(filteredItems[currentIndex].id);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const currentItem = filteredItems[currentIndex];

  return (
    <div className="container">
      {/* Header */}
      <div className="top-content row align-items-center">
        <div className="col-1">
          <Link to="/">
            <img className="d-block mx-auto" src={preficon} alt="Go to preferences screen" width="30" />
          </Link>
        </div>

        <div className="col-1">
          <img className="d-block mx-auto" src={questionicon} alt="Info button" width="30" />
        </div>

        <div className="col-8">
          <p className="pageheader">Swipe to Save</p>
        </div>

        <div className="col-2">
          <img className="d-block mx-auto" src={usericon} alt="Profile button" width="40" />
        </div>
      </div>

      {/* prev and next screen arrows */}
      <div className="top-content row align-items-center next-arrows">
        <div className="col-1">
          <Link to="/" className="nav-link"> 
            <img className="d-block mx-auto" src={previousarrowicon} alt="Go to previous screen" width="27" />
          </Link>
        </div>
        <div className="col-1"></div>
        <div className="col-8"></div>
        <div className="col-2">
          <Link to="/closet" className="nav-link"> 
            <img className="d-block mx-auto" src={nextarrowicon} alt="Go to next screen" width="30"/>
          </Link>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="topnav row">
        <div
          className={`col ${selectedType === "top" ? "selected" : ""}`}
          onClick={() => setSelectedType("top")}
        >
          <img className="d-block mx-auto" src={shirticon} alt="Shirts" width="30" />
        </div>

        <div
          className={`col ${selectedType === "bottom" ? "selected" : ""}`}
          onClick={() => setSelectedType("bottom")}
        >
          <img className="d-block mx-auto" src={panticon} alt="Pants" width="30" />
        </div>

        <div
          className={`col ${selectedType === "shoe" ? "selected" : ""}`}
          onClick={() => setSelectedType("shoe")}
        >
          <img className="d-block mx-auto" src={shoeicon} alt="Shoes" width="30" />
        </div>
      </div>

      {/* Swiping Area */}
      <div className="swiping-info d-flex flex-column justify-content-center">
        {currentIndex >= filteredItems.length ? (
          <div className="no-more-items text-center mt-4">
            <h4>No more items to swipe!</h4>
          </div>
        ) : (
          <>
            <div className="product-info row">
              <div className="col-12">
                <p>{currentItem.name}</p>
                <p>{currentItem.price}</p>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-2">
                <img
                  className="swipe-icon d-block mx-auto"
                  src={swipexicon}
                  alt="Dislike"
                  width="30"
                  onClick={() => handleSwipe("left")}
                />
              </div>

              <div className="col">
                <img
                  className="clothing d-block mx-auto"
                  src={currentItem.img}
                  alt={currentItem.name}
                  width="220"
                />
              </div>

              <div className="col-2">
                <img
                  className="swipe-icon d-block mx-auto"
                  src={swipehearticon}
                  alt="Like"
                  width="30"
                  onClick={() => handleSwipe("right")}
                />
              </div>
            </div>
          </>
        )}
      </div>


      {/* Bottom Navigation */}
      <div className={`row navbar fixed-bottom ${selectedType}-selected`}>
        <div className="col text-center">
          <Link to="/swipe" className="nav-link-current">
            <img src={hearticon} alt="Swipe" width="40" />
            <div>Swipe</div>
          </Link>
        </div>

        <div className="col text-center">
          <Link to="/closet" className="nav-link">
            <img src={closeticon} alt="Closet" width="40" />
            <div>Closet</div>
          </Link>
        </div>

        <div className="col text-center">
          <Link to="/mix-and-match" className="nav-link">
            <img src={mixandmatchicon} alt="Mix & Match" width="40" />
            <div>Mix & Match</div>
          </Link>
        </div>

        <div className="col text-center">
          <Link to="/lookbook" className="nav-link">
            <img src={fitsicon} alt="Lookbook" width="40" />
            <div>Lookbook</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SwipingScreen;
