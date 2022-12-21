import { configureStore } from '@reduxjs/toolkit'

import { reducers } from 'store/root.reducer'

export const store = configureStore({
	reducer: reducers,
	devTools: true
})

export type typeRootStore = ReturnType<typeof store.getState>
