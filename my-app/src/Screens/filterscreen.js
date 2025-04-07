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
	const { setPreferences } = useClothing();	

	const [gender, setGender] = useState([]);
	const [color, setColor] = useState([]);
	const [aesthetic, setAesthetic] = useState([]);
	const [occasion, setOccasion] = useState("");

	const handleSave = () => {
		// Save preferences to context
		setPreferences({
		  gender,
		  color,
		  aesthetic,
		  occasion,
		});
		navigate("/swipe");
	  };

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
				<div className="row">
					<MultiSelect 
						label="Gender"
						options={["feminine", "masculine", "unisex"]}
						onChange={setGender}/>

				</div>
				<div className="row">
					<MultiSelect
					label="Color"
					options={['white', 'black', 'blue', 'brown', 'beige', 'green', 'grey', 'red', 'pink', 'multi']}
					onChange={setColor}/>
				</div>
				<div className="row">
					<MultiSelect
						label="Aesthetic"
						options={['casual', 'streetwear', 'cottagecore', 'western', 'coquette', 'preppy', 'clean']}
						onChange={setAesthetic}/>
				</div>
				<div className="row">
					<MultiSelect
						label="Occasion"
						options={['music-festival', 'tropical-vacation', 'corporate-job', 'everyday']}
						onChange={setOccasion}/>
				</div>
				
				<button className="save-button" onClick={handleSave}>Save</button>

      			
    		</div>);
};

export default FilterScreen;
