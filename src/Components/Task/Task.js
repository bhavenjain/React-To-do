import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Task.module.css";
import { deleteTasks } from "../../utils/utils";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

function Task(props) {
	const navigate = useNavigate();

	// Handle Delete button
	const handleDelete = (e) => {
    e.preventDefault();
		const id = e.currentTarget.id;
		let filterTask = [...props.tasks];
		filterTask = props.tasks.filter((item) => {
			return item.id !== id;
		});
		props.setTasks(filterTask);     // 

		// Storing Deleted list
		deleteTasks(filterTask, props);
	};

	// Handle Edit button
	const handleEdit = (e) => {
    // Sending State variables
		const state = {
			tasks: props.tasks,
			id: e.currentTarget.id,
			title: props.title,
			content: props.content,
		};

		// Navigate to the edit task page with state variables
		navigate("/edit-task", {
			state,
		});
	};

	return (
		<div className={styles.task__container} id={props.id} key={props.key}>
			<div className={styles.task__task}>
				<div className={styles.row_flex}>
					<h2>{props.title}</h2>
					<h4>{props.createdAt}</h4>
				</div>
				<p>{props.content}</p>
				<div className={`${styles.row_flex} ${styles.reversed_row}`}>
					<button onClick={handleDelete} id={props.uid} className={styles.tooltip}>
            <AiFillDelete />
            <span className={`${styles.tooltiptext} ${styles.tooltip_adjust}`}>Delete</span>
					</button>
					<button onClick={handleEdit} id={props.uid} className={styles.tooltip}>
						<AiFillEdit />
            <span className={styles.tooltiptext}>Edit</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Task;
