import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice.js';

import { loadState, saveState } from './localStorage';

const localState = loadState();

export const store = configureStore({
	reducer: {
		userSlice,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState: localState,
});

store.subscribe(() => {
  saveState(store.getState());
});
