import styles from './createaccountscreen.module.css';


const createaccount = () => {
  	return (
    		<div className={styles.createAccountScreen}>
      			<img className={styles.womensTShirtIcon} alt="" src="Womens T-Shirt.png" />
      			<div className={styles.createAnAccount}>Create An Account</div>
      			<div className={styles.createAccountScreenChild} />
      			<div className={styles.signUp}>Sign Up</div>
      			<div className={styles.orSignIn}>Or Sign In</div>
      			<div className={styles.createAccountScreenItem} />
      			<div className={styles.createAccountScreenInner} />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.username}>Username</div>
      			<div className={styles.password}>Password</div>
      			<img className={styles.image18Icon} alt="" src="image 18.png" />
    		</div>);
};

export default createaccount;
