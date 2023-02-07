import { createSlice } from "@reduxjs/toolkit";

export const slicesReducer = createSlice({
	name: "slice",
	initialState: {
		task: []
	},

	reducers: {
		setTask: (state, action) => {
			state.task = action.payload
		},
	},
});

export const { setTask } = slicesReducer.actions;
export default slicesReducer.reducer;
