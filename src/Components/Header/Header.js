import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
	const navigate = useNavigate();
	return (
		<header className={styles.header}>
			<div className={`${styles.container} ${styles.flex_away}`}>
				<h2
					className={styles.logo}
					onClick={() => {
						navigate("/");
					}}
				>
					To-Do List
				</h2>
				<div className={`${styles.links} ${styles.flex_away}`}>
					<h3
						className={styles.link}
						onClick={() => {
							navigate("/create-task");
						}}
					>
						Create Task
					</h3>
				</div>
			</div>
		</header>
	);
};

export default Header;
