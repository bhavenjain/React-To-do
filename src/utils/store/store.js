import { configureStore } from "@reduxjs/toolkit";
import slicesReducer from "./slice";

export default configureStore({
	reducer: { slices: slicesReducer },
});
