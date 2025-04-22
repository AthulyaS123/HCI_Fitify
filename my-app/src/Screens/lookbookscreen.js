import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { useClothing } from "./clothingprovider";
import SavedOutfit from './Components/SavedOutfit';

import preficon from './Icons/preficon.png';
import hearticon from './Icons/whiteheart.png';
import fitsicon from './Icons/bluebook.png';
import mixandmatchicon from './Icons/mixandmatchicon.png';
import closeticon from './Icons/closeticon.png';
import usericon from './Icons/user.png';
import questionicon from './Icons/question.png';
import nextarrowicon from "./Icons/nextarrowicon.png";
import previousarrowicon from "./Icons/previousarrowicon.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import './lookbookscreen.css';

const Lookbook = () => {
  const { savedOutfits } = useClothing();

  const [showModal, setShowModal] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [showInfoPopup, setShowInfoPopup] = useState(false);


  const handleShowModal = (outfit) => {
    setSelectedOutfit(outfit);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOutfit(null);
  };

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
          <img
            className="d-block mx-auto"
            src={questionicon}
            alt="Info button"
            width="30"
            style={{ cursor: "pointer" }}
            onClick={() => setShowInfoPopup(true)}
          />
        </div>

        <div className="col-8">
          <p className="pageheader">Lookbook</p>
        </div>
        <div className="col-2">
          <img className="d-block mx-auto" src={usericon} alt="Profile" width="40" />
        </div>
      </div>

      {/* prev and next screen arrows */}
      <div className="top-content row align-items-center next-arrows">
        <div className="col-1">
          <Link to="/mix-and-match" className="nav-link"> 
            <img className="d-block mx-auto" src={previousarrowicon} alt="Go to previous screen" width="27" />
          </Link>
        </div>
        
      </div>

      {/* Saved Outfits */}
      {savedOutfits?.length > 0 && (
        <div className="saved-outfits">
          <div className="row outfit-row justify-content-center">
            {savedOutfits.map((outfit, index) => (
              <div key={index} className="col-auto" onClick={() => handleShowModal(outfit)} style={{ cursor: 'pointer' }}>
                <SavedOutfit 
                  top={outfit.top.img} 
                  bottom={outfit.bottom.img} 
                  shoe={outfit.shoe.img} 
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Buy This Outfit</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            {selectedOutfit && (
              <div className="container">
                {/* Tops */}
                <div className="row mb-4 align-items-start">
                  <div className="col-4 text-center">
                    <img
                      src={selectedOutfit.top.img}
                      alt="Top"
                      className="img-fluid"
                      style={{ maxHeight: '120px', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="col-8">
                    <p className="fw-semibold mb-1">Tops:</p>
                    <ul className="ps-3 mb-0">
                      {["PacSun", "Urban Outfitters", "Aerie", "Macys"].map((brand) => (
                        <li key={brand}>
                          <a href="#" className="text-decoration-underline">
                            {brand} {selectedOutfit.top.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottoms */}
              <div className="row mb-4 align-items-start">
                <div className="col-4 text-center">
                  <img
                    src={selectedOutfit.bottom.img}
                    alt="Bottom"
                    className="img-fluid"
                    style={{ maxHeight: '150px', objectFit: 'contain' }}
                  />
                </div>
                <div className="col-8">
                  <p className="fw-semibold mb-1">Bottoms:</p>
                  <ul className="ps-3 mb-0">
                    {["American Eagle", "PacSun", "Levi’s"].map((brand) => (
                      <li key={brand}>
                        <a href="#" className="text-decoration-underline">
                          {brand} {selectedOutfit.bottom.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

                {/* Shoes */}
                <div className="row mb-2 align-items-start">
                  <div className="col-4 text-center">
                    <img
                      src={selectedOutfit.shoe.img}
                      alt="Shoe"
                      className="img-fluid"
                      style={{ maxHeight: '100px', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="col-8">
                    <p className="fw-semibold mb-1">Shoes:</p>
                    <ul className="ps-3 mb-0">
                      {["New Balance", "Adidas", "Nike"].map((brand) => (
                        <li key={brand}>
                          <a href="#" className="text-decoration-underline">
                            {brand} {selectedOutfit.shoe.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Bottom Navigation */}
      <div className="row navbar fixed-bottom">
        <div className="col text-center">
          <Link to="/swipe" className="nav-link">
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
            <div className="nav-link">Mix & Match</div>
          </Link>
        </div>
        <div className="col text-center">
          <Link to="/lookbook" className="nav-link-current">
            <img src={fitsicon} alt="Lookbook" width="40" />
            <div>Lookbook</div>
          </Link>
        </div>
      </div>
      {showInfoPopup && (
      <div className="info-popup-overlay" onClick={() => setShowInfoPopup(false)}>
        <div className="info-popup" onClick={(e) => e.stopPropagation()}>
          <h5>How to access Lookbook</h5>
          <p>👕 Your saved outfits are all stored in the lookbook </p>
          <p>👖 Press on the outfit to see links of where to buy these outfits </p>
          <p>👟 Fitify: Swipe + Style </p>
          <button className="btn btn-primary mt-2" onClick={() => setShowInfoPopup(false)}>
            Got it!
          </button>
        </div>
      </div>
    )}
    </div>
  );
};

export default Lookbook;
