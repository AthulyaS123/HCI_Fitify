import React, { useState } from "react";
import { useClothing } from "./clothingprovider";
import { Link } from "react-router-dom";
import "./closetscreen.css";

import preficon from "./Icons/preficon.png";
import questionicon from "./Icons/question.png";
import usericon from "./Icons/user.png";
import trashicon from "./Icons/trashicon.png";
import shirticon from "./Icons/shirticon.png";
import panticon from "./Icons/panticon.png";
import shoeicon from "./Icons/shoeicon.png";
import hearticon from "./Icons/whiteheart.png";
import closeticon from "./Icons/bluewardrobe.png";
import mixandmatchicon from "./Icons/mixandmatchicon.png";
import fitsicon from "./Icons/fitsicon.png";

function ClosetScreen() {
  const { likedItems, removeLikedItem } = useClothing();
  const [selectedType, setSelectedType] = useState("top");
  const [selectedItemId, setSelectedItemId] = useState(null); // for click-to-select

  const filteredItems = likedItems.filter((item) => item.category === selectedType);

  const handleItemClick = (itemId) => {
    setSelectedItemId((prev) => (prev === itemId ? null : itemId)); // toggle selection
  };

  const handleTrashClick = () => {
    if (selectedItemId) {
      removeLikedItem(selectedItemId);
      setSelectedItemId(null);
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="top-content row align-items-center">
        <div className="col-1">
          <img className="d-block mx-auto" src={preficon} alt="Preferences" width="30" />
        </div>
        <div className="col-1">
          <img className="d-block mx-auto" src={questionicon} alt="Info" width="30" />
        </div>
        <div className="col-8">
          <p className="pageheader">Closet</p>
        </div>
        <div className="col-2">
          <img className="d-block mx-auto" src={usericon} alt="Profile" width="40" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="topnav row">
        <div className={`col ${selectedType === "top" ? "selected" : ""}`} onClick={() => setSelectedType("top")}>
          <img className="d-block mx-auto" src={shirticon} alt="Shirts" width="30" />
        </div>
        <div className={`col ${selectedType === "bottom" ? "selected" : ""}`} onClick={() => setSelectedType("bottom")}>
          <img className="d-block mx-auto" src={panticon} alt="Pants" width="30" />
        </div>
        <div className={`col ${selectedType === "shoe" ? "selected" : ""}`} onClick={() => setSelectedType("shoe")}>
          <img className="d-block mx-auto" src={shoeicon} alt="Shoes" width="30" />
        </div>
      </div>

      {/* Display Liked Clothes */}
      <div className="container liked-items">
        <div className="row g-3">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className={`col-4 col-md-3 col-lg-2 d-flex justify-content-center`}
                onClick={() => handleItemClick(item.id)}
              >
                <div
                  className={`border rounded p-2 closet-item ${selectedItemId === item.id ? "selected-glow" : ""}`}
                  style={{ width: "100px", height: "140px", backgroundColor: "#fff" }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="img-fluid rounded"
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-3">No {selectedType}s in your closet yet.</p>
          )}
        </div>
      </div>

      {/* Trash Can */}
      <div className="text-end px-3 mt-3 fixed-bottom" onClick={handleTrashClick}>
        <img className="trashcan" src={trashicon} alt="Delete" width="60" />
      </div>

      {/* Bottom Navigation */}
      <div className={`row navbar fixed-bottom ${selectedType}-selected`}>
        <div className="col text-center">
          <Link to="/swipe" className="nav-link">
            <img src={hearticon} alt="Swipe" width="40" />
            <div>Swipe</div>
          </Link>
        </div>
        <div className="col text-center">
          <Link to="/closet" className="nav-link-current">
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
}

export default ClosetScreen;
