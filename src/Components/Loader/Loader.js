import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.sk_chase}>
				<div className={styles.sk_chase_dot}></div>
				<div className={styles.sk_chase_dot}></div>
				<div className={styles.sk_chase_dot}></div>
				<div className={styles.sk_chase_dot}></div>
				<div className={styles.sk_chase_dot}></div>
				<div className={styles.sk_chase_dot}></div>
			</div>
		</div>
	);
};

export default Loader;
