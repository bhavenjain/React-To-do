import React, { useEffect, useState } from "react";
import Task from "../../Components/Task/Task";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		let data = JSON.parse(localStorage.getItem("todo"));
		if (data) {
			setTasks(data);
		}
	}, []);

	return (
		<div className={styles.body}>
			<h1 className={styles.main__heading}>All Tasks</h1>
			{tasks.length > 0 ? (
				<section className={styles.tasks}>
					{tasks.map((task, key) => {
						return (
							<Task
								uid={task?.id}
								title={task?.title}
								content={task?.content}
								createdAt={task?.createdAt}
								tasks={tasks}
								setTasks={setTasks}
								id={key}
							/>
						);
					})}
				</section>
			) : (
				<div>
					<h3>Please Create a new Task.</h3>
					<Link to="/create-task"> Create Task</Link>
				</div>
			)}
		</div>
	);
};

export default Landing;
