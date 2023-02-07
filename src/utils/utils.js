// Get Todays date
export const getCurrentDate = () => {
	const today = new Date();
	const createdAt =
		today.getDate() +
		"/" +
		(today.getMonth() + 1) +
		"/" +
		today.getFullYear();

	return createdAt;
};

// To store the new task
export const storeCreatedTask = (uid, title, content, createdAt) => {
	const obj = {
		id: uid,
		title,
		content,
		createdAt,
	};

	let data = JSON.parse(localStorage.getItem("todo"));
	if (!data) {
		const asList = [obj];
		localStorage.setItem("todo", JSON.stringify(asList));
	} else {
		data.push(obj);
		localStorage.setItem("todo", JSON.stringify(data));
	}
};

// To Edit and store the created task
export const updateTasks = (li, id, title, content) => {
	li.forEach((element, index) => {
		if (element.id === id) {
			li[index] = {
				...li[index],
				title,
				content,
			};
		}
	});
	localStorage.setItem("todo", JSON.stringify(li));
};

// Handle and store delete request
export const deleteTasks = (filterTask, props) => {
	if (filterTask.length === 0) {
		localStorage.removeItem("todo");
	} else {
		localStorage.setItem("todo", JSON.stringify(filterTask));
		if (props.tasks.length === 0) {
			localStorage.removeItem("todo");
		}
	}
};
