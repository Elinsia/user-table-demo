import { createSlice } from "@reduxjs/toolkit";
import { loadUsers, addUser, updateUser, removeUser } from "./userApi";

export const userSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		isLoading: false,
	},
	reducers: {},
	extraReducers: {
		[loadUsers.pending]: state => {
			state.isLoading = true;
		},
		[loadUsers.fulfilled]: (state, { payload }) => {
			state.users = payload;
			state.isLoading = false;
		},
		[loadUsers.rejected]: (state) => {
			state.isLoading = false;
		},
		[addUser.fulfilled]: (state, { payload }) => {
			state.users.push(payload);
		},
		[updateUser.fulfilled]: (state, { payload }) => {
			const userId = state.users.findIndex((obj => obj.id === payload.id));
			state.users[userId] = payload;
		},
		[removeUser.fulfilled]: (state, { payload }) => {
			state.users = state.users.filter((user) => user.id !== payload.id);
		}
	}
});

export const userSelector = state => state.userSlice.users;
export const loadingSelector = state => state.userSlice.isLoading;

export default userSlice.reducer;