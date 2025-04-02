import { FunctionComponent } from 'react';
import styles from './outfitscreen.module.css';


const outfit = () => {
  	return (
    		<div className={styles.savedOutfitPopUp}>
      			<img className={styles.image8Icon} alt="" src="image 8.png" />
      			<img className={styles.image12Icon} alt="" src="image 12.png" />
      			<img className={styles.image11Icon} alt="" src="image 11.png" />
      			<div className={styles.ellipseParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.x}>x</div>
      			</div>
      			<div className={styles.pacsunSheerTank}>PacSun Sheer Tank Top</div>
      			<div className={styles.urbanOutfittersCamisole}>Urban Outfitters Camisole</div>
      			<div className={styles.aerieLaceTrim}>Aerie Lace Trim Top</div>
      			<div className={styles.brandyMelvilleTank}>Brandy Melville Tank Top</div>
      			<div className={styles.pacsun90sBoyfriend}>PacSun 90s Boyfriend Jeans</div>
      			<div className={styles.levisBlueBaggy}>Levi’s Blue Baggy Jeans</div>
      			<div className={styles.pacsunHighRise}>Pacsun High Rise Flare Jeans</div>
      			<div className={styles.americanEagleWide}>American Eagle Wide Leg Jeans</div>
      			<div className={styles.newBalanceSneakers}>New Balance Sneakers</div>
      			<img className={styles.starIcon} alt="" src="Star.png" />
      			<img className={styles.starIcon1} alt="" src="Star.png" />
      			<img className={styles.starIcon2} alt="" src="Star.png" />
      			<div className={styles.adidasSambaSneakers}>Adidas Samba Sneakers</div>
      			<div className={styles.reebokCasualShoes}>Reebok Casual Shoes</div>
    		</div>);
};

export default outfit;
