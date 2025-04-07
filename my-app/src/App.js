import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClosetScreen from "./Screens/closetscreen.js";
import MixAndMatchScreen from "./Screens/mixandmatchscreen.js";
import SwipingScreen from "./Screens/swipescreen.js";
import LandingScreen from "./Screens/landingscreen.js";
import CreateAccountScreen from "./Screens/createaccountscreen.js";
import FilterScreen from "./Screens/filterscreen.js";
import LookbookScreen from "./Screens/lookbookscreen.js";
// import PreferenceScreen from "./Screens/preferencescreen.js";


import { ClothingProvider } from "./Screens/clothingprovider";

function App() {
  return (
    <ClothingProvider>
      <Router basename="/HCI_Fitify">
        <Routes>
          <Route path="/" element={<FilterScreen />} />
          <Route path="/swipe" element={<SwipingScreen />} />
          <Route path="/closet" element={<ClosetScreen />} />
          <Route path="/mix-and-match" element={<MixAndMatchScreen/>} />
          <Route path="/lookbook" element={<LookbookScreen/>} />
        </Routes>
      </Router>
    </ClothingProvider>
  );
}

export default App;
