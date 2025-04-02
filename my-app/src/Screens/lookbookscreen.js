import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import preficon from './Icons/preficon.png';
import hearticon from './Icons/whiteheart.png';
import fitsicon from './Icons/bluebook.png';
import mixandmatchicon from './Icons/mixandmatchicon.png';
import closeticon from './Icons/closeticon.png';
import usericon from './Icons/user.png';
import questionicon from './Icons/question.png';

// Component imports
import SavedOutfit from './Components/SavedOutfit';

// Import ALL png files from Clothes folder
// access images using Clothes.top1, etc.
import * as Clothes from './Clothes';

import './lookbookscreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Lookbook = () => {
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
					<p className="pageheader">Lookbook</p>
				</div>
	
				<div className="col-2">
					<img className="d-block mx-auto" src={usericon} alt="Profile" width="40" />
				</div>
			</div>

		
			{/* Saved Outfits Content */}
			<div className="row outfit-row">
				<div className="col">
					<SavedOutfit
						top={Clothes.top1}
						bottom={Clothes.pant1}
						shoe={Clothes.shoe1}
						/>
				</div>
				<div className="col">
					<SavedOutfit
						top={Clothes.redtop}
						bottom={Clothes.pant2}
						shoe={Clothes.shoe2}/>
				</div>	
			</div>

			<div className="row outfit-row">
				<div className="col">
					<SavedOutfit
						top={Clothes.top2}
						bottom={Clothes.pant3}
						shoe={Clothes.shoe3}/>
				</div>
				<div className="col">
					<SavedOutfit
						top={Clothes.top3}
						bottom={Clothes.pant4}
						shoe={Clothes.shoe4}/>
				</div>
			</div>

	

		

			{/* Bottom Navigation */}
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
		</div>



		);
    };
        				
export default Lookbook;
        				