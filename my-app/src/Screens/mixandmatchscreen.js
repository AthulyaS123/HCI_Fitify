import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useClothing } from './clothingprovider';

import preficon from './Icons/preficon.png';
import hearticon from './Icons/whiteheart.png';
import fitsicon from './Icons/fitsicon.png';
import mixandmatchicon from './Icons/bluescissors.png';
import closeticon from './Icons/closeticon.png';
import usericon from './Icons/user.png';
import questionicon from './Icons/question.png';
import leftarrow from './Icons/arrowlefticon.png';
import rightarrow from './Icons/arrowrighticon.png';

import './mixandmatchscreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MixMatch = () => {
  const { likedItems, saveOutfit } = useClothing();

  // Filter by category
  const tops = likedItems.filter((item) => item.category === 'top');
  const bottoms = likedItems.filter((item) => item.category === 'bottom');
  const shoes = likedItems.filter((item) => item.category === 'shoe');

  // Indices for navigation
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setbottomIndex] = useState(0);
  const [shoeIndex, setShoeIndex] = useState(0);

  // Handlers
  const handleNext = (type) => {
    if (type === 'top' && tops.length > 0) setTopIndex((topIndex + 1) % tops.length);
    if (type === 'bottom' && bottoms.length > 0) setbottomIndex((bottomIndex + 1) % bottoms.length);
    if (type === 'shoe' && shoes.length > 0) setShoeIndex((shoeIndex + 1) % shoes.length);
  };

  const handlePrev = (type) => {
    if (type === 'top' && tops.length > 0) setTopIndex((topIndex - 1 + tops.length) % tops.length);
    if (type === 'bottom' && bottoms.length > 0) setbottomIndex((bottomIndex - 1 + bottoms.length) % bottoms.length);
    if (type === 'shoe' && shoes.length > 0) setShoeIndex((shoeIndex - 1 + shoes.length) % shoes.length);
  };

  const handleSaveOutfit = () => {
    if (tops.length > 0 && bottoms.length > 0 && shoes.length > 0) {
      const newOutfit = {
        top: tops[topIndex],
        bottom: bottoms[bottomIndex],
        shoe: shoes[shoeIndex],
      };
      saveOutfit(newOutfit);
      alert ("Your outfit has been saved!")
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
          <p className="pageheader">Mix & Match</p>
        </div>
        <div className="col-2">
          <img className="d-block mx-auto" src={usericon} alt="Profile" width="40" />
        </div>
      </div>

      {/* Shirt */}
      <div className="row align-items-center my-2">
        <div className="col">
          <img className="left-arrow d-block mx-auto" src={leftarrow} alt="Prev Top" width="30" onClick={() => handlePrev('top')} />
        </div>
        <div className="col">
          {tops.length > 0 && <img className="shirt-img d-block mx-auto" src={tops[topIndex].img} alt="Top" width="150" />}
        </div>
        <div className="col">
          <img className="right-arrow d-block mx-auto" src={rightarrow} alt="Next Top" width="30" onClick={() => handleNext('top')} />
        </div>
      </div>

      {/* bottom */}
      <div className="row align-items-center my-2">
        <div className="col">
          <img className="left-arrow d-block mx-auto" src={leftarrow} alt="Prev bottom" width="30" onClick={() => handlePrev('bottom')} />
        </div>
        <div className="col">
          {bottoms.length > 0 && <img className="bottom-img d-block mx-auto" src={bottoms[bottomIndex].img} alt="bottom" width="150" />}
        </div>
        <div className="col">
          <img className="right-arrow d-block mx-auto" src={rightarrow} alt="Next bottom" width="30" onClick={() => handleNext('bottom')} />
        </div>
      </div>

      {/* Shoes */}
      <div className="row align-items-center my-2">
        <div className="col">
          <img className="left-arrow d-block mx-auto" src={leftarrow} alt="Prev Shoe" width="30" onClick={() => handlePrev('shoe')} />
        </div>
        <div className="col">
          {shoes.length > 0 && <img className="shoe-img d-block mx-auto" src={shoes[shoeIndex].img} alt="Shoe" width="150" />}
        </div>
        <div className="col">
          <img className="right-arrow d-block mx-auto" src={rightarrow} alt="Next Shoe" width="30" onClick={() => handleNext('shoe')} />
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="row navbar fixed-bottom">
        <div className="col text-center">
          <Link to="/" className="nav-link">
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
          <Link to="/mix-and-match" className="nav-link-current">
            <img src={mixandmatchicon} alt="Mix & Match" width="40" />
            <div className="nav-link">Mix & Match</div>
          </Link>
        </div>
        <div className="col text-center">
          <Link to="/lookbook" className="nav-link">
            <img src={fitsicon} alt="Lookbook" width="40" />
            <div>Lookbook</div>
          </Link>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <button className="save-outfit" onClick={handleSaveOutfit}>
            Save Outfit
          </button>
        </div>
      </div>

    </div>
  );
};

export default MixMatch;
