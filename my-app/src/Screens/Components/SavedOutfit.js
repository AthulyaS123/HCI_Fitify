import React, { useState } from 'react';
import downloadicon from '../Icons/downloadicon.png'
import '../lookbookscreen.css';

const SavedOutfit = ({ top, bottom, shoe }) => {
    return (
        <div className=" mx-auto outfit-border">
            <div className="row"> <img className="download-button" src={downloadicon} width="10"/> </div>
            <div className="row"> <img className="mx-auto item-img" src={top} alt="" width="10"/> </div>
            <div className="row"> <img className="mx-auto item-img" src={bottom} alt="" width="10"/> </div>
            <div className="row"> <img className="mx-auto item-img" src={shoe} alt="" width="10"/> </div>
        
        </div>
    );
};

export default SavedOutfit;