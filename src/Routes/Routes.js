import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import CreateTask from "../Pages/CreateTask/CreateTask";
import EditTask from "../Pages/EditTask/EditTask"
import Header from "../Components/Header/Header";
const Landing = lazy(() => import("../Pages/Landing/Landing"));

const Routers = () => {
	return (
		<div>
			<Router>
				<Header />
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/create-task" element={<CreateTask />} />
						<Route path="/edit-task" element={<EditTask />} />

					</Routes>
				</Suspense>
			</Router>
		</div>
	);
};

export default Routers;
