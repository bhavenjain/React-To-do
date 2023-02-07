import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { getCurrentDate, storeCreatedTask } from "../../utils/utils";
import Forms from "../../Components/Forms/Forms";

const CreateTask = () => {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = () => {
		const uid = uuidv4();
		// Get the current date
		const createdAt = getCurrentDate();
		// To store the new task in Local Storage
		storeCreatedTask(uid, title, content, createdAt);
		// Navigate to homepage
		navigate("/");
	};

	return (
		<>
			<Forms
				title={title}
				content={content}
				setContent={setContent}
				setTitle={setTitle}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default CreateTask;
