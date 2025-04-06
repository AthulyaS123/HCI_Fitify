import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FunctionComponent } from 'react';

import MultiSelect from "./Components/MultiSelect.js"
import backarrowicon from "./Icons/backarrowicon.png";
import { useClothing } from "./clothingprovider";
import './filterscreen.css';


const FilterScreen = () => {
	const navigate = useNavigate();

  	return (
    		<div className="container">
				<div className="row">
					<div className="col-1">
						<img className="back-arrow" src={backarrowicon}/>
					</div>
				</div>

				<div className="row">
					<div className="header-text">Welcome!</div>
				</div>
				<div className="row">
					<div className="desc-text">Tell Us Your Style</div>
				</div>

				{/* Dropdown Area */}
				{/* multi-select dropdowns: gender, color, aesthetic*/}
				{/* single-select dropdown: occasion*/}
				<div className="row">
					<MultiSelect 
						label="Gender"
						options={["Feminine", "Masculine", "Unisex"]}/>

				</div>
				<div className="row">
					<MultiSelect
					label="Color"
					options={['Red', 'Blue', 'Green', 'Neutral', 'Pastel']}/>
				</div>
				<div className="row">
					<MultiSelect
						label="Aesthetic"
						options={['Y2K', 'Goth', 'Cottagecore', 'Grunge', 'Streetwear']}/>
				</div>
				
				<button className="save-button" onClick={() => navigate("/swipe")}>Save</button>

      			
    		</div>);
};

export default FilterScreen;
