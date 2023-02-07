import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { updateTasks } from "../../utils/utils";
// import styles from "./EditTask.module.css";
import Forms from "../../Components/Forms/Forms";

const EditTask = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const [title, setTitle] = useState(state.title);
	const [content, setContent] = useState(state.content);

	const handleSubmit = (e) => {
		const id = e.target.id;
		let li = state?.tasks;
		// Update and store the tasks
		updateTasks(li, id, title, content);
		navigate("/");
	};

	return (
		<>
			<Forms setContent={setContent} setTitle={setTitle} title={title} content={content} handleSubmit={handleSubmit} state={state} />
		</>
	);
};

export default EditTask;
