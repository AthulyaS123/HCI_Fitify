import { FunctionComponent } from 'react';
import styles from './filterscreen.module.css';


const filterscreen = () => {
  	return (
    		<div className={styles.filterScreen}>
      			<img className={styles.uTurnToLeft} alt="" src="U Turn to Left.png" />
      			<img className={styles.moreThanIcon} alt="" src="More Than.png" />
      			<img className={styles.moreThanIcon1} alt="" src="More Than.png" />
      			<img className={styles.moreThanIcon2} alt="" src="More Than.png" />
      			<img className={styles.moreThanIcon3} alt="" src="More Than.png" />
      			<img className={styles.moreThanIcon4} alt="" src="More Than.png" />
      			<img className={styles.moreThanIcon5} alt="" src="More Than.png" />
      			<img className={styles.moreThanIcon6} alt="" src="More Than.png" />
      			<div className={styles.colors}>Colors</div>
      			<div className={styles.aesthetics}>Aesthetics</div>
      			<div className={styles.brands}>Brands</div>
      			<img className={styles.filterScreenChild} alt="" src="Line 1.svg" />
      			<img className={styles.filterScreenItem} alt="" src="Line 2.svg" />
      			<img className={styles.filterScreenInner} alt="" src="Line 3.svg" />
      			<img className={styles.lineIcon} alt="" src="Line 4.svg" />
      			<div className={styles.size}>Size</div>
      			<img className={styles.filterScreenChild1} alt="" src="Line 31.svg" />
      			<div className={styles.occasion}>Occasion</div>
      			<div className={styles.price}>Price</div>
      			<div className={styles.itemType}>Item Type</div>
      			<img className={styles.filterScreenChild2} alt="" src="Line 28.svg" />
      			<img className={styles.filterScreenChild3} alt="" src="Line 29.svg" />
      			<img className={styles.filterScreenChild4} alt="" src="Line 30.svg" />
    		</div>);
};

export default filterscreen;
